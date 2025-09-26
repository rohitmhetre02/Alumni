import React, { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { QRCodeCanvas } from "qrcode.react";
import { 
  FaHeart, FaBook, FaGlobe, FaMedkit, FaClock, FaFacebook, 
  FaTwitter, FaLinkedin, FaSearch, FaFilter, FaPlus, FaGraduationCap 
} from "react-icons/fa";

function AluminiEvent() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    link: "",
    schedule: "",
  });

  const [qr, setQr] = useState("")  

  useEffect(()=>{
  setQr(`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Aharnish`)
  },[formData.name])


  const [events, setEvents] = useState([
    {
      title: "Annual Alumni Networking Gala",
      date: "2024-09-15",
      time: "19:00",
      location: "Grand Ballroom, Hilton Hotel",
      price: "$75",
      category: "Networking",
      attendees: 250,
      description:
        "Join us for an evening of networking, reconnecting with old friends, and making new connections. Enjoy gourmet food, drinks, and live entertainment.",
      speakers: ["Jane Doe, CEO of TechCorp", "John Smith, Founder of StartUp Inc."],
      deadline: "2024-09-01",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=870&q=80",
    },
  ]);

  const [lastCreatedEvent, setLastCreatedEvent] = useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: formData.name,
      date: formData.date,
      time: formData.schedule,
      location: formData.link,
      price: "Free",
      category: "Custom",
      attendees: 0,
      description: "Newly added event.",
      speakers: [],
      deadline: formData.date,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=870&q=80",
    };
    setEvents([...events, newEvent]);
    setLastCreatedEvent(newEvent); // store the last created event
    setFormData({ name: "", date: "", link: "", schedule: "" });
    setShowForm(false);
  };



  return (
    <div>
      {/* Header */}
      <div className="bg-primary text-white text-center p-5">
        <h1>Events and Reunions</h1>
        <p>
          Seamless access to networking, career opportunities, and alumni events
          through web and mobile apps will strengthen connections among alumni.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="container mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 p-3 bg-light rounded shadow-sm gap-2">
        <input
          type="text"
          placeholder="Search events by title or description..."
          className="form-control w-75 me-2"
        />
        <button className="btn btn-outline-primary d-flex align-items-center">
        <FaFilter className="me-1" /> Filter
        </button>
        <button
          className="btn btn-success"
          onClick={() => setShowForm(!showForm)}
        >
          + Create Event
        </button>
      </div>

      {/* Create Event Form */}
      {showForm && (
        <div className="container mb-4">
          <div className="card p-4">
            <h5>Create New Event</h5>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label className="form-label">Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Schedule (Time)</label>
                <input
                  type="time"
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={() => setLastCreatedEvent(!lastCreatedEvent)}>
                Save Event
              </button>
            </form>
            <div>
              <img className="mt-3" src={qr} alt="img"></img>
            </div>
          </div>
        </div>
      )}

 

      {/* Events Section */}
      <div className="container">
        <div className="row">
          {events.map((event, index) => (
            <div className="col-12 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={event.image}
                      className="img-fluid rounded-start"
                      alt={event.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{event.title}</h5>
                      <p className="text-muted">
                        📅 {event.date} ⏰ {event.time}
                      </p>
                      <p>📍 {event.location}</p>
                      <p>{event.price}</p>
                      <span className="badge bg-info me-2">{event.category}</span>
                      <span className="badge bg-success">
                        {event.attendees} attendees
                      </span>
                      <p className="mt-2">{event.description}</p>
                      {event.speakers.length > 0 && (
                        <p>
                          <strong>Speakers:</strong> {event.speakers.join(", ")}
                        </p>
                      )}
                      <p className="text-muted">
                        Registration deadline: {event.deadline}
                      </p>
                      <button className="btn btn-secondary" disabled>
                        Registration Closed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AluminiEvent; 