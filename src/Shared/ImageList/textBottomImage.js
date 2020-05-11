import React from 'react';
import { CampusListDiv, CampusListInnerBottomDiv } from './style';

const TextBottomImage = (props) => {
	const { listItem } = props;
	if(listItem) 
	{
		return listItem.map((item, index) => {
		return 	<CampusListDiv key={index}>
					<img src={item.imgValue} alt="" />
					<CampusListInnerBottomDiv>
						
						<div className="camp-bottom-wrap">
							<h4 className="camp-title-wrap">{item.title}</h4>
							<div className="camp-bottom-subheading">
								<span>{item.duration}</span>
								<span className="camp-time-right">{item.time}</span>
							</div>
						</div>
					</CampusListInnerBottomDiv>	
				</CampusListDiv>
		})
	}
	
	return null;
}

export default TextBottomImage;
