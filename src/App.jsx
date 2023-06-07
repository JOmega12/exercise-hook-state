import { ClassTrafficLight } from "./assets/ClassTrafficLight";
import { FunctionalTrafficLight } from "./assets/FunctionalTrafficLight";


const lights = [
  {id: 1, name: 'red', backgroundColor: 'red'},
  {id: 2, name: 'yellow', backgroundColor: 'yellow'},
  {id: 3, name: 'green', backgroundColor: 'green'},
]

function App() {
  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight lights={lights}/>
          </div>
          <div className="right">
            <ClassTrafficLight lights={lights}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
