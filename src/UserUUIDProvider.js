import { createContext, useState } from 'react';

export const userUUIDContext = createContext();

const UserUUIDProvider = (props) => {
	const [userUUID, setUserUUID] = useState();

	return (
		<userUUIDContext.Provider value={[userUUID, setUserUUID]}>
			{props.children}
		</userUUIDContext.Provider>
	);
};

export default UserUUIDProvider;
