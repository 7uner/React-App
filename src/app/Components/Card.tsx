interface Props {
  address: string;
  image: string;
  hospitalName: string;
  link: string;
}

function Card({ address, image, hospitalName, link }: Props) {
  //we want to have this component represent a single card
  return (
    <div className="card border-0">
      <div className="card-body" style={{ backgroundColor: "#F0F0F0" }}>
        <div className="card_img">
          <img
            src={image}
            className="single-img h-100 w-100"
            alt="..."
            style={{
              borderRadius: 10,
            }}
          />

          <div className="card-img-overlay d-flex align-items-center align-content-center justify-content-center">
            <h5 className="card-title" style={{ alignContent: "center" }}>
              {address}
            </h5>
          </div>
        </div>
        <h2
          className="card-text d-flex justify-content-center"
          style={{
            fontSize: 24,
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          {address}
        </h2>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <a
            role="button"
            href={link}
            className="btn btn-primary btn-lg"
            aria-pressed="true"
            style={{
              backgroundColor: "#0078B6",
              display: hospitalName === "" ? "none" : "inline",
              borderRadius: 20,
            }}
          >
            {hospitalName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
