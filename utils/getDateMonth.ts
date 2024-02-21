export default function formatDateFromString(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ];
  const monthIndex = date.getMonth();
  const monthName = monthNames[monthIndex];
  const year = date.getFullYear();

  return `${day} ${monthName} ${year}`;
}
