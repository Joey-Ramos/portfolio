import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import Stockyards from '/Users/joey/Desktop/projects/portfolio/src/Assets/Images/stockyards.jpeg';

function Contact() {


    return (
        <div className="contact">
            <h1 className="contact-title">Contact Me</h1>
            <Container fluid>
                <Row xs={1} md={2} className="g-4 justify-content-center">
                    <Card className="bg-dark text-white" >
                        <Card.Img src={Stockyards} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" >
                        <Card.Img src={Stockyards} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </Container>

        </div>
    )
}

export default Contact;