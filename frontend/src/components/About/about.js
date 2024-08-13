import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>About Us</h1>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h1 style={styles.sectionTitle}>Welcome to Our Yoga and Sports Event Platform</h1>
          <p style={styles.sectionContent}>
            Our platform connects yoga enthusiasts and sports lovers with events and activities tailored to their interests.
            Whether you're looking for a local yoga class, a marathon to train for, or a workshop to enhance your skills,
            we have something for everyone.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionContent}>
            We aim to promote a healthy lifestyle by providing easy access to a wide range of yoga and sports events.
            Our goal is to foster a supportive community and help individuals achieve their wellness goals through
            engaging and accessible events.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Team</h2>
          <p style={styles.sectionContent}>
            We are a team of passionate individuals who believe in the power of yoga and sports to transform lives.
            Our diverse team includes experienced event organizers, fitness experts, and dedicated community builders.
          </p>
        </section>
      </main>
      <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; 2024 Yoga and Sports Event Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#e0f2f1',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    backgroundColor: '#009688',
    color: 'white',
    padding: '15px 0',
    textAlign: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  headerTitle: {
    margin: '0',
    fontSize: '2.5rem',
    letterSpacing: '0.05em',
  },
  main: {
    padding: '20px',
  },
  section: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  sectionTitle: {
    marginTop: '0',
    fontSize: '1.8rem',
    color: '#00796b',
  },
  sectionContent: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  footer: {
    textAlign: 'center',
    padding: '15px 0',
    backgroundColor: '#00796b',
    color: 'white',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
  },
  footerText: {
    margin: '0',
    fontSize: '0.9rem',
  },
};

export default About;
