'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import ResponsiveHeader from '@/components/responsive-header';
import ResponsiveFooter from '@/components/responsive-footer';

export default function MyOrdersPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart } = useCart();

  console.log("[v0] MyOrders page - cart:", cart, "length:", cart.length);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 500;
  const serviceFee = 200;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <div className="mo-page">
      <ResponsiveHeader />

      <div className="mo-container">
        <h1 className="mo-title">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="mo-empty">
            <p className="mo-empty-text">Your cart is empty</p>
            <button onClick={() => router.push('/explore')} className="mo-empty-btn">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="mo-items">
              {cart.map((item) => (
                <div key={item.id} className="mo-card">
                  <img src={item.image} alt={item.name} className="mo-card-img" />
                  <div className="mo-card-body">
                    <h3 className="mo-card-name">{item.name}</h3>
                    <p className="mo-card-desc">{item.description}</p>
                    {item.protein && <p className="mo-card-protein">Protein: {item.protein}</p>}
                    {item.extras && item.extras.length > 0 && (
                      <p className="mo-card-extras">Extras: {item.extras.join(', ')}</p>
                    )}
                    <div className="mo-card-footer">
                      <div className="mo-qty">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="mo-qty-btn" aria-label="Decrease quantity">{'\u2212'}</button>
                        <span className="mo-qty-num">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="mo-qty-btn" aria-label="Increase quantity">+</button>
                      </div>
                      <span className="mo-card-price">
                        {'\u20A6'}{(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button onClick={() => removeFromCart(item.id)} className="mo-remove-btn" aria-label="Remove item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => router.push('/explore')} className="mo-add-more">
              + Add more items from Chuks Kitchen
            </button>

            <div className="mo-summary">
              <div className="mo-summary-rows">
                <div className="mo-row">
                  <span>Subtotal</span>
                  <span>{'\u20A6'}{subtotal.toLocaleString()}</span>
                </div>
                <div className="mo-row">
                  <span>Delivery Fee</span>
                  <span>{'\u20A6'}{deliveryFee}</span>
                </div>
                <div className="mo-row">
                  <span>Service Fee</span>
                  <span>{'\u20A6'}{serviceFee}</span>
                </div>
                <div className="mo-row">
                  <span>Tax</span>
                  <span>{'\u20A6'}0</span>
                </div>
              </div>

              <div className="mo-total">
                <span>Total</span>
                <span>{'\u20A6'}{total.toLocaleString()}</span>
              </div>

              <button onClick={() => router.push('/order-summary')} className="mo-proceed-btn">
                Proceed
              </button>
            </div>
          </>
        )}
      </div>

      <ResponsiveFooter />

      <style>{`
        .mo-page {
          min-height: 100vh;
          background: #faf7f5;
          display: flex;
          flex-direction: column;
        }
        .mo-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 32px 24px;
          flex: 1;
          width: 100%;
          box-sizing: border-box;
        }
        .mo-title {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
        }
        .mo-empty {
          text-align: center;
          padding: 60px 0;
        }
        .mo-empty-text {
          font-size: 18px;
          color: #777;
          margin-bottom: 16px;
        }
        .mo-empty-btn {
          background: #FF7A18;
          color: #fff;
          padding: 12px 32px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        .mo-empty-btn:hover {
          background: #e86a0a;
        }
        .mo-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 16px;
        }
        .mo-card {
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 20px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .mo-card-img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 10px;
          flex-shrink: 0;
        }
        .mo-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .mo-card-name {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 4px;
        }
        .mo-card-desc {
          font-size: 13px;
          color: #888;
          margin-bottom: 6px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .mo-card-protein, .mo-card-extras {
          font-size: 12px;
          color: #FF7A18;
          margin-bottom: 4px;
        }
        .mo-card-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
        }
        .mo-qty {
          display: flex;
          align-items: center;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          overflow: hidden;
        }
        .mo-qty-btn {
          background: none;
          border: none;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 16px;
          color: #555;
        }
        .mo-qty-btn:hover {
          background: #f5f5f5;
        }
        .mo-qty-num {
          padding: 6px 14px;
          font-size: 15px;
          font-weight: 600;
        }
        .mo-card-price {
          font-size: 20px;
          font-weight: 700;
          color: #FF7A18;
        }
        .mo-remove-btn {
          margin-left: auto;
          background: #FF7A18;
          border: none;
          color: #fff;
          width: 30px;
          height: 30px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }
        .mo-remove-btn:hover {
          background: #e86a0a;
        }
        .mo-add-more {
          background: none;
          border: none;
          color: #FF7A18;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 0;
          margin-bottom: 24px;
        }
        .mo-add-more:hover {
          text-decoration: underline;
        }
        .mo-summary {
          background: #fff;
          border-radius: 12px;
          padding: 28px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .mo-summary-rows {
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        .mo-row {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #555;
          margin-bottom: 12px;
        }
        .mo-row:last-child {
          margin-bottom: 0;
        }
        .mo-total {
          display: flex;
          justify-content: space-between;
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
        }
        .mo-proceed-btn {
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
        .mo-proceed-btn:hover {
          background: #e86a0a;
        }

        @media (max-width: 768px) {
          .mo-container {
            padding: 24px 16px;
          }
          .mo-title {
            font-size: 26px;
          }
          .mo-card {
            padding: 16px;
            gap: 14px;
          }
          .mo-card-img {
            width: 100px;
            height: 100px;
          }
          .mo-summary {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .mo-container {
            padding: 16px 12px;
          }
          .mo-title {
            font-size: 22px;
            margin-bottom: 16px;
          }
          .mo-card {
            flex-direction: column;
            gap: 12px;
            padding: 14px;
          }
          .mo-card-img {
            width: 100%;
            height: 180px;
            border-radius: 8px;
          }
          .mo-card-desc {
            white-space: normal;
          }
          .mo-card-footer {
            flex-wrap: wrap;
            gap: 10px;
          }
          .mo-card-price {
            font-size: 18px;
          }
          .mo-summary {
            padding: 16px;
          }
          .mo-row {
            font-size: 14px;
          }
          .mo-total {
            font-size: 20px;
          }
          .mo-proceed-btn {
            padding: 14px;
            font-size: 16px;
          }
        }

        @media (max-width: 360px) {
          .mo-title {
            font-size: 20px;
          }
          .mo-card-name {
            font-size: 16px;
          }
          .mo-card-img {
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
}
