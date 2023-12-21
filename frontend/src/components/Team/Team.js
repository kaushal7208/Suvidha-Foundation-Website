import React from 'react'
import './Team.css'
function Team() {
  return (
    <div>
        <h3>Meet Our Team</h3>
        <h1>Awesome guys behind our charity activites</h1>

        <div className="wrapper">
      <div className="con">
        <div className="img-wrapper"><img src="https://www.suvidhafoundationedutech.org/img/team/Shobha_Motghare.jpeg" /></div>
        <div className="details">
          <h3>Sobha Motgahre</h3>
          <h5>Secretary</h5>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="con">
        <div className="img-wrapper"><img src="https://www.suvidhafoundationedutech.org/img/team/Payal_Badhe.jpg" /></div>
        <div className="details">
          <h3>Payal Badhe</h3>
          <h5>President</h5>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="con">
        <div className="img-wrapper"><img src="https://www.suvidhafoundationedutech.org/img/Bharti_Shendre.jpg" /></div>
        <div className="details">
          <h3>Bharti Shendre</h3>
          <h5>Treasurer</h5>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>

      <div className="con">
        <div className="img-wrapper"><img src="https://www.suvidhafoundationedutech.org/img/Nilima_Kalambe.jpg" /></div>
        <div className="details">
          <h3>Nilima Kalambe</h3>
          <h5>Advisor</h5>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Team
