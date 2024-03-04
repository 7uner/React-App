import { useEffect, useState } from "react";
import Reminder from "./Reminder";

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
        <div
          className="border-0"
          style={{ width: "100%", borderRadius: 20, display: "flex" }}
        >
          <Reminder />
        </div>
        <div className="col-7 border-0 d-flex" style={{}}>
          <div
            className="card-body"
            style={{
              backgroundColor: "#F0F0F0",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <div
              style={{
                backgroundColor: "#F0F0F0",
                borderRadius: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                type="button"
                className="btn btn-primary btn-lg "
                style={{ backgroundColor: "#0078B6" }}
              >
                Birchmount
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg "
                style={{ backgroundColor: "#0078B6" }}
              >
                Centenary
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg "
                style={{ backgroundColor: "#0078B6" }}
              >
                General
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
      </div>
      <div>
        {data.map((news) => (
          <div key={news.title}>
            <p>{news.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Updates;
