import { ConfigProps } from "./types/config";

const config = {
  // Nombre de la app mostrado en varias partes
  appName: "Fascinante Digital",

  // Descripción corta para SEO y meta tags
  appDescription:
    "We help local businesses shine online. Get listed, get found, grow your presence.",

  // Dominio sin https ni barra al final
  domainName: "fascinantedigital.com",

  crisp: {
    // Si usas Crisp, coloca tu Website ID aquí. Si no, puedes dejarlo vacío.
    id: "",
    onlyShowOnRoutes: ["/"],
  },

  stripe: {
    plans: [
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        name: "Starter",
        description: "Perfect for new or small businesses",
        price: 99,
        priceAnchor: 149,
        features: [
          { name: "Local listings setup" },
          { name: "Business profile audit" },
          { name: "Google Search presence check" },
          { name: "Basic support" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        isFeatured: true,
        name: "Advanced",
        description: "For growing businesses needing more exposure",
        price: 149,
        priceAnchor: 299,
        features: [
          { name: "All Starter features" },
          { name: "Multi-directory submission" },
          { name: "Monthly performance reports" },
          { name: "Priority support" },
        ],
      },
    ],
  },

  aws: {
    bucket: "fascinante-digital-bucket",
    bucketUrl: `https://fascinante-digital-bucket.s3.amazonaws.com/`,
    cdn: "https://cdn.fascinantedigital.com/",
  },

  resend: {
    fromNoReply: `Fascinante Digital <noreply@fascinantedigital.com>`,
    fromAdmin: `Support at Fascinante Digital <support@fascinantedigital.com>`,
    supportEmail: "support@fascinantedigital.com",
  },

  colors: {
    // Color principal de tu branding (azul)
    main: "#1D4ED8",
  },

  auth: {
    loginUrl: "/signin",
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;