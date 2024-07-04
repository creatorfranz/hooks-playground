import { useGeolocation } from "@uidotdev/usehooks";

export default function App() {
  const state = useGeolocation();

  if (state.loading) {
    return <p>Loading... Please enable permissions.</p>;
  }

  if (state.error) {
    return <p>Enable permissions to access your location data.</p>;
  }

  return (
    <>
      {state.latitude} {state.longitude}
    </>
  );
}
