export function formatPosition(position: string): string {
  if (!position) return '';
  return position.charAt(0) + position.slice(1).toLowerCase();
}

export function formatBirthDateShort(birthDate: string): string {
  if (!birthDate) return '';
  const parts = birthDate.split('.');
  if (parts.length < 2) return birthDate;

  const day = Number(parts[0]);
  const month = Number(parts[1]);

  if (Number.isNaN(day) || Number.isNaN(month)) return birthDate;

  const date = new Date(2000, month - 1, day);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }).toLowerCase();
}
