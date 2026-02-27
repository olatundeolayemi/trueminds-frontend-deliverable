'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import ResponsiveHeader from '@/components/responsive-header';
import ResponsiveFooter from '@/components/responsive-footer';

const foodItems: Record<string, any> = {
  // From Home Page Categories
  '101': {
    id: '101',
    name: 'Classic Jollof Rice',
    price: 2500,
    image: '/image/jollof-rice-fried-chicken-1.png',
    description: 'Our signature Jollof rice cooked to perfection with aromatic spices. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.',
    tags: ['Mildly spicy', 'Vegetarian option available', 'View Allergies'],
    proteins: [
      { name: 'Fried Chicken', extra: 0, default: true },
      { name: 'Grilled Fish', extra: 500 },
      { name: 'Beef', extra: 700 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },
  '102': {
    id: '102',
    name: 'Jollof with Beef',
    price: 3200,
    image: '/image/jollof-rice-fried-chicken-3.png',
    description: 'Perfectly cooked Jollof rice served with tender, seasoned beef. A delicious protein-rich meal.',
    tags: ['Mildly spicy', 'Contains beef', 'View Allergies'],
    proteins: [
      { name: 'Beef', extra: 0, default: true },
      { name: 'Grilled Fish', extra: 500 },
      { name: 'Fried Chicken', extra: 300 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },
  '103': {
    id: '103',
    name: 'Jollof with Shrimp',
    price: 4000,
    image: '/image/jollof-rice-smoked-chicken-2.png',
    description: 'Premium Jollof rice with succulent shrimp. A seafood delight perfect for special occasions.',
    tags: ['Mildly spicy', 'Contains seafood', 'View Allergies'],
    proteins: [
      { name: 'Shrimp', extra: 0, default: true },
      { name: 'Mixed Seafood', extra: 200 },
      { name: 'Fish', extra: 300 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },

  // From Home Page Specials and Explore Page
  'jollof-fried-chicken-1': {
    id: 'jollof-fried-chicken-1',
    name: 'Jollof Rice with Fried Chicken',
    price: 2800,
    image: '/image/jollof-rice-fried-chicken-1.png',
    description: 'Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken.',
    tags: ['Mildly spicy', 'Vegetarian option available', 'View Allergies'],
    proteins: [
      { name: 'Fried Chicken', extra: 0, default: true },
      { name: 'Grilled Fish', extra: 500 },
      { name: 'Beef', extra: 700 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },
  'jollof-fried-chicken-2': {
    id: 'jollof-fried-chicken-2',
    name: 'Jollof Rice with Fried Chicken',
    price: 2800,
    image: '/image/jollof-rice-fried-chicken-2.png',
    description: 'Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken.',
    tags: ['Mildly spicy', 'Vegetarian option available', 'View Allergies'],
    proteins: [
      { name: 'Fried Chicken', extra: 0, default: true },
      { name: 'Grilled Fish', extra: 500 },
      { name: 'Beef', extra: 700 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },
  'jollof-fried-chicken-3': {
    id: 'jollof-fried-chicken-3',
    name: 'Jollof Rice & Fried Chicken',
    price: 4500,
    image: '/image/jollof-rice-fried-chicken-3.png',
    description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
    tags: ['Mildly spicy', 'Vegetarian option available', 'View Allergies'],
    proteins: [
      { name: 'Fried Chicken', extra: 0, default: true },
      { name: 'Grilled Fish', extra: 500 },
      { name: 'Beef', extra: 700 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },
  'jollof-fried-chicken-4': {
    id: 'jollof-fried-chicken-4',
    name: 'Jollof Rice & Fried Chicken',
    price: 5500,
    image: '/image/jollof-rice-fried-chicken-3.png',
    description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
    tags: ['Mildly spicy', 'Vegetarian option available', 'View Allergies'],
    proteins: [
      { name: 'Fried Chicken', extra: 0, default: true },
      { name: 'Grilled Fish', extra: 500 },
      { name: 'Beef', extra: 700 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },
  'jollof-fried-chicken-5': {
    id: 'jollof-fried-chicken-5',
    name: 'Jollof Rice & Fried Chicken',
    price: 5500,
    image: '/image/jollof-rice-fried-chicken-2.png',
    description: 'Our signature jollof rice cooked to perfection, served with succulent fried chicken.',
    tags: ['Mildly spicy', 'Vegetarian option available', 'View Allergies'],
    proteins: [
      { name: 'Fried Chicken', extra: 0, default: true },
      { name: 'Grilled Fish', extra: 500 },
      { name: 'Beef', extra: 700 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },
  'jollof-smoked-chicken': {
    id: 'jollof-smoked-chicken',
    name: 'Jollof Rice & Smoked Chicken',
    price: 5500,
    image: '/image/jollof-rice-smoked-chicken-2.png',
    description: 'Our signature Jollof rice, cooked to perfection, served with smoked chicken and spiced caramelized onions.',
    tags: ['Mildly spicy', 'Smoked protein', 'View Allergies'],
    proteins: [
      { name: 'Smoked Chicken', extra: 0, default: true },
      { name: 'Grilled Fish', extra: 500 },
      { name: 'Beef', extra: 700 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 700 },
      { name: 'Coleslaw', extra: 500 },
      { name: 'Extra Pepper Sauce', extra: 300 },
    ],
  },

  // Soups & Swallows from both pages
  '201': {
    id: '201',
    name: 'Eba & Egusi Soup',
    price: 2000,
    image: '/image/eba-egusi-soup-goat-meat.png',
    description: 'Smooth eba served with rich Egusi soup and goat meat.',
    tags: ['Spicy', 'Contains meat', 'View Allergies'],
    proteins: [
      { name: 'Goat Meat', extra: 0, default: true },
      { name: 'Beef', extra: 200 },
      { name: 'Assorted Meat', extra: 300 },
    ],
    sides: [
      { name: 'Extra Soup', extra: 500 },
      { name: 'Pepper, extra', extra: 200 },
    ],
  },
  '202': {
    id: '202',
    name: 'Pounded Yam & Edikaikong',
    price: 2500,
    image: '/image/pounded-yam-edikaikong.png',
    description: 'Perfectly pounded yam served with rich Edikaikong soup.',
    tags: ['Customizable', 'Vegetarian option', 'View Allergies'],
    proteins: [
      { name: 'Vegetable Option', extra: 0, default: true },
      { name: 'Beef', extra: 400 },
      { name: 'Fish', extra: 500 },
    ],
    sides: [
      { name: 'Okro Soup', extra: 300 },
      { name: 'Egusi Soup', extra: 400 },
    ],
  },
  '203': {
    id: '203',
    name: 'Amala & Ewedu+Gbegiri Soup',
    price: 2200,
    image: '/image/amala-ewedu-with-gbegiri.png',
    description: 'Smooth amala served with ewedu and gbegiri soup, a perfect combination of flavors.',
    tags: ['Mildly spicy', 'Contains vegetables', 'View Allergies'],
    proteins: [
      { name: 'Beef', extra: 0, default: true },
      { name: 'Fish', extra: 300 },
      { name: 'Assorted Meat', extra: 400 },
    ],
    sides: [
      { name: 'Extra Soup', extra: 200 },
      { name: 'Pepper sauce', extra: 200 },
    ],
  },
  'egusi-pounded-yam': {
    id: 'egusi-pounded-yam',
    name: 'Egusi Soup & Pounded Yam',
    price: 5500,
    image: '/image/egusi-soup-pounded-yam.png',
    description: 'Rich and hearty Egusi soup with assorted meat, served with smooth pounded yam.',
    tags: ['Spicy', 'Contains meat', 'View Allergies'],
    proteins: [
      { name: 'Assorted Meat', extra: 0, default: true },
      { name: 'Seafood Mix', extra: 500 },
      { name: 'Beef only', extra: 300 },
    ],
    sides: [
      { name: 'Extra Pepper', extra: 200 },
      { name: 'Gari swallow', extra: 300 },
      { name: 'Fufu', extra: 400 },
    ],
  },
  'tilapia-pepper-soup': {
    id: 'tilapia-pepper-soup',
    name: 'Spicy Tilapia Pepper Soup',
    price: 4500,
    image: '/image/spicy-tilapia-peppersoup.png',
    description: 'A comforting and spicy soup with tender tilapia fish, herbs, and aromatic spices.',
    tags: ['Spicy', 'Contains Fish', 'View Allergies'],
    proteins: [
      { name: 'Tilapia Fish', extra: 0, default: true },
      { name: 'Catfish', extra: 300 },
      { name: 'Mixed Seafood', extra: 500 },
    ],
    sides: [
      { name: 'Fufu', extra: 500 },
      { name: 'Gari', extra: 300 },
      { name: 'Bread', extra: 200 },
    ],
  },

  // Grills & Sides from both pages
  '301': {
    id: '301',
    name: 'Peppered Snail',
    price: 3500,
    image: '/image/peppered-snail.png',
    description: 'Tender snails cooked in a spicy, aromatic pepper sauce.',
    tags: ['Spicy', 'Specialty', 'View Allergies'],
    proteins: [
      { name: 'Snail', extra: 0, default: true },
      { name: 'Shrimp', extra: 500 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 400 },
      { name: 'Rice', extra: 300 },
    ],
  },
  '302': {
    id: '302',
    name: 'Grilled Tilapia Fish',
    price: 4000,
    image: '/image/grilled-tilapia-fish.png',
    description: 'Perfectly grilled tilapia fish with charred skin and aromatic spices.',
    tags: ['Grilled', 'Healthy', 'View Allergies'],
    proteins: [
      { name: 'Tilapia Fish', extra: 0, default: true },
      { name: 'Catfish', extra: 200 },
      { name: 'Mixed Fish', extra: 300 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 500 },
      { name: 'Pepper Sauce', extra: 200 },
    ],
  },
  '303': {
    id: '303',
    name: 'Grilled Beef Skewers',
    price: 3800,
    image: '/image/grills-bbq.png',
    description: 'Succulent beef skewers grilled to perfection with our signature spice blend.',
    tags: ['Grilled', 'Premium', 'View Allergies'],
    proteins: [
      { name: 'Beef', extra: 0, default: true },
      { name: 'Chicken', extra: 100 },
    ],
    sides: [
      { name: 'Fried Plantain', extra: 500 },
      { name: 'Pepper Sauce', extra: 200 },
    ],
  },

  // Beverages
  '401': {
    id: '401',
    name: 'Fresh Zobo Drink',
    price: 1200,
    image: '/image/jollof-delight.png',
    description: 'Refreshing traditional zobo drink made from hibiscus flowers.',
    tags: ['Refreshing', 'Traditional', 'Vegan'],
    proteins: [{ name: 'Standard', extra: 0, default: true }],
    sides: [
      { name: 'Extra Sugar', extra: 0 },
      { name: 'Ice pack', extra: 100 },
    ],
  },
  '402': {
    id: '402',
    name: 'Ginger Juice',
    price: 1000,
    image: '/image/jollof-delight.png',
    description: 'Fresh ginger juice with natural spice and warmth.',
    tags: ['Healthy', 'Traditional', 'Natural'],
    proteins: [{ name: 'Standard', extra: 0, default: true }],
    sides: [
      { name: 'Extra ginger', extra: 100 },
      { name: 'Ice pack', extra: 100 },
    ],
  },
  '403': {
    id: '403',
    name: 'Palm Wine',
    price: 1500,
    image: '/image/jollof-delight.png',
    description: 'Traditional Nigerian palm wine, fresh and authentic.',
    tags: ['Traditional', 'Premium', 'Adult beverage'],
    proteins: [{ name: 'Standard', extra: 0, default: true }],
    sides: [
      { name: 'No ice', extra: 0 },
      { name: 'With ice', extra: 0 },
    ],
  },

  // Desserts
  '501': {
    id: '501',
    name: 'Puff Puff',
    price: 800,
    image: '/image/sweet-treats-1.png',
    description: 'Golden, fluffy puff puff dusted with powdered sugar.',
    tags: ['Sweet', 'Traditional', 'Vegan'],
    proteins: [{ name: 'Regular', extra: 0, default: true }],
    sides: [
      { name: 'Extra sugar', extra: 0 },
      { name: 'Chocolate dip', extra: 200 },
    ],
  },
  '502': {
    id: '502',
    name: 'Chin Chin',
    price: 1000,
    image: '/image/sweet-treats-1.png',
    description: 'Crispy, crunchy chin chin snacks.',
    tags: ['Crispy', 'Snack', 'Vegan'],
    proteins: [{ name: 'Regular', extra: 0, default: true }],
    sides: [{ name: 'Extra pack', extra: 300 }],
  },
  '503': {
    id: '503',
    name: 'Traditional Honey Cake',
    price: 1500,
    image: '/image/sweet-treats-1.png',
    description: 'Moist traditional honey cake with rich, golden flavor.',
    tags: ['Sweet', 'Premium', 'Honey'],
    proteins: [{ name: 'Regular slice', extra: 0, default: true }],
    sides: [
      { name: 'Extra large slice', extra: 500 },
      { name: 'Whipped cream', extra: 300 },
    ],
  },
};

export default function FoodDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params Promise using React.use()
  const { id } = use(params);
  const router = useRouter();
  const { addToCart } = useCart();

  // Add debugging to see what ID is being passed
  useEffect(() => {
    console.log("========== FOOD DETAILS PAGE DEBUG ==========");
    console.log("1. URL ID parameter:", id);
    console.log("2. ID type:", typeof id);
    console.log("3. Does ID exist in foodItems?", foodItems.hasOwnProperty(id));
    console.log("4. Food item found:", foodItems[id]);
    console.log("==============================================");
  }, [id]);

  const food = foodItems[id];
  
  // If food not found, show error or redirect
  if (!food) {
    return (
      <div className="fd-page">
        <ResponsiveHeader />
        <div className="fd-container">
          <div className="fd-error">
            <h2>Item Not Found</h2>
            <p>Sorry, the food item you're looking for doesn't exist.</p>
            <button onClick={() => router.push('/explore')} className="fd-error-btn">
              Browse Menu
            </button>
          </div>
        </div>
        <ResponsiveFooter />
      </div>
    );
  }

  const defaultProtein = food.proteins.find((p: any) => p.default)?.name || food.proteins[0]?.name || '';

  const [selectedProtein, setSelectedProtein] = useState(defaultProtein);
  const [selectedSides, setSelectedSides] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      quantity,
      description: food.description,
      protein: selectedProtein,
      extras: selectedSides,
      specialInstructions: instructions,
    };
    console.log("[v0] Adding to cart:", cartItem);
    addToCart(cartItem);
    console.log("[v0] Cart item added, navigating to /my-orders");
    router.push('/my-orders');
  };

  return (
    <div className="fd-page">
      <ResponsiveHeader />

      <div className="fd-container">
        <div className="fd-layout">
          <div className="fd-image-col">
            <img src={food.image} alt={food.name} className="fd-image" />
          </div>

          <div className="fd-details-col">
            <button onClick={() => router.back()} className="fd-close" aria-label="Go back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h1 className="fd-name">{food.name}</h1>
            <p className="fd-price">{'\u20A6'}{food.price.toLocaleString()}</p>
            <p className="fd-desc">{food.description}</p>

            <div className="fd-tags">
              {food.tags.map((tag: string) => (
                <span key={tag} className="fd-tag">{'○'} {tag}</span>
              ))}
            </div>

            <div className="fd-section">
              <h3 className="fd-section-title">Choose Your Protein</h3>
              {food.proteins.map((protein: any) => (
                <label key={protein.name} className="fd-option">
                  <input
                    type="radio"
                    name="protein"
                    value={protein.name}
                    checked={selectedProtein === protein.name}
                    onChange={(e) => setSelectedProtein(e.target.value)}
                    className="fd-radio"
                  />
                  <span className="fd-option-name">{protein.name}</span>
                  {protein.default && <span className="fd-default">(Default)</span>}
                  {protein.extra > 0 && <span className="fd-extra">{'+\u20A6'}{protein.extra}</span>}
                </label>
              ))}
            </div>

            <div className="fd-section">
              <h3 className="fd-section-title">Extra Sides (Optional)</h3>
              {food.sides.map((side: any) => (
                <label key={side.name} className="fd-option">
                  <input
                    type="checkbox"
                    checked={selectedSides.includes(side.name)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedSides([...selectedSides, side.name]);
                      } else {
                        setSelectedSides(selectedSides.filter((s) => s !== side.name));
                      }
                    }}
                    className="fd-checkbox"
                  />
                  <span className="fd-option-name">{side.name}</span>
                  <span className="fd-extra">{'+\u20A6'}{side.extra}</span>
                </label>
              ))}
            </div>

            <div className="fd-section">
              <h3 className="fd-section-title">Special Instructions</h3>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="E.g no onion, extra spice..."
                className="fd-textarea"
              />
            </div>

            <div className="fd-actions">
              <div className="fd-qty">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="fd-qty-btn" aria-label="Decrease quantity">{'\u2212'}</button>
                <span className="fd-qty-num">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="fd-qty-btn" aria-label="Increase quantity">+</button>
              </div>
              <button onClick={handleAddToCart} className="fd-add-btn">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveFooter />

      <style>{`
        .fd-page {
          min-height: 100vh;
          background: #faf7f5;
          display: flex;
          flex-direction: column;
        }
        .fd-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 24px;
          flex: 1;
        }
        .fd-layout {
          display: flex;
          gap: 40px;
        }
        .fd-image-col {
          flex: 0 0 45%;
        }
        .fd-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 12px;
        }
        .fd-details-col {
          flex: 1;
        }
        .fd-close {
          background: none;
          border: none;
          cursor: pointer;
          color: #999;
          padding: 4px;
          margin-bottom: 12px;
          transition: color 0.2s;
        }
        .fd-close:hover {
          color: #333;
        }
        .fd-name {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        .fd-price {
          font-size: 28px;
          font-weight: 700;
          color: #FF7A18;
          margin-bottom: 12px;
        }
        .fd-desc {
          color: #555;
          line-height: 1.6;
          margin-bottom: 16px;
          font-size: 15px;
        }
        .fd-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
        }
        .fd-tag {
          font-size: 13px;
          color: #FF7A18;
        }
        .fd-section {
          margin-bottom: 24px;
        }
        .fd-section-title {
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }
        .fd-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .fd-option:hover {
          background: #fff5ee;
        }
        .fd-radio, .fd-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #FF7A18;
          flex-shrink: 0;
        }
        .fd-option-name {
          flex: 1;
          font-size: 15px;
          color: #333;
        }
        .fd-default {
          font-size: 13px;
          color: #999;
        }
        .fd-extra {
          font-size: 14px;
          color: #FF7A18;
          font-weight: 600;
        }
        .fd-textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          height: 80px;
          font-size: 14px;
          resize: vertical;
          font-family: inherit;
        }
        .fd-textarea:focus {
          outline: none;
          border-color: #FF7A18;
          box-shadow: 0 0 0 2px rgba(255,122,24,0.15);
        }
        .fd-actions {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-top: 8px;
        }
        .fd-qty {
          display: flex;
          align-items: center;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          overflow: hidden;
        }
        .fd-qty-btn {
          background: none;
          border: none;
          padding: 10px 16px;
          cursor: pointer;
          font-size: 18px;
          color: #333;
          transition: background 0.15s;
        }
        .fd-qty-btn:hover {
          background: #f5f5f5;
        }
        .fd-qty-num {
          padding: 10px 20px;
          font-size: 16px;
          font-weight: 600;
        }
        .fd-add-btn {
          flex: 1;
          background: #FF7A18;
          color: #fff;
          padding: 14px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .fd-add-btn:hover {
          background: #e86a0a;
        }

        .fd-error {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .fd-error h2 {
          font-size: 24px;
          color: #333;
          margin-bottom: 12px;
        }

        .fd-error p {
          color: #666;
          margin-bottom: 24px;
        }

        .fd-error-btn {
          background: #FF7A18;
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .fd-error-btn:hover {
          background: #e86a0a;
        }

        @media (max-width: 768px) {
          .fd-container {
            padding: 20px 16px;
          }
          .fd-layout {
            flex-direction: column;
            gap: 24px;
          }
          .fd-image-col {
            flex: none;
          }
          .fd-image {
            height: 280px;
            border-radius: 10px;
          }
          .fd-name {
            font-size: 24px;
          }
          .fd-price {
            font-size: 24px;
          }
          .fd-desc {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .fd-container {
            padding: 16px 12px;
          }
          .fd-image {
            height: 220px;
            border-radius: 8px;
          }
          .fd-name {
            font-size: 20px;
          }
          .fd-price {
            font-size: 22px;
          }
          .fd-tags {
            gap: 8px;
          }
          .fd-tag {
            font-size: 12px;
          }
          .fd-option {
            padding: 8px 10px;
            gap: 8px;
          }
          .fd-option-name {
            font-size: 14px;
          }
          .fd-actions {
            flex-direction: column;
            gap: 12px;
          }
          .fd-qty {
            width: 100%;
            justify-content: center;
          }
          .fd-add-btn {
            width: 100%;
            padding: 14px;
          }
        }

        @media (max-width: 360px) {
          .fd-image {
            height: 180px;
          }
          .fd-name {
            font-size: 18px;
          }
          .fd-price {
            font-size: 20px;
          }
          .fd-section-title {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}