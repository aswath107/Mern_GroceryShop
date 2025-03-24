import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./SalesReport.css";

const SalesReport = () => {
  // Sample Sales Data
  const [salesData, setSalesData] = useState([
    { id: 1, productName: "Apples", category: "Fruits", soldQuantity: 30, revenue: 75, date: "2023-10-01" },
    { id: 2, productName: "Milk", category: "Dairy", soldQuantity: 25, revenue: 45, date: "2023-10-02" },
    { id: 3, productName: "Bread", category: "Bakery", soldQuantity: 15, revenue: 48, date: "2023-10-03" },
    { id: 4, productName: "Oranges", category: "Fruits", soldQuantity: 20, revenue: 50, date: "2023-10-04" },
    { id: 5, productName: "Cheese", category: "Dairy", soldQuantity: 10, revenue: 30, date: "2023-10-05" },
  ]);

  // States for filters & sorting
  const [categoryFilter, setCategoryFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortBy, setSortBy] = useState("revenue");

  // Function to filter sales data
  const filteredSalesData = salesData
    .filter((sale) => {
      const matchesCategory = categoryFilter ? sale.category === categoryFilter : true;
      const matchesDateRange = startDate && endDate ? sale.date >= startDate && sale.date <= endDate : true;
      return matchesCategory && matchesDateRange;
    })
    .sort((a, b) => (sortBy === "revenue" ? b.revenue - a.revenue : b.soldQuantity - a.soldQuantity));

  // Function to calculate total revenue
  const totalRevenue = filteredSalesData.reduce((sum, sale) => sum + sale.revenue, 0);

  return (
    <div className="sales-report-container">
      <h1>Sales Report</h1>

      {/* Filters */}
      <div className="filters">
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
        </select>

        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="revenue">Sort by Revenue</option>
          <option value="soldQuantity">Sort by Quantity</option>
        </select>
      </div>

      {/* Sales Table */}
      <table className="sales-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Sold Quantity</th>
            <th>Revenue ($)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredSalesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.productName}</td>
              <td>{sale.category}</td>
              <td>{sale.soldQuantity}</td>
              <td>${sale.revenue}</td>
              <td>{sale.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Revenue */}
      <div className="total-revenue">
        <strong>Total Revenue:</strong> ${totalRevenue.toFixed(2)}
      </div>

      {/* Sales Chart */}
      <div className="sales-chart">
        <h2>Sales Summary</h2>
        <BarChart width={800} height={400} data={filteredSalesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="soldQuantity" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default SalesReport;
