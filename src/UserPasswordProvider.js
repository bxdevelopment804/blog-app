import { createContext, useState } from 'react';

export const userPasswordContext = createContext();

const UserPasswordProvider = (props) => {
	const [userPassword, setUserPassword] = useState();

	return (
		<userPasswordContext.Provider value={[userPassword, setUserPassword]}>
			{props.children}
		</userPasswordContext.Provider>
	);
};

export default UserPasswordProvider;
