import AuthDetails from "./components/Signin/AuthDetails";
import Signin from "./components/Signin/signup";
import HomePage from "./components/homepage";
import { Routes, Route } from "react-router";
import Productprovider from "./components/Productprovider";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<Productprovider />} />
      </Routes>
  );
}

export default App;
