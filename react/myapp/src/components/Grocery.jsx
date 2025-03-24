

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import MainContent from "./MainContent";
// import Footer from "./Footer";
// import Categories from "./Categories";
// import HerbsAndSpicesPage from "./HerbsAndSpicesPage";
// import DairyAndEggsPage from "./DairyAndEggsPage";
// import MeatAndPoultryPage from "./MeatAndPoultryPage";
// import BeveragesPage from "./BeveragesPage";
// import DetergentPage from "./DetergentPage";
// import BodyWashPage from "./BodyWashPage";
// import FaceWashPage from "./FaceWashPage";
// import Login from "./Login";
// import Register from "./Register";

// function Grocery() {

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <Routes>
//         <Route path="/" element={<MainContent />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/herbs-spices" element={<HerbsAndSpicesPage />} />
//         <Route path="/dairy-eggs" element={<DairyAndEggsPage />} />
//         <Route path="/meat-poultry" element={<MeatAndPoultryPage />} />
//         <Route path="/beverages" element={<BeveragesPage/>} />
//         <Route path="/detergent" element={<DetergentPage />} />
//         <Route path="/body-wash" element={<BodyWashPage/>} />
//         <Route path="/face-wash" element={<FaceWashPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default Grocery;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import routes from "./Routes"; // Import the routes configuration

function Grocery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default Grocery;