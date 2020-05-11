import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: inline-block;
	margin-bottom: 75px;
`;

export const InnerHeader = styled.div`
	background: #020e36;
	height: 80px;
	display: flex;
    align-items: center;
    .img-icon { 
    	width: 20px;
    	cursor: pointer;
    	margin-right: 6px;
    }
    .container {
    	flex-direction: row;
	    flex-wrap: nowrap;
	    justify-content: space-between;
    }
`;

export const LeftDiv = styled.div``;


export const CenterDiv = styled.div`
	color: #ffffff;
`;

export const RightDiv = styled.div`
	.fa-bell-o {
		font-size: 20px;
		color: #ffffff;
		width: 20px;
    	font-weight: 800;
    	padding-left: 5px;
    	cursor: pointer;
	}

`;

export const RightInnerDiv = styled.div`
	display: flex;
    align-items: center;
`;

export const SideBarContainer = styled.div`

	@media (min-width: 320px) and (max-width: 480px) {  
		
		.inner-sidebar {
			width: 70%!important;
		}
	}
	
`;

export const SideBarMenuContainer = styled.div`
	.profile-wrap {
		background: #4d7bf3;
	    height: 200px;	 
	    align-items: center;  
	    color: #ffffff; 
	}
	.right-side-info {
		padding-left: 0px;
	}
	.sidebottom-box {
		position: fixed;
	    bottom: 0px;
	    height: 80px;
	    background: #f2f2f9;
	    width: 100%;
	    margin-left: -20px;
	    display: flex;
	    align-items: center;
	}
	.container-box {
		padding-right: 15px;
		padding-left: 15px;
	}
	@media (min-width: 320px) and (max-width: 480px) {  
		.profile-wrap {
			height: 150px;
		}
		
	}
`;

export const ProfileWrap = styled.div`
    width: 100%;
	background: #4d7bf3;
    height: 200px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const ProfileImageWrap = styled.div`
	// width: 170px;
	// height: 170px;
	img {
		width: 150px;
		border-radius: 50%;
    	border: 5px solid rgb(255, 255, 255);
	}

`;

export const Profileinfo = styled.div`
	p {
		margin-bottom: 0px;
		font-size: 14px;
	}
	h4 {
		font-size: 20px;
		margin-bottom: 2px;
	}
	@media (min-width: 320px) and (max-width: 480px) {  
		p {
			font-size: 14px;
		}
		h4 {
			font-size: 20px;
		}
	}
`;

export const SideMenuWrap = styled.div`
	margin-top: 20px;
	.nav-item {
		padding: 10px 0px;		
	}
	.nav-item img{
		width: 28px;
	}
	.sidemenu-link{
		display: flex;
		align-items: center;

	}
	.sidemenu-title{
		display: flex;
		justify-content: space-between;		
		margin-left: 10px;
	    border-bottom: 2px solid #D4D6DD;
	    width: 100%;
	    line-height: 50px;
	    color: #6E7182;
	    h4 {
	    	font-size: 18px;
	    }
	    img {	    	
	    	width: 6px;
    		height: 12px;
	    }
	}
    

`;

export const SideBottomContainer = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 20px;
	}
	.side-bottom-logout {
	    margin-left: 15px;
	    color: #343D5E;
	    h4 {
	    	font-size: 20px;
		    margin-bottom: 0px;
		    font-weight: 400;
	    }	    
	}
`;










