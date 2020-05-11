
import React from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";
import TextBottomImage from "Shared/ImageList/textBottomImage";
import { campusInfo } from '../CampusLife/constant';
import { OuterBodyDiv } from '../../shared-style';
import { EventsContainer } from './style';

function Events() {
  return ( 
  	<EventsContainer>
		<OuterBodyDiv>   
			<Header />
				<Container>
					<Row>
						<Col className="wrpper-eventbtn">
							<Button className="transparent-skybutton active">Academic</Button>
							<Button className="transparent-skybutton">Cultural</Button>
							<Button className="transparent-skybutton">Social</Button>
							<Button className="transparent-skybutton">Sports</Button>
						</Col>
					</Row>
					<Row>
						<Col className="camp-bottom-listwrap">
							<TextBottomImage listItem={campusInfo}/>							
						</Col>
					</Row>
				</Container>        
			<Footer />
		</OuterBodyDiv>
	</EventsContainer>
  );
}

export default Events;
