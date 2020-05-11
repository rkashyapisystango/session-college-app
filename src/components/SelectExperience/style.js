import styled from 'styled-components';

export const HomeContainer = styled.div`	
	width: 100%;
	.login-button {
		background: white;
	}
	
`;

export const BottomContainer = styled.div`
	
	position:absolute;
	bottom:0;
	right:0;
	left:0;
	text-align:center;
	button {		
		width: 50%;
		height: 50px;
	}
`;

export const CenterDiv = styled.div`
	display: flex;
  	flex-direction: column;
   	justify-content: center;
  	align-items: center;
  	height: 80vh;  	
  	p {
  		color: #020E36;
  		font-weight: 600;
  		font-size: 20px;
  	}
	.white-button {
		color: #343D5E;
		height: 60px;
		margin: 5px 0px;
		font-size: 18px;

	}
	.white-button.active {
		color: #ffffff;
		background: linear-gradient(to right, #4d7bf3 0%, #8babff 100%)!important;
	}
	.white-button.active:hover
	.white-button:active,
	.white-button:hover {
		background: #4255cf;
    	color: #ffffff;
	}
`;
