'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ResponsiveHeader from '@/components/responsive-header';

export default function PaymentLoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/order-success');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="pl-page">
      <ResponsiveHeader />

      <div className="pl-center">
        <svg className="pl-spinner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeDasharray="70 140"
            strokeLinecap="round"
            className="pl-arc"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
        <p className="pl-text">Processing your payment...</p>
      </div>

      <style>{`
        .pl-page {
          min-height: 100vh;
          background: #faf7f5;
          display: flex;
          flex-direction: column;
        }
        .pl-center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 40px 20px;
        }
        .pl-spinner {
          width: 96px;
          height: 96px;
        }
        .pl-arc {
          animation: pl-rotate 2s linear infinite;
          transform-origin: center;
        }
        .pl-text {
          font-size: 18px;
          color: #777;
          font-weight: 500;
        }

        @keyframes pl-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 480px) {
          .pl-spinner {
            width: 72px;
            height: 72px;
          }
          .pl-text {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
