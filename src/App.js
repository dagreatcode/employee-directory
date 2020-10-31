import NavbarClass from "./components/NavbarClass";
import NavbarFunction from "./components/NavbarFunction";

function App() {
  return (
    <div className="App">
      <NavbarClass />
      <NavbarFunction />
      <h1>Hello World</h1>
      
      {apiWorkers.map((workers) => (

        <li key={worker._id}>{workers.firstname} - {workers.lastname}</li>

      ))}
    </div>
  );
}

export default App;
