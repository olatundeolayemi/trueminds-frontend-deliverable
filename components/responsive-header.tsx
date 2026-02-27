'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function ResponsiveHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="rh-header">
      <div className="rh-inner">
        <Link href="/home" className="rh-logo">Chuks Kitchen</Link>
        <nav className="rh-nav">
          <Link href="/home">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/my-orders" className="rh-cart-link">
            My Orders
            {cartCount > 0 && <span className="rh-badge">{cartCount}</span>}
          </Link>
          <Link href="/signin">Account</Link>
        </nav>
        <Link href="/signin" className="rh-login">Login</Link>
        <button
          className="rh-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <nav className={`rh-mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/explore" onClick={() => setMobileMenuOpen(false)}>Explore</Link>
        <Link href="/my-orders" onClick={() => setMobileMenuOpen(false)}>
          My Orders {cartCount > 0 && `(${cartCount})`}
        </Link>
        <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>Account</Link>
        <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>Login</Link>
      </nav>

      <style>{`
        .rh-header {
          background: #f6efe9;
          border-bottom: 1px solid #e0d5cc;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }
        .rh-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .rh-logo {
          font-family: 'Island Moments', cursive;
          color: #f6b081;
          font-size: 24px;
          font-weight: 600;
          white-space: nowrap;
          text-decoration: none;
        }
        .rh-nav {
          display: flex;
          gap: 32px;
          align-items: center;
          flex: 1;
          margin-left: 40px;
        }
        .rh-nav a {
          color: #333;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .rh-nav a:hover {
          color: #FF7A18;
        }
        .rh-cart-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .rh-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FF7A18;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          min-width: 18px;
          height: 18px;
          border-radius: 9px;
          padding: 0 5px;
          line-height: 1;
        }
        .rh-login {
          background: #FF7A18;
          color: #fff;
          padding: 8px 20px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
        }
        .rh-login:hover {
          background: #e86a0a;
        }
        .rh-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
          padding: 4px;
          line-height: 1;
          z-index: 101;
        }
        .rh-mobile-nav {
          display: none;
          flex-direction: column;
          background: #f6efe9;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0 24px;
        }
        .rh-mobile-nav.open {
          display: flex;
          max-height: 320px;
          padding: 8px 24px 16px;
          border-top: 1px solid #e0d5cc;
        }
        .rh-mobile-nav a {
          color: #333;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          padding: 12px 0;
          border-bottom: 1px solid #e8ddd5;
          transition: color 0.2s;
        }
        .rh-mobile-nav a:last-child {
          border-bottom: none;
        }
        .rh-mobile-nav a:hover {
          color: #FF7A18;
        }

        @media (max-width: 768px) {
          .rh-inner {
            padding: 12px 16px;
          }
          .rh-nav {
            display: none;
          }
          .rh-login {
            display: none;
          }
          .rh-hamburger {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .rh-mobile-nav {
            display: flex;
            max-height: 0;
            padding: 0 16px;
          }
          .rh-mobile-nav.open {
            display: flex;
            max-height: 320px;
            padding: 8px 16px 16px;
          }
        }

        @media (max-width: 480px) {
          .rh-inner {
            padding: 10px 12px;
          }
          .rh-logo {
            font-size: 20px;
          }
          .rh-hamburger svg {
            width: 22px;
            height: 22px;
          }
          .rh-mobile-nav a {
            font-size: 15px;
            padding: 10px 0;
          }
          .rh-mobile-nav.open {
            padding: 6px 12px 14px;
          }
        }

        @media (max-width: 360px) {
          .rh-inner {
            padding: 8px 10px;
          }
          .rh-logo {
            font-size: 18px;
          }
          .rh-hamburger svg {
            width: 20px;
            height: 20px;
          }
          .rh-mobile-nav a {
            font-size: 14px;
            padding: 9px 0;
          }
        }
      `}</style>
    </header>
  );
}
