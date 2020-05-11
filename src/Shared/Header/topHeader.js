import React from 'react';
import { Container } from 'reactstrap';
import MenuIcon from '../../assets/svg/menu_icon.svg';
import Search from '../../assets/svg/search.svg';
import { InnerHeader, LeftDiv, CenterDiv, RightDiv, RightInnerDiv } from './style';

const TopHeader = (props) => {
	const { setSideToggle } = props;
	return (
		<InnerHeader>
			<Container className="d-flex">
				<LeftDiv className="">
					<img src={MenuIcon} alt="menu icon"  className="img-icon" onClick={setSideToggle} />			
				</LeftDiv>
				<CenterDiv className="text-center">
					<div>
						Home
					</div>
				</CenterDiv>
				<RightDiv className="text-right">
					<RightInnerDiv className="justify-content-end">
						<img src={Search} alt="search icon"  className="img-icon" />
						<i className="fa fa-bell-o" />
					</RightInnerDiv>
					
				</RightDiv>
           	</Container>
         </InnerHeader>
    )
}

export default TopHeader;