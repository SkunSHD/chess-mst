const permissions = (Component, b,c)=> {
	Component.permissions = {
		auth: false,
		redirectPath: '/login',
		...Component.permissions
	};

	return Component;
};


export default permissions;