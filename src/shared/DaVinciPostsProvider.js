import { createContext, useState } from 'react';

export const daVinciPostsContext = createContext();

const DaVinciPostsProvider = (props) => {
	const [posts, setPosts] = useState([
		{
			index: 0,
			name: 'Nora Edmonds',
			uuid: '2517',
			userPhoto:
				'https://images.pexels.com/photos/7520527/pexels-photo-7520527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			title: 'Best In The Series',
			text: "The second book in this series has always been my favorite.  What's everyone else's favorite book?  Favorite movie also?",
			timeStamp: 'Wed Jan 05 2022',
		},
		{
			index: 1,
			name: 'Niyah Velazquez',
			uuid: '2518',
			userPhoto:
				'https://images.pexels.com/photos/6222762/pexels-photo-6222762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			title: 'Angels & Demons',
			text: 'imho Angels & Demons was the best book, but DaVinci Code was the best movie.',
			timeStamp: 'Wed Jan 05 2022',
		},
		{
			index: 2,
			name: 'Nikolas Bradley',
			uuid: '2519',
			userPhoto:
				'https://images.pexels.com/photos/10264897/pexels-photo-10264897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			title: 'Office Calamity',
			text: 'Yeah, that sounds about right.  DaVinci Code best movie, Angels and Demons best book.',
			timeStamp: 'Fri Jan 07 2022',
		},
	]);

	return (
		<daVinciPostsContext.Provider value={[posts, setPosts]}>
			{props.children}
		</daVinciPostsContext.Provider>
	);
};

export default DaVinciPostsProvider;
