export const useGetFullDate = () => {
  const newDate = new Date();

  const dateInTwoDigit = ("0" + newDate.getDate()).slice(-2);
  const monthInTwoDigit = ("0" + (newDate.getMonth() + 1)).slice(-2);

  const date = `Em ${dateInTwoDigit}/${monthInTwoDigit}/${newDate.getFullYear()}, ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;

  return { date };
};
