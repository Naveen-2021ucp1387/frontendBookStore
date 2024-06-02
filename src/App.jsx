import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import AuthProvider, { useAuth } from "./context/AuthProvider.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/course"
              element={authUser ? <Courses /> : <Navigate to="/signup" />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Toaster />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;

// import React from "react";
// import Home from "./home/Home";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Courses from "./courses/Courses";
// import Signup from "./components/Signup";
// import { Toaster } from "react-hot-toast";
// import { useAuth } from "./context/AuthProvider";

// function App() {
//   const [authUser, setAuthUser] = useAuth();
//   console.log(useAuth); // Add this line to debug

//   return (
//     <>
//       <AuthProvider>
//         <div className="dark:bg-slate-900 dark:text-white">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/course"
//               element={authUser ? <Courses /> : <Navigate to="/signup" />}
//             />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//           <Toaster />
//         </div>
//       </AuthProvider>
//     </>
//   );
// }

// export default App;
