function Reminder() {
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
          marginBottom: 20
        }}
      >
        <p className="card-text">
          For specific medicial information and latest updates visit the
        </p>
        <a
          role="button"
          href="https://www.shn.ca/"
          className="btn btn-primary btn-lg"
          style={{ backgroundColor: "#0078B6", borderRadius:20 }}
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
        <p className="card-text">website blurb</p>
        <a
          role="button"
          href="https://shnfoundation.akaraisin.com/ui/DonateNow/donations/start"
          className="btn btn-primary btn-lg "
          style={{ backgroundColor: "#0078B6", borderRadius:20 }}
        >
          Donate Today
        </a>
      </div>
    </div>
  );
}
export default Reminder;
