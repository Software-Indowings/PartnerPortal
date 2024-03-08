import React from 'react';

function Docs() {
  const dummyData = [
    { partnerName: 'IndoWings Pvt. Ltd.', documentTitle: 'Complementary Terms 2023', documentLink: 'https://drive.google.com/drive/folders/1pkksmTWfrDPOAUUpdu5e9SS3czjJp2Gu?usp=sharing', accepted: true, askedDate: '2024-03-01', answeredDate: '2024-03-03' },
      ];

  const containerStyle = {
    margin: '30px',
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '1500px', 
    margin: 'auto',
    backgroundColor: '#f5f5f5',
  };
  

  const thStyle = {
    backgroundColor: '#191b30',
    color: 'white',
    textAlign: 'left',
    padding: '29px',
    border: '1px solid #dddddd',
  };

  const tdStyle = {
    textAlign: 'left',
    padding: '20px',
    border: '1px solid #dddddd',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#191b30' }}>History of Documents</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Partner Name</th>
            <th style={thStyle}>Document Title</th>
            <th style={thStyle}>Document Link</th>
            <th style={thStyle}>Accepted</th>
            <th style={thStyle}>Asked Date</th>
            <th style={thStyle}>Answered Date</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data, index) => (
            <tr key={index}>
              <td style={tdStyle}>{data.partnerName}</td>
              <td style={tdStyle}>{data.documentTitle}</td>
              <td style={tdStyle}><a href={data.documentLink} target="_blank">{data.documentLink}</a></td>
              <td style={tdStyle}>{data.accepted ? 'Yes' : 'No'}</td>
              <td style={tdStyle}>{data.askedDate}</td>
              <td style={tdStyle}>{data.answeredDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Docs;
