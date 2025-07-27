import React from 'react';

function PilotCard(props) {
  const { name, airline, ratings, funfact, imageUrl } = props;
  const [showTypeRating, setshowTypeRating] = React.useState(false);

  const toggleTypeRating = () => {
    setshowTypeRating(!showTypeRating);
  };

  return (
     <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h1 style={{ margin: '0', fontSize: '22px' }}>{name}</h1>
      <h2 style={{ margin: '4px 0', fontSize: '16px' }}>{airline}</h2>
      <p style={{ margin: '4px 0', fontSize: '12px' }}>{funfact}</p>
      <button onClick={toggleTypeRating} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#999999',
        color: 'white'
      }}>
        {showTypeRating ? 'Hide Type Ratings' : 'Show Type Ratings'}
      </button>
      {showTypeRating && <p style={{ marginTop: '16px', fontSize: '14px' }}>{ratings}</p>}
    </div>
  );
}

export default PilotCard;
