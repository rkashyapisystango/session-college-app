import React from 'react';
import BackImage from 'assets/svg/back.svg';
import { SideBottomContainer } from './style';

const BottomSideMenu = () => {
	return (
		<SideBottomContainer>			
			<img src={BackImage} alt=""/>
			<div className="side-bottom-logout">
				<h4>Logout</h4>
			</div>
		</SideBottomContainer>
	);
}

export default BottomSideMenu;