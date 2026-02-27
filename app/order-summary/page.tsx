'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import ResponsiveHeader from '@/components/responsive-header';
import ResponsiveFooter from '@/components/responsive-footer';

export default function OrderSummaryPage() {
  const router = useRouter();
  const { cart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [deliveryType, setDeliveryType] = useState('delivery');
  const [instructions, setInstructions] = useState('E.g no onion, food is too spicy, food is too hot hhhhhhhhh food is tasty');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryType === 'delivery' ? 500 : 0;
  const serviceFee = 200;
  const total = subtotal + deliveryFee + serviceFee;

  if (cart.length === 0) {
    return (
      <div className="os-page">
        <ResponsiveHeader />
        <div className="os-empty">
          <p>Your cart is empty. <a href="/explore" style={{ color: '#FF7A18' }}>Continue shopping</a></p>
        </div>
        <ResponsiveFooter />
      </div>
    );
  }

  return (
    <div className="os-page">
      <ResponsiveHeader />

      <div className="os-container">
        <div className="os-card">
          <h1 className="os-title">Order Summary</h1>

          {/* Cart Items Preview */}
          <div className="os-items">
            {cart.map((item) => (
              <div key={item.id} className="os-item">
                <img src={item.image} alt={item.name} className="os-item-img" />
                <div className="os-item-info">
                  <span className="os-item-name">{item.name}</span>
                  <span className="os-item-qty">x{item.quantity}</span>
                </div>
                <span className="os-item-price">{'\u20A6'}{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>

          {/* Promo Code */}
          <div className="os-section">
            <h3 className="os-section-title">Add a Promo Code</h3>
            <div className="os-promo">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter Code here"
                className="os-input"
              />
              <button className="os-promo-btn">Apply</button>
            </div>
          </div>

          {/* Pricing */}
          <div className="os-pricing">
            <div className="os-row"><span>Subtotal</span><span>{'\u20A6'}{subtotal.toLocaleString()}</span></div>
            <div className="os-row"><span>Delivery Fee</span><span>{'\u20A6'}{deliveryFee}</span></div>
            <div className="os-row"><span>Service Fee</span><span>{'\u20A6'}{serviceFee}</span></div>
            <div className="os-row"><span>Tax</span><span>{'\u20A6'}0</span></div>
          </div>

          <div className="os-total">
            <span>Total</span>
            <span>{'\u20A6'}{total.toLocaleString()}</span>
          </div>

          {/* Delivery Options */}
          <div className="os-section">
            <h3 className="os-section-title">Delivery Options</h3>
            <div className="os-delivery-btns">
              <button
                onClick={() => setDeliveryType('delivery')}
                className={`os-del-btn ${deliveryType === 'delivery' ? 'active' : ''}`}
              >
                Delivery
              </button>
              <button
                onClick={() => setDeliveryType('pickup')}
                className={`os-del-btn ${deliveryType === 'pickup' ? 'active' : ''}`}
              >
                Pick up
              </button>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="os-section">
            <h3 className="os-section-title">Special Instructions for Restaurant</h3>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="os-textarea"
            />
          </div>

          {/* Proceed Button */}
          <button onClick={() => router.push('/delivery-details')} className="os-proceed-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <ResponsiveFooter />

      <style>{`
        .os-page {
          min-height: 100vh;
          background: #faf7f5;
          display: flex;
          flex-direction: column;
        }
        .os-empty {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #777;
          padding: 40px;
        }
        .os-container {
          max-width: 680px;
          margin: 0 auto;
          padding: 32px 24px;
          flex: 1;
          width: 100%;
          box-sizing: border-box;
        }
        .os-card {
          background: #fff;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .os-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
        }
        .os-items {
          margin-bottom: 24px;
          border-bottom: 1px solid #eee;
          padding-bottom: 16px;
        }
        .os-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
        }
        .os-item-img {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }
        .os-item-info {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .os-item-name {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .os-item-qty {
          font-size: 13px;
          color: #999;
          flex-shrink: 0;
        }
        .os-item-price {
          font-size: 14px;
          font-weight: 700;
          color: #FF7A18;
          flex-shrink: 0;
        }
        .os-section {
          margin-bottom: 24px;
        }
        .os-section-title {
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }
        .os-promo {
          display: flex;
          gap: 12px;
        }
        .os-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          font-size: 15px;
          font-family: inherit;
        }
        .os-input:focus {
          outline: none;
          border-color: #FF7A18;
          box-shadow: 0 0 0 2px rgba(255,122,24,0.15);
        }
        .os-promo-btn {
          background: #FF7A18;
          color: #fff;
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          white-space: nowrap;
        }
        .os-promo-btn:hover {
          background: #e86a0a;
        }
        .os-pricing {
          border-top: 2px solid #eee;
          border-bottom: 2px solid #eee;
          padding: 20px 0;
          margin-bottom: 20px;
        }
        .os-row {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #555;
          margin-bottom: 12px;
        }
        .os-row:last-child {
          margin-bottom: 0;
        }
        .os-total {
          display: flex;
          justify-content: space-between;
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 28px;
        }
        .os-delivery-btns {
          display: flex;
          gap: 12px;
        }
        .os-del-btn {
          flex: 1;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          background: #e5e5e5;
          color: #555;
          transition: background 0.2s, color 0.2s;
        }
        .os-del-btn.active {
          background: #FF7A18;
          color: #fff;
        }
        .os-textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          height: 100px;
          font-size: 14px;
          resize: vertical;
          font-family: inherit;
        }
        .os-textarea:focus {
          outline: none;
          border-color: #FF7A18;
          box-shadow: 0 0 0 2px rgba(255,122,24,0.15);
        }
        .os-proceed-btn {
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
        .os-proceed-btn:hover {
          background: #e86a0a;
        }

        @media (max-width: 768px) {
          .os-container {
            padding: 24px 16px;
          }
          .os-card {
            padding: 24px;
          }
          .os-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .os-container {
            padding: 16px 12px;
          }
          .os-card {
            padding: 16px;
          }
          .os-title {
            font-size: 20px;
            margin-bottom: 16px;
          }
          .os-promo {
            flex-direction: column;
          }
          .os-promo-btn {
            padding: 12px;
          }
          .os-row {
            font-size: 14px;
          }
          .os-total {
            font-size: 20px;
          }
          .os-delivery-btns {
            flex-direction: column;
          }
          .os-proceed-btn {
            padding: 14px;
            font-size: 16px;
          }
          .os-item-img {
            width: 40px;
            height: 40px;
          }
          .os-item-name {
            font-size: 13px;
          }
        }

        @media (max-width: 360px) {
          .os-title {
            font-size: 18px;
          }
          .os-section-title {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}
