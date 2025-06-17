import React from "react";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  // Colors
  const bgClass = isFeatured ? "bg-[#34495e]" : "bg-white";
  const textClass = isFeatured ? "text-white" : "text-[#34495e]";
  const borderClass = isFeatured ? "border-white divide-white" : "border-[#34495e] divide-[#34495e]";

  return (
    <div
      tabIndex={0}
      className={`
        flex flex-col justify-between rounded-lg shadow-md
        px-4 m-2 w-full max-w-xs
        ${isFeatured ? "py-10 scale-105 z-10" : "py-6"}
        ${bgClass} ${textClass}
        transition-all duration-200
        outline-none
        focus:ring-4 focus:ring-blue-400
        hover:shadow-2xl
        hover:-translate-y-2
        items-center
        text-center
      `}
      aria-label={`${plan} plan`}
    >
      {/* Header */}
      <div className={`w-full pb-4 border-b border-solid ${borderClass}`}>
        <h3 className={`text-sm font-semibold mb-2 w-full ${textClass}`}>{plan}</h3>
        <div className={`text-4xl font-bold w-full ${textClass}`}>
          <span>${price}</span>
        </div>
      </div>
      {/* Features */}
      <ul className={`w-full divide-y divide-solid ${borderClass}`}>
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={`text-sm w-full py-2 ${textClass}`}
          >
            {feature}
          </li>
        ))}
      </ul>
      {/* Footer */}
      <div className={`w-full pt-6 border-t border-solid ${borderClass}`}>
        <div className="w-full text-center text-base font-semibold select-none">
          SUBSCRIBE
        </div>
      </div>
    </div>
  );
};

export default PricingCard; 