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
        {
          "_id": "5e93b4f03af44260882e33b1",
          "firstname": "Jim",
          "lastname": "Halpert",
          "__v": 0
          },
        />
      ))}
    </div>
  );
}

export default App;
