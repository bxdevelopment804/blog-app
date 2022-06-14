import React, { useState, useContext } from 'react';
import { userRegistrationContext } from '../UserRegistrationProvider';
import { userNameContext } from '../UserNameProvider';
import { userEmailContext } from '../UserEmailProvider';
import { userPasswordContext } from '../UserPasswordProvider';
import { userUUIDContext } from '../UserUUIDProvider';
import { userPhotoContext } from '../UserPhotoProvider';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import { registeredUserListContext } from '../RegisteredUserListProvider';
import Modal from 'react-modal';
import '../shared/generalStyling.css';

const Signup = () => {
	const [userRegistered, setUserRegistered] = useContext(
		userRegistrationContext
	);
	const [userName, setUserName] = useContext(userNameContext);
	const [userEmail, setUserEmail] = useContext(userEmailContext);
	const [userPassword, setUserPassword] = useContext(userPasswordContext);
	const [userUUID, setUserUUID] = useContext(userUUIDContext);
	const [userPhoto, setUserPhoto] = useContext(userPhotoContext);

	const [registeredUserList, setRegisteredUserList] = useContext(
		registeredUserListContext
	);

	let [registered, setRegistered] = useState(false);
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	let [photo, setPhoto] = useState('');

	let [modalIsOpen, setModalIsOpen] = useState(false);

	let newUser = {};
	let updatedUserList = registeredUserList;

	const createUser = (event) => {
		event.preventDefault();

		newUser.name = name;
		newUser.email = email;
		newUser.password = password;
		newUser.photo = photo;
		newUser.uuid = uuidv4();
		newUser.loggedIn = true;

		window.localStorage.setItem('lsCompiledUserInfo', JSON.stringify(newUser));
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

	function openModal() {
		setModalIsOpen(true);
	}

	const validateEmail = () => {
		let unusedEmail = registeredUserList.find((user) => user.email == email);

		//Checking for valid entries.
		if (name == '' || email == '' || password == '' || photo == '') {
			alert('Please fill out all fields.');
		} else if (password.length < 7) {
			alert('Please enter a password longer than seven characters.');
		} else if (name.length < 5) {
			alert('Please enter a name longer than five characters.');
		} else if (email.length < 10) {
			alert('Please enter an email address longer than ten characters.');
		} else if (photo.length < 10) {
			alert('Please enter a photo url longer than ten characters.');
		} else if (email.indexOf('@') == -1) {
			alert('Please enter a valid email address.');
		}
		//Approval of entered information.
		else if (unusedEmail == undefined) {
			updatedUserList = updatedUserList.push(newUser);
			openModal();
		} else {
			alert(
				'That email has already been used.  Please use another email to register.'
			);
		}
	};

	function afterOpenModal() {
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setRegistered(true);
		setUserRegistered(true);
		setModalIsOpen(false);
		setUserName(newUser.name);
		setUserEmail(newUser.email);
		setUserPassword(newUser.password);
		setUserUUID(newUser.uuid);
		setUserPhoto(newUser.photo);
	}

	return (
		<div id='page-body'>
			<form id='content' onSubmit={createUser}>
				<p className='welcome-field'>
					Please enter your information below to register!
				</p>
				<label className='signupLabel' htmlFor='signupNameInput'>
					Name
				</label>
				<input
					id='signupNameInput'
					className='signupInputField'
					type='text'
					// placeholder='name'
					onInput={(event) => setName(event.target.value)}
				/>
				<label className='signupLabel' htmlFor='signupEmailInput'>
					Email
				</label>
				<input
					id='signupEmailInput'
					className='signupInputField'
					type='text'
					// placeholder='email'
					onInput={(event) => setEmail(event.target.value)}
				/>
				<label className='signupLabel' htmlFor='signupPasswordInput'>
					Password
				</label>
				<input
					id='signupPasswordInput'
					className='signupInputField'
					type='password'
					// placeholder='password'
					onInput={(event) => setPassword(event.target.value)}
				/>

				<label className='signupLabel' htmlFor='userPhotoUpload'>
					Upload Photo
				</label>
				<input
					id='userPhotoUpload'
					className='signupUploadPhotoField'
					type='file'
					accept='.png, .jpg, .jpeg'
					onChange={(event) =>
						setPhoto(URL.createObjectURL(event.target.files[0]))
					}
				/>

				<button
					className='signupInputField'
					type='submit'
					onClick={validateEmail}
				>
					Register
				</button>
				<Modal
					id='signupModal'
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel='Example Modal'
				>
					<h2 ref={(_subtitle) => (subtitle = _subtitle)}>
						Welcome to Raven's Blog!
					</h2>
					<Link exact to='/'>
						<button id='modalCloseButton' onClick={closeModal}>
							Close
						</button>
					</Link>
				</Modal>
			</form>
		</div>
	);
};

export default Signup;
