import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LinkSection from "./components/linkSection/LinkSection";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Gallary from "./pages/gallary/Gallary";
import Contact from "./pages/contact/Contact";
import Signin from "./pages/signin/Signin";
import SignUp from "./pages/signup/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import All_React_Topic from "./pages/coursePage/react_js_Page/All_React_Topic";
import Mapping from "./components/All_topic_Component/reactTopics/Mapping";
import ConditionalRouting from "./components/All_topic_Component/reactTopics/ConditionalRouting";
import DefineReact from './components/All_topic_Component/reactTopics/DefineReact';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/signin", "/signup"];

  return (
    <>
      <ScrollToTop />
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        
       
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

         {/* React topics routes  */}
         <Route path="/all_react_topic" element={<ProtectedRoute><All_React_Topic/></ProtectedRoute>}/>
         <Route path="/mapping" element={<ProtectedRoute><Mapping/></ProtectedRoute>}/>
         <Route path="/conditional-routing" element={<ProtectedRoute><ConditionalRouting/></ProtectedRoute>}/>
         <Route path="/define-react" element={<ProtectedRoute><DefineReact/></ProtectedRoute>}/>


         

      </Routes>
      <LinkSection />
      <Footer />
    </>
  );
}

export default App;
