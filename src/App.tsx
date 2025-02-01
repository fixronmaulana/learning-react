import Header from "./components/Header"
import Welcome from "./components/Welcome"
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header />
      <h1>Hello World!</h1>

      <div style={{ gap: "6px", display: "flex", flexDirection: "row" }}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>

      <Welcome />

    </>
  );
}

export default App
