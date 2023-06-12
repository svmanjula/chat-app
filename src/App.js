import { Route, Routes } from "react-router-dom";
import "./App.css";
import { data } from "./data/dummyData";
import ChatPage from "./pages/ChatPage/ChatPage";
import MessagesPage from "./pages/MessagesPage/MessasesPage";

function App() {
  const userData = data.people;
  return (
    <div className="App">
      <div className="chatApp">
        <Routes>
          <Route
            exact
            path="/"
            element={<MessagesPage userData={userData} />}
          />
          <Route
            exact
            path="/chat/:id"
            element={<ChatPage userData={userData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
