export const apiLink =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://nano-builds.vercel.app";
