import React from "react";

class Visitor extends React.Component {
  render() {
    let imgGallery = [
      { src: './Images/s1.jpeg', title: 'Stranger Things', link: 'https://www.youtube.com/watch?v=U2Qp5pL3ovA' },
      { src: './Images/s2.jpeg', title: 'Alice in Borderland', link: 'https://www.youtube.com/watch?v=JlG4TOVZEHI' },
      { src: './Images/s3.jpeg', title: 'Kaala Paani', link: 'https://www.youtube.com/watch?v=opGD_YmHwdk' },
      { src: './Images/s4.jpeg', title: 'Farzi', link: 'https://www.youtube.com/watch?v=2sX0lElZKQE' },
      { src: './Images/s5.jpeg', title: 'The Family Man', link: 'https://www.youtube.com/watch?v=Qah9sSIXJqk' }
    ];

    let upcomingMovies = [
      { src: './Images/sup1.jpeg', title: 'The Boys', link: 'https://www.example.com' },
      { src: './Images/sup2.jpeg', title: 'House of the Dragon', link: 'https://www.example.com' },
      { src: './Images/sup3.jpeg', title: 'All of us are Dead', link: 'https://www.example.com' },
      { src: './Images/sup4.jpeg', title: 'Indian Police Force', link: 'https://www.example.com' },
      { src: './Images/sup5.jpeg', title: 'Hostel Days', link: 'https://www.example.com' }
    ];

    const backgroundImageStyle = {
      // backgroundImage: `url('./Images/bg1.png')`,
      backgroundColor: "#B0E0E6",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Adjust as needed
      padding: '20px' // Add padding to center content
    };

    return (
      <div style={backgroundImageStyle}>
        <center>
          <h1>Trending Series</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {imgGallery.map((item, index) => (
              <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.src} alt="Images" height="250" width="250" style={{ border: "solid" }} />
                </a>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <h1>Upcoming Series</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {upcomingMovies.map((item, index) => (
              <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.src} alt="Images" height="250" width="250" style={{ border: "solid" }} />
                </a>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </center>
      </div>
    );
  }
}

export default Visitor;
