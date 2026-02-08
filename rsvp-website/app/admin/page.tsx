'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface RSVP {
  id: number;
  guest_name: string;
  number_of_guests: number;
  email?: string;
  phone?: string;
  dietary_restrictions?: string;
  message?: string;
  created_at: string;
}

interface Summary {
  total_rsvps: number;
  total_guests: number;
  with_dietary_restrictions: number;
  with_messages: number;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'ivy2026') {
      setIsAuthenticated(true);
      setAuthError('');
      fetchRSVPs(password);
    } else {
      setAuthError('Incorrect password');
    }
  };

  const fetchRSVPs = async (pwd: string) => {
    setIsLoading(true);
    setError('');

    try {
      const credentials = Buffer.from(`admin:${pwd}`).toString('base64');
      const response = await fetch('/api/rsvps', {
        headers: {
          'Authorization': `Basic ${credentials}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch RSVPs');
      }

      const data = await response.json();

      if (data.success) {
        setRsvps(data.data.rsvps);
        setSummary(data.data.summary);
      } else {
        throw new Error(data.error || 'Failed to load data');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load RSVPs');
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    if (rsvps.length === 0) return;

    const headers = ['Name', 'Guests', 'Email', 'Phone', 'Dietary Restrictions', 'Message', 'Submitted'];
    const rows = rsvps.map(rsvp => [
      rsvp.guest_name,
      rsvp.number_of_guests,
      rsvp.email || '',
      rsvp.phone || '',
      rsvp.dietary_restrictions || '',
      rsvp.message || '',
      new Date(rsvp.created_at).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ivy-sweet16-rsvps-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Login Form
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center py-8 px-4">
        <Card variant="bordered" className="max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="font-script text-5xl text-transparent bg-clip-text bg-linear-to-r from-blush to-deepPink mb-2">
              Admin Login
            </h1>
            <p className="text-textMedium">Enter password to view RSVPs</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              error={authError}
            />

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Login
            </Button>
          </form>
        </Card>
      </main>
    );
  }

  // Admin Dashboard
  return (
    <main className="min-h-screen py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-script text-6xl text-transparent bg-clip-text bg-linear-to-r from-blush to-deepPink mb-2">
            Admin Dashboard
          </h1>
          <p className="text-textMedium">Ivy's Sweet 16 - RSVP Management</p>
        </div>

        {/* Summary Cards */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card variant="gradient">
              <div className="text-center">
                <p className="text-textMedium text-sm mb-1">Total RSVPs</p>
                <p className="font-bold text-4xl text-deepPink">{summary.total_rsvps}</p>
              </div>
            </Card>
            <Card variant="gradient">
              <div className="text-center">
                <p className="text-textMedium text-sm mb-1">Total Guests</p>
                <p className="font-bold text-4xl text-deepPink">{summary.total_guests}</p>
              </div>
            </Card>
            <Card variant="gradient">
              <div className="text-center">
                <p className="text-textMedium text-sm mb-1">Dietary Notes</p>
                <p className="font-bold text-4xl text-deepPink">{summary.with_dietary_restrictions}</p>
              </div>
            </Card>
            <Card variant="gradient">
              <div className="text-center">
                <p className="text-textMedium text-sm mb-1">With Messages</p>
                <p className="font-bold text-4xl text-deepPink">{summary.with_messages}</p>
              </div>
            </Card>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            variant="primary"
            onClick={() => fetchRSVPs(password)}
            isLoading={isLoading}
          >
            Refresh Data
          </Button>
          <Button
            variant="secondary"
            onClick={exportToCSV}
            disabled={rsvps.length === 0}
          >
            Export to CSV
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-2 border-error text-error px-4 py-3 rounded-lg mb-6">
            <p>{error}</p>
          </div>
        )}

        {/* RSVPs Table */}
        <Card variant="default">
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-4 border-blush border-t-transparent rounded-full animate-spin" />
                <p className="text-textMedium mt-4">Loading RSVPs...</p>
              </div>
            ) : rsvps.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-textMedium text-lg">No RSVPs yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-linear-to-r from-blush/20 to-deepPink/20">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-textDark">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-textDark">Guests</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-textDark">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-textDark">Phone</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-textDark">Dietary</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-textDark">Message</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-textDark">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blush/20">
                  {rsvps.map((rsvp) => (
                    <tr key={rsvp.id} className="hover:bg-blush/5 transition-colors">
                      <td className="px-4 py-3 text-sm text-textDark font-medium">{rsvp.guest_name}</td>
                      <td className="px-4 py-3 text-sm text-textMedium">{rsvp.number_of_guests}</td>
                      <td className="px-4 py-3 text-sm text-textMedium">
                        {rsvp.email ? (
                          <a href={`mailto:${rsvp.email}`} className="text-deepPink hover:underline">
                            {rsvp.email}
                          </a>
                        ) : (
                          '-'
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-textMedium">
                        {rsvp.phone ? (
                          <a href={`tel:${rsvp.phone}`} className="text-deepPink hover:underline">
                            {rsvp.phone}
                          </a>
                        ) : (
                          '-'
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-textMedium max-w-xs truncate">
                        {rsvp.dietary_restrictions || '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-textMedium max-w-xs truncate">
                        {rsvp.message || '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-textMedium whitespace-nowrap">
                        {new Date(rsvp.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
