import { Route, Routes } from "react-router-dom";
import "./App.css";
import { jsonData } from "./backend/dummyData";
import ChatPage from "./pages/ChatPage/ChatPage";
import MessasesPage from "./pages/MessagesPage/MessasesPage";

function App() {
  const data = jsonData.people;

  

  return (
    <div className="App">
      <div className="chatApp">
        
       <Routes>
        <Route exact path="/" element ={ <MessasesPage data={data}  />} />
        <Route exact path="/chat/:id" element ={<ChatPage data={data} />} />

       </Routes>
      </div>
    </div>
  );
}

export default App;
