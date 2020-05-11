import React, { useState } from 'react';
import Sidebar from "react-sidebar";
import { HeaderContainer, SideBarContainer } from './style';
import SidebarContent from './sidebarContent';
import TopHeader from './topHeader';

const Header = (props) => {
	const [sideBarOpen, setSidebarOpen] = useState(false);
	const setSideToggle = () => {
		setSidebarOpen(!sideBarOpen);
	}
	return <HeaderContainer>
				<SideBarContainer>
					<Sidebar
						sidebar={<SidebarContent />}
						open={sideBarOpen}
						onSetOpen={setSidebarOpen}
						styles={{ sidebar: { background: "white" } }}
						rootClassName="sidebar-container"
						sidebarClassName="inner-sidebar"
					>
						<TopHeader setSideToggle={setSideToggle}/>
						
						{/*<button onClick={() => setSidebarOpen(true)}>
						  Open sidebar
						</button> */}
					</Sidebar>
				</SideBarContainer>
		
			</HeaderContainer>;
}

export default Header;