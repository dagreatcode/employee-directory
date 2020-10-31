import NavbarClass from "./components/NavbarClass";
import NavbarFunction from "./components/NavbarFunction";

function App() {
  return (
    <div className="App">
      <NavbarClass />
      <NavbarFunction />
      <h1>Hello World</h1>
      {apiWorkers.map((workers) => (
        <theOffice  
            firstname={workers.firstname}
            lastname={workers.lastname}
        />
      ))}
    </div>
  );
}

export default App;
