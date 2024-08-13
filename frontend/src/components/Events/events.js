import React from 'react';

const events = [
  {
    id: 1,
    name: 'Yoga Retreat',
    link: 'https://example.com/yoga-retreat',
    photo: 'https://via.placeholder.com/300?text=Yoga+Retreat',
  },
  {
    id: 2,
    name: 'Marathon 2024',
    link: 'https://example.com/marathon-2024',
    photo: 'https://via.placeholder.com/300?text=Marathon+2024',
  },
  {
    id: 3,
    name: 'Meditation Workshop',
    link: 'https://example.com/meditation-workshop',
    photo: 'https://via.placeholder.com/300?text=Meditation+Workshop',
  },
];

const Event = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Upcoming Events</h1>
      <div style={styles.eventList}>
        {events.map(event => (
          <div key={event.id} style={styles.eventCard}>
            <img src={event.photo} alt={event.name} style={styles.eventImage} />
            <div style={styles.cardContent}>
              <h2 style={styles.eventName}>{event.name}</h2>
              <a href={event.link} style={styles.eventLink} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'linear-gradient(to right, #e0f2f1, #f5f5f5)',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem',
    color: '#00796b',
    marginBottom: '20px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  },
  eventsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    },
  },
  eventImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderBottom: '5px solid #009688',
  },
  cardContent: {
    padding: '15px',
    background: 'linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
    borderTop: '2px solid #00796b',
  },
  eventName: {
    fontSize: '1.5rem',
    margin: '10px 0',
    color: '#00796b',
    fontWeight: '600',
  },
  eventLink: {
    display: 'inline-block',
    marginBottom: '10px',
    color: '#009688',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderRadius: '5px',
    border: '2px solid #009688',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
      backgroundColor: '#009688',
      color: '#fff',
    },
  },
};

export default Event;
