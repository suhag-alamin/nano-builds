export const apiLink =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://nextjs-ecommerce-psi.vercel.app";
