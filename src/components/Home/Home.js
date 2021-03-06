import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar.png";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there! <span className="wave" role="img" aria-labelledby="wave">šš»</span>
              </h1>
              <h1 className="heading-name">
              I am K S.              
              </h1>
              <br /> <br /> 
              š± Iām currently learning coding.
              <br /> <br /> 
              šļø Iām looking to collaborate on coding ideas.
              <br /> <br />              
              <p> š« You can reach me at - 
                <a href="mailto:ks@gmail.com"> K S email </a> </p>               
              <br /> <br /> 
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>    
    </section>
  );
}

export default Home;
