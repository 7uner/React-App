import { useEffect, useState } from "react";

function Reminder() {
  //hook to retrive data from scrapper
  const [data, setData] = useState<any>({});

  //fetch data
  useEffect(() => {
    fetch("http://localhost:4000/scrapeDonation")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="card-body text-center"
        style={{
          width: "90%",
          backgroundColor: "#F0F0F0",
          borderRadius: 20,
          flex: 1,
          padding: 20,
          marginBottom: 20,
        }}
      >
        <p className="card-text">
          For specific medicial information and latest updates visit the
        </p>
        <a
          role="button"
          href="https://www.shn.ca/"
          className="btn btn-primary btn-lg"
          style={{ backgroundColor: "#0078B6", borderRadius: 20 }}
        >
          Official SHN Website
        </a>
      </div>
      <div
        className="card-body text-center"
        style={{
          width: "90%",
          backgroundColor: "#CDDEF2",
          borderRadius: 20,
          flex: 1,
          padding: 20,
        }}
      >
        <div>
          <div className="col-sm" style={{ width: "60%" }}>
            <img
              src={data.image2}
              className="single-img h-100 w-100"
              alt="..."
              style={{
                borderRadius: 10,
              }}
            />
            <p>{data.blurb}</p>
          </div>
        </div>

        <a
          role="button"
          href="https://shnfoundation.akaraisin.com/ui/DonateNow/donations/start"
          className="btn btn-primary btn-lg "
          style={{ backgroundColor: "#0078B6", borderRadius: 20 }}
        >
          Donate Today
        </a>
      </div>
    </div>
  );
}
export default Reminder;
