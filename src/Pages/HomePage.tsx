import Message from "../app/Components/Message";
import TopNav from "../app/Components/TopNav";
import NavBar from "../app/Components/NavBar";
import Footer from "../app/Components/Footer";
import Reminder from "../app/Components/Reminder";
import Card from "../app/Components/Card";
import Updates from "../app/Components/Updates";

function Home() {
  return (
    <div>
      <TopNav />
      <NavBar />
      <div
        className="row m-5"
        style={{
          backgroundColor: "#F0F0F0",
          boxShadow: "20px 20px 1px 1px #013F8A",
          borderRadius: 10,
          padding: 10
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem"
          }}
        >
          <Message
            msg={"Select a hospital location to view a detailed layout"}
          />
          <button
            type="button"
            className="btn btn-primary btn-lg "
            style={{
              backgroundColor: "#0078B6",
            }}
          >
            Button
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card
                address={"3030 Birchmount Rd, Scarborough, ON M1W 3W3, Canada"}
                image={"./src/assets/birchmount.png"}
                hospitalName={"Birchmount Hospital"}
              />
            </div>
            <div className="col-sm">
              <Card
                address={"2867 Ellesmere Rd, Scarborough, ON M1E 4B9, Canada"}
                image={"./src/assets/centenary.png"}
                hospitalName={"Centenary Hospital"}
              />
            </div>
            <div className="col-sm">
              <Card
                address={"3050 Lawrence Ave E, Scarborough, ON M1P 2V5, Canada"}
                image={"./src/assets/general.png"}
                hospitalName={"General Hospital"}
              />
            </div>
          </div>
        </div>
      </div>
      <Updates />
      <Footer />
    </div>
  );
}

export default Home;
