interface Props {
  info: {};
}

function NonHoverCard({ info }: Props) {
  //we want to have this component represent a single card

  return (
    <div className="card border-0">
      <div className="card-body" style={{ backgroundColor: "#F0F0F0" }}>
        <div>
          <img
            src={info.image}
            className="single-img h-100 w-100"
            alt="..."
            style={{
              borderRadius: 10,
            }}
          />
        </div>
        <h2
          className="card-text d-flex justify-content-center"
          style={{
            fontSize: 24,
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          {info.address}
        </h2>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <a
            href={info.link}
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#0078B6",
              borderRadius: 20,
            }}
          >
            {info.hospitalName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default NonHoverCard;
