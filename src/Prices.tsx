import React, { useRef, useState, useEffect } from "react";
import PricingCard from "./PricingCard";

const cards = [
  {
    plan: "Standard",
    price: "100",
    features: ["50,000 Requests", "4 contributors", "Up to 3 GB storage space"],
  },
  {
    plan: "Pro",
    price: "200",
    features: ["100,000 Requests", "7 contributors", "Up to 6 GB storage space"],
  },
  {
    plan: "Expert",
    price: "500",
    features: ["200,000 Requests", "11 contributors", "Up to 10 GB storage space"],
  },
];

const Prices: React.FC = () => {
  const [focused, setFocused] = useState(1); // Default to Pro
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    console.info(`Current selected plan: ${cards[focused].plan}`);
  }, [focused]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setFocused((prev) => {
        const next = prev === 0 ? cards.length - 1 : prev - 1;
        setTimeout(() => cardRefs[next].current?.focus(), 0);
        return next;
      });
    } else if (e.key === "ArrowRight") {
      setFocused((prev) => {
        const next = prev === cards.length - 1 ? 0 : prev + 1;
        setTimeout(() => cardRefs[next].current?.focus(), 0);
        return next;
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-900 py-10 min-h-[500px] gap-2">
      {cards.map((card, idx) => (
        <div
          key={card.plan}
          ref={cardRefs[idx]}
          tabIndex={focused === idx ? 0 : -1}
          onFocus={() => setFocused(idx)}
          onKeyDown={handleKeyDown}
          className="outline-none"
        >
          <PricingCard
            plan={card.plan}
            price={card.price}
            features={card.features}
            isFeatured={focused === idx}
          />
        </div>
      ))}
    </div>
  );
};

export default Prices; 