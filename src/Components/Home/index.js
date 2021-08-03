import React from 'react'
import Card from 'react-bootstrap/Card'
import dallasSkyline from '/Users/joey/Desktop/projects/portfolio/src/Assets/Images/dallasskyline.jpg'

function Home() {
    
    return (
        <div className='min-vh-100'>
            <Card className="bg-dark text-white min-vh-100">
                <Card.Img className='min-vh-100' src={dallasSkyline} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Hello, I'm Joseph</Card.Title>
                    <Card.Text>
                        Full Stack Developer based out of Dallas/Ft. Worth who enjoys building Web Apps and 
                        bringing them to life.
                    </Card.Text>
                    <Card.Footer style={{position: 'absolute', bottom: 0}}>
                        <div className="footerContainer">
                            <div className='footerNameTitle'>
                                <p>Joseph Ramos, 2021</p>
                            </div>
                            <div className='social-links'>
                                <a></a>
                                <a></a>
                                <a></a>
                                <a></a>
                            </div>
                        </div>
                        </Card.Footer>
                </Card.ImgOverlay>
            </Card>
        </div>

    )
}

export default Home;