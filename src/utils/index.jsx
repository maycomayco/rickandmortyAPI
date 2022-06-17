/* Implementacion custom de uuid */
const uuid = () => {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);

  return `${date}${random}`;
};

export default uuid;
