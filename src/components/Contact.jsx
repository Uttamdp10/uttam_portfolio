import { Container, Row, Col } from "react-bootstrap";
import ft from "../assets/img/ft.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({}) =>
                <img src={ft} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form action="https://formsubmit.co/uttampatel.6048@gmail.com" method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="FIRST NAME" placeholder="First Name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  name="LAST NAME" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="EMAIL"  placeholder="Email Address" required  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="PHONE NO"  placeholder="Phone No." required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="MESSAGE" placeholder="Message" required></textarea>
                <button type="submit"><span>SEND</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
