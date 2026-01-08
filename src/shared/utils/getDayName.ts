export function getDayName(date: string) {
  const realDate = new Date(date);
  const day = realDate.getDay();

  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
  };
}
