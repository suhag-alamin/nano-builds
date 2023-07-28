import RootLayout from "@/components/Layouts/RootLayout";

const PCBuilder = () => {
  return (
    <div>
      <h1>PC Builder</h1>
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
