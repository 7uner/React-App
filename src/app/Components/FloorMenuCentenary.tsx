import { useState, MouseEvent, Fragment } from "react";
function FloorMenuCentenary() {
  let floorImages: { [key: string]: string } = {
    "1st floor":
      "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200",
    "2nd floor":
      "https://images.pexels.com/photos/679277/pexels-photo-679277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200",
    "3rd floor":
      "https://images.pexels.com/photos/5486/bird-s-eye-view-cars-crossing-crossroad.jpg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200",
    "4th floor":
      "https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200",
  };
  // onClick={() => console.log("we are clicking hard coded floor!")}
  return (
    <div className="accordion" id="CenternaryLocation">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            id="floor1"
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Floor 1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h3>Amenities and Services</h3>
            <p>
              Educational Services Health Records Library Information Services
              Patient Billing
            </p>
            <h3>Meeting Rooms</h3>
            <p>Auditorium Board Room Meeting Rooms B1A-B1H</p>
            <h3>Staff Destinations</h3>
            <p>
              Administration Human Resources Shipping and Receiving Volunteer
              Services Workplace Health and Safety
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            id="floor2"
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Floor 2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h3>Amenities and Services</h3>
            <p>
              Information Parking Office Patient Registration Security SHN
              Foundation Office Spritual and Religious Care Worship and
              Meditation Room
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      id="floor1"
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Floor 1
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <h3>Amenities and Services</h3>
                      <p>
                        Educational Services Health Records Library Information
                        Services Patient Billing
                      </p>
                      <h3>Meeting Rooms</h3>
                      <p>Auditorium Board Room Meeting Rooms B1A-B1H</p>
                      <h3>Staff Destinations</h3>
                      <p>
                        Administration Human Resources Shipping and Receiving
                        Volunteer Services Workplace Health and Safety
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </p>
            <h3>Clinics</h3>
            <p>
              EEG and EMG Clinic Emergency Fracture Clinic Kids Care Short Stay
              Clinic Medicine Clinic Same Day Surgery
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      id="floor1"
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Surgical Specialty Clinics
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Ears, Nose, Throat Clinic Endoscopy Clinic General
                        Surgery Clinic Pain Clinic Plastics Urology Clinic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Imaging and lab</h3>
              <p>Diagnostic Imaging Laboratory MRI</p>
              <h3>Inpatient Units</h3>
              <p>Intensive Care Unit (ICU)</p>
              <h3>Meeting Rooms</h3>
              <p> Meeting Rooms B2A-B2D</p>
              <h3>Retail</h3>
              <p>Food Court Gift Shop Retail Pharmacy</p>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            id="floor3"
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Floor 3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h3>Clinics</h3>
            <p>Diabetes Program Zone E Outpatient Mental Health Zone E</p>
            <h3>Inpatient Units</h3>
            <p>
              Cardiology Unit Medicine Unit Zone D Mental Health and Psychiatric
              Intensive Care Unit (PICU) Zone C Mental Health Unit Zone B
              Surgical Unit Zone A
            </p>
            <h3>Meeting Rooms</h3>
            <p> Meeting Rooms B3A, B3B</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            id="floor3"
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Floor 4
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h3>Clinics</h3>
            <p>Eye Centre SACC/DV</p>
            <h3>Inpatient Units</h3>
            <p>Medicine unit Zone A,D Stroke Centre Zone B</p>
            <h3>Meeting Rooms</h3>
            <p>Education Room</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            id="floor3"
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Floor 5
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <h3>Clinics</h3>
            <p>Clinical Nutrition Dietitian's Office</p>
            <h3>Meeting Rooms</h3>
            <p> Meeting Rooms B5A, B5B</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorMenuCentenary;
