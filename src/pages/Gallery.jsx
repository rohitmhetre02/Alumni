// src/pages/Gallery.jsx
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import student1 from "../assets/101.jpg";
import student2 from "../assets/102.jpg";
import student3 from "../assets/103.jpg";
import student4 from "../assets/101.jpg";

import "../styles/Gallery.css";

// Reusing student images for gallery
const images = [student1, student2, student3, student4, student2, student3];

export default function Gallery() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setSelectedImage(img);
    setShow(true);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">📷 Alumni Gallery</h2>
        <p className="text-center text-muted mb-5">
          Memories from our alumni community – celebrations, reunions & more.
        </p>

        {/* Gallery Grid */}
        <div className="row g-4">
          {images.map((img, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <div
                className="gallery-item shadow-sm"
                onClick={() => handleShow(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for image preview */}
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Body className="p-0">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-100 rounded"
            />
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}
