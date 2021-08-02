import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import callItANight from '/Users/joey/Desktop/projects/portfolio/src/Assets/Images/callitanight.png';
// import readingNook from '../../assets/images/the-reading-nook.png';
import movieLot from '/Users/joey/Desktop/projects/portfolio/src/Assets/Images/movielot.png';


function Project() {
    

    return (
        <div>
            <h1 className='projects'>Projects</h1>
            <Row xs={1} md={2} className="g-4">
                <Card className='project-card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={callItANight} />
                    <Card.Body>
                        <Card.Title>Call It a Night</Card.Title>
                        <Card.Text>
                            Call it a Night(CIAN) is a research tool for making the perfect date night possible!
                        </Card.Text>
                        <Button href="https://christopherconcannon.github.io/call-it-a-night/" variant="secondary">Deployed Site</Button>
                        <Button variant="dark">GitHub</Button>
                    </Card.Body>
                </Card>
                <Card className='project-card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movieLot} />
                    <Card.Body>
                        <Card.Title>MovieLot</Card.Title>
                        <Card.Text>
                            As movie lovers, we wanted an app that would introduce us to new and old movies to change our normal variety. Then save the movies to remind us to watch them.
                        </Card.Text>
                        <Button href="https://movielot.herokuapp.com/" variant="secondary">Deployed Site</Button>
                        <Button variant="dark">GitHub</Button>
                    </Card.Body>
                </Card>
                <Card className='project-card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movieLot} />
                    <Card.Body>
                        <Card.Title>MovieLot</Card.Title>
                        <Card.Text>
                            As movie lovers, we wanted an app that would introduce us to new and old movies to change our normal variety. Then save the movies to remind us to watch them.
                        </Card.Text>
                        <Button href="https://movielot.herokuapp.com/" variant="secondary">Deployed Site</Button>
                        <Button variant="dark">GitHub</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default Project;