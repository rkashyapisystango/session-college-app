import styled from 'styled-components';

export const FooterDiv = styled.div`
	position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    //line-height: 60px;
    background-color: #ffffff;
    .footer-container {
    	display: flex;
    	flex-direction: row;
	    flex-wrap: nowrap;
	    justify-content: space-between;

    }
`;

export const InnerServiceDiv = styled.div`
	width: 25%;
	text-align: center;
	padding-top: 8px;
	.footer-icon {
		width: 20px;
	}
	p {
		font-size: 14px;
	}
	@media (min-width: 320px) and (max-width: 480px) { 
		p {
			font-size: 13px;
		} 
	}

`;