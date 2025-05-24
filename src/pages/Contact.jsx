import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer here
import 'react-toastify/dist/ReactToastify.css';

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', '1e565e12-8ae1-4f70-b131-62bb20d4f6cb');

    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error('Network error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="content">
        {/* 3D Cube */}
        <div className="cube-wrapper" aria-label="3D rotating cube animation">
          <div className="cube">
            <div className="face face-front">✉️</div>
            <div className="face face-back">📞</div>
            <div className="face face-right">💬</div>
            <div className="face face-left">📨</div>
            <div className="face face-top">📩</div>
            <div className="face face-bottom">📧</div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="form" onSubmit={handleSubmit} noValidate>
          <h2>Contact Me</h2>
          <p>Have a project or idea? I’d love to hear about it.</p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={loading}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            disabled={loading}
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* ToastContainer is essential to show toast messages */}
      <ToastContainer />

      <style>{`
        /* Container & Layout */
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          font-family: 'Inter', system-ui, sans-serif;
          color: #e0e6f1;
        }
        .content {
          max-width: 900px;
          background: #121a2a;
          border-radius: 1rem;
          box-shadow: 0 15px 40px rgba(15, 32, 39, 0.6);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 3rem;
        }
        @media (max-width: 768px) {
          .content {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }

        /* 3D Cube Wrapper */
        .cube-wrapper {
          perspective: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Cube */
        .cube {
          position: relative;
          width: 180px;
          height: 180px;
          transform-style: preserve-3d;
          animation: rotateCube 15s linear infinite;
          cursor: default;
        }

        /* Cube Faces */
        .face {
          position: absolute;
          width: 180px;
          height: 180px;
          background: linear-gradient(145deg, #6a11cb, #2575fc);
          border-radius: 20px;
          box-shadow:
            inset 0 0 25px rgba(255 255 255 / 0.3),
            0 15px 30px rgba(38, 117, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4.5rem;
          color: #e0e6f1;
          user-select: none;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .face:hover {
          background: linear-gradient(145deg, #834dff, #40c4ff);
          box-shadow:
            inset 0 0 40px rgba(255 255 255 / 0.5),
            0 18px 40px rgba(64, 196, 255, 0.7);
        }

        /* Position faces */
        .face-front  { transform: translateZ(90px); }
        .face-back   { transform: rotateY(180deg) translateZ(90px); }
        .face-right  { transform: rotateY(90deg) translateZ(90px); }
        .face-left   { transform: rotateY(-90deg) translateZ(90px); }
        .face-top    { transform: rotateX(90deg) translateZ(90px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(90px); }

        /* Animation */
        @keyframes rotateCube {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        /* Form */
        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .form h2 {
          font-size: 2.75rem;
          margin-bottom: 0.75rem;
          font-weight: 800;
          color: #cbd5e1;
          text-shadow: 0 0 6px rgba(106, 17, 203, 0.6);
        }
        .form p {
          font-size: 1.2rem;
          margin-bottom: 2.25rem;
          color: #94a3b8;
        }
        .form input,
        .form textarea {
          background: #1e293b;
          border: 1.8px solid #334155;
          border-radius: 14px;
          padding: 1.15rem 1.5rem;
          font-size: 1.05rem;
          margin-bottom: 1.75rem;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          resize: none;
          color: #e0e6f1;
          font-weight: 600;
          caret-color: #7dd3fc;
        }
        .form input::placeholder,
        .form textarea::placeholder {
          color: #64748b;
          font-weight: 500;
        }
        .form input:focus,
        .form textarea:focus {
          outline: none;
          border-color: #7dd3fc;
          box-shadow: 0 0 10px 3px rgba(125, 211, 252, 0.7);
          background: #283549;
        }
        .form input:disabled,
        .form textarea:disabled {
          background: #334155;
          cursor: not-allowed;
          color: #94a3b8;
        }

        /* Button */
        .form button {
          background: linear-gradient(135deg, #7b2ff7, #f107a3);
          color: #f0f4f8;
          border: none;
          border-radius: 18px;
          padding: 1.4rem 0;
          font-size: 1.2rem;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.35s ease, box-shadow 0.35s ease;
          box-shadow: 0 8px 20px rgba(123, 47, 247, 0.7);
          user-select: none;
          letter-spacing: 1.1px;
        }
        .form button:hover:not(:disabled) {
          background: linear-gradient(135deg, #f107a3, #7b2ff7);
          box-shadow: 0 10px 30px rgba(241, 7, 163, 0.85);
        }
        .form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}

export default ContactPage;
