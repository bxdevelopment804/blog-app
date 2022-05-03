import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Signup from '../pages/signup';
import Login from '../pages/login';
import DaVinciCode from '../pages/daVinciCode';
import HarryPotter from '../pages/harryPotter';
import HungerGames from '../pages/hungerGames';

const Main = () => {
	return (
		<div>
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/daVinciCode' component={DaVinciCode} />
				<Route path='/harryPotter' component={HarryPotter} />
				<Route path='/hungerGames' component={HungerGames} />
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
};

export default Main;
