import React from 'react';
import { CampusListDiv, CampusListInnerDiv } from './style';
import RightArrow from '../../assets/svg/rightArrow.svg';

const TextWithArrow = (props) => {
	const { listItem } = props;
	if(listItem) 
	{
		return listItem.map((item, index) => {
		return 	<CampusListDiv key={index}>
					<img src={item.imgValue} alt="" />
					<CampusListInnerDiv>
						<h4 className="camp-left">{item.title}</h4>
						<div className="camp-right">
							<img src={RightArrow} alt="" />
						</div>
					</CampusListInnerDiv>	
				</CampusListDiv>
		})
	}
	
	return null;
}

export default TextWithArrow;
