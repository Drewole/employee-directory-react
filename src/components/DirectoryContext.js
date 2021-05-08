import React from 'react';

const DirectoryContext = React.createContext({
	id      : '',
	picture : '',
	name    : '',
	phone   : '',
	email   : '',
	dob     : ''
});

export default DirectoryContext;
