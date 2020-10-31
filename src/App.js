import NavbarClass from "./components/NavbarClass";
import NavbarFunction from "./components/NavbarFunction";
import apiWorkers from "./utils/apiWorkers";
// import index from './index';

function App() {
  return (
    <div className="App">
      <NavbarClass />
      <NavbarFunction />
      <h1>Hello World</h1>
      {/* <ul classMake="list-group>">
        {apiWorkers.map((workers) => (
          <li key={apiWorkers._id}>
            {apiWorkers.firstname} - {apiWorkers.lastname}
          </li>
        ))}
      </ul> */}
      {apiWorkers}
      {Worker}
    </div>
  );
}

export default App;
