import React, { useContext } from 'react';
import { daVinciPostsContext } from '../shared/DaVinciPostsProvider';
import PostItem from '../shared/post-item';
import '../shared/generalStyling.css';

const DaVinciCode = () => {
	const currentPosts = useContext(daVinciPostsContext);
	const title = 'daVinci Code';

	return (
		<div id='daVinciCode-page-container'>
			<div id='page-body'>
				<div id='welcome-container'>
					<div id='logged-out-home-container'>
						<div id='book-header'>{title}</div>
						<PostItem post={currentPosts[0]} context={daVinciPostsContext} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DaVinciCode;
