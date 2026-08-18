import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px 20px', direction: 'rtl' }}>
      <h1 style={{ color: '#0056b3', fontSize: '2.5rem' }}>موقع نبض العالم 🌍</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '10px' }}>
        مرحباً بك في موقع نبض العالم الأخبري الشامل.
      </p>
      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>أحدث الأخبار</h2>
        <p>تابعنا للحصول على التحديثات العاجلة والأخبار اليومية.</p>
      </div>
    </div>
  );
}
