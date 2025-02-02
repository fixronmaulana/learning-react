import Header from "./components/Header"
import Welcome from "./components/Welcome"
import ProfileCard from "./components/ProfileCard";
import NavbarCard from "./components/Navbar";


type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
}

const teachers: Teacher[] = [
  {
    job: "Dosen",
    name: "Pak Dhika",
    year: 1955,
    id: 1,
  },
  {
    name: "Fikron",
    job: "Student of Banyuwangi State Polytechnic",
    year: 2003,
    id: 2,
  },
  {
    name: "Pak Eko",
    job: "Tech Lead",
    year: 1945,
    id: 3,
  }
]

function App() {
  return (
    <>
      <Header header="Belajar PROPS" />
      <h1>Hello World!</h1>
      
     <NavbarCard />

      <div style={{ gap: "6px", display: "flex", flexDirection: "row" }}>

        {
          teachers.map((teacher) => {
            return <ProfileCard name={teacher.name} year={teacher.year} job={teacher.job} key={teacher.id} />
          })
        }

      </div>

      <Welcome />

    </>
  );
}

export default App
