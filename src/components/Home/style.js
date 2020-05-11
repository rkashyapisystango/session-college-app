import styled from 'styled-components';

export const HomePageContainer = styled.div`
	background: #F0EFF7;
	min-height: 100vh;
	.container-fluid {
		padding: 0px;
		text-align: center;
	}
	.card-wrapper {
		margin-top: 30px;
		margin-bottom: 60px;
	}
	.card {
		margin-top: 8px;
    	margin-bottom: 8px;
	}
	.card-body img {
		width: 100px;
	}
	.card-title {
		font-weight: 600;
		margin-top: 5px;
		margin-bottom: 5px;
		font-size: 16px;
	}
	.card-text {
		color: #343D5E;
		font-size: 14px;
	}
	@media (min-width: 320px) and (max-width: 480px) {  
		// .slider-wrap {
		// 	padding-right: 20px;
  //   		padding-left: 20px;
		// }
		.card-wrapper {
			margin-top: 30px;
		}
		.col-6 {
			padding-left: 5px;
    		padding-right: 5px;
		}
		.card-title {
			font-size: 14px;
			margin-bottom: 3px;
		}
		.card-text {
			font-size: 12px;
		}
		.card-body {
			padding: 20px 10px;
		}
		.card-wrapper {
			margin-top: 15px;
		}
	}	
`;
