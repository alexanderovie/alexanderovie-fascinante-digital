"use client";

import { useState, useEffect, useRef } from "react";
import type { JSX } from "react";

const features: {
  name: string;
  description: JSX.Element;
  svg: JSX.Element;
}[] = [
  {
    name: "Emails",
    description: (
      <ul className="space-y-1">
        {[
          "Send transactional emails",
          "DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)",
          "Webhook to receive & forward emails",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            ✅ {item}
          </li>
        ))}
        <li className="flex items-center gap-3 text-blue-600 font-medium">
          🚀 Time saved: 2 hours
        </li>
      </ul>
    ),
    svg: (
      <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeWidth={1.5} d="M16.5 12a4.5..." />
      </svg>
    ),
  },
  // ... (rest of features igual, puedes copiar la estructura)
];

const FeaturesListicle = () => {
  const featuresEndRef = useRef<null>(null);
  const [featureSelected, setFeatureSelected] = useState<string>(features[0].name);
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(f => f.name === featureSelected);
        setFeatureSelected(features[(index + 1) % features.length].name);
      }
    }, 5000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) clearInterval(interval);
      },
      { threshold: 0.5 }
    );

    if (featuresEndRef.current) observer.observe(featuresEndRef.current);
    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-sm font-mono text-blue-600 mb-3">
          const launch_time = "Today";
        </p>
        <h2 className="text-4xl font-extrabold mb-6">Supercharge your app instantly</h2>
        <p className="text-gray-600 text-lg mb-10">
          Login users, process payments and send emails at lightspeed.
        </p>

        <div className="grid grid-cols-3 sm:flex gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.name}
              onClick={() => {
                setHasClicked(true);
                setFeatureSelected(feature.name);
              }}
              className={`flex flex-col items-center gap-2 p-2 transition ${
                featureSelected === feature.name
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {feature.svg}
              <span>{feature.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">
            {features.find((f) => f.name === featureSelected)?.name}
          </h3>
          <div className="text-gray-600">
            {features.find((f) => f.name === featureSelected)?.description}
          </div>
        </div>
      </div>

      <div ref={featuresEndRef} className="opacity-0 h-px"></div>
    </section>
  );
};

export default FeaturesListicle;