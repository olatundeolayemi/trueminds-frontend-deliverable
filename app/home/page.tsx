'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      name: 'Jollof Delight',
      id: '101',
      image: '/image/jollof-delight.png',
    },
    {
      name: 'Swallows & Soups',
      id: '201',
      image: '/image/swallows-soups.png',
    },
    {
      name: 'Grills & BBQ',
      id: '301',
      image: '/image/grills-bbq.png',
    },
    {
      name: 'Sweet Treats',
      id: '501',
      image: '/image/sweet-treats-1.png',
    },
    {
      name: 'Jollof Delights',
      id: '102',
      image: '/image/jollof-delights.png',
    },
    {
      name: 'Jollof Delights',
      id: '103',
      image: '/image/jollof-delightss.png',
    },
  ];

  const specials = [
    {
      id: 'tilapia-pepper-soup',
      name: 'Spicy Tilapia Pepper Soup',
      description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian specialty.',
      price: 4500,
      image: '/image/spicy-tilapia-peppersoup.png',
    },
    {
      id: 'jollof-fried-chicken-3',
      name: 'Jollof Rice & Fried Chicken',
      description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
      price: 4500,
      image: '/image/jollof-rice-fried-chicken-3.png',
    },
    {
      id: 'jollof-fried-chicken-4',
      name: 'Jollof Rice & Fried Chicken',
      description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
      price: 5500,
      image: '/image/jollof-rice-fried-chicken-3.png',
    },
    {
      id: 'jollof-smoked-chicken',
      name: 'Jollof Rice & Smoked Chicken',
      description: 'Our signature Jollof rice, cooked to perfection, served with smoked chicken.',
      price: 5500,
      image: '/image/jollof-rice-smoked-chicken-2.png',
    },
    {
      id: 'jollof-fried-chicken-5',
      name: 'Jollof Rice & Fried Chicken',
      description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
      price: 5500,
      image: '/image/jollof-rice-fried-chicken-1.png',
    },
    {
      id: 'egusi-pounded-yam',
      name: 'Egusi Soup & Pounded Yam',
      description: 'Rich and hearty Egusi soup with assorted meat, served with smooth pounded yam.',
      price: 5500,
      image: '/image/egusi-soup-pounded-yam.png',
    },
  ];

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
          background: #f9f9f9;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.5;
        }

        .home-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* HEADER */
        .header {
          background: #fff;
          padding: 16px 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .header-logo {
          font-family: "Island Moments", cursive;
          color: #FF7A18;
          font-size: 40.81px;
          font-weight: 400;
          line-height: 40.81px;
          letter-spacing: 0%;
          white-space: nowrap;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 28px;
          flex: 1;
          margin: 0 28px;
        }

        .header-nav a {
          color: #333;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .header-nav a:hover {
          color: var(--orange);
        }

        .header-login {
          background: var(--orange);
          color: #fff;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }

        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 28px;
          color: #333;
          padding: 4px;
          line-height: 1;
          z-index: 101;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          padding: 0 24px 16px;
          gap: 0;
          background: #fff;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .mobile-nav.open {
          display: flex;
          max-height: 300px;
          padding: 12px 24px 16px;
          border-top: 1px solid #eee;
        }

        .mobile-nav a {
          color: #333;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          padding: 12px 0;
          transition: color 0.2s ease;
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-nav a:last-child {
          border-bottom: none;
        }

        .mobile-nav a:hover {
          color: var(--orange);
        }

        /* HERO SECTION */
        .hero {
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/image/home-screen.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 80px 24px;
          color: #fff;
          text-align: left;
          margin-bottom: 48px;
        }

        .hero-inner {
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 12px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .hero p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          max-width: 600px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-btn {
          display: inline-block;
          background: var(--orange);
          color: #fff;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: background 0.2s ease;
        }

        .hero-btn:hover {
          background: #e66e0a;
        }

        /* SEARCH BAR */
        .search-section {
          max-width: 100%;
          margin: -40px 24px 48px;
          padding: 0;
          position: relative;
          z-index: 10;
        }

        .search-bar {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          background: #fff;
          padding: 24px 32px;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .search-bar input {
          flex: 1;
          border: 0;
          outline: 0;
          font-size: 16px;
          font-family: inherit;
          min-height: 28px;
        }

        /* CONTENT */
        .content {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          flex: 1;
        }

        /* SECTION TITLE */
        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #222;
          margin-bottom: 24px;
          text-align: center;
        }

        /* CATEGORIES GRID */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 56px;
        }

        .category-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          text-decoration: none;
          color: #222;
        }

        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .category-image {
          width: 100%;
          height: 200px;
          background: #f0f0f0;
          object-fit: cover;
        }

        .category-name {
          padding: 16px;
          text-align: center;
          font-weight: 600;
          font-size: 15px;
        }

        /* SPECIALS GRID */
        .specials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
          margin-bottom: 56px;
        }

        .special-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.2s ease;
        }

        .special-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .special-image {
          width: 100%;
          height: 200px;
          background: #f0f0f0;
          object-fit: cover;
        }

        .special-content {
          padding: 16px;
        }

        .special-name {
          font-size: 16px;
          font-weight: 600;
          color: #222;
          margin-bottom: 8px;
        }

        .special-description {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 12px;
          min-height: 39px;
        }

        .special-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .special-price {
          font-size: 16px;
          font-weight: 700;
          color: var(--orange);
        }

        .add-to-cart {
          background: var(--orange);
          color: #fff;
          border: 0;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          transition: background 0.2s ease;
          font-family: inherit;
        }

        .add-to-cart:hover {
          background: #e66e0a;
        }

        /* PROMO SECTION */
        .promo-section {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/image/promo.png');
          background-size: cover;
          background-position: center;
          padding: 60px 24px;
          color: #fff;
          text-align: center;
          margin-bottom: 56px;
          border-radius: 12px;
        }

        .promo-h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .promo-p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .promo-btn {
          display: inline-block;
          background: var(--orange);
          color: #fff;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: background 0.2s ease;
        }

        .promo-btn:hover {
          background: #e66e0a;
        }

        /* FOOTER */
        footer {
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
          .header {
            padding: 12px 16px;
          }

          .header-inner {
            gap: 16px;
          }

          .header-logo {
            font-size: 28px;
            line-height: 28px;
          }

          .header-nav {
            display: none;
          }

          .header-login {
            display: none;
          }

          .hamburger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-nav {
            display: flex;
            max-height: 0;
            padding: 0 16px;
          }

          .mobile-nav.open {
            display: flex;
            max-height: 300px;
            padding: 12px 16px 16px;
          }

          .hero {
            padding: 60px 20px;
          }

          .hero h1 {
            font-size: 28px;
            margin-bottom: 8px;
          }

          .hero p {
            font-size: 14px;
            margin-bottom: 16px;
            max-width: 100%;
          }

          .search-section {
            padding: 0 12px;
            margin: -30px auto 32px;
            max-width: calc(100% - 24px);
          }

          .search-bar {
            padding: 12px 16px;
            gap: 12px;
          }

          .search-bar input {
            font-size: 14px;
          }

          .content {
            padding: 0 16px;
          }

          .section-title {
            font-size: 18px;
            margin-bottom: 16px;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 36px;
          }

          .category-image {
            height: 140px;
          }

          .category-name {
            padding: 12px;
            font-size: 13px;
          }

          .specials-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 36px;
          }

          .special-card {
            display: flex;
            gap: 12px;
          }

          .special-image {
            width: 120px;
            height: 120px;
            flex-shrink: 0;
            border-radius: 8px;
          }

          .special-content {
            flex: 1;
            padding: 12px;
          }

          .special-name {
            font-size: 14px;
            margin-bottom: 6px;
          }

          .special-description {
            font-size: 12px;
            min-height: auto;
            margin-bottom: 8px;
          }

          .special-footer {
            flex-wrap: wrap;
            gap: 8px;
          }

          .special-price {
            font-size: 15px;
          }

          .add-to-cart {
            padding: 6px 10px;
            font-size: 12px;
          }

          .promo-section {
            padding: 40px 20px;
            margin-bottom: 32px;
          }

          .promo-h2 {
            font-size: 22px;
            margin-bottom: 8px;
          }

          .promo-p {
            font-size: 14px;
            margin-bottom: 16px;
          }

          .promo-btn {
            padding: 10px 18px;
            font-size: 14px;
          }

          footer {
            padding: 32px 20px 32px;
          }

          .footer-inner {
            gap: 24px;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .brand-block {
            flex: 0 0 calc(50% - 12px);
          }

          .footer-col {
            flex: 0 0 calc(50% - 12px);
          }

          .copyright {
            flex: 0 0 100%;
            margin-top: 16px;
          }

          .up-btn {
            right: 16px;
            bottom: 16px;
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 10px 12px;
          }

          .header-inner {
            gap: 8px;
          }

          .header-logo {
            font-size: 22px;
            line-height: 22px;
          }

          .header-login {
            display: none;
          }

          .hamburger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            padding: 2px;
          }

          .mobile-nav.open {
            padding: 10px 12px 14px;
          }

          .mobile-nav a {
            font-size: 15px;
            padding: 10px 0;
          }

          .hero {
            padding: 40px 16px;
          }

          .hero h1 {
            font-size: 22px;
            margin-bottom: 6px;
          }

          .hero p {
            font-size: 13px;
            margin-bottom: 12px;
          }

          .hero-btn {
            padding: 10px 16px;
            font-size: 13px;
          }

          .search-section {
            padding: 0 10px;
            margin: -25px auto 24px;
          }

          .search-bar {
            padding: 10px 12px;
            gap: 10px;
          }

          .search-bar input {
            font-size: 13px;
            min-height: 18px;
          }

          .content {
            padding: 0 12px;
          }

          .section-title {
            font-size: 16px;
            margin-bottom: 12px;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-bottom: 24px;
          }

          .category-card {
            border-radius: 8px;
          }

          .category-image {
            height: 120px;
          }

          .category-name {
            padding: 8px;
            font-size: 12px;
          }

          .specials-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 24px;
          }

          .special-card {
            flex-direction: column;
          }

          .special-image {
            width: 100%;
            height: 160px;
            border-radius: 8px;
          }

          .special-content {
            padding: 10px;
          }

          .special-name {
            font-size: 13px;
            margin-bottom: 4px;
          }

          .special-description {
            font-size: 11px;
            min-height: auto;
            margin-bottom: 6px;
          }

          .special-footer {
            gap: 6px;
          }

          .special-price {
            font-size: 14px;
          }

          .add-to-cart {
            padding: 5px 8px;
            font-size: 11px;
          }

          .promo-section {
            padding: 32px 16px;
            margin-bottom: 24px;
            border-radius: 8px;
          }

          .promo-h2 {
            font-size: 18px;
            margin-bottom: 6px;
          }

          .promo-p {
            font-size: 12px;
            margin-bottom: 12px;
          }

          .promo-btn {
            padding: 8px 14px;
            font-size: 12px;
          }

          footer {
            padding: 24px 12px 24px;
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

          .footer-col strong {
            margin-bottom: 10px;
            font-size: 13px;
          }

          .footer-col a {
            margin: 6px 0;
            font-size: 13px;
          }

          .brand-block p {
            font-size: 13px;
          }

          .copyright {
            margin-top: 12px;
            font-size: 11px;
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

        @media (max-width: 768px) {
          footer {
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
        }

        @media (max-width: 480px) {
          footer {
            padding: 32px 16px 32px;
          }

          .footer-inner {
            gap: 20px;
            flex-direction: column;
          }

          .brand-block {
            flex: 0 0 100%;
          }

          .footer-col {
            flex: 0 0 100%;
          }

          .copyright {
            flex: 0 0 100%;
            margin-top: 16px;
          }
        }

        /* FOOTER */
        footer {
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

        /* FOOTER FULL WIDTH */
        .home-page footer {
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
          box-sizing: border-box;
        }

        /* UP BUTTON */
        .up-btn {
          position: fixed;
          right: 26px;
          bottom: 26px;
          width: 42px;
          height: 42px;
          background: var(--blue);
          color: #fff;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
          font-weight: 700;
          cursor: pointer;
          border: 0;
          font-size: 20px;
          transition: background 0.2s ease;
          z-index: 50;
        }

        .up-btn:hover {
          background: #1696e8;
        }

        @media (max-width: 768px) {
          .search-section {
            margin: -30px 12px 36px;
          }

          .search-bar {
            padding: 18px 20px;
          }
        }

        @media (max-width: 480px) {
          footer {
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
            flex: 0 0 100%;
            margin-top: 12px;
            font-size: 12px;
          }

          .search-section {
            margin: -25px 8px 28px;
          }

          .search-bar {
            padding: 16px 16px;
            font-size: 14px;
          }
        }

        @media (max-width: 360px) {
          .header {
            padding: 8px 10px;
          }

          .header-logo {
            font-size: 20px;
            line-height: 20px;
          }

          .hamburger-btn {
            font-size: 22px;
            padding: 2px;
          }

          .hamburger-btn svg {
            width: 20px;
            height: 20px;
          }

          .mobile-nav a {
            font-size: 14px;
            padding: 9px 0;
          }

          .mobile-nav.open {
            padding: 8px 10px 12px;
          }
        }
      `}</style>

      <div className="home-page">
        {/* HEADER */}
        <header className="header">
          <div className="header-inner">
            <div className="header-logo">Chuks Kitchen</div>
            <nav className="header-nav">
              <Link href="/home">Home</Link>
              <Link href="/explore">Explore</Link>
              <Link href="/my-orders">My Orders</Link>
              <Link href="/signin">Account</Link>
            </nav>
            <Link href="/signin" className="header-login">Login</Link>
            <button
              className="hamburger-btn"
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

          {/* MOBILE NAV - collapsible dropdown */}
          <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <Link href="/home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/explore" onClick={() => setMobileMenuOpen(false)}>Explore</Link>
            <Link href="/my-orders" onClick={() => setMobileMenuOpen(false)}>My Orders</Link>
            <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>Account</Link>
            <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>Login</Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <h1>The Heart of Nigerian Home Cooking</h1>
            <p>Handcrafted with passion, delivered with care.</p>
            <Link href="/explore" className="hero-btn">Discover what&apos;s new</Link>
          </div>
        </section>

        {/* SEARCH */}
        <div className="search-section">
          <div className="search-bar">
            <span>🔍</span>
            <input
              type="text"
              placeholder="What are you craving for today?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* CONTENT */}
        <main className="content">
          {/* CATEGORIES */}
          <h2 className="section-title">Popular Categories</h2>
          <div className="categories-grid">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/food-details/${cat.id}`} className="category-card">
                <img src={cat.image} alt={cat.name} className="category-image" />
                <div className="category-name">{cat.name}</div>
              </Link>
            ))}
          </div>

          {/* SPECIALS */}
          <h2 className="section-title">Chef's Specials</h2>
          <div className="specials-grid">
            {specials.map((special, idx) => (
              <div key={idx} className="special-card cursor-pointer" onClick={() => router.push(`/food-details/${special.id}`)}>
                <img src={special.image} alt={special.name} className="special-image" />
                <div className="special-content">
                  <div className="special-name">{special.name}</div>
                  <div className="special-description">{special.description}</div>
                  <div className="special-footer">
                    <span className="special-price">₦{special.price.toLocaleString()}</span>
                    <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); router.push(`/food-details/${special.id}`); }}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PROMO */}
          <section className="promo-section">
            <h2 className="promo-h2">Introducing Our New Menu Additions!</h2>
            <p className="promo-p">Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!</p>
            <Link href="/explore" className="promo-btn">Discover what&apos;s new</Link>
          </section>
        </main>

        {/* FOOTER */}
        <footer>
          <div className="footer-inner">
            <div className="brand-block">
              <div className="brand">Chuks Kitchen</div>
              <p>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
            </div>

            <div className="footer-col">
              <strong>Quick Links</strong>
              <Link href="/home">Home</Link>
              <Link href="/explore">Explore</Link>
              <Link href="/my-orders">My Orders</Link>
              <Link href="/signin">Account</Link>
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

          <div className="copyright">©2024 Chuks Kitchen. All rights reserved.</div>
        </footer>
      </div>

      <button
        className="up-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to top"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}