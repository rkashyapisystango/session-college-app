import styled from 'styled-components';

export const CampusListDiv = styled.div`
 	position: relative;
	width: 100%;
	margin-top: 20px;
	padding-top: 5px;
	padding-bottom: 5px;
	img {
		width: inherit;
	}
`;

export const CampusListInnerDiv = styled.div`
	
	.camp-left {
		position: absolute;
		top: 45%;
		left: 32px;
		color: #ffffff;
		font-weight: bold;
		font-size: 24px;
	}
	.camp-right {
		position: absolute;
	    top: 46%;
	    right: 16px;
	    color: #ffffff;
	    font-size: 16px;
	    width: 25px;
		img {
			width: 100%;
		}
	}	

	@media (min-width: 768px) and (max-width: 1024px) { 
		.camp-left {
			font-size: 28px;
			left: 16px;
		}
		.camp-right {
			top: 45%;
		}	
	}
	@media (min-width: 320px) and (max-width: 480px) {
		.camp-left {
			font-size: 18px;
			left: 16px;
		}
	}
`;

export const CampusListInnerBottomDiv = styled.div`
	position: absolute;
	bottom: 18px;
	left: 15px;
	color: #ffffff;
	width: 100%;
	.camp-title-wrap {
		font-size: 24px;
	    margin-bottom: 2px;
		font-weight: bold;
	}
	.camp-bottom-subheading {
		font-size: 20px;
		color: #C0C2CA;
	}
	.camp-time-right {
	    margin-right: 35px;
		float: right;
	}
	@media (min-width: 320px) and (max-width: 480px) { 
		.camp-title-wrap {
			font-size: 16px;
		}
		.camp-bottom-subheading {
			font-size: 14px;
		}
	}
	
`;