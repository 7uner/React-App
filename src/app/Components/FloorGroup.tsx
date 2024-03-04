import { useState, MouseEvent, Fragment } from "react";
import FloorMenu from "./FloorMenu";

function FloorGroup() {
  let floors = ["1st floor", "2nd floor", "3rd floor", "4th floor"];
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

  //hooks

  // arr[0] variable of our selected index
  // arr[1] updater function, which will update DOM automatically
  const [selectedIndex, setSelectedIndex] = useState(0);
  //another hook for images
  const [selectedImage, setSelectedImage] = useState("1st floor");

  // Event Handler Function
  const handleClick = (event: MouseEvent) =>
    console.log(
      "We are still clicking the event button, but this time with a function"
    );

  return (
    <div className="container-sm">
      <div className="row border d-flex">
        <ul
          className="list-group p-3 m-5 me-auto col-6 border"
          style={{ width: 400 }}
        >
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Location"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {floors.map((floor, index) => (
            // render content dinamically with a if condition
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={floor}
              onClick={() => {
                setSelectedIndex(index);
                setSelectedImage(floor);
                //dropDownFloor(floor);
              }}
            >
              {floor}
            </li>
          ))}
<FloorMenu />
          <li
            // how to do a basic onClick event with a shorthand function
            className="list-group-item"
            onClick={() => console.log("we are clicking hard coded floor!")}
          >
            Hard coded floor
          </li>
          <li className="list-group-item" onClick={handleClick}>
            Another hard coded floor
          </li>
        </ul>
        <div className="col-7 border d-flex">
          <img
            // we render the image as a fragment, and we render this dynamically with states
            src={floorImages[selectedImage]}
            className="d-block img-fluid w-100 text-center"
          ></img>
        </div>
      </div>
      
    </div>
  );
}

export default FloorGroup;
