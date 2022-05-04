import { createContext, useState } from 'react';

export const hungerGamesPostsContext = createContext();

const HungerGamesPostsProvider = (props) => {
	const [posts, setPosts] = useState([
		{
			index: 0,
			name: 'Lyla Sharples',
			uuid: '2523',
			userPhoto:
				'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
			title: 'Snow Mansion Bombing',
			text: "In the Mockingjay pt.2, why did Gale go with Katniss to Snows mansion to help her kill Snow when he knew that there was going to be a bombing? I haven’t read the books and from the movies and what I've read online, I've got that he knew about the bombings and helped orchestrate it with Beetee, so why did he go if he knew it was going to happen?",
			timeStamp: 'Wed Jan 05 2022',
		},
		{
			index: 1,
			name: 'Kenneth Gibbs',
			uuid: '2524',
			userPhoto:
				'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			title: 'Innocent',
			text: "He didn't know. He even says later that he's not sure they were his bombs.",
			timeStamp: 'Wed Jan 05 2022',
		},
		{
			index: 2,
			name: 'Tamera Milne',
			uuid: '2525',
			userPhoto:
				'https://images.pexels.com/photos/6976423/pexels-photo-6976423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			title: 'True Intent',
			text: "They weren't specifically meant for anything. Gale derives the bomb idea from a trap he used for hunting. He proposed that idea to Beetee. Katniss walks in on them both working on the bomb and Gale and her have a heated conversation about the implications. Katniss thinks it is a weapon that shouldn't be used in this war, Gale disagrees.",
			timeStamp: 'Thu Jan 06 2022',
		},
	]);

	return (
		<hungerGamesPostsContext.Provider value={[posts, setPosts]}>
			{props.children}
		</hungerGamesPostsContext.Provider>
	);
};

export default HungerGamesPostsProvider;
