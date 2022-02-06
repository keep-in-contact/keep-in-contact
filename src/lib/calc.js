export const getAge = (birthDate) => {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  return month < 0 || (month === 0 && today.getDate() < birthDate.getDate())
    ? age - 1
    : age;
};
