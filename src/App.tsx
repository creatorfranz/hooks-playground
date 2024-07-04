import { useLocalStorage } from "@uidotdev/usehooks";

export default function App() {
  const [token, saveToken] = useLocalStorage<string>("authToken");

  return (
    <>
      <button onClick={() => window.location.reload()}>Reload Window</button>
      <button onClick={() => saveToken("token")}>Save</button>

      <p>Persisted: {token}</p>
    </>
  );
}
