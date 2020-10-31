import NavbarClass from "./components/NavbarClass";
import NavbarFunction from "./components/NavbarFunction";

function App() {
  return (
    <div className="App">
      <NavbarClass />
      <NavbarFunction />
      <h1>Hello World</h1>
      {apiWorkers.map((worker) => (
        <theOffice  
            firstname={worker.firstname}
            lastname={worker.lastname}
        />
      ))}
    </div>
  );
}

export default App;
