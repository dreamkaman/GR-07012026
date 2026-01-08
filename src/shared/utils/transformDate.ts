import { getDayName } from "./getDayName";

export function transformDate(date: string) {
  const historyDay = new Date(date);
  const today = new Date();
  const delta = (today.getTime() - historyDay.getTime()) / 1000 / 60 / 60 / 24;

  if (delta <= 7) {
    return getDayName(date);
  }
  const year = historyDay.getFullYear();
  const month =
    historyDay.getMonth() + 1 > 9
      ? historyDay.getMonth() + 1
      : `0${historyDay.getMonth() + 1}`;
  const day = historyDay.getDate();
  return `${month}/${day}/${year.toString().slice(-2)}`;
}
