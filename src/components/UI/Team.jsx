import React from "react";
import "../../styles/team.css";
import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Ericson Gabuya",
    position: "Full Stack Developer",
  },
  {
    imgUrl: team02,
    name: "Lucille Binarao Zuniega",
    position: "Virtual Assistant",
  },
  {
    imgUrl: team03,
    name: "Courtny Hurry",
    position: "Graphic Designer",
  },
  {
    imgUrl: team02,
    name: "Darlene Ejercito",
    position: "Product Developer",
  },
];

const Team = () => {
  return (
    <section>
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
