import RootLayOut from "./components/roots/RootLayOut";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Service from "./pages/services/Service";
import OurWork from "./pages/ourwork/OurWork";
import Contact from "./pages/contact/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut/>}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
        <Route path="/projects" element={<OurWork/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
