import React, { useContext } from 'react';
import { hungerGamesPostsContext } from '../shared/HungerGamesPostsProvider';
import PostItem from '../shared/post-item';
import '../shared/generalStyling.css';

const HungerGames = () => {
	const currentPosts = useContext(hungerGamesPostsContext);
	const title = 'The Hunger Games';

	return (
		<div id='hungerGames-page-container'>
			<div id='page-body'>
				<div id='welcome-container'>
					<div id='logged-out-home-container'>
						<div id='book-header'>{title}</div>
						<PostItem
							post={currentPosts[0]}
							context={hungerGamesPostsContext}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HungerGames;
