import Header from "./components/Header"
import Welcome from "./components/Welcome"
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header header="Belajar PROPS" />
      <h1>Hello World!</h1>

      <div style={{ gap: "6px", display: "flex", flexDirection: "row" }}>
        <ProfileCard name="Fikron" job="Programmer" year={2000} addr="Banyuwangi"/>
        <ProfileCard  job="Lecture" year={1987} addr="Karawang"/>

      </div>

      <Welcome />

    </>
  );
}

export default App
