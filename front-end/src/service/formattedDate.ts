const formattedDate = (time: string): [string[], number] => {
  let number: string[] = [''];
  const today = new Date();
  const date = new Date(time);
  const difference = today.getTime() - date.getTime();
  const monthus = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
  if (monthus > 12) {
    const years = monthus / 12;
    number = years.toString().split('.');
  } else {
    number = [monthus.toString()];
  }
  return [number, monthus];
};

export default formattedDate;
