import { createContext, useState } from 'react';

export const harryPotterPostsContext = createContext();

const HarryPotterPostsProvider = (props) => {
	const [posts, setPosts] = useState([
		{
			index: 0,
			name: 'Lilah Hodges',
			uuid: '2520',
			userPhoto:
				'https://images.pexels.com/photos/6954204/pexels-photo-6954204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			title: 'Newfound Obsession',
			text: "I am 23 years old, and just today I watched my first Harry Potter movie, Sorcerer's Stone. I had no prior knowledge about the series at all before, never even attempted to read a book or see a film. \n  I must say I am absolutely blown away by how much I enjoyed the movie. I had no idea what I was missing out on. I'm so excited to read through the series and watch the rest of them, and then participating in this blog with you all. Wish me luck everyone!!",
			timeStamp: 'Mon Dec 20 2021',
		},
		{
			index: 1,
			name: 'Tyler Sullivan',
			uuid: '2521',
			userPhoto:
				'https://images.pexels.com/photos/7241328/pexels-photo-7241328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			title: 'Books Before Movies',
			text: 'IMO the movies dont really make a lot of sense without the books. too much depth that gets overlooked. \n	 I watched the movies with my girlfriend multiple times (shes a big fan) before reading the series myself. I never really understood the storyline from the films without constant explanations being provided for me.  \n Good for you for reading the books first.',
			timeStamp: 'Fri Dec 24 2021',
		},
		{
			index: 2,
			name: 'Giorgio Salinas',
			uuid: '2522',
			userPhoto:
				'https://images.pexels.com/photos/1485994/pexels-photo-1485994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			title: 'Movies First All The Way',
			text: "I respectfully disagree. You are going to love the books either way, but the movies are better if you haven't read the books yet. \n  I saw the first four movies before reading the books, and read the books first for the rest.  \n  I loved all of the movies that I saw before reading the books, but was a little disappointed with the later movies. Even after countless readings and viewings of all of them, I still love the first four movies and find the rest ok, but a little disappointing.",
			timeStamp: 'Sun Dec 26 2021',
		},
	]);

	return (
		<harryPotterPostsContext.Provider value={[posts, setPosts]}>
			{props.children}
		</harryPotterPostsContext.Provider>
	);
};

export default HarryPotterPostsProvider;
