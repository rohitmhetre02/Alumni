import React from 'react';
import { 
  FaHeart, FaBook, FaGlobe, FaMedkit, FaClock, FaFacebook, 
  FaTwitter, FaLinkedin, FaSearch,FaSmile, FaFilter, FaPlus, FaGraduationCap 
} from "react-icons/fa";
import { useState } from 'react';

// --- Sample Data ---
const initialCampaigns = [
  {
    id: 1,
    title: 'Gyan Sarathi: Empowering Rural Students',
    description: 'Provide educational resources and scholarships to underprivileged students in rural areas.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c7c5?q=80&w=1770&auto=format&fit=crop',
    amountRaised: 85000,
    goal: 150000,
    daysLeft: 45,
  },
  {
    id: 2,
    title: 'Anveshan: Innovation Lab Expansion',
    description: 'Funding the expansion of our community-based innovation and technology lab for youth.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop',
    amountRaised: 190000,
    goal: 300000,
    daysLeft: 60,
  },
  {
    id: 3,
    title: 'Swacchh aur Harit Campus Abhiyan',
    description: 'A drive to make university campuses green, sustainable, and entirely plastic-free.',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1547826039-bfc31737f223?q=80&w=1771&auto=format&fit=crop',
    amountRaised: 40000,
    goal: 60000,
    daysLeft: 15,
  },
  {
    id: 4,
    title: 'Gram Swasthya Abhiyan',
    description: 'Mobile health clinics and essential medicine distribution for remote villages.',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1538108149393-27017de6aee7?q=80&w=1770&auto=format&fit=crop',
    amountRaised: 210000,
    goal: 250000,
    daysLeft: 20,
  },
];

 const paymentMethods = [
    {
      name: 'Credit/Debit Card',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></svg>
      ),
      description: 'Visa, Mastercard, Amex',
    },
    {
      name: 'PayPal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h14a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h14v-3" /><path d="M2 17h20" /></svg>
      ),
      description: 'Pay via your PayPal account',
    },
    {
      name: 'Apple Pay',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c.34-.14.73-.24 1.15-.28A4.9 4.9 0 0 0 17 19c-.48-1.55 0-3.1 1-4.25-.43-.16-.92-.25-1.4-.29-1.3-.1-2.43-.88-3.08-2.02a4.93 4.93 0 0 0-1.5-1.3c-.63-.37-1.3-.57-2-.66a3.52 3.52 0 0 0-1.74.07c-.4.1-.78.22-1.15.34-1.28.42-2.3 1.57-2.9 2.92a7.6 7.6 0 0 0-1.25 4.35 11.23 11.23 0 0 0 .1 1.77c.3 1.02.7 1.96 1.15 2.87.16-.1.35-.2.53-.3a5.2 5.2 0 0 1 1.57-.96 4.9 4.9 0 0 1 2.5-1.16c.8-.08 1.56.02 2.25.3.4.15.78.33 1.15.54Zm-1.8-6.1c.14-1.2.6-2.3 1.3-3.2-.23.1-.47.2-.7.3-1.07.4-2 1.4-2.5 2.5a3.8 3.8 0 0 0-.27 1.6 3.7 3.7 0 0 0 1.25 2.1c.4-.2.83-.34 1.27-.47a3.4 3.4 0 0 0 1.2-.4c.3-.12.6-.28.9-.45.47-.28.93-.56 1.35-.85a5.13 5.13 0 0 1 1.04-1.2c-.37-.7-.78-1.4-1.2-2.1-.37-.6-1.02-1.1-1.7-1.5-.7-.4-1.5-.6-2.3-.6a4.5 4.5 0 0 0-1.7.3ZM12 2a4 4 0 0 0-3.3 2.15c.32.22.65.46.96.72.6.5 1.2 1.04 1.7 1.6l.08.1.08.1c.42.5.76 1.04 1.05 1.6a1.5 1.5 0 0 0 .5.76 1.47 1.47 0 0 0 .8.24c.4 0 .78-.1 1.1-.3.3-.2.6-.4.9-.7.4-.5.8-1 1.1-1.6.4-.6.8-1.2 1.1-1.9.1-.3.2-.6.3-.9A4 4 0 0 0 12 2Z" /></svg>
      ),
      description: 'Pay with Apple Pay',
    },
    {
      name: 'Google Pay',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan-face"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M8 10v.01" /><path d="M16 10v.01" /><path d="M12 15h.01" /><path d="M12 18h.01" /><path d="M12 12v.01" /></svg>
      ),
      description: 'Pay with Google Pay',
    },
  ];

 

// --- Helper Function ---
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Education': return <FaGraduationCap className="me-1 text-primary" />;
    case 'Health': return <FaMedkit className="me-1 text-danger" />;
    case 'Technology': return <FaBook className="me-1 text-warning" />;
    case 'Environment': return <FaGlobe className="me-1 text-success" />;
    default: return null;
  }
};

// --- Navbar Component ---
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0D6EFD' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        </div>
      </div>
    </nav>
  );
};

