'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import ResponsiveHeader from '@/components/responsive-header';
import ResponsiveFooter from '@/components/responsive-footer';

export default function OrderSuccessPage() {
  const router = useRouter();
  const { setOrderNumber, clearCart } = useCart();
  const [orderNum, setOrderNum] = useState('');

  useEffect(() => {
    const generatedOrderNum = `#${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    setOrderNum(generatedOrderNum);
    setOrderNumber(generatedOrderNum);
  }, [setOrderNumber]);

  return (
    <div className="oc-page">
      <ResponsiveHeader />

      <div className="oc-center">
        {/* Success Icon */}
        <div className="oc-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="oc-heading">Order Placed Successfully!</h1>
        <p className="oc-sub">Your delicious Chuks Kitchen meal is on its way!</p>

        {/* Loading Pulse */}
        <div className="oc-pulse-wrap">
          <div className="oc-pulse" />
        </div>

        {/* Order Card */}
        <div className="oc-card">
          <h2 className="oc-order-title">Order {orderNum} Confirmed</h2>

          <button
            onClick={() => router.push('/my-orders')}
            className="oc-btn oc-btn-primary"
          >
            Track Order
          </button>

          <button
            onClick={() => {
              clearCart();
              router.push('/home');
            }}
            className="oc-btn oc-btn-secondary"
          >
            Generate Receipt
          </button>

          <a href="#" className="oc-help-link">
            Need help with your order?
          </a>
        </div>
      </div>

      <ResponsiveFooter />

      <style>{`
        .oc-page {
          min-height: 100vh;
          background: #faf7f5;
          display: flex;
          flex-direction: column;
        }
        .oc-center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
        }
        .oc-icon {
          width: 80px;
          height: 80px;
          background: #16a34a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin-bottom: 24px;
        }
        .oc-heading {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 8px;
        }
        .oc-sub {
          font-size: 16px;
          color: #777;
          text-align: center;
          margin-bottom: 24px;
        }
        .oc-pulse-wrap {
          margin-bottom: 32px;
        }
        .oc-pulse {
          width: 8px;
          height: 8px;
          background: #86efac;
          border-radius: 50%;
          animation: oc-pulse-anim 2s infinite;
        }
        .oc-card {
          background: #fff;
          border-radius: 12px;
          padding: 32px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .oc-order-title {
          font-size: 22px;
          font-weight: 700;
          text-align: center;
          color: #1a1a1a;
          margin-bottom: 24px;
        }
        .oc-btn {
          display: block;
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 12px;
          text-align: center;
        }
        .oc-btn-primary {
          background: #FF7A18;
          color: #fff;
        }
        .oc-btn-primary:hover {
          background: #e86a0a;
        }
        .oc-btn-secondary {
          background: #e5e5e5;
          color: #555;
        }
        .oc-btn-secondary:hover {
          background: #d5d5d5;
        }
        .oc-help-link {
          display: block;
          text-align: center;
          color: #3b82f6;
          font-size: 14px;
          padding: 8px 0;
          text-decoration: none;
        }
        .oc-help-link:hover {
          text-decoration: underline;
        }

        @keyframes oc-pulse-anim {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 480px) {
          .oc-center {
            padding: 24px 16px;
          }
          .oc-icon {
            width: 64px;
            height: 64px;
          }
          .oc-icon svg {
            width: 36px;
            height: 36px;
          }
          .oc-heading {
            font-size: 22px;
          }
          .oc-sub {
            font-size: 14px;
          }
          .oc-card {
            padding: 20px;
          }
          .oc-order-title {
            font-size: 18px;
          }
          .oc-btn {
            padding: 14px;
            font-size: 15px;
          }
        }

        @media (max-width: 360px) {
          .oc-heading {
            font-size: 20px;
          }
          .oc-card {
            padding: 16px;
          }
          .oc-order-title {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
