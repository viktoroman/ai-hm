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
  const borderColor = isFeatured ? "white" : "[#34495e]";
  const textColor = isFeatured ? "white" : "[#34495e]";
  const bgColor = isFeatured ? "[#34495e]" : "white";

  return (
    <div
      tabIndex={0}
      className={`
        flex flex-col justify-between rounded-lg shadow-md
        px-4 w-full max-w-xs
        ${isFeatured ? "py-10 scale-105 z-10" : "py-6"}
        bg-${bgColor} text-${textColor}
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
      <div className={`w-full pb-4 border-b border-solid border-${borderColor}`}>
        <h3 className={`text-sm font-semibold mb-2 w-full text-${textColor}`}>{plan}</h3>
        <div className={`text-4xl font-bold w-full text-${textColor}`}>
          <span>${price}</span>
        </div>
      </div>
      {/* Features */}
      <ul className={`w-full divide-y divide-solid divide-${borderColor}`}>
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={`text-sm w-full py-2 text-${textColor}`}
          >
            {feature}
          </li>
        ))}
      </ul>
      {/* Footer */}
      <div className={`w-full pt-6 border-t border-solid border-${borderColor}`}>
        <div className="w-full text-center text-base font-semibold select-none">
          SUBSCRIBE
        </div>
      </div>
    </div>
  );
};

export default PricingCard; 