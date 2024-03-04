import Reminder from "./Reminder";

interface Props {
  question: string;
  answer: string;
}

function Faq({ question, answer }: Props) {
  return (
    <div className="container-sm">
      <div className="row border d-flex">
          <div className="card-body ml-2">
            <div
              className="card-body p-3 m-5 text-center"
              style={{ width: 700, backgroundColor: "#F0F0F0" }}
            >
              <p className="card-text">{question};</p>
            </div>

            <div
              className="card-body p-3 m-5 text-center"
              style={{
                width: 700,
                backgroundColor: "#F0F0F0",
                boxShadow: "20px 20px 1px 1px #013F8A",
              }}
            >
              <p className="card-text">{answer}</p>
            </div>
          </div>
          <div className="card-body ml-2">
            <div
              className="card-body p-3 m-5 text-center"
              style={{ width: 700, backgroundColor: "#F0F0F0" }}
            >
              <p className="card-text">{question};</p>
            </div>

            <div
              className="card-body p-3 m-5 text-center"
              style={{
                width: 700,
                backgroundColor: "#F0F0F0",
                boxShadow: "20px 20px 1px 1px #013F8A",
              }}
            >
              <p className="card-text">{answer}</p>
            </div>
          </div>
          <div className="card-body ml-2">
            <div
              className="card-body p-3 m-5 text-center"
              style={{ width: 700, backgroundColor: "#F0F0F0" }}
            >
              <p className="card-text">{question};</p>
            </div>

            <div
              className="card-body p-3 m-5 text-center"
              style={{
                width: 700,
                backgroundColor: "#F0F0F0",
                boxShadow: "20px 20px 1px 1px #013F8A",
              }}
            >
              <p className="card-text">{answer}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Faq;
