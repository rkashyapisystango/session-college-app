import styled from 'styled-components';
import HomeBackImage from "./assets/img/splash_background_2.png";

export const ImageContainer = styled.div`
	background-image: url(${HomeBackImage});
	background-repeat: no-repeat;
	background-attachment: fixed;
  	background-position: center;
	height: 100vh;
	position: relative;

	display: block;
	margin-left: auto;
	margin-right: auto; 
	//background-size: contain;   
	@media (min-width: 320px) and (max-width: 480px) {  
		width: 100%;	
		background-size: cover;
	}	
`;

export const OuterBodyDiv = styled.div`
	background: #F0EFF7;
	min-height: 100vh;
`;