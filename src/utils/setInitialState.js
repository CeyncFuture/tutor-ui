const initialUserData = {
  firstName: '',
  lastName: '',
  userRole: '',
  profilePicture: 1
};
const setInitialState = (user = initialUserData) => {
  return {
    user
  };
};

export default setInitialState;
