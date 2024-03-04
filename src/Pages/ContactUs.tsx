import Message from "../app/Components/Message";
import TopNav from "../app/Components/TopNav";
import NavBar from "../app/Components/NavBar";
import LatestCarousel from "../app/Components/LatestCarousel";
import Footer from "../app/Components/Footer";
import ContactInfo from "../app/Components/ContactInfo";
import Reminder from "../app/Components/Reminder";

function ContactUs() {
  return (
    <div>
      <TopNav />
      <NavBar />
      <div>
        <div className="row m-5">
          <div className="col-4">
            <Reminder />
          </div>
          <div className="col-8">
            <Message
              msg={
                "Feel free to leave a suggestion in the box below. This website is not to provide answers to medical questions nor is affiliated with SHN."
              }
            ></Message>
            <ContactInfo
              firstName={"First Name"}
              lastName={"Last Name"}
              email={"Enter your email"}
              comment={"Enter a comment, suggestion, or question"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
