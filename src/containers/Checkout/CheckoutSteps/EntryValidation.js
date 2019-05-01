export const lettersOnly = str => {
  const regex = /[^a-zA-Z\s]/g;

  return regex.test(str);
};

export const hasSpecialChar = str => {
  const regex = /[^a-zA-Z\s]/g;

  return regex.test(str);
};
