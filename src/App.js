import './App.css';
import {jsonData} from "./backend/dummyData"


function App() {

  const data = jsonData.people

  return (
    <div className="App">
{
  data.map((data)=>{
   return <div> {data.name} </div>
  })
}

    </div>
  );
}

export default App;
