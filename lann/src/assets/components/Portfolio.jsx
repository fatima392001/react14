import React from 'react';


const Portfolio = () => {
  const portfolioItems = [
    { img: 'src/assets/pic/Cabin.png', title: 'Cabin' },
    { img: 'src/assets/pic/Cake.png', title: 'Cake' },
    { img: 'src/assets/pic/Circus.png', title: 'Circus' },
    { img: 'src/assets/pic/Submarine.png', title: 'Submarine' },
    { img: 'src/assets/pic/Safe.png', title: 'Safe' },
    { img: 'src/assets/pic/Submarine.png', title: 'Submarine' },
  ];

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          {portfolioItems.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-5" key={index}>
              <div className="portfolio-item mx-auto">
                <img className="img-fluid" src={item.img} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
