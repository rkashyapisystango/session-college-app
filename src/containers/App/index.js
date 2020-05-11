import React from 'react';
import { Route, Switch } from 'react-router-dom'
import SplashPage from '../SplashPage';
import HomePage from '../HomePage';
import Screen from '../../components/Screen';
import SelectExperiencePage from '../SelectExperiencePage';
import CampusLifePage from '../CampusLifePage';
import EventPage from '../EventPage';
import About from '../About';

function App() {
	return (
		<div className="App">
		  	<Switch>
				<Route exact path="/" component={Screen} />        
				<Route exact path="/splash" component={SplashPage} />        
				<Route exact path="/home" component={HomePage} />        
				<Route exact path="/select-experience" component={SelectExperiencePage} />
				<Route exact path="/campus-life" component={CampusLifePage} />
				<Route exact path="/events" component={EventPage} />
				<Route exact path="/about-us" component={About} />
			</Switch>
		</div>
	);
}

export default App;
