import React from "react";

class Counseller extends React.Component {

  
  render() {
    let imgGallery = [
      { src: './Images/img1.jpeg', title: 'DUNE 2', link: 'https://www.youtube.com/watch?v=U2Qp5pL3ovA' },
      { src: './Images/img2.jpeg', title: 'SALAAR', link: 'https://www.youtube.com/watch?v=JlG4TOVZEHI' },
      { src: './Images/img3.jpeg', title: 'OORU PERU', link: 'https://www.youtube.com/watch?v=opGD_YmHwdk' },
      { src: './Images/img4.jpeg', title: 'EAGLE', link: 'https://www.youtube.com/watch?v=2sX0lElZKQE' },
      { src: './Images/img5.jpeg', title: 'KGF 2', link: 'https://www.youtube.com/watch?v=Qah9sSIXJqk' }
    ];

    let upcomingMovies = [
      { src: './Images/up1.jpeg', title: 'KALKI 2898 AD', link: 'https://www.youtube.com/watch?v=bC36d8e3bb0&t=6s' },
      { src: './Images/up2.jpeg', title: 'OG', link: 'https://www.youtube.com/watch?v=7Y5q41D8_hs' },
      { src: './Images/up3.jpeg', title: 'DEVARA', link: 'https://www.youtube.com/watch?v=rc61YHl1PFY' },
      { src: './Images/up4.jpeg', title: 'GAME CHANGER', link: 'https://www.youtube.com/watch?v=E3_cz3uv43c' },
      { src: './Images/up5.jpeg', title: 'PUSHPA THE RULE', link: 'https://www.youtube.com/watch?v=08cfjZNKZbQ' }
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
          <select>
            <option>Select genre</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Horror</option>
          </select>
          <h1>Trending</h1>
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
          <h1>Upcoming movies</h1>
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

export default Counseller;
