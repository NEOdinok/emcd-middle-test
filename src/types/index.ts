type UserEntry = {
  email: string,
  name: { 
    title: string,
    first: string,
    last: string 
  },
  picture: {
    large: string,
    medium: string
    thumbnail: string
  },
};

export {
	UserEntry,
};
