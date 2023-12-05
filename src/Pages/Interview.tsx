import Message from "../Components/Message";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Interview() {
  let message = "Welcome to North York General Hospital";
  let interview = "here you can see the interviwes of our patients";
  return (
    <div>
      <div>
        <Message msg={message} />
        <NavBar />
        <Message msg={interview} />
        <Footer />
      </div>
    </div>
  );
}

export default Interview;