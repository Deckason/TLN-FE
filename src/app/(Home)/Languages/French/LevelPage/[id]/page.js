// import { useRouter } from "next/router";

const DynamicPage = ({ params }) => {
  console.log(params.id);
  return <div>page</div>;
};

export default DynamicPage;
