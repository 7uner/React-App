import Message from "../app/Components/Message";
import TopNav from "../app/Components/TopNav";
import NavBar from "../app/Components/NavBar";
import Reminder from "../app/Components/Reminder";
import Footer from "../app/Components/Footer";
import Faq from "../app/Components/Faq";

function FAQ() {
  return (
    <div>
      <div>
        <TopNav />
        <NavBar />
        <div className="container-sm">
          <div className="row border d-flex">
            <div
              className="list-group p-3 me-auto col-6 border"
              style={{ width: 400 }}
            >
              <Reminder />
            </div>
            <div className="col-7 border d-flex">
              <Faq question={"FAQ #1"} answer={"Answer"} />
              <Faq
                question={
                  "FAQ #2: What is the hospital policy on visiting patients?"
                }
                answer={
                  "Visitors should contact the patient's healthcare team to schedule visiting time between 1 to 7 p.m. You may be turned away if you do not have a scheduled visit. Upon entering the hospital, all visitors must self-screen for COVID-19"
                }
              />
              <Faq
                question={
                  "FAQ #3: What is the hospitals current COVID-19 policy?"
                }
                answer={
                  "All hospital staff and visitors must wear a mask at all times unless in the cafeteria area."
                }
              />
              <Faq
                question={"FAQ #4: Where can I pay for parking?"}
                answer={
                  "A parking machine is located at the main entrance of the hospital where you can pay for your ticket. For further assistance visit the parking office or consult security."
                }
              />
              <Faq question={"FAQ #5"} answer={"Answer"} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
