'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import ResponsiveHeader from '@/components/responsive-header';
import ResponsiveFooter from '@/components/responsive-footer';

export default function PaymentPage() {
  const router = useRouter();
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 500;
  const serviceFee = 200;
  const total = subtotal + deliveryFee + serviceFee;

  const handlePayment = () => {
    router.push('/payment-loading');
  };

  if (cart.length === 0) {
    return (
      <div className="py-page">
        <ResponsiveHeader />
        <div className="py-empty">
          <p>Your cart is empty.</p>
        </div>
        <ResponsiveFooter />
      </div>
    );
  }

  return (
    <div className="py-page">
      <ResponsiveHeader />

      <div className="py-container">
        <div className="py-card">
          <h1 className="py-title">Payment</h1>

          {/* Payment Method Selection */}
          <div className="py-section">
            <h3 className="py-section-title">Pay With:</h3>
            <div className="py-methods">
              {['card', 'bank', 'transfer'].map((method) => (
                <label key={method} className="py-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="py-radio"
                  />
                  <span className="py-method-label">{method.charAt(0).toUpperCase() + method.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Card Details */}
          {paymentMethod === 'card' && (
            <div className="py-card-fields">
              <div className="py-field">
                <label className="py-field-label">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9101 1121"
                  className="py-input"
                />
              </div>
              <div className="py-row-fields">
                <div className="py-field">
                  <label className="py-field-label">Expiration Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    className="py-input"
                  />
                </div>
                <div className="py-field">
                  <label className="py-field-label">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    className="py-input"
                  />
                </div>
              </div>
              <label className="py-save-card">
                <input
                  type="checkbox"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                  className="py-checkbox"
                />
                <span>Save card details</span>
              </label>
            </div>
          )}

          {/* Pay Button */}
          <button onClick={handlePayment} className="py-pay-btn">
            Pay {'\u20A6'}{total.toLocaleString()}
          </button>

          {/* Disclaimer */}
          <p className="py-disclaimer">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>
        </div>
      </div>

      <ResponsiveFooter />

      <style>{`
        .py-page {
          min-height: 100vh;
          background: #faf7f5;
          display: flex;
          flex-direction: column;
        }
        .py-empty {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #777;
          padding: 40px;
        }
        .py-container {
          max-width: 680px;
          margin: 0 auto;
          padding: 32px 24px;
          flex: 1;
          width: 100%;
          box-sizing: border-box;
        }
        .py-card {
          background: #fff;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .py-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 28px;
        }
        .py-section {
          margin-bottom: 24px;
        }
        .py-section-title {
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }
        .py-methods {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .py-method {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .py-method:hover {
          background: #faf7f5;
        }
        .py-radio {
          width: 16px;
          height: 16px;
          accent-color: #22c55e;
        }
        .py-method-label {
          font-weight: 700;
          font-size: 15px;
          color: #333;
        }
        .py-card-fields {
          margin-bottom: 24px;
        }
        .py-field {
          margin-bottom: 16px;
        }
        .py-field-label {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: #333;
          margin-bottom: 6px;
        }
        .py-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          font-size: 15px;
          font-family: inherit;
          box-sizing: border-box;
        }
        .py-input:focus {
          outline: none;
          border-color: #FF7A18;
          box-shadow: 0 0 0 2px rgba(255,122,24,0.15);
        }
        .py-row-fields {
          display: flex;
          gap: 16px;
        }
        .py-row-fields .py-field {
          flex: 1;
        }
        .py-save-card {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #555;
          cursor: pointer;
        }
        .py-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #FF7A18;
        }
        .py-pay-btn {
          width: 100%;
          background: #FF7A18;
          color: #fff;
          padding: 16px;
          border: none;
          border-radius: 8px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 20px;
        }
        .py-pay-btn:hover {
          background: #e86a0a;
        }
        .py-disclaimer {
          text-align: center;
          font-size: 13px;
          color: #999;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .py-container {
            padding: 24px 16px;
          }
          .py-card {
            padding: 24px;
          }
          .py-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .py-container {
            padding: 16px 12px;
          }
          .py-card {
            padding: 16px;
          }
          .py-title {
            font-size: 20px;
            margin-bottom: 20px;
          }
          .py-row-fields {
            flex-direction: column;
            gap: 0;
          }
          .py-pay-btn {
            padding: 14px;
            font-size: 16px;
          }
          .py-disclaimer {
            font-size: 12px;
          }
        }

        @media (max-width: 360px) {
          .py-title {
            font-size: 18px;
          }
          .py-section-title {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
