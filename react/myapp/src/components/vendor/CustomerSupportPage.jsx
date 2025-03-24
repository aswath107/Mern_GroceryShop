import React, { useState } from 'react';
import './CustomerSupportPage.css';

const CustomerSupportPage = () => {
  const [supportTickets, setSupportTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    id: Date.now(),
    issueType: '',
    description: '',
    priority: 'low',
    status: 'pending',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Handle new ticket submission
  const handleSubmitTicket = () => {
    if (!newTicket.issueType || !newTicket.description) {
      alert("Please fill in all fields!");
      return;
    }

    setSupportTickets([...supportTickets, newTicket]);
    setNewTicket({
      id: Date.now(),
      issueType: '',
      description: '',
      priority: 'low',
      status: 'pending',
    });
  };

  // Update ticket status
  const updateTicketStatus = (ticketId, newStatus) => {
    setSupportTickets(
      supportTickets.map(ticket =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  // Filter tickets by status
  const filteredTickets = supportTickets.filter(ticket =>
    statusFilter ? ticket.status === statusFilter : true
  );

  // Search tickets by description
  const searchedTickets = filteredTickets.filter(ticket =>
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cs-page">
      <h1>Customer Support</h1>

      {/* Support Ticket Submission */}
      <div className="cs-ticket-form">
        <h2>Submit a Support Ticket</h2>
        <div className="cs-form-group">
          <label className="cs-label" htmlFor="issue-type">Issue Type:</label>
          <select
            id="issue-type"
            className="cs-select"
            value={newTicket.issueType}
            onChange={(e) => setNewTicket({ ...newTicket, issueType: e.target.value })}
          >
            <option value="">Select an issue type</option>
            <option value="technical">Technical</option>
            <option value="billing">Billing</option>
            <option value="general">General</option>
          </select>
        </div>
        <div className="cs-form-group">
          <label className="cs-label" htmlFor="description">Description:</label>
          <textarea
            id="description"
            className="cs-textarea"
            value={newTicket.description}
            onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
          ></textarea>
        </div>
        <div className="cs-form-group">
          <label className="cs-label" htmlFor="priority">Priority:</label>
          <select
            id="priority"
            className="cs-select"
            value={newTicket.priority}
            onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button className="cs-submit-button" onClick={handleSubmitTicket}>
          Submit Ticket
        </button>
      </div>

      {/* Ticket Status Tracking */}
      <div className="cs-ticket-list">
        <h2>Support Tickets</h2>
        <div className="cs-ticket-filters">
          <select className="cs-select" onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <input
            type="text"
            className="cs-input"
            placeholder="Search by description"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="cs-ticket-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Issue Type</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchedTickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.issueType}</td>
                <td>{ticket.description}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.status}</td>
                <td>
                  {ticket.status === 'pending' && (
                    <button className="cs-update-button" onClick={() => updateTicketStatus(ticket.id, 'in-progress')}>
                      Mark as In Progress
                    </button>
                  )}
                  {ticket.status === 'in-progress' && (
                    <button className="cs-update-button" onClick={() => updateTicketStatus(ticket.id, 'resolved')}>
                      Mark as Resolved
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contact Support */}
      <div className="cs-contact-support">
        <h2>Contact Support</h2>
        <p>
          Email: support@example.com <br />
          Phone: 1-800-123-4567
        </p>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
