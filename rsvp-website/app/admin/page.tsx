'use client';

import React, { useState, useEffect } from 'react';

interface RSVP {
  id: number;
  guest_name: string;
  number_of_guests: number;
  email?: string;
  phone?: string;
  message?: string;
  created_at: string;
}

interface Summary {
  total_rsvps: number;
  total_guests: number;
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

    const headers = ['Name', 'Guests', 'Email', 'Phone', 'Message', 'Submitted'];
    const rows = rsvps.map(rsvp => [
      rsvp.guest_name,
      rsvp.number_of_guests,
      rsvp.email || '',
      rsvp.phone || '',
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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-6">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-md w-full relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-12 border-4 border-pink-200">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-xl mb-6">
                <span className="text-5xl">🔐</span>
              </div>
              <h1 className="text-5xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-3 leading-tight">
                Admin Login
              </h1>
              <p className="text-lg text-rose-700">Enter password to view RSVPs</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-center text-sm font-semibold text-rose-900 mb-3 uppercase tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setAuthError('');
                  }}
                  placeholder="Enter admin password"
                  className={`w-full px-6 py-5 text-lg text-center rounded-2xl border-2 transition-all duration-300 outline-none
                    ${authError
                      ? 'border-red-300 bg-red-50'
                      : 'border-pink-300 focus:border-rose-500 bg-white/50 focus:bg-white shadow-lg focus:shadow-xl'
                    }`}
                  autoFocus
                />
                {authError && (
                  <p className="mt-3 text-sm text-red-500 text-center font-medium animate-shake">
                    {authError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-bold py-5 px-8 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
          .animate-shake {
            animation: shake 0.5s;
          }
        `}</style>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-bold shadow-xl">
              🔐 Admin Dashboard
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-3 leading-tight drop-shadow-lg">
            RSVP Management
          </h1>
          <p className="text-2xl text-rose-700 font-semibold">Ivy's Sweet 16 Party</p>
        </div>

        {/* Summary Cards */}
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-all duration-300">
              <p className="text-white/90 text-sm font-semibold mb-3 uppercase tracking-wide">Total RSVPs</p>
              <p className="font-black text-7xl text-white drop-shadow-lg">{summary.total_rsvps}</p>
            </div>
            <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-all duration-300">
              <p className="text-white/90 text-sm font-semibold mb-3 uppercase tracking-wide">Total Guests</p>
              <p className="font-black text-7xl text-white drop-shadow-lg">{summary.total_guests}</p>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-500 via-rose-500 to-pink-500 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-all duration-300">
              <p className="text-white/90 text-sm font-semibold mb-3 uppercase tracking-wide">With Messages</p>
              <p className="font-black text-7xl text-white drop-shadow-lg">{summary.with_messages}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => fetchRSVPs(password)}
            disabled={isLoading}
            className={`px-8 py-4 font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105
              ${isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white hover:shadow-2xl'
              }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Refreshing...
              </span>
            ) : (
              '🔄 Refresh Data'
            )}
          </button>
          <button
            onClick={exportToCSV}
            disabled={rsvps.length === 0}
            className={`px-8 py-4 font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105
              ${rsvps.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-pink-600 border-4 border-pink-500 hover:bg-pink-50 hover:shadow-2xl'
              }`}
          >
            📥 Export to CSV
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-4 border-red-300 text-red-700 px-6 py-4 rounded-3xl mb-8 text-center font-bold text-lg">
            {error}
          </div>
        )}

        {/* RSVPs Table */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border-4 border-pink-200">
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="text-center py-16">
                <div className="inline-block w-16 h-16 border-8 border-pink-500 border-t-transparent rounded-full animate-spin mb-6" />
                <p className="text-rose-700 text-xl font-bold">Loading RSVPs...</p>
              </div>
            ) : rsvps.length === 0 ? (
              <div className="text-center py-16">
                <span className="text-8xl mb-6 block">📭</span>
                <p className="text-rose-700 text-2xl font-bold">No RSVPs yet</p>
                <p className="text-rose-600 text-lg mt-2">Check back soon!</p>
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500">
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider rounded-tl-2xl">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">Guests</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">Message</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider rounded-tr-2xl">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {rsvps.map((rsvp, index) => (
                    <tr
                      key={rsvp.id}
                      className={`border-b-2 border-pink-100 hover:bg-pink-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-pink-50/30'
                      }`}
                    >
                      <td className="px-6 py-5 text-base text-rose-900 font-bold">{rsvp.guest_name}</td>
                      <td className="px-6 py-5 text-base text-rose-700 font-semibold">
                        <span className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full font-bold">
                          {rsvp.number_of_guests}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-rose-700">
                        {rsvp.email ? (
                          <a href={`mailto:${rsvp.email}`} className="text-pink-600 hover:text-rose-600 font-semibold hover:underline">
                            {rsvp.email}
                          </a>
                        ) : (
                          <span className="text-rose-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm text-rose-700">
                        {rsvp.phone ? (
                          <a href={`tel:${rsvp.phone}`} className="text-pink-600 hover:text-rose-600 font-semibold hover:underline">
                            {rsvp.phone}
                          </a>
                        ) : (
                          <span className="text-rose-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm text-rose-700 max-w-xs">
                        {rsvp.message ? (
                          <div className="bg-pink-100 rounded-xl px-3 py-2 border-2 border-pink-200">
                            {rsvp.message}
                          </div>
                        ) : (
                          <span className="text-rose-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-sm text-rose-700 font-medium whitespace-nowrap">
                        {new Date(rsvp.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.15); }
          50% { transform: translate(-30px, 30px) scale(0.85); }
          75% { transform: translate(60px, 60px) scale(1.1); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
