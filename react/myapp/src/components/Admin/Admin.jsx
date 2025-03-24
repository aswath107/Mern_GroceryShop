// import React, { useState } from 'react';
// import AHeader from './components/AHeader';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import InventoryManagement from './components/InventoryManagement';
// import OrderManagement from './components/OrderManagement';
// import CustomerManagement from './components/CustomerManagement';
// import VendorManagement from './components/VendorManagement';
// import CategoryOffers from './components/CategoryOffers';
// import Reports from './components/Reports';
// import Settings from './components/Settings';
// import Support from './components/Support';


// function Admin() {
//   const [activeMenu, setActiveMenu] = useState('Dashboard');

//   const renderContent = () => {
//     switch (activeMenu) {
//       case 'Dashboard':
//         return <Dashboard />;
//       case 'Inventory Management':
//         return <InventoryManagement />;
//       case 'Order Management':
//         return <OrderManagement />;
//       case 'Customer Management':
//         return <CustomerManagement />;
//       case 'Vendor Management':
//         return <VendorManagement />;
//       case 'Category & Offers':
//         return <CategoryOffers />;
//       case 'Reports':
//         return <Reports />;
//       case 'Settings':
//         return <Settings />;
//       case 'Support':
//         return <Support />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="admin-page">
//       <Header />
//       <div className="main-container">
//         <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
//         <div className="content">{renderContent()}</div>
//       </div>
//     </div>
//   );
// }

// export default Admin;