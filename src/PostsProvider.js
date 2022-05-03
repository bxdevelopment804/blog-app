import { createContext, useState } from 'react';

export const postsContext = createContext();

const PostsProvider = (props) => {
	const [posts, setPosts] = useState([
		{
			index: 0,
			name: 'Emily Thompson',
			uid: '2516',
			userPhoto:
				'https://media.istockphoto.com/photos/raven-in-black-white-isolated-picture-id173542839?k=6&m=173542839&s=612x612&w=0&h=IZBqcdNPVMOMz3PNlkh7TnWrH13wFWPG0uBzgkDV-9I=',
			title: 'Glorious Monday',
			text: 'Just got my favorite vanilla latte.  Starting the day right!!',
			timeStamp: '7/28/21',
		},
		{
			index: 1,
			name: 'Emily Thompson',
			uid: '2516',
			userPhoto:
				'https://media.istockphoto.com/photos/raven-in-black-white-isolated-picture-id173542839?k=6&m=173542839&s=612x612&w=0&h=IZBqcdNPVMOMz3PNlkh7TnWrH13wFWPG0uBzgkDV-9I=',
			title: 'Giving Thanks',
			text: 'Very humbled and grateful to reach five years of marriage.  He may be a train wreck, but hes MY train wreck!',
			timeStamp: '7/29/21',
		},
		{
			index: 2,
			name: 'Emily Thompson',
			uid: '2516',
			userPhoto:
				'https://media.istockphoto.com/photos/raven-in-black-white-isolated-picture-id173542839?k=6&m=173542839&s=612x612&w=0&h=IZBqcdNPVMOMz3PNlkh7TnWrH13wFWPG0uBzgkDV-9I=',
			title: 'Office Calamity',
			text: 'Showed up to work today, and they were out of blue highlighters.  Can you believe it??  I can not work in these conditions...',
			timeStamp: '7/29/21',
		},
	]);

	return (
		<postsContext.Provider value={[posts, setPosts]}>
			{props.children}
		</postsContext.Provider>
	);
};

export default PostsProvider;
