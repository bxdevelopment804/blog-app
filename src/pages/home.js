import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userRegistrationContext } from '../UserRegistrationProvider';
import '../shared/generalStyling.css';

const Home = () => {
	const loggedIn = useContext(userRegistrationContext);

	return (
		<div id='page-body'>
			<div id='welcome-container'>
				{!loggedIn[0] && (
					<React.Fragment>
						<div id='logged-out-home-container'>
							<div id='book-header'>Contemporary Classics:</div>
							<div id='daVinciCode-book' className='book-button'>
								<Link className='book-button-link' to='/daVinciCode'>
									<strong>
										<u>daVinci Code</u>
									</strong>
									&nbsp;- A murder inside the Louvre, and clues in Da Vinci
									paintings, lead to the discovery of a religious mystery
									protected by a secret society for two thousand years, which
									could shake the foundations of Christianity.
								</Link>
							</div>
							<div id='harryPotter-book' className='book-button'>
								<Link className='book-button-link' to='/harryPotter'>
									<strong>
										<u>Harry Potter</u>
									</strong>
									&nbsp;- An orphaned boy enrolls in a school of wizardry, where
									he learns the truth about himself, his family and the terrible
									evil that haunts the magical world.
								</Link>
							</div>
							<div id='hungerGames-book' className='book-button'>
								<Link className='book-button-link' to='/hungerGames'>
									<strong>
										<u>The Hunger Games</u>
									</strong>
									&nbsp;- Katniss Everdeen voluntarily takes her younger
									sister's place in the Hunger Games: a televised competition in
									which two teenagers from each of the twelve Districts of Panem
									are chosen at random to fight to the death.
								</Link>
							</div>
						</div>
					</React.Fragment>
				)}
				{loggedIn[0] && (
					<React.Fragment>
						<div id='logged-out-home-container'>
							<div id='book-header'>Contemporary Classics:</div>
							<div id='daVinciCode-book' className='book-button'>
								<Link className='book-button-link' to='/daVinciCode'>
									<strong>
										<u>daVinci Code</u>
									</strong>
									&nbsp;- A murder inside the Louvre, and clues in Da Vinci
									paintings, lead to the discovery of a religious mystery
									protected by a secret society for two thousand years, which
									could shake the foundations of Christianity.
								</Link>
							</div>
							<div id='harryPotter-book' className='book-button'>
								<Link className='book-button-link' to='/harryPotter'>
									<strong>
										<u>Harry Potter</u>
									</strong>
									&nbsp;- An orphaned boy enrolls in a school of wizardry, where
									he learns the truth about himself, his family and the terrible
									evil that haunts the magical world.
								</Link>
							</div>
							<div id='hungerGames-book' className='book-button'>
								<Link className='book-button-link' to='/hungerGames'>
									<strong>
										<u>The Hunger Games</u>
									</strong>
									&nbsp;- Katniss Everdeen voluntarily takes her younger
									sister's place in the Hunger Games: a televised competition in
									which two teenagers from each of the twelve Districts of Panem
									are chosen at random to fight to the death.
								</Link>
							</div>
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default Home;
