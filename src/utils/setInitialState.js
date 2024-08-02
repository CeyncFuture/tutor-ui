const initialUserData = {
  firstName: '',
  lastName: '',
  userRole: '',
  profilePicture: 1,
  isLoggedIn: false
};
const setInitialState = (user = initialUserData) => {
  return {
    user
  };
};

export default setInitialState;
