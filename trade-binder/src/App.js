import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";

function App() {
  const [user, setUser] = useState({
    username: "Guest",
    avatar_url:
      "https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg",
    kudos: 0,
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userKey: [user, setUser] }}>
        <div className="App">
          <Header />
          <br />
          <Routes>
            <Route path="/" element={<Navigation />}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
