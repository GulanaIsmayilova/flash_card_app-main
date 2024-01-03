import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, email, content }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        console.log('Message submitted successfully!');
      } else {
        setSubmissionStatus('error');
        console.error('Failed to submit message.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error during message submission:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submissionStatus === 'success' && (
        <p style={{ color: 'green' }}>Message submitted successfully!</p>
      )}
      {submissionStatus === 'error' && (
        <p style={{ color: 'red' }}>Failed to submit message. Please try again.</p>
      )}
    </div>
  );
};

export default ContactForm;