// --- Campaign Item Component ---
const CampaignItem = ({ campaign }) => {
  const { image, title, description, category, amountRaised, goal, daysLeft } = campaign;
  const progressPercent = Math.min(100, (amountRaised / goal) * 100).toFixed(0);
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

 const handlePayNowClick = () => {
   setIsModalOpen(true);    
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMethod(null); // Reset selection on close
  };

  // Function to handle the selection of a payment method
  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  // Function to handle the "Proceed to Payment" action
  const handleProceedToPayment = () => {
    if (selectedMethod) {
      console.log('Proceeding to payment with:', selectedMethod);
      // Here you would integrate with the actual payment gateway
      handleCloseModal();
    }
  };


  
  return (
    <div className="list-group-item list-group-item-action mb-4 p-3 border-0 shadow-sm rounded-3">
      <div className="row g-0 align-items-center">
        {/* Image */}
        <div className="col-md-3">
          <img 
            src={image} 
            alt={title} 
            className="img-fluid rounded-start w-100" 
            style={{ height: '180px', objectFit: 'cover' }}
          />
        </div>

        {/* Details */}
        <div className="col-md-9 ps-4">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="mb-1 text-truncate fw-bold" style={{ color: '#2c3e50' }}>{title}</h5>
            <button className="btn btn-success btn-sm d-flex align-items-center"
            onClick={() => setShowForm(!showForm)}>
              <FaHeart className="me-1" /> Donate
            </button>
          </div>

          {showForm && (
        <div className="container mb-4">
          <div className="card p-4">
            
            <form >
              <div className="mb-3">
                <label className="form-label">Enter Full Name</label>
                <input
                  type="text"
                  name="Name"
                  className="form-control"
                  
                />
                <label className="form-label">Amount to Donate</label>
                <input
                  type="number"
                  name="Amount"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit"
              id="DonateBtn"
              className="btn btn-primary text-white justify-content-center btn-outline-primary d-flex align-items-center"
              onClick={handlePayNowClick}
             >
                Donate
                <FaSmile className='m-1'></FaSmile>
              </button>
            </form>
            
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 shadow-lg p-2">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title w-100 text-center fw-bold text-dark">Choose Your Payment Method</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  {paymentMethods.map((method) => (
                    <div className="col-12 col-sm-6" key={method.name}>
                      <div
                        onClick={() => handleMethodSelect(method.name)}
                        className={`card h-100 border-2 rounded-3 p-3 cursor-pointer ${selectedMethod === method.name ? 'border-primary bg-primary bg-opacity-10' : ''}`}
                        style={{ transition: 'all 0.2s', cursor: 'pointer' }}
                      >
                        <div className="d-flex align-items-center">
                          <div className={`p-3 rounded-2 me-3 text-white ${
                            method.name === 'PayPal' && 'bg-primary'
                          } ${
                            method.name === 'Credit/Debit Card' && 'bg-warning'
                          } ${
                            method.name === 'Apple Pay' && 'bg-dark'
                          } ${
                            method.name === 'Google Pay' && 'bg-success'
                          }`}>
                            {method.icon}
                          </div>
                          <div>
                            <h6 className="mb-0 fw-bold text-dark">{method.name}</h6>
                            <small className="text-muted">{method.description}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer border-0 pt-0 d-flex justify-content-between">
                <button
                  onClick={handleCloseModal}
                  className="btn btn-link text-decoration-none text-muted"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProceedToPayment}
                  disabled={!selectedMethod}
                  className="btn btn-primary btn-lg shadow-sm"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


          <p className="mb-2 text-muted small">{description}</p>

          {/* Badges */}
          <div className="mb-2 d-flex flex-wrap gap-2">
            <span className="badge bg-light text-secondary border rounded-pill p-2 small d-flex align-items-center">
              {getCategoryIcon(category)}
              {category}
            </span>
            <span className="badge bg-light text-secondary border rounded-pill p-2 small d-flex align-items-center">
              <FaClock className="me-1" /> {daysLeft} days left
            </span>
          </div>

          {/* Progress Bar */}
          <div className="progress mb-2" style={{ height: '8px' }}>
            <div 
              className="progress-bar bg-primary progress-bar-striped progress-bar-animated" 
              role="progressbar" 
              style={{ width: `${progressPercent}%` }} 
              aria-valuenow={progressPercent} 
              aria-valuemin="0" 
              aria-valuemax="100"
            ></div>
          </div>

          {/* Funding Status */}
          <div className="d-flex justify-content-between small fw-bold">
            <span className="text-primary">Raised: ₹{amountRaised.toLocaleString()}</span>
            <span className="text-success">Goal: ₹{goal.toLocaleString()}</span>
            <span className="text-muted">{progressPercent}% Achieved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Campaign List Component ---
const CampaignList = () => {
  return (
    <div>
      {/* Top Bar: Search + Actions */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 p-3 bg-light rounded shadow-sm gap-2">
        <div className="input-group mb-2 mb-md-0" style={{ maxWidth: '400px' }}>
          <input type="text" className="form-control" placeholder="Search campaigns..." />
          <button className="btn btn-outline-secondary" type="button"><FaSearch /></button>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary d-flex align-items-center">
            <FaFilter className="me-1" /> Filter
          </button>
          <button className="btn btn-success d-flex align-items-center">
            <FaPlus className="me-1" /> Create Project
          </button>
        </div>
      </div>

      {/* Campaign Items */}
      <div className="list-group">
        {initialCampaigns.map((campaign) => (
          <CampaignItem key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

// --- Main Component ---
const AluminiCampaign = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow-1">
        <div className="py-5 text-white" style={{ backgroundColor: '#0D6EFD' }}>
          <div className="container ">
            <h1 className="bold mb-2 d-flex justify-content-center">Fundraising Campaigns</h1>
            <p className="50 d-flex justify-content-center">
              Browse our ongoing campaigns and help us make a difference.
            </p>
          </div>
        </div>

        {/* Campaign List */}
        <div className="container py-5">
          <CampaignList />
        </div>
      </main>
    </div>
  );
};

export default AluminiCampaign;
