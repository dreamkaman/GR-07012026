function getDaysInMonth(year: number, month: number) {
  // month: 1–12
  return new Date(year, month, 0).getDate();
}

export function calculateDailyPoints() {
  const today = new Date();

  const dailyPoints: number[] = [];

  const currentSeasonDay = getCurrentSeasonDay(today);

  for (let i = 1; i <= currentSeasonDay; i += 1) {
    if (i === 1) {
      dailyPoints.push(2);
    }

    if (i == 2) {
      dailyPoints.push(3);
    }

    if (i > 2) {
      dailyPoints.push(dailyPoints[i - 2] + dailyPoints[i - 3] * 0.6);
    }
  }

  const result = dailyPoints.reduce((prev, current) => prev + current, 0);

  return formatSum(result);
}

function getCurrentSeasonDay(date: Date): number {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  switch (currentMonth) {
    case 0:
      return getDaysInMonth(currentYear, 12) + currentDay;
    case 1:
      return (
        getDaysInMonth(currentYear, 1) +
        getDaysInMonth(currentYear, 12) +
        currentDay
      );
    case 2:
      return currentDay;
    case 3:
      return getDaysInMonth(currentYear, 3) + currentDay;
    case 4:
      return (
        getDaysInMonth(currentYear, 3) +
        getDaysInMonth(currentYear, 4) +
        currentDay
      );
    case 5:
      return currentDay;
    case 6:
      return getDaysInMonth(currentYear, 6) + currentDay;
    case 7:
      return (
        getDaysInMonth(currentYear, 6) +
        +getDaysInMonth(currentYear, 7) +
        currentDay
      );
    case 8:
      return currentDay;
    case 9:
      return getDaysInMonth(currentYear, 9) + currentDay;
    case 10:
      return (
        getDaysInMonth(currentYear, 9) +
        getDaysInMonth(currentYear, 10) +
        currentDay
      );
    case 11:
      return currentDay;
    default:
      return 0;
  }
}

function formatSum(sum: number) {
  if (sum > 1000) {
    return `${Math.round(sum / 1000)}K`;
  }

  return sum.toFixed(2);
}
