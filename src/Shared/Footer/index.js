import React from 'react';
import { Container } from 'reactstrap';
import { FooterDiv, InnerServiceDiv } from './style';
import HomeIcon from '../../assets/img/home.png';
import RunIcon from '../../assets/img/run.png';
import CalenIcon from '../../assets/img/calen.png';
import ChatIcon from '../../assets/img/chat.png';
const FooterPage = (props) => {
	return (
		<FooterDiv className="footer">
		  <Container className="footer-container">
		  	<InnerServiceDiv className="text-center">
		  		<img src={HomeIcon} alt="Home" className="footer-icon"/>
		  		<p>Homes</p>
		  	</InnerServiceDiv>

		  	<InnerServiceDiv>
		  		<img src={RunIcon} alt="Run Icon" className="footer-icon" />
		  		<p>Events</p>
		  	</InnerServiceDiv>

		  	<InnerServiceDiv>
		  		<img src={CalenIcon} alt="Calen Icon" className="footer-icon" />
		  		<p>Calendar</p>
		  	</InnerServiceDiv>

		  	<InnerServiceDiv>
		  		<img src={ChatIcon} alt="Chat Icon" className="footer-icon" />
		  		<p>Chat</p>
		  	</InnerServiceDiv>		   
		  </Container>
		</FooterDiv>
	);
}

export default FooterPage;