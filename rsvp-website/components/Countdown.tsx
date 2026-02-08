'use client';

import React, { useState, useEffect } from 'react';
import { Card } from './ui/Card';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-13T18:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-linear-to-br from-blush to-deepPink text-white rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-lg">
        <span className="text-3xl md:text-5xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-sm md:text-base text-textMedium mt-2 font-medium">{label}</span>
    </div>
  );

  return (
    <Card variant="bordered" className="max-w-3xl mx-auto mb-8">
      <div className="text-center">
        <h2 className="font-elegant text-2xl md:text-3xl text-textDark mb-6">
          Countdown to the Celebration
        </h2>
        <div className="flex justify-center items-center gap-3 md:gap-6">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="text-3xl md:text-4xl text-deepPink font-bold">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="text-3xl md:text-4xl text-deepPink font-bold">:</span>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <span className="text-3xl md:text-4xl text-deepPink font-bold">:</span>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </Card>
  );
};
