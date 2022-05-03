import { createContext, useState } from 'react';

export const userPhotoContext = createContext();

const UserPhotoProvider = (props) => {
	const [userPhoto, setUserPhoto] = useState();

	return (
		<userPhotoContext.Provider value={[userPhoto, setUserPhoto]}>
			{props.children}
		</userPhotoContext.Provider>
	);
};

export default UserPhotoProvider;
