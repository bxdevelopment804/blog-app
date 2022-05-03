import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { userNameContext } from '../UserNameProvider';
import { userUUIDContext } from '../UserUUIDProvider';
import { userPhotoContext } from '../UserPhotoProvider';
import { userRegistrationContext } from '../UserRegistrationProvider';
import './post-item.css';

function PostItem(props) {
	const loggedIn = useContext(userRegistrationContext);

	// Array destructuring to bring context data and update function.
	const currentName = useContext(userNameContext);
	const currentUUID = useContext(userUUIDContext);
	const currentPhoto = useContext(userPhotoContext);

	//Below line syncs the Post Item component to the correct book's context provider via props.
	const currentPosts = useContext(props.context);

	const data = props.post;

	let [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
	let [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
	let [addModalIsOpen, setAddModalIsOpen] = useState(false);
	let [showDeleteToggles, setShowDeleteToggles] = useState(false);
	let [showUpdateToggles, setShowUpdateToggles] = useState(false);
	let [selectedIndex, setSelectedIndex] = useState();
	let [addedPostTitle, setAddedPostTitle] = useState();
	let [addedPostText, setAddedPostText] = useState();

	const currentDate = new Date();
	const formattedDate = currentDate.toString().slice(0, 16);

	const customStyles = {
		overlay: {
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
		},
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

	function openDeleteModal(index) {
		setDeleteModalIsOpen(true);
		setSelectedIndex(`${index}`);
	}

	function closeDeleteModal() {
		setDeleteModalIsOpen(false);
		document
			.querySelectorAll('input[type=checkbox]')
			.forEach((el) => (el.checked = false));
		setShowDeleteToggles(!showDeleteToggles);
	}

	function openAddModal() {
		setAddModalIsOpen(true);
	}

	function closeAddModal() {
		setAddModalIsOpen(false);
		document
			.querySelectorAll('input[type=checkbox]')
			.forEach((el) => (el.checked = false));
	}

	function openUpdateModal(index) {
		setUpdateModalIsOpen(true);
		setSelectedIndex(`${index}`);
	}

	function closeUpdateModal() {
		setUpdateModalIsOpen(false);
		document
			.querySelectorAll('input[type=checkbox]')
			.forEach((el) => (el.checked = false));
		setShowUpdateToggles(!showUpdateToggles);
	}

	function deleteToggle() {
		setShowDeleteToggles(!showDeleteToggles);
	}
	function updateToggle() {
		setShowUpdateToggles(!showUpdateToggles);
	}

	function deletePost() {
		setDeleteModalIsOpen(false);

		var revisedPosts = [];
		for (let i = 0; i < currentPosts[0].length; i++) {
			if (i != selectedIndex) {
				revisedPosts.push(currentPosts[0][i]);
			}
		}
		currentPosts[1](revisedPosts);
		document
			.querySelectorAll('input[type=checkbox]')
			.forEach((el) => (el.checked = false));
	}

	function updatePost(index) {
		setUpdateModalIsOpen(false);

		let updatedTimeStamp =
			currentPosts[0][index].timeStamp.toString().slice(0, 15) +
			' (Edited ' +
			formattedDate +
			')';

		var updatedPosts = currentPosts[0];
		updatedPosts[selectedIndex] = {
			index: selectedIndex,
			name: String(currentName[0]),
			uuid: String(currentUUID[0]),
			userPhoto: String(currentPhoto[0]),
			title: String(addedPostTitle),
			text: String(addedPostText),
			timeStamp: String(updatedTimeStamp),
		};
		currentPosts[1](updatedPosts);
		document
			.querySelectorAll('input[type=checkbox]')
			.forEach((el) => (el.checked = false));
		setShowUpdateToggles(!showUpdateToggles);
	}

	function addPost() {
		setAddModalIsOpen(false);

		var updatedPosts = currentPosts[0];
		var postLength = updatedPosts.length;
		var updatedIndex = postLength;
		updatedPosts.push({
			index: updatedIndex,
			name: String(currentName[0]),
			uuid: String(currentUUID[0]),
			userPhoto: String(currentPhoto[0]),
			title: String(addedPostTitle),
			text: String(addedPostText),
			timeStamp: formattedDate,
		});
		currentPosts[1](updatedPosts);
	}

	let lsCurrentUUID;

	function getUUID() {
		if (window.localStorage.getItem('lsCompiledUserInfo')) {
			let lsCompiledUserInfo = JSON.parse(
				window.localStorage.getItem('lsCompiledUserInfo')
			);
			lsCurrentUUID = lsCompiledUserInfo.uuid;
		}
		return lsCurrentUUID;
	}

	return (
		<div>
			{data.map((post, index) => (
				<div id='deleteContainer'>
					{showDeleteToggles && post.uuid == currentUUID[0] && (
						<div id='deleteSection'>
							<input
								type='checkbox'
								id={post.index}
								name=''
								value='Delete Post?'
								className='deleteCheckbox'
								onClick={() => openDeleteModal(index)}
							/>
							<label id='deleteLabel' htmlFor={post.index}>
								Delete?
							</label>
						</div>
					)}

					{showUpdateToggles && post.uuid == currentUUID[0] && (
						<div id='updateSection'>
							<input
								type='checkbox'
								id={post.index}
								name=''
								value='Update Post?'
								className='checkbox'
								onClick={() => openUpdateModal(index)}
							/>
							<label id='updateLabel' htmlFor={post.index}>
								Update?
							</label>
						</div>
					)}
					<div id='postContainer'>
						<div id='photoContainer'>
							<img id='userPhoto' src={post.userPhoto} alt='user' />
						</div>
						<div id='textContainer'>
							<div id='title'>{post.title}</div>
							<div id='text'> {post.text}</div>
							<div id='signature'>
								{post.name} - {post.timeStamp}
							</div>
						</div>
					</div>
					<Modal
						id='deletePostModal'
						isOpen={deleteModalIsOpen}
						onRequestClose={closeDeleteModal}
						style={customStyles}
						contentLabel='deleteModal'
					>
						<div>Permanently Delete This Post?</div>
						<div id='deleteModalButtons'>
							<button onClick={() => deletePost(index)}>Yes</button>
							<button onClick={closeDeleteModal}>No</button>
						</div>
					</Modal>
					<Modal
						id='updatePostModal'
						isOpen={updateModalIsOpen}
						onRequestClose={closeUpdateModal}
						style={customStyles}
						contentLabel='updateModal'
					>
						<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update Post:</h2>
						<input
							class='input-field'
							type='text'
							placeholder='Title'
							onInput={(event) => setAddedPostTitle(event.target.value)}
						/>
						<textarea
							id='updateTextField'
							class='text-field'
							type='text'
							placeholder='Text'
							onInput={(event) => setAddedPostText(event.target.value)}
						/>
						<div id='updateButtonContainer'>
							<button
								id='modalCloseButton'
								className='buttonItem'
								onClick={() => updatePost(index)}
							>
								Update Post
							</button>
							<button
								id='modalCancelButton'
								className='buttonItem'
								onClick={closeUpdateModal}
							>
								Cancel
							</button>
						</div>
					</Modal>
					<Modal
						id='addPostModal'
						isOpen={addModalIsOpen}
						onRequestClose={closeAddModal}
						style={customStyles}
						contentLabel='addModal'
					>
						<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Post:</h2>
						<input
							class='input-field'
							type='text'
							placeholder='Title'
							onInput={(event) => setAddedPostTitle(event.target.value)}
						/>
						<textarea
							class='text-field'
							type='text'
							placeholder='Post'
							onInput={(event) => setAddedPostText(event.target.value)}
						/>
						<div id='addButtonContainer'>
							<button
								id='modalCloseButton'
								className='buttonItem'
								onClick={addPost}
							>
								Add Post
							</button>
							<button className='buttonItem' onClick={closeAddModal}>
								Cancel
							</button>
						</div>
					</Modal>
				</div>
			))}

			{loggedIn[0] && (
				<div id='buttonContainer2'>
					<button onClick={openAddModal} className='addUpdateDeleteButtons'>
						Add Post
					</button>
					<button onClick={updateToggle} className='addUpdateDeleteButtons'>
						Update Post
					</button>
					<button onClick={deleteToggle} className='addUpdateDeleteButtons'>
						Delete Post
					</button>
				</div>
			)}
		</div>
	);
}

export default PostItem;
