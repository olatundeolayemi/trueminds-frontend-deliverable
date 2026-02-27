import Link from 'next/link';

export default function ResponsiveFooter() {
  return (
    <footer className="rf-footer">
      <div className="rf-inner">
        <div className="rf-grid">
          <div className="rf-brand">
            <h3 className="rf-brand-title">Chuks Kitchen</h3>
            <p className="rf-brand-desc">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
          </div>
          <div className="rf-col">
            <h4 className="rf-col-title">Quick Links</h4>
            <ul className="rf-links">
              <li><Link href="/home">Home</Link></li>
              <li><Link href="/explore">Explore</Link></li>
              <li><Link href="/my-orders">My Orders</Link></li>
              <li><Link href="/signin">Account</Link></li>
              <li><a href="tel:+2348012345678">Contact</a></li>
            </ul>
          </div>
          <div className="rf-col">
            <h4 className="rf-col-title">Contact Us</h4>
            <p className="rf-text">+234 801 234 5678</p>
            <p className="rf-text">hello@chukskitchen.com</p>
            <p className="rf-text">123 Taste Blvd, Lagos, Nigeria</p>
          </div>
          <div className="rf-col">
            <h4 className="rf-col-title">Social</h4>
            <ul className="rf-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="rf-copyright">
          <p>{'©2024 Chuks Kitchen. All rights reserved.'}</p>
        </div>
      </div>

      <style>{`
        .rf-footer {
          background-color: #6D3F33;
          color: #f7eae3;
          width: 100%;
          margin-top: 48px;
        }
        .rf-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 48px 24px 24px;
        }
        .rf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-bottom: 32px;
        }
        .rf-brand-title {
          font-family: 'Island Moments', cursive;
          color: #f6b081;
          font-size: 20px;
          margin-bottom: 12px;
        }
        .rf-brand-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #f7eae3;
        }
        .rf-col-title {
          font-weight: 700;
          margin-bottom: 12px;
          font-size: 15px;
          color: #fff;
        }
        .rf-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .rf-links a {
          color: #f7eae3;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .rf-links a:hover {
          color: #f6b081;
        }
        .rf-text {
          font-size: 14px;
          margin-bottom: 6px;
          color: #f7eae3;
        }
        .rf-copyright {
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 16px;
          text-align: center;
          font-size: 13px;
          color: #d4b8a8;
        }

        @media (max-width: 768px) {
          .rf-inner {
            padding: 36px 16px 20px;
          }
          .rf-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .rf-inner {
            padding: 28px 12px 16px;
          }
          .rf-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .rf-brand-title {
            font-size: 18px;
          }
        }
      `}</style>
    </footer>
  );
}
