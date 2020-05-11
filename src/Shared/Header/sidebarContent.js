import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import SideMenu from './sideMenu';
import BottomSideMenu from './bottomSideMenu';
import UserImage from '../../assets/img/user.png';
import { ProfileImageWrap, ProfileWrap, Profileinfo, SideBarMenuContainer } from './style';

const SidebarContent = () => {
	return  (
		<SideBarMenuContainer className="container">
			<Row className="profile-wrap">
		 		<Col sm="5" md="5" xs="5">
		 			<ProfileImageWrap>
                    	<img src={UserImage} alt="User Image" className="img-fluid"/>
                    </ProfileImageWrap>
                </Col>
                <Col sm="7" md="7" xs="7" className="right-side-info">
                	<Profileinfo>
	                    <h4>Mark Watson</h4>                       
	                    <p>Student ID: 15546</p>
	                </Profileinfo>
                </Col>
            </Row>
            <Row>
            	<Col>
            		<SideMenu />
            	</Col>
            </Row>
            <Row className="sidebottom-box">
            	<Col>
            		<BottomSideMenu />
            	</Col>
            </Row>
            
		</SideBarMenuContainer>
	)
};

export default SidebarContent;