import Head from "next/head";

const Header = ({
  title = "NanoBuilds: Crafting Precision, Powering Innovation",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Developed by Suhag Al Amin" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
