'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface FormData {
  guest_name: string;
  number_of_guests: string;
  email: string;
  phone: string;
  dietary_restrictions: string;
  message: string;
}

interface FormErrors {
  guest_name?: string;
  number_of_guests?: string;
  email?: string;
  phone?: string;
}

export const RSVPForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    guest_name: '',
    number_of_guests: '1',
    email: '',
    phone: '',
    dietary_restrictions: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Guest name validation
    if (!formData.guest_name.trim()) {
      newErrors.guest_name = 'Name is required';
    } else if (formData.guest_name.trim().length < 2) {
      newErrors.guest_name = 'Name must be at least 2 characters';
    }

    // Number of guests validation
    const guestCount = parseInt(formData.number_of_guests);
    if (isNaN(guestCount) || guestCount < 1 || guestCount > 10) {
      newErrors.number_of_guests = 'Please enter a number between 1 and 10';
    }

    // Email validation (optional but must be valid if provided)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone.trim() && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guest_name: formData.guest_name.trim(),
          number_of_guests: parseInt(formData.number_of_guests),
          email: formData.email.trim() || undefined,
          phone: formData.phone.trim() || undefined,
          dietary_restrictions: formData.dietary_restrictions.trim() || undefined,
          message: formData.message.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit RSVP');
      }

      // Success! Redirect to confirmation page
      router.push('/confirmation');
    } catch (error: any) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card variant="default" className="max-w-2xl mx-auto shadow-xl">
      <div className="text-center mb-8">
        <h2 className="font-elegant text-3xl md:text-4xl text-textDark mb-2">
          RSVP
        </h2>
        <p className="text-textMedium">
          We can't wait to celebrate with you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Guest Name */}
        <Input
          label="Full Name *"
          name="guest_name"
          type="text"
          placeholder="Enter your full name"
          value={formData.guest_name}
          onChange={handleChange}
          error={errors.guest_name}
          required
        />

        {/* Number of Guests */}
        <Input
          label="Number of Guests *"
          name="number_of_guests"
          type="number"
          min="1"
          max="10"
          placeholder="1"
          value={formData.number_of_guests}
          onChange={handleChange}
          error={errors.number_of_guests}
          helperText="Including yourself (maximum 10 guests)"
          required
        />

        {/* Email */}
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText="Optional - for confirmation"
        />

        {/* Phone */}
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          helperText="Optional - for updates"
        />

        {/* Dietary Restrictions */}
        <Input
          label="Dietary Restrictions"
          name="dietary_restrictions"
          type="text"
          placeholder="e.g., vegetarian, gluten-free, allergies"
          value={formData.dietary_restrictions}
          onChange={handleChange}
          helperText="Optional - help us accommodate your needs"
        />

        {/* Message */}
        <Input
          label="Special Message for Ivy"
          name="message"
          multiline
          rows={4}
          placeholder="Share your birthday wishes..."
          value={formData.message}
          onChange={handleChange}
          helperText="Optional - leave a sweet message!"
        />

        {/* Submit Error */}
        {submitError && (
          <div className="bg-red-50 border-2 border-error text-error px-4 py-3 rounded-lg">
            <p className="text-sm font-medium">{submitError}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
        </Button>

        <p className="text-center text-sm text-textLight mt-4">
          * Required fields
        </p>
      </form>
    </Card>
  );
};
