import { createContext, useState } from 'react';

export const registeredUserListContext = createContext();

const RegisteredUserListProvider = (props) => {
	const [registeredUserList, setRegisteredUserList] = useState([
		{
			index: 0,
			name: 'Nora Edmonds',
			uuid: '2517',
			email: 'nora.edmonds@gmail.com',
			password: 'noraPassword',
			userPhoto:
				'https://images.pexels.com/photos/7520527/pexels-photo-7520527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			index: 1,
			name: 'Niyah Velazquez',
			uuid: '2518',
			email: 'niyah.velazquez@gmail.com',
			// email: 'test@test.com',
			password: 'niyahPassword',
			userPhoto:
				'https://images.pexels.com/photos/6222762/pexels-photo-6222762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			index: 2,
			name: 'Nikolas Bradley',
			uuid: '2519',
			email: 'nikolas.bradley@gmail.com',
			password: 'nikolasPassword',
			userPhoto:
				'https://images.pexels.com/photos/10264897/pexels-photo-10264897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			index: 3,
			name: 'Lilah Hodges',
			uuid: '2520',
			email: 'lilah.hodges@gmail.com',
			password: 'lilahPassword',
			userPhoto:
				'https://images.pexels.com/photos/6954204/pexels-photo-6954204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			index: 4,
			name: 'Tyler Sullivan',
			uuid: '2521',
			email: 'tyler.sullivan@gmail.com',
			password: 'tylerPassword',
			userPhoto:
				'hhttps://images.pexels.com/photos/7241328/pexels-photo-7241328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		},
		{
			index: 5,
			name: 'Giorgio Salinas',
			uuid: '2522',
			email: 'giorgioSalinas@gmail.com',
			password: 'giorgioPassword',
			userPhoto:
				'https://images.pexels.com/photos/1485994/pexels-photo-1485994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		},
		{
			index: 6,
			name: 'Lyla Sharples',
			uuid: '2523',
			email: 'lyla.sharples@gmail.com',
			password: 'lylaPassword',
			userPhoto:
				'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		},
		{
			index: 7,
			name: 'Kenneth Gibbs',
			uuid: '2524',
			email: 'kenneth.gibbs@gmail.com',
			password: 'kennethPassword',
			userPhoto:
				'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		},
		{
			index: 8,
			name: 'Tamera Milne',
			uuid: '2525',
			email: 'tamera.milne@gmail.com',
			password: 'tameraPassword',
			userPhoto:
				'https://images.pexels.com/photos/6976423/pexels-photo-6976423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		},
	]);

	return (
		<registeredUserListContext.Provider
			value={[registeredUserList, setRegisteredUserList]}
		>
			{props.children}
		</registeredUserListContext.Provider>
	);
};

export default RegisteredUserListProvider;
