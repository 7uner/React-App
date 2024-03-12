import { useEffect, useState } from "react";
import Reminder from "./Reminder";
import Card from "./Card";

function Updates() {
  //hook to retrive data from scrapper
  const [data, setData] = useState<any[]>([]);

  //fetch data
  useEffect(() => {
    fetch("http://localhost:4000/scrapeNews")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-sm">
      <div className="row border d-flex border-0">
        <div className="col-4">
          <div
            className="border-0"
            style={{ width: "100%", borderRadius: 20, display: "flex" }}
          >
            <Reminder />
          </div>
        </div>
        <div className="col-8 border-0 d-flex" style={{}}>
          <div
            className="card-body"
            style={{
              backgroundColor: "#F0F0F0",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <div className="container-sm">
              {data.map((news) => (
                <div className="row">
                  <div className="col-6">
                    <img
                      src={news.image}
                      className="single-img h-100 w-100"
                      alt="..."
                      style={{
                        borderRadius: 10,
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <h2>{news.title}</h2>
                    <a
                      href={news.link}
                      className="btn btn-primary btn-lg active"
                      role="button"
                      aria-pressed="true"
                      style={{
                        backgroundColor: "#0078B6",
                        borderRadius: 20,
                      }}
                    >
                      See More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
