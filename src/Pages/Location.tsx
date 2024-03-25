import Message from "../app/Components/Message";
import TopNav from "../app/Components/TopNav";
import NavBar from "../app/Components/NavBar";
import Footer from "../app/Components/Footer";
import Card from "../app/Components/Card";
import FloorMenuBirchmount from "./FloorMenuBirchmount";
import FloorMenuCentenary from "./FloorMenuCentenary";
import FloorMenuGeneral from "./FloorMenuGeneral";

function Location() {
  let hospitalName = "floorPlanBirch";
  let hospitalLink = hospitalName;
  return (
    <div>
      <div>
        <TopNav />
        <NavBar />
        <Message msg={"What specific location are you looking for today?"} />
        <div className="container-lg border">
          <div className="row">
            <div className="col-3 ">
              <Card
                address={"Lobby"}
                image={"./src/assets/toronto (1).jpg"}
                hospitalName={""}
                link={hospitalLink}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Check in"}
                image={"./src/assets/toronto (2).jpg"}
                hospitalName={""}
                link={hospitalLink}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Washroom"}
                image={"./src/assets/toronto (3).jpg"}
                hospitalName={""}
                link={hospitalLink}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Doctor's Office"}
                image={"./src/assets/toronto (4).jpg"}
                hospitalName={""}
                link={hospitalLink}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Card
                address={"Labs"}
                image={"./src/assets/toronto (5).jpg"}
                hospitalName={""}
                link={hospitalLink}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Cafeteria"}
                image={"./src/assets/toronto (6).jpg"}
                hospitalName={""}
                link={hospitalLink}
              />
            </div>
            <div className="col-3">
              <Card
                address={"EMS Room"}
                image={"./src/assets/toronto (7).jpg"}
                hospitalName={""}
                link={hospitalLink}
              />
            </div>
            <div className="col-3">
              <Card
                address={"Bed Rooms"}
                image={"./src/assets/toronto (8).jpg"}
                hospitalName={""}
                link={hospitalLink}
              />
            </div>
          </div>
        </div>
        <div className="align-items-center align-content-center justify-content-center text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg "
            style={{ backgroundColor: "#0078B6" }}
          >
            <a className="nav-link" href={hospitalLink}>
              View Map
            </a>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Location;
