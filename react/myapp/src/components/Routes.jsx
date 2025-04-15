// routes.js
import MainContent from "./MainContent";
import Categories from "./Categories";
import HerbsAndSpicesPage from "./HerbsAndSpicesPage";
import DairyAndEggsPage from "./DairyAndEggsPage";
import MeatAndPoultryPage from "./MeatAndPoultryPage";
import BeveragesPage from "./BeveragesPage";
import DetergentPage from "./DetergentPage";
import BodyWashPage from "./BodyWashPage";
import FaceWashPage from "./FaceWashPage";
import Login from "./Login";
import Register from "./Register";
import VendorPage from "./vendor/Vendor";
import Manageorders from "./vendor/Manageorders";
import View from "./vendor/View";
import UpdateOrder from "./vendor/UpdateOrder";
import ManageInventory from "./vendor/ManageInventory";
import UpdateInventory from "./vendor/UpdateInventory";
import SalesReport from "./vendor/SalesReport";
import CustomerSupportPage from "./vendor/CustomerSupportPage";
import AddProduct from "./vendor/AddProduct";
import AboutUs from "./AboutUs";
// import Admin from "./Admin/Admin";

const routes = [
  { path: "/", element: <MainContent /> },
  { path: "/categories", element: <Categories /> },
  { path: "/herbs-spices", element: <HerbsAndSpicesPage /> },
  { path: "/dairy-eggs", element: <DairyAndEggsPage /> },
  { path: "/meat-poultry", element: <MeatAndPoultryPage /> },
  { path: "/beverages", element: <BeveragesPage /> },
  { path: "/detergent", element: <DetergentPage /> },
  { path: "/body-wash", element: <BodyWashPage /> },
  { path: "/face-wash", element: <FaceWashPage /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/login", element: <Login  /> }, // ✅ Pass setUser
  { path: "/register", element: <Register /> },
  { path: "/vendor", element: <VendorPage /> },
  { path: "/manageorders", element: <Manageorders /> },
  { path: "/view/:id", element: <View /> },
  { path: "/update/:id", element: <UpdateOrder /> },
  { path: "/manageinventory", element: <ManageInventory /> },
  { path: "/updateinventory/:id", element: <UpdateInventory /> },
  { path: "/salesreport", element: <SalesReport /> },
  { path: "/customersupport", element: <CustomerSupportPage /> },
  { path: "/addproduct", element: <AddProduct /> },
];

export default routes;
