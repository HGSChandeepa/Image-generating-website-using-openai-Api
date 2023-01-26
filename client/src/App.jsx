import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLoaderData,
} from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    //routing uding the react router dom
    <BrowserRouter>
      <header className=" w-full flex justify-between items-center bg-white sm:px-4 px-4 py-4 border-b border-b[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        {/* here we add the routing in the place where we want to display the details when the routes are clicked  */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
