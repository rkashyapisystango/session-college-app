
import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import { Card, CardText, CardBody,CardTitle } from 'reactstrap';
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";
import { featureContent } from './constant';
import { HomePageContainer } from './style';
import Slide1 from '../../assets/img/slide1.jpg'

function Home() {
  return (
    <HomePageContainer>
        <Header />
            <Container fluid className="slider-wrap">
                <img className="img-fluid" src={Slide1} alt="slide" />
            </Container>
            <Container className="card-wrapper">
                <Row>             
                    {
                        featureContent && featureContent.map((item, index) => {
                            return <Col xs="6" sm="6" md="4"  key={index}>
                                        <Card className="text-center">
                                            <CardBody>    
                                                <img src={item.imageUrl} alt=""/>                        
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardText>{item.subTitle}</CardText>            
                                            </CardBody>
                                        </Card>
                                    </Col>
                        })
                    }
                </Row>
            </Container>
        <Footer />
    </HomePageContainer>
  );
}

export default Home;
