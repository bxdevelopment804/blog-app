import { createContext, useState } from 'react';

export const currentUserInfoContext = createContext();

const CurrentUserInfoProvider = (props) => {
	const [currentUserInfo, setCurrentUserInfo] = useState(
		JSON.stringify({
			name: 'No user is currently logged in. (Name)',
			email: 'No user is currently logged in. (Email)',
			password: 'No user is currently logged in. (Password)',
			photo: 'No user is currently logged in. (Photo)',
			uuid: 'No user is currently logged in. (UUID)',
			loggedIn: 'false',
		})
	);
	// const [userLoggedIn, setUserLoggedIn] = useState(testing);
	// Needed??
	// const [userName, setUserName] = useState('defaultName');
	// const [userEmail, setUserEmail] = useState('defaultEmail');
	// const [userPassword, setUserPassword] = useState('defaultPassword');
	// const [userPhoto, setUserPhoto] = useState('defaultPhoto');
	// const [userUUID, setUserUUID] = useState('defaultUUID');
	// const [userRegistered, setUserRegistered] = useState(false);
	// Needed??

	return (
		<currentUserInfoContext.Provider
			// nameValue={[userName, setUserName]}
			// emailValue={[userEmail, setUserEmail]}
			// passwordValue={[userPassword, setUserPassword]}
			// photoValue={[userPhoto, setUserPhoto]}
			// uuidValue={[userUUID, setUserUUID]}
			// value={[userRegistered, setUserRegistered]}
			// Needed??
			value={[currentUserInfo, setCurrentUserInfo]}
		>
			{props.children}
		</currentUserInfoContext.Provider>
	);
};

export default CurrentUserInfoProvider;
