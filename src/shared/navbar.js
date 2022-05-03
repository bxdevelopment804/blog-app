import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userRegistrationContext } from '../UserRegistrationProvider';
import { userNameContext } from '../UserNameProvider';
import { currentUserInfoContext } from '../CurrentUserInfoProvider';

import './navbar.css';

const Navbar = () => {
	const importedContext = useContext(userRegistrationContext);
	const loggedIn = importedContext[0];
	const updateLoggedIn = importedContext[1];
	const currentName = useContext(userNameContext);

	const lsCompiledUserInfo = JSON.parse(
		window.localStorage.getItem('lsCompiledUserInfo')
	);

	const [currentUserInfo, setCurrentUserInfo] = useContext(
		currentUserInfoContext
	);

	const logout = () => {
		window.localStorage.clear();
		updateLoggedIn(false);
		setCurrentUserInfo(
			JSON.stringify({
				name: 'No user is currently logged in. (Name)',
				email: 'No user is currently logged in. (Email)',
				password: 'No user is currently logged in. (Password)',
				photo: 'No user is currently logged in. (Photo)',
				uuid: 'No user is currently logged in. (UUID)',
				loggedIn: 'false',
			})
		);
	};

	if (lsCompiledUserInfo) {
		return (
			<div>
				<div id='page-container'>
					<nav id='navbar'>
						<Link to='/' id='home-button' class='button'>
							Home
						</Link>
						<span id='button-span'>
							<div id='unusedButton' class='button'>
								Unused
							</div>
							<Link to='/' class='button' onClick={logout}>
								Sign Out
							</Link>
						</span>
					</nav>

					<div id='header-banner'>Raven's Blog</div>
					<div id='header-attachment'>
						<div id='raven-image-container'>
							<img
								id='raven-photo'
								src='https://blog.sevenponds.com/wp-content/uploads/2016/06/raven-513x289.jpg'
								alt='raven photo'
							/>
						</div>
						<div id='header-attachment-text'>
							Welcome to Raven's Blog, {currentName}! <br /> Join the discussion
							on your favorite books!
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div id='page-container'>
					<nav id='navbar'>
						<Link to='/' id='home-button' class='button'>
							Home
						</Link>
						<span id='button-span'>
							<Link to='/login' class='button'>
								Log In
							</Link>
							<Link
								to='/signup'
								id='navbar-signup-button-anchor'
								class='button'
							>
								Sign Up
							</Link>
						</span>
					</nav>

					<div id='header-banner'>Raven's Blog</div>
					<div id='header-attachment'>
						<div id='raven-image-container'>
							<img
								id='raven-photo'
								src='https://blog.sevenponds.com/wp-content/uploads/2016/06/raven-513x289.jpg'
								alt='raven photo'
							/>
						</div>
						<div id='header-attachment-text'>
							Welcome to Raven's Blog! <br /> Join the discussion on your
							favorite books!
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Navbar;
