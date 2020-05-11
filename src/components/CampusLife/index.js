
import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";
import TextWithArrow from "../../Shared/ImageList/textWithArrow";
import { campusInfo } from './constant';
import { OuterBodyDiv } from '../../shared-style';

function CampusPage() {
  return ( 
  <OuterBodyDiv>   
    <Header />
		<Container>
			<Row>
				<Col xs="12" sm="12" md="12">
					<TextWithArrow listItem={campusInfo}/>			
				</Col>
			</Row>
		</Container>        
    <Footer />
   </OuterBodyDiv>
  );
}

export default CampusPage;
