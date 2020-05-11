
import React from 'react';
import { HomeContainer } from '../Splash/style';
import { ImageContainer } from '../../shared-style';
import { MenuDiv } from './style';
import { routes } from './routes';
import { redirectPath } from '../../utils/helper';

function Home(props) {
  return (
    <HomeContainer>
    	<ImageContainer>
    		<MenuDiv>
    			{
    				routes && routes.map((item, index) => {
    					return <div key={index} onClick={() => redirectPath(item.path, props)}>{item.routeName}</div>
    				})
    			}
    		</MenuDiv>    		 	
	    </ImageContainer>
    </HomeContainer>
  );
}

export default Home;
