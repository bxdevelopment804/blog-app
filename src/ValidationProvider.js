import { createContext, useState } from 'react';

export const validationContext = createContext();

const ValidationProvider = (props) => {
	const [validation, setValidation] = useState([
		{
			name: 'Emily Thompson',
			email: 'etgoeshome@gmail.com',
		},
		{
			name: 'Adam Day',
			email: 'alldayeveryday@gmail.com',
		},
		{
			name: 'Hugo Smith',
			email: 'bighugo@gmail.com',
		},
	]);

	return (
		<validationContext.Provider value={[validation, setValidation]}>
			{props.children}
		</validationContext.Provider>
	);
};

export default ValidationProvider;
