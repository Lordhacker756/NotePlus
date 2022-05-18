import Login from "./components/Login";
import { Routes, Route} from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Notes from "./components/Notes"
import Register from "./components/Register";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="notes" element={<Notes />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
