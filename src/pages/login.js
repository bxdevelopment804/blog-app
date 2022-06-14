import React, { useState, useContext } from 'react';
import { userRegistrationContext } from '../UserRegistrationProvider';
import { userNameContext } from '../UserNameProvider';
import { userEmailContext } from '../UserEmailProvider';
import { userPasswordContext } from '../UserPasswordProvider';
import { userUUIDContext } from '../UserUUIDProvider';
import { userPhotoContext } from '../UserPhotoProvider';
import { Link } from 'react-router-dom';

import { currentUserInfoContext } from '../CurrentUserInfoProvider';
import { registeredUserListContext } from '../RegisteredUserListProvider';
import Modal from 'react-modal';
import '../shared/generalStyling.css';

const Login = () => {
	const [registeredUserList, setRegisteredUserList] = useContext(
		registeredUserListContext
	);
	const [userRegistered, setUserRegistered] = useContext(
		userRegistrationContext
	);
	const [userName, setUserName] = useContext(userNameContext);
	const [userEmail, setUserEmail] = useContext(userEmailContext);
	const [userPassword, setUserPassword] = useContext(userPasswordContext);
	const [userUUID, setUserUUID] = useContext(userUUIDContext);
	const [userPhoto, setUserPhoto] = useContext(userPhotoContext);

	const [currentUserInfo, setCurrentUserInfo] = useContext(
		currentUserInfoContext
	);

	let [email, setEmail] = useState();
	let [password, setPassword] = useState();
	let [modalIsOpen, setModalIsOpen] = useState(false);
	let newUser = {};

	const createUser = (event) => {
		event.preventDefault();

		newUser.email = email;
		newUser.password = password;
	};

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	Modal.setAppElement('#root');

	let subtitle;

	const validate = () => {
		let validAccount = registeredUserList.find(
			(user) => user.email == email && user.password == password
		);
		let validAccountIndex = registeredUserList.findIndex(
			(user) => user.email == email && user.password == password
		);

		if (validAccountIndex != -1) {
			validAccount = true;

			setUserName(registeredUserList[validAccountIndex].name);
			setUserEmail(registeredUserList[validAccountIndex].email);
			setUserPassword(registeredUserList[validAccountIndex].password);
			setUserUUID(registeredUserList[validAccountIndex].uuid);
			setUserPhoto(registeredUserList[validAccountIndex].userPhoto);

			let tempUserObject = {
				name: registeredUserList[validAccountIndex].name,
				email: registeredUserList[validAccountIndex].email,
				password: registeredUserList[validAccountIndex].password,
				photo: registeredUserList[validAccountIndex].userPhoto,
				uuid: registeredUserList[validAccountIndex].uuid,
				loggedIn: 'true',
			};
			setCurrentUserInfo(JSON.stringify(tempUserObject));

			// Potentially move the localStorage updates to openModal() if the state doesn't update fast enough, which I suspect.

			window.localStorage.setItem('lsUserEmail', JSON.stringify(email));
			window.localStorage.setItem(
				'lsCompiledUserInfo',
				JSON.stringify(tempUserObject)
			);

			setUserRegistered(true);

			openModal();
		} else {
			alert('The provided log in credentials are invalid.  Please try again.');
		}
	};

	function openModal() {
		setModalIsOpen(true);
	}

	function afterOpenModal() {
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	return (
		<React.Fragment>
			<body id='page-body'>
				<form id='content' onSubmit={createUser}>
					<p className='welcome-field'>
						Please enter your information below to log in!
					</p>
					<label className='loginLabel' htmlFor='loginEmailInput'>
						Email
					</label>
					<input
						id='loginEmailInput'
						className='loginInputField'
						type='text'
						// placeholder='email'
						onInput={(event) => setEmail(event.target.value)}
					/>
					<label className='loginLabel' htmlFor='loginPasswordInput'>
						Password
					</label>
					<input
						id='loginPasswordInput'
						className='loginInputField'
						type='password'
						// placeholder='password'
						onInput={(event) => setPassword(event.target.value)}
					/>
					<button className='loginInputField' type='button' onClick={validate}>
						Log In
					</button>
					<Modal
						id='loginModal'
						isOpen={modalIsOpen}
						onAfterOpen={afterOpenModal}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel='Example Modal'
					>
						<h2 ref={(_subtitle) => (subtitle = _subtitle)}>
							Welcome Back to Raven's Blog!
						</h2>
						<Link exact to='/'>
							<button id='loginModalCloseButton' onClick={closeModal}>
								Close
							</button>
						</Link>
					</Modal>
				</form>
			</body>
		</React.Fragment>
	);
};

export default Login;
