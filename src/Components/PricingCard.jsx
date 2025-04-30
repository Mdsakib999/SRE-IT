import React from "react";

const plans = [
  {
    id: 1,
    name: "Starter",
    description:
      "Build audience trust with impactful, value-driven content that engages and informs.",
    price: "$19/mo",
    features: ["1 Project", "100 MB Storage", "Basic Support"],
    cta: "Get Started",
    popular: false,
  },
  {
    id: 2,
    name: "Pro",
    description:
      "Build audience trust with impactful, value-driven content that engages and informs.",
    price: "$49/mo",
    features: [
      "5 Projects",
      "500 MB Storage",
      "Priority Support",
      "Custom Domain",
    ],
    cta: "Upgrade Now",
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    description:
      "Build audience trust with impactful, value-driven content that engages and informs.",
    price: "$99/mo",
    features: [
      "Unlimited Projects",
      "5 GB Storage",
      "24/7 Support",
      "Dedicated Account Manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-8">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative bg-white rounded-2xl shadow-md p-6 w-full max-w-xs flex flex-col justify-between transition-transform transform hover:scale-105 ${
            plan.popular
              ? "border-4 border-orange-400"
              : "border border-gray-200"
          }`}
        >
          {plan.popular && (
            <span className="absolute top-0 right-0 -mt-3 -mr-3 bg-orange-400 text-white text-xs uppercase font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
          )}

          <div>
            <div className="flex flex-col border bg-orange-100 p-3 rounded-md items-center">
              <h3 className="text-2xl font-md mb-4">{plan.name}</h3>
              <p className="text-gray-600 text-center">{plan.description}</p>
              <p className="text-4xl font-bold mb-6 pt-4">{plan.price}</p>
              <button className="mt-auto bg-orange-400 text-white font-semibold py-2 rounded-full hover:bg-orange-600 transition-colors w-52">
                {plan.cta}
              </button>
            </div>
            <p className="text-xl font-bold py-2">Features</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
