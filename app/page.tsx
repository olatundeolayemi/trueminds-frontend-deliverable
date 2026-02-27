export default function Page() {
  return (
    <>
      <style>{`
        :root {
          --orange: #F37B2B;
          --light-orange: #FFF0E6;
          --blue: #2B9DF4;
          --brown: #6D3F33;
          --muted: #5B6770;
          --card-white: #ffffff;
          --max-width: 1400px;
          --radius: 12px;
          --container-padding: 48px;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html, body {
          height: 100%;
        }
        body {
          color: #1f2d33;
          background: #fff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.4;
        }

        .page {
          max-width: var(--max-width);
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* HERO */
        .hero {
          display: flex;
          background: #fff;
          flex: 1 0 auto;
          align-items: stretch;
          min-height: 620px;
        }

        /* Left: image */
        .left {
          flex: 1 1 50%;
          min-width: 500px;
          background-image: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imp1-poja6qTzADTqvPc3ejwn4Qltha1kyV.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          display: block;
          min-height: 520px;
        }

        /* Right column */
        .right {
          width: 480px;
          flex: 0 0 480px;
          background: var(--card-white);
          padding: var(--container-padding);
          display: flex;
          flex-direction: column;
        }

        .top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .logo {
          font-family: "Island Moments", cursive;
          color: #FF7A18;
          font-size: 40.81px;
          font-weight: 400;
          line-height: 40.81px;
          letter-spacing: 0%;
          width: 574px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .signin {
          border: 2px solid var(--blue);
          color: var(--blue);
          padding: 10px 28px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          white-space: nowrap;
        }

        h1 {
          font-size: 26px;
          margin: 8px 0 12px;
          color: #172026;
          font-weight: 700;
        }
        .lead {
          color: var(--muted);
          margin-bottom: 20px;
          font-size: 15px;
        }

        .features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 18px;
          margin-bottom: 24px;
        }
        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--light-orange);
          padding: 10px;
          border-radius: 10px;
          font-size: 14px;
          color: #2b2b2b;
        }
        .feature .icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #fff3ea;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--orange);
        }

        .ctas {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 6px;
        }
        .btn {
          display: inline-block;
          text-align: center;
          padding: 14px 18px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          font-size: 15px;
        }
        .btn-primary {
          background: var(--orange);
          color: #fff;
          border: 0;
        }
        .btn-outline {
          background: transparent;
          color: var(--blue);
          border: 2px solid var(--blue);
        }

        .meta {
          margin-top: auto;
          font-size: 13px;
          color: #9aa6b0;
          text-align: center;
          padding-top: 18px;
        }
        .meta a {
          color: var(--blue);
          text-decoration: underline;
        }

        /* FOOTER */
        footer.site-footer {
          background: var(--brown);
          color: #f6efe9;
          padding: 65px 24px 65px;
          margin-top: 0;
        }

        .footer-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: flex-start;
          justify-content: flex-start;
          flex-wrap: nowrap;
        }

        .brand-block {
          flex: 0 0 auto;
          max-width: 300px;
        }

        .brand-block .brand {
          font-family: "Island Moments", cursive;
          color: #f6b081;
          font-size: 20px;
          margin-bottom: 16px;
          display: block;
        }

        .brand-block p {
          color: #f7eae3;
          line-height: 1.6;
          font-size: 14px;
          margin: 0;
        }

        .footer-col {
          flex: 0 0 auto;
          min-width: 120px;
        }

        .footer-col strong {
          display: block;
          margin-bottom: 14px;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
        }

        .footer-col a {
          color: #f7eae3;
          text-decoration: none;
          display: block;
          margin: 9px 0;
          font-size: 14px;
          line-height: 1.5;
          transition: color 0.2s ease;
        }

        .footer-col a:hover {
          color: #f6b081;
        }

        .footer-col div {
          color: #f7eae3;
          margin: 9px 0;
          font-size: 14px;
          line-height: 1.5;
        }

        .copyright {
          text-align: left;
          margin-top: 40px;
          padding-left: 0;
          font-size: 13px;
          color: #d4c9c0;
          letter-spacing: 0.2px;
        }

        @media (max-width: 1024px) {
          .footer-inner {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          footer.site-footer {
            padding: 40px 20px 40px;
          }

          .footer-inner {
            gap: 30px;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .brand-block {
            flex: 0 0 calc(50% - 15px);
          }

          .footer-col {
            flex: 0 0 calc(50% - 15px);
          }

          .copyright {
            flex: 0 0 100%;
            margin-top: 20px;
          }

          .hero {
            flex-direction: column;
            min-height: auto;
          }

          .left {
            flex: 1;
            min-width: auto;
            width: 100%;
            min-height: 360px;
            order: 1;
          }

          .right {
            width: 100%;
            flex: 0 0 auto;
            padding: 32px 20px;
            order: 2;
          }

          h1 {
            font-size: 22px;
          }

          .lead {
            font-size: 14px;
          }

          .features {
            grid-template-columns: 1fr;
            gap: 10px 12px;
          }

          .feature {
            padding: 8px;
            font-size: 13px;
          }

          .logo {
            width: 100%;
            height: auto;
            margin-bottom: 12px;
            font-size: 28px;
          }

          .top-row {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .signin {
            padding: 6px 10px;
            font-size: 13px;
            align-self: flex-end;
          }
        }

        @media (max-width: 480px) {
          footer.site-footer {
            padding: 28px 16px 28px;
          }

          .footer-inner {
            gap: 16px;
            flex-direction: column;
          }

          .brand-block {
            flex: 0 0 100%;
          }

          .footer-col {
            flex: 0 0 100%;
          }

          .copyright {
            margin-top: 12px;
            font-size: 12px;
          }

          .right {
            padding: 24px 16px;
          }

          h1 {
            font-size: 20px;
            margin-bottom: 10px;
          }

          .lead {
            font-size: 13px;
            margin-bottom: 16px;
          }

          .features {
            margin-bottom: 16px;
          }

          .feature {
            padding: 6px;
            gap: 8px;
            font-size: 12px;
          }

          .feature .icon {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }

          .btn {
            padding: 12px 14px;
            font-size: 14px;
          }

          .meta {
            font-size: 12px;
            padding-top: 12px;
          }

          .logo {
            font-size: 24px;
            width: 100%;
            height: auto;
            margin-bottom: 8px;
          }

          .top-row {
            width: 100%;
          }

          .signin {
            padding: 6px 8px;
            font-size: 12px;
          }
        }
          }
        }
      `}</style>

      <div className="page">
        <section className="hero" aria-label="Hero section">
          <div className="left" role="img" aria-label="Family enjoying Nigerian food"></div>

          <aside className="right" aria-label="Intro card">
            <div className="top-row">
              <div className="logo">Chuks Kitchen</div>
              <a className="signin" href="/signin">Sign In</a>
            </div>

            <h1>Your Authentic Taste of Nigeria</h1>
            <p className="lead">Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.</p>

            <div className="features">
              <div className="feature">
                <div className="icon">🍽️</div>
                <div>Freshly Prepared</div>
              </div>

              <div className="feature">
                <div className="icon">🤝</div>
                <div>Support Local Business</div>
              </div>

              <div className="feature">
                <div className="icon">🚚</div>
                <div>Fast &amp; Reliable Delivery</div>
              </div>

              <div style={{ visibility: "hidden" }}></div>
            </div>

            <div className="ctas">
              <a className="btn btn-primary" href="/home">Start Your Order</a>
              <a className="btn btn-outline" href="#">Learn More About Us</a>
            </div>

            <div className="meta">
              <small>© 2024 Chuks Kitchen. <a href="#">Privacy Policy</a> &nbsp; <a href="#">Terms of Service</a></small>
            </div>
          </aside>
        </section>

        <footer className="site-footer" role="contentinfo">
          <div className="footer-inner">
            <div className="brand-block">
              <div className="brand">Chuks Kitchen</div>
              <p>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
            </div>

            <div className="footer-col">
              <strong>Quick Links</strong>
              <a href="#">Home</a>
              <a href="#">Explore</a>
              <a href="#">My Order</a>
              <a href="#">Account</a>
              <a href="#">Contact</a>
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

          <div className="copyright">©2024 Chuks Kitchen. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
