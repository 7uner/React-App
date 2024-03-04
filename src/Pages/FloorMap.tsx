import Message from "../app/Components/Message";
import TopNav from "../app/Components/TopNav";
import NavBar from "../app/Components/NavBar";
import FloorGroup from "../app/Components/FloorGroup";
import FloorMenu from "../app/Components/FloorMenu";
import Footer from "../app/Components/Footer";
import LatestCarousel from "../app/Components/LatestCarousel";

function FloorMap() {
  return (
    <div>
      <div>
        <TopNav />
        <NavBar />
        <FloorGroup />
        
        <LatestCarousel />
        <Footer />
      </div>
    </div>
  );
}

export default FloorMap;
