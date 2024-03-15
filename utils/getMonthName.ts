export default function getMonthName(monthNumber: number): string {
  // Ensure monthNumber is within valid range (0-11)
  if (monthNumber < 0 || monthNumber > 11) {
    throw new Error('Month number must be between 0 and 11');
  }

  // Create a Date object with the given month number and a day (1)
  const date = new Date(2000, monthNumber, 1); // Year 2000 is just a placeholder

  // Use Intl.DateTimeFormat to get the month name
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);

  return monthName;
}