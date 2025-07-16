const formattedDate = (time: string): [string | number, number] => {
  let number: string | number = '';
  const today = new Date();
  const date = new Date(time);
  const difference = today.getTime() - date.getTime();
  const monthus = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
  if (monthus > 12) {
    const years = monthus / 12;
    number = years.toString().split('.')[0];
  } else {
    number = monthus;
  }
  return [number, monthus];
};

export default formattedDate;
