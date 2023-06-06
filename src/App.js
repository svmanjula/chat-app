import "./App.css";
import { jsonData } from "./backend/dummyData";
import MessasesPage from "./pages/MessagesPage/MessasesPage";

function App() {
  const data = jsonData.people;

  return (
    <div className="App">
      <div className="chatApp">
        <MessasesPage data={data}  />
       
      </div>
    </div>
  );
}

export default App;
