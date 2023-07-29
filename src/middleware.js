export { default } from "next-auth/middleware";

export const config = { matcher: ["/pc-builder", "/pc-builder/:path*"] };
