const formattedDate = (
  startTime: string,
  endTime?: string,
): { years: number; months: number } => {
  const initialDate = new Date(startTime);
  const finalDate = endTime ? new Date(endTime) : new Date();

  let years = finalDate.getFullYear() - initialDate.getFullYear();
  let months = finalDate.getMonth() - initialDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  console.log(`Anos: ${years}, Meses: ${months}`);

  return { years, months };
};

export default formattedDate;
