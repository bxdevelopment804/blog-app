import { createContext, useState } from 'react';

export const userEmailContext = createContext();

const UserEmailProvider = (props) => {
	const [userEmail, setUserEmail] = useState();

	return (
		<userEmailContext.Provider value={[userEmail, setUserEmail]}>
			{props.children}
		</userEmailContext.Provider>
	);
};

export default UserEmailProvider;
