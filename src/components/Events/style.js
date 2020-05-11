import styled from 'styled-components';

export const EventsContainer = styled.div`
	.wrpper-eventbtn {
		display: flex;  
    	justify-content: space-around;
    	padding-left: 10px;
    	padding-right: 10px;
    	padding-top: 15px;
    }
    .transparent-skybutton {
    	width: 24%;
    	@media (min-width: 320px) and (max-width: 480px) {  
    		width: unset;
    	}
    }
    .transparent-skybutton:active,
    .transparent-skybutton:hover {
    	
    	background-color: #4d7bf3!important;
    }
    .camp-bottom-listwrap {        
        padding-bottom: 60px;
    }
`;