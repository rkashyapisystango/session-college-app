import styled from 'styled-components';
import HomeBackImage from "../../assets/img/splash_background_2.png";

export const HomeContainer = styled.div`	
	width: 100%;
	.login-button {
		background: white;
	}
	
`;

export const ImageContainer = styled.div`
	background-image: url(${HomeBackImage});
	background-repeat: no-repeat;
	background-attachment: fixed;
  	background-position: center;
	height: 100vh;
	position: relative;
	// background-size: contain;   

	//width: 50%;
	display: block;
	margin-left: auto;
	margin-right: auto; 
	//background-size: contain;   
	@media (min-width: 320px) and (max-width: 480px) {  
		width: 100%;	
		background-size: cover;
	}	
`;

export const BottomContainer = styled.div`
	
	position:absolute;
	bottom:0;
	right:0;
	left:0;
	text-align:center;
	width: 90%;
	margin: 0 auto;

	.blue-button,
	.white-button {
		margin-bottom: 10px;
		display: block;
		width: 100%;
    	height: 45px;	
	}
	.white-button {
		margin-bottom: 15px;
	}
	@media (min-width: 320px) and (max-width: 480px) {  
	  width: 90%;	  
	}
`;

export const CenterLogoDiv = styled.div`
 	position: fixed;
  	top: 50%;
  	left: 50%;
	transform: translate(-50%, -50%);
`;