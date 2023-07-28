import error from "@/assets/images/404.png";
import { Button, theme } from "antd";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  const {
    token: { colorError },
  } = theme.useToken();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: colorError }}>404 - Page Not Found</h1>
      <Image src={error} alt="404" width={500} height={500} />
      <Button>
        <Link href="/">Go Back to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
