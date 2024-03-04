import { useState } from "react";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
}

function ContactInfo({ firstName, lastName, email, comment }: Props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Comment, setComment] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const contact = { fname, lname, Email, Comment };
    window.localStorage.setItem(fname, JSON.stringify(contact));
    alert(`The name you entered was: ${window.localStorage.getItem(fname)}`);
  };

  //we want to have this component represent a single card
  return (
    <form onSubmit={handleSubmit}>
      <div className="container-sm">
        <div className="row">
          <div className="col-6 border-0">
            <div
              className="card-body p-3 m-5 text-center ms-auto me-2"
              style={{
                width: "100%",
                backgroundColor: "#F0F0F0",
                borderRadius: 15,
              }}
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Fname"
                placeholder="John"
                name="Fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="col-6 border-0">
            <div
              className="card-body p-3 m-5 text-center ms-2 me-auto"
              style={{
                width: "100%",
                backgroundColor: "#F0F0F0",
                borderRadius: 15,
              }}
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Lname"
                placeholder="Dou"
                name="Lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col border-0">
            <div
              className="card-body p-3 m-5 text-center mx-auto"
              style={{
                width: "100%",
                backgroundColor: "#F0F0F0",
                borderRadius: 15,
              }}
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@gmail.com"
                name="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col border-0">
            <div
              className="card-body p-3 m-5 text-center mx-auto"
              style={{
                backgroundColor: "#F0F0F0",
                boxShadow: "20px 20px 1px 1px #013F8A",
                borderRadius: 15,
              }}
            >
              <label htmlFor="exampleFormControlInput1" className="form-label">
                {comment}
              </label>
              <input
                type="text"
                className="form-control"
                id="comment"
                placeholder="Tell us how we did!"
                name="comment"
                value={Comment}
                onChange={(e) => setComment(e.target.value)}
              ></input>
            </div>
          </div>
        </div>

        <div className="p-2 m-2 text-center mx-auto">
          <button
            type="submit"
            className=" btn btn-primary btn-lg"
            style={{
              backgroundColor: "#0078B6",
              borderRadius: 20,
            }}
          >
            <p>Submit</p>
          </button>
        </div>
        <div id="responses"></div>
      </div>
    </form>
  );
}

export default ContactInfo;
