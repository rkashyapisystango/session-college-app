
import React from 'react';
import { Button } from 'reactstrap';
import CenterLogo from '../../assets/img/utd_logo.png';
import { HomeContainer, BottomContainer, CenterLogoDiv } from './style';
import { ImageContainer } from '../../shared-style';


function Splash() {
  return (
    <HomeContainer>
    	<ImageContainer>
    		<CenterLogoDiv>
    			<img src={CenterLogo} alt="home logo" />
    		</CenterLogoDiv>
    		<BottomContainer>
    			<Button className="blue-button">Get Started</Button>
	      		<Button className="white-button">Login</Button>
    		</BottomContainer>      
	    </ImageContainer>
    </HomeContainer>
  );
}

export default Splash;
