function LatestCarousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-dark slide m-5"
      data-bs-ride="false"
      style={{
        backgroundColor: "#F0F0F0",
      }}
    >
      <h3 className=" p-3">Important Locations</h3>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card-group">
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Location 1</p>
                <p className="card-text">
                  <small className="text-muted">Floor 1</small>
                </p>
              </div>
            </div>
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Location 2</p>
                <p className="card-text">
                  <small className="text-muted">Floor 3</small>
                </p>
              </div>
            </div>
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Location 3</p>
                <p className="card-text">
                  <small className="text-muted">Floor 2</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-group">
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Location 4</p>
                <p className="card-text">
                  <small className="text-muted">Floor 4</small>
                </p>
              </div>
            </div>
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Location 5</p>
                <p className="card-text">
                  <small className="text-muted">Floor 1</small>
                </p>
              </div>
            </div>
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Location 6</p>
                <p className="card-text">
                  <small className="text-muted">Floor 2</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-group">
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Location 7</p>
                <p className="card-text">
                  <small className="text-muted">Floor 2</small>
                </p>
              </div>
            </div>
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card m-3">
              <img
                src="./src/assets/centenary.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default LatestCarousel;
