'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ExplorePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Popular Categories - using provided images
  const popularCategories = [
    {
      id: 'jollof-fried-chicken-1',
      name: 'Jollof Rice & Fried Chicken',
      image: '/image/jollof-rice-fried-chicken-1.png',
      category: 'jollof-entrees',
    },
    {
      id: '201',
      name: 'Eba & Egusi Soup (Goat Meat)',
      image: '/image/eba-egusi-soup-goat-meat.png',
      category: 'swallows-soups',
    },
    {
      id: '202',
      name: 'Pounded Yam & Edikaikong',
      image: '/image/pounded-yam-edikaikong.png',
      category: 'swallows-soups',
    },
    {
      id: '301',
      name: 'Peppered Snail',
      image: '/image/peppered-snail.png',
      category: 'grills-sides',
    },
    {
      id: '302',
      name: 'Grilled Tilapia Fish',
      image: '/image/grilled-tilapia-fish.png',
      category: 'grills-sides',
    },
    {
      id: 'jollof-fried-chicken-2',
      name: 'Jollof Rice & Fried Chicken',
      image: '/image/jollof-rice-fried-chicken-2.png',
      category: 'jollof-entrees',
    },
  ];

  // Chef's Specials
  const specials = [
    {
      id: 'tilapia-pepper-soup',
      name: 'Spicy Tilapia Pepper Soup',
      description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian specialty.',
      price: 4500,
      image: '/image/spicy-tilapia-peppersoup.png',
      category: 'grills-sides',
    },
    {
      id: 'jollof-fried-chicken-3',
      name: 'Jollof Rice & Fried Chicken',
      description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
      price: 3500,
      image: '/image/jollof-rice-fried-chicken-3.png',
      category: 'jollof-entrees',
    },
    {
      id: 'jollof-fried-chicken-4',
      name: 'Jollof Rice & Fried Chicken',
      description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
      price: 3500,
      image: '/image/jollof-rice-fried-chicken-3.png',
      category: 'jollof-entrees',
    },
    {
      id: 'jollof-smoked-chicken',
      name: 'Jollof Rice & Smoked Chicken',
      description: 'Our signature jollof rice with smoked chicken and spiced caramelized onions.',
      price: 3500,
      image: '/image/jollof-rice-smoked-chicken-2.png',
      category: 'jollof-entrees',
    },
    {
      id: 'jollof-fried-chicken-5',
      name: 'Jollof Rice & Fried Chicken',
      description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
      price: 3500,
      image: '/image/jollof-rice-fried-chicken-2.png',
      category: 'jollof-entrees',
    },
    {
      id: 'egusi-pounded-yam',
      name: 'Egusi Soup & Pounded Yam',
      description: 'Rich melon seed soup with assorted meat and tender pounded cassava.',
      price: 3500,
      image: '/image/egusi-soup-pounded-yam.png',
      category: 'swallows-soups',
    },
  ];

  // Jollof Rice & Entrees items
  const jollofItems = [
    {
      id: '101',
      name: 'Classic Jollof Rice',
      price: 2500,
      image: '/image/jollof-rice-fried-chicken-1.png',
    },
    {
      id: '102',
      name: 'Jollof with Beef',
      price: 3200,
      image: '/image/jollof-rice-fried-chicken-2.png',
    },
    {
      id: '103',
      name: 'Jollof with Shrimp',
      price: 4000,
      image: '/image/jollof-rice-fried-chicken-2.png',
    },
  ];

  // Swallow & Soups items
  const swallowItems = [
    {
      id: '201',
      name: 'Eba & Egusi Soup',
      price: 2000,
      image: '/image/eba-egusi-soup-goat-meat.png',
    },
    {
      id: '202',
      name: 'Pounded Yam & Soup',
      price: 2500,
      image: '/image/egusi-soup-pounded-yam.png',
    },
    {
      id: '203',
      name: 'Amala & Ewedu+Gbegiri Soup',
      price: 2200,
      image: '/image/amala-ewedu-with-gbegiri.png',
    },
  ];

  // Grills & Sides items
  const grillsItems = [
    {
      id: '301',
      name: 'Peppered Snail',
      price: 3500,
      image: '/image/peppered-snail.png',
    },
    {
      id: '302',
      name: 'Grilled Tilapia Fish',
      price: 4000,
      image: '/image/grilled-tilapia-fish.png',
    },
    {
      id: '303',
      name: 'Grilled Beef Skewers',
      price: 3800,
      image: '/image/grills-bbq.png',
    },
  ];

  // Beverages items
  const beveragesItems = [
    {
      id: '401',
      name: 'Fresh Zobo Drink',
      price: 1200,
      image: '/image/jollof-delight.png',
    },
    {
      id: '402',
      name: 'Ginger Juice',
      price: 1000,
      image: '/image/jollof-delight.png',
    },
    {
      id: '403',
      name: 'Palm Wine',
      price: 1500,
      image: '/image/jollof-delight.png',
    },
  ];

  // Desserts items
  const dessertsItems = [
    {
      id: '501',
      name: 'Puff Puff',
      price: 800,
      image: '/image/sweet-treats-1.png',
    },
    {
      id: '502',
      name: 'Chin Chin',
      price: 1000,
      image: '/image/sweet-treats-1.png',
    },
    {
      id: '503',
      name: 'Traditional Honey Cake',
      price: 1500,
      image: '/image/sweet-treats-1.png',
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="explore-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --brown: #9D7563;
          --dark-brown: #6D4C41;
          --orange: #FF7A18;
          --light-bg: #f6efe9;
          --max-width: 1200px;
        }

        .explore-page {
          background: #fff;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        /* HEADER */
        header.explore-header {
          background: var(--light-bg);
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 100vw;
          border-bottom: 1px solid #e0d5cc;
        }

        .explore-header-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .explore-logo {
          font-family: "Island Moments", cursive;
          color: var(--orange);
          font-size: 28px;
          font-weight: 400;
          white-space: nowrap;
        }

        .explore-nav {
          display: flex;
          gap: 24px;
          list-style: none;
        }

        .explore-nav a, .explore-nav button {
          color: #333;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font: inherit;
        }

        .explore-nav a:hover, .explore-nav button:hover {
          color: var(--orange);
        }

        .explore-header-right {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .explore-login {
          background: var(--orange);
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .explore-login:hover {
          background: #e66d0a;
        }

        /* HERO SECTION */
        .explore-hero {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 100%), 
                      url('/image/explore.png');
          background-size: cover;
          background-position: center;
          padding: 80px 24px;
          color: #fff;
          text-align: left;
          margin-bottom: 40px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .explore-hero h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
          max-width: 600px;
          line-height: 1.3;
        }

        .explore-hero p {
          font-size: 16px;
          margin-bottom: 24px;
          max-width: 500px;
          line-height: 1.5;
        }

        .hero-btn {
          width: fit-content;
          background: var(--orange);
          color: #fff;
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .hero-btn:hover {
          background: #e66d0a;
        }

        /* SEARCH BAR */
        .explore-search-section {
          max-width: 1200px;
          margin: -40px auto 48px;
          padding: 0 16px;
          position: relative;
          z-index: 10;
        }

        .explore-search-bar {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          background: #fff;
          padding: 16px 24px;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }

        .explore-search-bar input {
          flex: 1;
          border: 0;
          outline: 0;
          font-size: 15px;
          font-family: inherit;
          min-height: 20px;
        }

        /* CATEGORY NAVIGATION */
        .explore-sidebar {
          max-width: 1200px;
          margin: 0 auto 24px;
          padding: 0 24px;
          background: #f5f0eb;
          padding: 20px 24px;
          border-radius: 0;
        }

        .explore-sidebar h3 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #333;
        }

        .explore-category-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .category-btn {
          padding: 10px 16px;
          background: transparent;
          border: none;
          border-left: 4px solid transparent;
          cursor: pointer;
          font-size: 14px;
          text-align: left;
          transition: all 0.2s;
          color: #333;
        }

        .category-btn:first-child {
          background: #f0d9c8;
          border-left-color: var(--orange);
          color: #333;
        }

        .category-btn:hover {
          background: #f0d9c8;
          border-left-color: var(--orange);
        }

        /* CONTENT CONTAINER */
        .explore-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* POPULAR CATEGORIES */
        .explore-section {
          margin-bottom: 56px;
        }

        .explore-section-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 28px;
          color: #333;
          text-align: center;
        }

        .popular-categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .category-card {
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .category-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }

        .category-name {
          padding: 16px;
          text-align: center;
          font-weight: 600;
          font-size: 15px;
          color: #333;
          background: #fff;
        }

        /* FOOD GRID */
        .food-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .food-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .food-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .food-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px 8px 0 0;
        }

        .food-info {
          padding: 16px;
        }

        .food-name {
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 6px;
          color: #333;
        }

        .food-description {
          font-size: 13px;
          color: #666;
          margin-bottom: 12px;
          line-height: 1.4;
          min-height: 36px;
        }

        .food-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .food-price {
          font-weight: 700;
          font-size: 16px;
          color: var(--orange);
        }

        .add-to-cart-btn {
          background: var(--orange);
          color: #fff;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          transition: background 0.2s;
        }

        .add-to-cart-btn:hover {
          background: #e66d0a;
        }

        /* PROMO SECTION */
        .explore-promo-section {
          background: linear-gradient(rgba(243, 123, 43, 0.85), rgba(243, 123, 43, 0.85)), 
                      url('/image/menu.png');
          background-size: cover;
          background-position: center;
          padding: 60px 24px;
          color: #fff;
          text-align: center;
          margin: 60px 0;
          border-radius: 8px;
        }

        .explore-promo-h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .explore-promo-p {
          font-size: 16px;
          margin-bottom: 20px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        .explore-promo-btn {
          background: #fff;
          color: var(--orange);
          border: none;
          padding: 12px 28px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .explore-promo-btn:hover {
          background: #f0ebe6;
        }

        /* FOOTER */
        footer.explore-footer {
          background: #6D3F33;
          color: #f6efe9;
          padding: 65px 24px 65px;
          margin-top: 0;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
          box-sizing: border-box;
        }

        .explore-footer-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: flex-start;
          justify-content: flex-start;
          flex-wrap: nowrap;
        }

        .explore-brand-block {
          flex: 0 0 auto;
          max-width: 300px;
        }

        .explore-brand-block .brand {
          font-family: "Island Moments", cursive;
          color: #f6b081;
          font-size: 20px;
          margin-bottom: 16px;
          display: block;
        }

        .explore-brand-block p {
          color: #f7eae3;
          line-height: 1.6;
          font-size: 14px;
          margin: 0;
        }

        .explore-footer-col {
          flex: 0 0 auto;
          min-width: 120px;
        }

        .explore-footer-col strong {
          display: block;
          margin-bottom: 14px;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
        }

        .explore-footer-col a {
          color: #f7eae3;
          text-decoration: none;
          display: block;
          margin: 9px 0;
          font-size: 14px;
          line-height: 1.5;
          transition: color 0.2s ease;
        }

        .explore-footer-col a:hover {
          color: #f6b081;
        }

        .explore-footer-col div {
          color: #f7eae3;
          margin: 9px 0;
          font-size: 14px;
          line-height: 1.5;
        }

        .explore-copyright {
          text-align: left;
          margin-top: 40px;
          padding-left: 0;
          font-size: 13px;
          color: #d4c9c0;
          letter-spacing: 0.2px;
        }

        /* FOOTER FULL WIDTH */
        .explore-page footer {
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
          box-sizing: border-box;
        }

        /* UP BUTTON */
        .up-btn {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 44px;
          height: 44px;
          background: #2196F3;
          border: none;
          border-radius: 50%;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          display: none;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: opacity 0.2s;
          z-index: 100;
        }

        .up-btn.show {
          display: flex;
        }

        .up-btn:hover {
          opacity: 0.8;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .explore-footer-inner {
            gap: 40px;
          }

          .popular-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .food-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .explore-sidebar {
            padding: 16px;
            margin-bottom: 20px;
          }

          .explore-sidebar h3 {
            font-size: 13px;
            margin-bottom: 12px;
          }

          .category-btn {
            padding: 8px 12px;
            font-size: 13px;
          }

          .explore-content {
            padding: 0 16px;
          }

          .explore-header-left {
            gap: 16px;
            width: 100%;
          }

          .explore-logo {
            font-size: 22px;
          }

          .explore-nav {
            display: none;
          }

          .explore-hero {
            padding: 60px 20px;
            min-height: 300px;
          }

          .explore-hero h1 {
            font-size: 32px;
          }

          .explore-hero p {
            font-size: 14px;
          }

          .explore-search-section {
            padding: 0 12px;
            margin: -30px auto 32px;
          }

          .explore-search-bar {
            padding: 12px 16px;
          }

          .explore-category-nav {
            padding: 0 16px;
            gap: 8px;
            margin-bottom: 32px;
          }

          .explore-content {
            padding: 0 16px;
          }

          .explore-section-title {
            font-size: 22px;
          }

          .popular-categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .category-image {
            height: 160px;
          }

          .category-name {
            padding: 12px;
            font-size: 13px;
          }

          .food-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .food-image {
            height: 160px;
          }

          .food-info {
            padding: 12px;
          }

          .food-name {
            font-size: 13px;
          }

          .food-description {
            font-size: 12px;
            min-height: 30px;
          }

          .explore-promo-section {
            padding: 40px 20px;
            margin: 40px 0;
          }

          .explore-promo-h2 {
            font-size: 24px;
          }

          .explore-promo-p {
            font-size: 14px;
          }

          footer.explore-footer {
            padding: 40px 20px 40px;
          }

          .explore-footer-inner {
            gap: 24px;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .explore-brand-block {
            flex: 0 0 calc(50% - 12px);
          }

          .explore-footer-col {
            flex: 0 0 calc(50% - 12px);
          }

          .explore-copyright {
            flex: 0 0 100%;
            margin-top: 16px;
          }

          .up-btn {
            right: 16px;
            bottom: 16px;
          }
        }

        @media (max-width: 480px) {
          .explore-sidebar {
            padding: 12px;
            margin-bottom: 16px;
          }

          .explore-sidebar h3 {
            font-size: 12px;
            margin-bottom: 8px;
          }

          .category-btn {
            padding: 6px 10px;
            font-size: 12px;
          }

          header.explore-header {
            padding: 12px 16px;
          }

          .explore-logo {
            font-size: 18px;
          }

          .explore-hero {
            padding: 40px 16px;
            min-height: 240px;
          }

          .explore-hero h1 {
            font-size: 22px;
          }

          .explore-hero p {
            font-size: 13px;
          }

          .hero-btn {
            padding: 10px 16px;
            font-size: 13px;
          }

          .explore-search-section {
            padding: 0 10px;
            margin: -25px auto 20px;
          }

          .explore-search-bar {
            padding: 10px 12px;
          }

          .explore-category-nav {
            padding: 0 12px;
            gap: 6px;
            margin-bottom: 24px;
          }

          .category-btn {
            padding: 6px 12px;
            font-size: 12px;
          }

          .explore-content {
            padding: 0 12px;
          }

          .explore-section-title {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .popular-categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .category-image {
            height: 120px;
          }

          .category-name {
            padding: 8px;
            font-size: 12px;
          }

          .food-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .food-card {
            display: flex;
            flex-direction: row;
            gap: 12px;
          }

          .food-image {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
            border-radius: 8px;
            margin: 0;
          }

          .food-info {
            flex: 1;
            padding: 8px;
          }

          .food-name {
            font-size: 12px;
          }

          .food-description {
            display: none;
          }

          .food-footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .food-price {
            font-size: 14px;
          }

          .add-to-cart-btn {
            width: 100%;
            padding: 8px 10px;
            font-size: 12px;
          }

          .explore-promo-section {
            padding: 32px 16px;
            margin: 32px 0;
          }

          .explore-promo-h2 {
            font-size: 20px;
          }

          .explore-promo-p {
            font-size: 13px;
          }

          footer.explore-footer {
            padding: 24px 12px 24px;
          }

          .explore-footer-inner {
            gap: 12px;
            flex-direction: column;
          }

          .explore-brand-block {
            flex: 0 0 100%;
          }

          .explore-footer-col {
            flex: 0 0 100%;
          }

          .explore-footer-col strong {
            font-size: 12px;
          }

          .explore-footer-col a {
            font-size: 12px;
            margin: 6px 0;
          }

          .explore-brand-block p {
            font-size: 12px;
          }

          .explore-copyright {
            margin-top: 12px;
            font-size: 10px;
            padding: 0;
          }

          .up-btn {
            width: 36px;
            height: 36px;
            right: 12px;
            bottom: 12px;
            font-size: 16px;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="explore-header">
        <div className="explore-header-left">
          <div className="explore-logo">Chuks Kitchen</div>
          <ul className="explore-nav">
            <li><a href="/home">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/my-orders">My Orders</a></li>
            <li><a href="/signin">Account</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="explore-header-right">
          <button className="explore-login" onClick={() => router.push('/signin')}>Login</button>
        </div>
      </header>

      {/* HERO */}
      <section className="explore-hero">
        <h1>Chuks Kitchen</h1>
        <p>Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
      </section>

      {/* SEARCH BAR */}
      <div className="explore-search-section">
        <div className="explore-search-bar">
          <span>🔍</span>
          <input
            type="text"
            placeholder="What are you craving for today?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* SIDEBAR NAVIGATION */}
      <div className="explore-sidebar">
        <h3>Menu Categories</h3>
        <div className="explore-category-nav">
          <button className="category-btn" onClick={() => handleCategoryClick('popular')}>
            Popular
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('jollof-entrees')}>
            Jollof Rice & Entrees
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('swallows-soups')}>
            Swallow & Soups
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('grills-sides')}>
            Grills & sides
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('beverages')}>
            Beverages
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('desserts')}>
            Desserts
          </button>
        </div>
      </div>

      <div className="explore-content">
        {/* POPULAR CATEGORIES */}
        <section className="explore-section" id="popular">
          <h2 className="explore-section-title">Popular</h2>
          <div className="popular-categories-grid">
            {popularCategories.map((category, idx) => (
              <div
                key={idx}
                className="category-card cursor-pointer"
                onClick={() => router.push(`/food-details/${category.id}`)}
              >
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-name">{category.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CHEF'S SPECIALS */}
        <section className="explore-section">
          <h2 className="explore-section-title">Chef's Specials</h2>
          <div className="food-grid">
            {specials.map((item) => (
              <div key={item.id} className="food-card cursor-pointer" onClick={() => router.push(`/food-details/${item.id}`)}>
                <img src={item.image} alt={item.name} className="food-image" />
                <div className="food-info">
                  <div className="food-name">{item.name}</div>
                  <div className="food-description">{item.description}</div>
                  <div className="food-footer">
                    <span className="food-price">₦{item.price.toLocaleString()}</span>
                    <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); router.push(`/food-details/${item.id}`); }}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JOLLOF RICE & ENTREES */}
        <section className="explore-section" id="jollof-entrees">
          <h2 className="explore-section-title">Jollof Rice & Entrees</h2>
          <div className="food-grid">
            {jollofItems.map((item) => (
              <div key={item.id} className="food-card cursor-pointer" onClick={() => router.push(`/food-details/${item.id}`)}>
                <img src={item.image} alt={item.name} className="food-image" />
                <div className="food-info">
                  <div className="food-name">{item.name}</div>
                  <div className="food-footer">
                    <span className="food-price">₦{item.price.toLocaleString()}</span>
                    <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); router.push(`/food-details/${item.id}`); }}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SWALLOW & SOUPS */}
        <section className="explore-section" id="swallows-soups">
          <h2 className="explore-section-title">Swallow & Soups</h2>
          <div className="food-grid">
            {swallowItems.map((item) => (
              <div key={item.id} className="food-card cursor-pointer" onClick={() => router.push(`/food-details/${item.id}`)}>
                <img src={item.image} alt={item.name} className="food-image" />
                <div className="food-info">
                  <div className="food-name">{item.name}</div>
                  <div className="food-footer">
                    <span className="food-price">₦{item.price.toLocaleString()}</span>
                    <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); router.push(`/food-details/${item.id}`); }}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GRILLS & SIDES */}
        <section className="explore-section" id="grills-sides">
          <h2 className="explore-section-title">Grills & Sides</h2>
          <div className="food-grid">
            {grillsItems.map((item) => (
              <div key={item.id} className="food-card cursor-pointer" onClick={() => router.push(`/food-details/${item.id}`)}>
                <img src={item.image} alt={item.name} className="food-image" />
                <div className="food-info">
                  <div className="food-name">{item.name}</div>
                  <div className="food-footer">
                    <span className="food-price">₦{item.price.toLocaleString()}</span>
                    <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); router.push(`/food-details/${item.id}`); }}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BEVERAGES */}
        <section className="explore-section" id="beverages">
          <h2 className="explore-section-title">Beverages</h2>
          <div className="food-grid">
            {beveragesItems.map((item) => (
              <div key={item.id} className="food-card cursor-pointer" onClick={() => router.push(`/food-details/${item.id}`)}>
                <img src={item.image} alt={item.name} className="food-image" />
                <div className="food-info">
                  <div className="food-name">{item.name}</div>
                  <div className="food-footer">
                    <span className="food-price">₦{item.price.toLocaleString()}</span>
                    <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); router.push(`/food-details/${item.id}`); }}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DESSERTS */}
        <section className="explore-section" id="desserts">
          <h2 className="explore-section-title">Desserts</h2>
          <div className="food-grid">
            {dessertsItems.map((item) => (
              <div key={item.id} className="food-card cursor-pointer" onClick={() => router.push(`/food-details/${item.id}`)}>
                <img src={item.image} alt={item.name} className="food-image" />
                <div className="food-info">
                  <div className="food-name">{item.name}</div>
                  <div className="food-footer">
                    <span className="food-price">₦{item.price.toLocaleString()}</span>
                    <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); router.push(`/food-details/${item.id}`); }}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="explore-footer">
        <div className="explore-footer-inner">
          <div className="explore-brand-block">
            <span className="brand">Chuks Kitchen</span>
            <p>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
          </div>

          <div className="explore-footer-col">
            <strong>Quick Links</strong>
            <a href="/home">Home</a>
            <a href="/explore">Explore</a>
            <a href="/my-orders">My Orders</a>
            <a href="/signin">Account</a>
            <a href="tel:+2348012345678">Contact</a>
          </div>

          <div className="explore-footer-col">
            <strong>Contact Us</strong>
            <div>+234 801 234 5678</div>
            <div>hello@chukskitchen.com</div>
            <div>123 Taste Blvd, Lagos, Nigeria</div>
          </div>

          <div className="explore-footer-col">
            <strong>Follow Us</strong>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <div className="explore-copyright">
          ©2024 Chuks Kitchen. All rights reserved.
        </div>
      </footer>

      {/* UP BUTTON */}
      <button
        className="up-btn show"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </div>
  );
}