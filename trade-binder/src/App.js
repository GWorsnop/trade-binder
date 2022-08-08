import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CardSearch from "./components/CardSearch";
import ProfilePage from "./components/ProfilePage";

function App() {
  const [user, setUser] = useState({
    username: "Guest",
    avatar_url:
      "https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg",
    kudos: 0,
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <br />
          <Routes>
            <Route path="/" element={<Navigation />}></Route>
            <Route path="/search" element={<CardSearch />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
