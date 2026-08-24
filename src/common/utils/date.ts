export function parseBirthDate(birthDate: string): Date {
  const [day, month, year] = birthDate.split('.').map(Number);
  return new Date(year, month - 1, day);
}
