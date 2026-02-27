'use client';

import { useState } from 'react';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    alert('Form submitted successfully');
  };

  return (
    <>
      <style>{`
        :root {
          --orange: #F37B2B;
          --dark-brown: #6D3F33;
          --light-gray: #f6f7f8;
          --max-width: 1400px;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          width: 100%;
          height: 100%;
        }

        body {
          color: #222;
          background: var(--light-gray);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.4;
        }

        .signin-page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .signin-container {
          width: 100%;
          display: flex;
          flex: 1;
          background: #fff;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
        }

        /* LEFT PANEL - Image with overlay */
        .signin-left {
          flex: 0 0 50%;
          width: 50%;
          min-height: 620px;
          position: relative;
          background-image: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imp1-poja6qTzADTqvPc3ejwn4Qltha1kyV.png");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
        }

        .signin-left::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(243, 123, 43, 0.85), rgba(243, 123, 43, 0.85));
          pointer-events: none;
          z-index: 1;
        }

        .signin-promo {
          position: relative;
          z-index: 2;
          color: #fff;
          max-width: 380px;
          text-align: left;
        }

        .signin-promo .logo-script {
          font-family: "Island Moments", cursive;
          font-size: 22px;
          color: rgba(255, 255, 255, 0.98);
          margin-bottom: 8px;
        }

        .signin-promo h1 {
          margin: 0;
          font-size: 44px;
          line-height: 1.1;
          font-weight: 700;
          color: #fff;
        }

        .signin-promo p {
          margin-top: 14px;
          color: rgba(255, 255, 255, 0.95);
          font-size: 15px;
          line-height: 1.6;
        }

        /* RIGHT PANEL - Form */
        .signin-right {
          flex: 0 0 50%;
          width: 50%;
          min-height: 620px;
          padding: 48px 64px;
          background: var(--light-gray);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow-y: auto;
        }

        .signin-form-wrapper {
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
        }

        .signin-top .logo-script {
          font-family: "Island Moments", cursive;
          color: #FF7A18;
          font-size: 40.81px;
          font-weight: 400;
          line-height: 40.81px;
          letter-spacing: 0%;
          display: block;
          margin-bottom: 6px;
          width: 574px;
          height: 54px;
        }

        .signin-top h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #111;
        }

        label {
          display: block;
          margin-top: 16px;
          margin-bottom: 6px;
          font-size: 13px;
          color: #6a6a6a;
        }

        .signin-field {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 6px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .signin-field input {
          border: 0;
          outline: 0;
          width: 100%;
          font-size: 14px;
          font-family: inherit;
        }

        .signin-field .icon {
          opacity: 0.7;
          font-size: 16px;
          flex-shrink: 0;
        }

        .signin-field button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          color: #8d8d8d;
          padding: 0;
          flex-shrink: 0;
        }

        .forgot {
          display: block;
          text-align: right;
          margin-top: 8px;
          font-size: 13px;
          color: var(--orange);
          text-decoration: none;
        }

        .forgot:hover {
          text-decoration: underline;
        }

        .signin-btn {
          display: block;
          width: 100%;
          margin-top: 18px;
          padding: 12px 14px;
          border-radius: 6px;
          border: 0;
          background: var(--orange);
          color: white;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s ease;
        }

        .signin-btn:hover {
          background: #e66e0a;
        }

        .divider {
          text-align: center;
          margin: 18px 0;
          color: #9aa0a6;
          font-size: 13px;
        }

        .signin-socials {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          background: #fff;
          cursor: pointer;
          font-size: 14px;
          color: #333;
          font-family: inherit;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: #f9f9f9;
        }

        .social-btn img,
        .social-btn svg {
          width: 18px;
          height: 18px;
          color: #333;
        }

        .signin-note {
          margin-top: 12px;
          color: #666;
          font-size: 13px;
          text-align: center;
        }

        .signin-note a {
          color: var(--orange);
          text-decoration: none;
        }

        .signin-note a:hover {
          text-decoration: underline;
        }

        /* FOOTER */
        .signin-footer {
          background: #6D3F33;
          color: #f6efe9;
          padding: 65px 24px 65px;
          margin-top: 0;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
          box-sizing: border-box;
        }

        .signin-footer-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: flex-start;
          justify-content: flex-start;
          flex-wrap: nowrap;
        }

        .signin-footer .footer-col {
          flex: 0 0 auto;
          min-width: 120px;
        }

        .signin-footer .footer-col strong {
          display: block;
          margin-bottom: 14px;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
        }

        .signin-footer .footer-col a {
          color: #f7eae3;
          text-decoration: none;
          display: block;
          margin: 9px 0;
          font-size: 14px;
          transition: color 0.2s ease;
          line-height: 1.5;
        }

        .signin-footer .footer-col a:hover {
          color: #f6b081;
        }

        .signin-footer .logo-small {
          font-family: "Island Moments", cursive;
          color: #f6b081;
          font-size: 20px;
          margin-bottom: 16px;
          display: block;
        }

        .signin-footer p {
          margin: 0;
          color: #f7eae3;
          line-height: 1.6;
          font-size: 14px;
          max-width: 300px;
        }

        .signin-copyright {
          text-align: left;
          margin-top: 40px;
          color: #d4c9c0;
          font-size: 13px;
          max-width: 1440px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 24px;
          letter-spacing: 0.2px;
        }

        @media (max-width: 1024px) {
          .signin-footer-inner {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .signin-footer {
            padding: 40px 20px 40px;
          }

          .signin-footer-inner {
            gap: 30px;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .signin-footer .footer-col {
            flex: 0 0 calc(50% - 15px);
          }

          .signin-copyright {
            flex: 0 0 100%;
            margin-top: 20px;
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .signin-footer {
            padding: 32px 16px 32px;
          }

          .signin-footer-inner {
            gap: 20px;
            flex-direction: column;
          }

          .signin-footer .footer-col {
            flex: 0 0 100%;
          }

          .signin-copyright {
            flex: 0 0 100%;
            margin-top: 16px;
            padding: 0 16px;
          }
        }

        .up-btn {
          position: fixed;
          right: 26px;
          bottom: 26px;
          width: 42px;
          height: 42px;
          background: #19a6ff;
          color: #fff;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
          font-weight: 700;
          cursor: pointer;
          border: 4px solid rgba(255, 255, 255, 0.06);
          font-size: 20px;
          transition: background 0.2s ease;
          z-index: 999;
        }

        .up-btn:hover {
          background: #1696e8;
        }

        @media (max-width: 980px) {
          .signin-container {
            flex-direction: column;
          }

          .signin-left,
          .signin-right {
            flex: 1 1 auto;
            width: 100%;
            min-height: unset;
            height: auto;
          }

          .signin-left {
            order: 1;
            min-height: 300px;
            padding: 32px 20px;
          }

          .signin-right {
            order: 2;
            padding: 24px 20px;
            min-height: auto;
          }

          .signin-promo h1 {
            font-size: 32px;
          }

          .signin-promo p {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .signin-container {
            box-shadow: none;
          }

          .signin-left {
            min-height: 280px;
            padding: 28px 16px;
          }

          .signin-right {
            padding: 20px 16px;
          }

          .signin-form-wrapper {
            max-width: 100%;
          }

          .signin-promo h1 {
            font-size: 28px;
            line-height: 1.3;
          }

          .signin-promo p {
            font-size: 13px;
            line-height: 1.5;
          }

          .signin-top h2 {
            font-size: 16px;
          }

          .signin-top .logo-script {
            font-size: 28px;
            line-height: 28px;
            width: 100%;
            height: auto;
            margin-bottom: 4px;
          }

          label {
            font-size: 12px;
            margin-top: 12px;
            margin-bottom: 4px;
          }

          .signin-field {
            padding: 8px 10px;
            gap: 8px;
          }

          .signin-field input {
            font-size: 13px;
          }

          .signin-field .icon {
            font-size: 15px;
          }

          .forgot {
            font-size: 12px;
            margin-top: 6px;
          }

          .signin-btn {
            padding: 10px 12px;
            font-size: 14px;
            margin-top: 12px;
          }

          .divider {
            margin: 12px 0;
            font-size: 12px;
          }

          .social-btn {
            padding: 8px 10px;
            gap: 10px;
            font-size: 13px;
          }

          .social-btn img {
            width: 16px;
            height: 16px;
          }

          .signin-note {
            margin-top: 10px;
            font-size: 12px;
          }

          footer.signin-footer {
            padding: 32px 20px 32px;
            margin-top: 0;
          }

          .signin-footer-inner {
            gap: 24px;
            flex-wrap: wrap;
          }

          .signin-footer .footer-col {
            flex: 0 0 calc(50% - 12px);
          }

          .signin-copyright {
            flex: 0 0 100%;
            margin-top: 16px;
            padding: 0 20px;
          }

          .up-btn {
            right: 16px;
            bottom: 16px;
          }
        }

        @media (max-width: 480px) {
          .signin-page {
            min-height: auto;
          }

          .signin-container {
            box-shadow: none;
            background: transparent;
          }

          .signin-left {
            min-height: 240px;
            padding: 24px 12px;
          }

          .signin-left::after {
            background: linear-gradient(rgba(243, 123, 43, 0.9), rgba(243, 123, 43, 0.9));
          }

          .signin-promo {
            max-width: 100%;
            text-align: left;
          }

          .signin-promo .logo-script {
            font-size: 16px;
            margin-bottom: 4px;
          }

          .signin-promo h1 {
            font-size: 20px;
            line-height: 1.3;
          }

          .signin-promo p {
            font-size: 12px;
            margin-top: 10px;
            line-height: 1.4;
          }

          .signin-right {
            padding: 16px 12px;
            background: #fff;
          }

          .signin-form-wrapper {
            max-width: 100%;
          }

          .signin-top .logo-script {
            font-size: 22px;
            line-height: 22px;
            width: 100%;
            height: auto;
            margin-bottom: 4px;
          }

          .signin-top h2 {
            font-size: 14px;
          }

          label {
            font-size: 11px;
            margin-top: 10px;
            margin-bottom: 3px;
          }

          .signin-field {
            padding: 6px 8px;
            gap: 6px;
            border-radius: 4px;
          }

          .signin-field input {
            font-size: 12px;
          }

          .signin-field .icon {
            font-size: 14px;
          }

          .signin-field button {
            font-size: 12px;
          }

          .forgot {
            font-size: 11px;
            margin-top: 4px;
          }

          .signin-btn {
            padding: 8px 10px;
            font-size: 13px;
            margin-top: 10px;
          }

          .divider {
            margin: 10px 0;
            font-size: 11px;
          }

          .signin-socials {
            gap: 8px;
          }

          .social-btn {
            padding: 6px 8px;
            gap: 8px;
            font-size: 12px;
            border-radius: 4px;
          }

          .social-btn img {
            width: 14px;
            height: 14px;
          }

          .signin-note {
            margin-top: 8px;
            font-size: 11px;
          }

          footer.signin-footer {
            padding: 20px 12px 20px;
            margin-top: 16px;
          }

          .signin-footer-inner {
            gap: 12px;
            flex-direction: column;
          }

          .signin-footer .footer-col {
            flex: 0 0 100%;
          }

          .signin-footer .logo-small {
            font-size: 16px;
            margin-bottom: 8px;
          }

          .signin-footer p {
            font-size: 12px;
            max-width: 100%;
          }

          .signin-footer .footer-col strong {
            font-size: 12px;
            margin-bottom: 10px;
          }

          .signin-footer .footer-col a {
            font-size: 12px;
            margin: 6px 0;
          }

          .signin-copyright {
            margin-top: 12px;
            font-size: 10px;
            padding: 0 12px;
          }

          .up-btn {
            right: 12px;
            bottom: 12px;
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
        }
      `}</style>

      <div className="signin-page">
        <div className="signin-container">
          {/* LEFT PANEL */}
          <section className="signin-left">
            <div className="signin-promo">
              <div className="logo-script">Chuks Kitchen</div>
              <h1>Chuks Kitchen</h1>
              <p>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
            </div>
          </section>

          {/* RIGHT PANEL */}
          <section className="signin-right">
            {/* FORM */}
            <div className="signin-form-wrapper">
              <div className="signin-top">
                <span className="logo-script">Chuks Kitchen</span>
                <h2>Login your Account</h2>
              </div>

              <form onSubmit={handleContinue}>
                <label htmlFor="email">Email or phone number</label>
                <div className="signin-field">
                  <span className="icon">✉️</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <label htmlFor="password">Password</label>
                <div style={{ position: 'relative' }}>
                  <div className="signin-field">
                    <span className="icon">🔒</span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                  <a className="forgot" href="#">Forgot Password?</a>
                </div>

                <button className="signin-btn" type="submit">Continue</button>

                <div className="divider">Or continue with</div>

                <div className="signin-socials">
                  <button className="social-btn" type="button">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Continue with Google
                  </button>
                  <button className="social-btn" type="button">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.8 4.3c.6-.7 1-1.8.8-2.8-1 .1-2.2.6-2.9 1.4-.5.6-1 1.6-.8 2.6 1.1.1 2.2-.4 2.9-1.2zM16.1 9.2c-1.4 0-2.6.8-3.3.8-.8 0-1.6-.7-2.7-.7-2.2 0-4.2 1.6-4.2 4.5 0 2.5 1.4 5.2 3.1 6.9 .9 1.1 1.7 2.1 2.9 2.1 1.1 0 1.4-.7 2.8-.7 1.3 0 1.6.7 2.8.7 1.3 0 2.1-1 3-2.1 1-1.3 1.7-2.9 1.8-4.6-2.3-.1-3.2-1.3-4.2-1.3z"/>
                    </svg>
                    Continue with Apple
                  </button>
                </div>

                <div className="signin-note" style={{marginBottom: '60px'}}>
                  Don't have an account? <a href="/signup">Create an account</a>
                </div>
              </form>
            </div>

          {/* FOOTER */}
            <footer className="signin-footer" role="contentinfo">
              <div className="signin-footer-inner">
                <div className="footer-col">
                  <span className="logo-small">Chuks Kitchen</span>
                  <p>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                </div>

                <div className="footer-col">
                  <strong>Quick Links</strong>
                  <a href="/home">Home</a>
                  <a href="/explore">Explore</a>
                  <a href="/my-orders">My Orders</a>
                  <a href="/signin">Account</a>
                  <a href="tel:+2348012345678">Contact</a>
                </div>

                <div className="footer-col">
                  <strong>Contact Us</strong>
                  <a href="tel:+2348012345678">+234 801 234 5678</a>
                  <a href="mailto:hello@chukskitchen.com">hello@chukskitchen.com</a>
                  <div style={{ marginTop: "8px", color: "#f7e6df" }}>123 Taste Blvd, Lagos, Nigeria</div>
                </div>

                <div className="footer-col">
                  <strong>Follow</strong>
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Instagram</a>
                </div>
              </div>

              <div className="signin-copyright">©2024 Chuks Kitchen. All rights reserved.</div>
            </footer>
          </section>
        </div>
      </div>

      <div
        className="up-btn"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        role="button"
        tabIndex={0}
      >
        ↑
      </div>
    </>
  );
}
