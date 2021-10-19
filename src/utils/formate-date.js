export const formatDate = (data) => {
  const dateObj = new Date(data);
  return dateObj.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};
