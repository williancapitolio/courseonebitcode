export const useManageDates = () => {
  const createdAtEn = () => {
    const newDate = new Date();
    //AAAA-MM-DD
    const dateFormatEn = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`;

    return { dateFormatEn };
  };

  const { dateFormatEn } = createdAtEn();

  const dateNowFormat = () => {
    const newDate = new Date();
    const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    //Dia, DD/MM/AAA
    const dateFormat = `${dayName[newDate.getDay()]}, ${("0" + newDate.getDate()).slice(
      -2
    )}/${("0" + (newDate.getMonth() + 1)).slice(-2)}/${newDate.getFullYear()}`;

    return { dateFormat };
  };

  const { dateFormat } = dateNowFormat();

  return { dateFormatEn, dateFormat };
};
