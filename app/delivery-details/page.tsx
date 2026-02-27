'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import ResponsiveHeader from '@/components/responsive-header';
import ResponsiveFooter from '@/components/responsive-footer';

export default function DeliveryDetailsPage() {
  const router = useRouter();
  const { deliveryInfo, setDeliveryInfo } = useCart();
  const [address, setAddress] = useState(deliveryInfo.address);
  const [time, setTime] = useState(deliveryInfo.time);
  const [instructions, setInstructions] = useState(deliveryInfo.instructions);
  const [phone, setPhone] = useState(deliveryInfo.phone);

  const handleProceed = () => {
    setDeliveryInfo({ address, time, instructions, phone });
    router.push('/payment');
  };

  return (
    <div className="dd-page">
      <ResponsiveHeader />

      <div className="dd-container">
        <div className="dd-card">
          <h1 className="dd-title">Delivery Details</h1>

          {/* Address */}
          <div className="dd-section">
            <label className="dd-label">Home</label>
            <div className="dd-address-row">
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="dd-textarea-sm"
                rows={3}
              />
              <button className="dd-change-btn">Change Address</button>
            </div>
          </div>

          {/* Delivery Time */}
          <div className="dd-section">
            <label className="dd-label">Delivery Time</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="dd-input"
            />
          </div>

          {/* Instructions */}
          <div className="dd-section">
            <label className="dd-label">Delivery Instructions (Optional)</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="dd-textarea"
            />
          </div>

          {/* Contact */}
          <div className="dd-section">
            <label className="dd-label">Contact Address</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="dd-input"
            />
          </div>

          {/* Proceed */}
          <button onClick={handleProceed} className="dd-proceed-btn">
            Proceed to Payment
          </button>
        </div>
      </div>

      <ResponsiveFooter />

      <style>{`
        .dd-page {
          min-height: 100vh;
          background: #faf7f5;
          display: flex;
          flex-direction: column;
        }
        .dd-container {
          max-width: 680px;
          margin: 0 auto;
          padding: 32px 24px;
          flex: 1;
          width: 100%;
          box-sizing: border-box;
        }
        .dd-card {
          background: #fff;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .dd-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 28px;
        }
        .dd-section {
          margin-bottom: 24px;
        }
        .dd-label {
          display: block;
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        .dd-address-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .dd-textarea-sm {
          flex: 1;
          padding: 14px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          resize: vertical;
        }
        .dd-textarea-sm:focus {
          outline: none;
          border-color: #FF7A18;
          box-shadow: 0 0 0 2px rgba(255,122,24,0.15);
        }
        .dd-change-btn {
          background: none;
          border: none;
          color: #3b82f6;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          padding-top: 14px;
        }
        .dd-change-btn:hover {
          text-decoration: underline;
        }
        .dd-input {
          width: 100%;
          padding: 14px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          font-size: 15px;
          font-family: inherit;
          box-sizing: border-box;
        }
        .dd-input:focus {
          outline: none;
          border-color: #FF7A18;
          box-shadow: 0 0 0 2px rgba(255,122,24,0.15);
        }
        .dd-textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          height: 120px;
          font-size: 14px;
          resize: vertical;
          font-family: inherit;
          box-sizing: border-box;
        }
        .dd-textarea:focus {
          outline: none;
          border-color: #FF7A18;
          box-shadow: 0 0 0 2px rgba(255,122,24,0.15);
        }
        .dd-proceed-btn {
          width: 100%;
          background: #FF7A18;
          color: #fff;
          padding: 16px;
          border: none;
          border-radius: 8px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
        }
        .dd-proceed-btn:hover {
          background: #e86a0a;
        }

        @media (max-width: 768px) {
          .dd-container {
            padding: 24px 16px;
          }
          .dd-card {
            padding: 24px;
          }
          .dd-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .dd-container {
            padding: 16px 12px;
          }
          .dd-card {
            padding: 16px;
          }
          .dd-title {
            font-size: 20px;
            margin-bottom: 20px;
          }
          .dd-label {
            font-size: 15px;
          }
          .dd-address-row {
            flex-direction: column;
            gap: 8px;
          }
          .dd-change-btn {
            padding-top: 0;
            align-self: flex-start;
          }
          .dd-proceed-btn {
            padding: 14px;
            font-size: 16px;
          }
        }

        @media (max-width: 360px) {
          .dd-title {
            font-size: 18px;
          }
          .dd-label {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
