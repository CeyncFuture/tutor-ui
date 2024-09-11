const initialUserData = {
  first_name: '',
  last_name: '',
  role: '',
  profile_picture: 1,
  is_logged_in: false
};
const setInitialState = (user = initialUserData) => {
  return {
    user
  };
};

export default setInitialState;
