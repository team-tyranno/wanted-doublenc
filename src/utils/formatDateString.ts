export const formatDateString = (dateString: string) => {
  const formattedString = dateString.slice(0, 10).replace(/-/g, '.');

  return formattedString;
};
