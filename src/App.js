import pic from "./uy.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="nav">
          <img width={160} src={pic} />
          <div className="pi-flex">
            <a className="pi1" href="">
              Home
            </a>
            <a className="pi2" href="">
              Facilities
            </a>
            <a className="pi3" href="">
              Rooms
            </a>
            <a className="pi4" href="">
              Contact-us
            </a>
          </div>
        </div>
        <div className="h-work">
          <h1 className="h-font">WELCOME TO</h1>
          <h1 className="h-font2">LUXURY</h1>
          <h2 className="h-font3">
            Book your stay and enjoy Luxury <br></br>
            redefined at the most affordable rates.{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
