import { createContext, useState } from 'react';

export const userNameContext = createContext();

const UserNameProvider = (props) => {
	const [userName, setUserName] = useState();

	return (
		<userNameContext.Provider value={[userName, setUserName]}>
			{props.children}
		</userNameContext.Provider>
	);
};

export default UserNameProvider;
