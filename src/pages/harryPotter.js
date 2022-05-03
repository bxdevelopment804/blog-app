import React, { useContext } from 'react';
import { harryPotterPostsContext } from '../shared/HarryPotterPostsProvider';
import PostItem from '../shared/post-item';
import '../shared/generalStyling.css';

const HarryPotter = () => {
	const currentPosts = useContext(harryPotterPostsContext);
	const title = 'Harry Potter';

	return (
		<div id='harryPotter-page-container'>
			<div id='page-body'>
				<div id='welcome-container'>
					<div id='logged-out-home-container'>
						<div id='book-header'>{title}</div>
						<PostItem
							post={currentPosts[0]}
							context={harryPotterPostsContext}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HarryPotter;
