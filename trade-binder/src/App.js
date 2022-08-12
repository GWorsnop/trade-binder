import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Header from "./components/Header";
import CardSearch from "./components/CardSearch";
import ProfilePage from "./components/ProfilePage";
import Tradebinder from "./components/tradebinder";
import Friends from "./components/friends";
import OthersBinder from "./components/othersBinder";
import About from "./components/About";

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
        <div className="app min-h-screen bg-gradient-to-b from-gray-100 to-blue-200">
          <Header />
          <br />
          <Routes>
            <Route path="/" element={<Tradebinder />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/search" element={<CardSearch />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route
              path="/friends/GWorsnop"
              element={<OthersBinder usersBinder="GWorsnop" />}
            ></Route>
            <Route
              path="/friends/Brazzled"
              element={<OthersBinder usersBinder="Brazzled" />}
            ></Route>
            <Route
              path="/friends/Gibbo"
              element={<OthersBinder usersBinder="Gibbo" />}
            ></Route>
            <Route
              path="/friends/Spanga"
              element={<OthersBinder usersBinder="Spanga" />}
            ></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
