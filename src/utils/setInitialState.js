const initialUserData = {
  first_name: '',
  last_name: '',
  user_role: '',
  profile_picture: 1,
  is_logged_in: false
};
const setInitialState = (user = initialUserData) => {
  return {
    user
  };
};

export default setInitialState;
