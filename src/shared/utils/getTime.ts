export function getTime(date: string) {
  const realDate = new Date(date);

  const hours = realDate.getUTCHours();
  const minutes = realDate.getUTCMinutes();

  return `${hours > 9 ? hours : `0${hours}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }`;
}
