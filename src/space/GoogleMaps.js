import MapWrapper from "./MapWrapper";

const App = ({ position }) => {
  // console.log(position);
  // console.log(longUser);
  return (
    <div>
      <h1>My map</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <MapWrapper position={position} style={{ height: "10rem" }} />
      </div>
    </div>
  );
};

export default App;
