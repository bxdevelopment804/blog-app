import { createContext, useState } from 'react';

export const userRegistrationContext = createContext();

const UserRegistrationProvider = (props) => {
	const [userRegistered, setUserRegistered] = useState(false);

	return (
		<userRegistrationContext.Provider
			value={[userRegistered, setUserRegistered]}
		>
			{props.children}
		</userRegistrationContext.Provider>
	);
};

export default UserRegistrationProvider;
