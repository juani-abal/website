import GoogleMaps from "simple-react-google-maps";

const Map = () => {
  return (
    <GoogleMaps
    apiKey={"AIzaSyDzQEjJx00SJxBYVbFsRCqR0yxf4uP5X2o"}   
      style={{ height: "80%", width: "90%" }}
      zoom={17}
      center={{
        lat: -34.82142924223435,
        lng: -58.462120857518144,
      }}
      markers={{
        lat: -34.82142924223435,
        lng: -58.462120857518144,
      }}
    />
  );
};

export default Map;
