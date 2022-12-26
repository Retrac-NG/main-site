// -- ANy sort of validations needed to be carried out -->

/**
 * Validates signup data
 * @param {*} userData - User object to be validated
 */
export const signUpValidator = (userData) => {
  // -- check email -->
  const validEmail = userData.email.test(
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
  );
  if (!validEmail) return { state: false, message: 'No valid email' };

  // -- check password -->
  const validPassword = userData.length >= 6;
  if (!validPassword) return { state: false, message: 'password too short' };

  return { state: true, message: 'validated' };
};
