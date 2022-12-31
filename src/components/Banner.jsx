import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import sde from "../assets/img/sde.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Competitive Programmer", "Enthusiastic Learner"];
    const [text, setText] = useState('');
    const [, setIndex] = useState(1);
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Uttam Patel `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Competitive Programmer", "Enthusiastic Learner" ]'><span className="wrap">{text}</span></span></h1>
                        <p>{`I am currently a 3rd Year Electronics Engineering student at RCOEM, Nagpur. Working towards enhancing my skills in field on Web Development, Data Science and Blockchain Technology due to my core interest in computer science fields.`}</p>
                        <a href="mailto:uttampatel.6048@gmail.com" target="_blank" rel="noreferrer">
                        <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>
                        </a>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
	                    {({ }) =>
	                        <div>
	                        <img src={sde} alt="sde"/>
	                        </div>}
	                    </TrackVisibility>

                    </Col>
                </Row>
            </Container>
        </section>         
    )
    }