import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import RightVector from 'assets/svg/rightvector.svg';
import { SideMenuWrap } from './style';
import { sideMenuData } from './constant';


const SideMenu = () => {
	return(
		<SideMenuWrap>
			<Nav navbar>
				{
					sideMenuData && sideMenuData.map((item, index) => {
						return <NavItem key={index}>
					              	<NavLink href="/components/" className="sidemenu-link">
						              	<img src={item.icon} alt="" />
						              	<div className="sidemenu-title">
						              		<h4>{item.title}</h4>
						              		<img src={RightVector} alt="" />
						              	</div>
					              	</NavLink>
					            </NavItem>
					})
				}
	        </Nav>

		</SideMenuWrap>
	)
}

export default SideMenu;