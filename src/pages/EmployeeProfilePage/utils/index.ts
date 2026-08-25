export const UNKNOWN_ERROR_MESSAGE = 'UNKNOWN_ERROR';

export function formatPosition(position: string): string {
  return position.charAt(0) + position.slice(1).toLowerCase();
}

export function formatBirthDateLong(birthDate: string): string {
  const [day, month, year] = birthDate.split('.').map(Number);
  const date = new Date(year, month - 1, day);
  const formatted = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return formatted.toLowerCase();
}

export function calculateAge(birthDate: string): number {
  const [day, month, year] = birthDate.split('.').map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hasHadBirthdayThisYear) age -= 1;
  return age;
}
