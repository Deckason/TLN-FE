import HomeFooter from "@/Components/HomeComp/HomeFooter";
import Nav from "@/Utilities/Nav";

const Homelayout = ({ children }) => {
  return (
    <div className="">
      <Nav />
      {children}
      {/* <HomeFooter /> */}
    </div>
  );
};

export default Homelayout;
