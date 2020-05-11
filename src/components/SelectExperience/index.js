
import React from 'react';
import { Button } from 'reactstrap';
import { HomeContainer, BottomContainer, CenterDiv } from './style';
import { ImageContainer } from '../../shared-style';
import { expertise } from './constant';

function SelectExperience() {
  return (
    <HomeContainer>
    	<ImageContainer>
    		<CenterDiv>
                <p>Select your experience</p>
    			{
                    expertise && expertise.map((item, index) => {
                        return <button className={item.active ? "active w-90 white-button" :"w-90 white-button"} key={index}>{item.label}</button>
                    })
                }
    		</CenterDiv>
    		<BottomContainer>
    			<Button className="brown-button">Back</Button>
	      		<Button className="blue-button">Next</Button>
    		</BottomContainer>      
	    </ImageContainer>
    </HomeContainer>
  );
}

export default SelectExperience;
