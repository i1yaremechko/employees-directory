import type { Employee, SortOption } from '@/common/types/employee';
import { parseBirthDate } from './date';

export function sortByAlphabet(employees: Employee[]): Employee[] {
  return [...employees].sort((a, b) => a.firstName.localeCompare(b.firstName));
}

export function sortByBirthDate(employees: Employee[]): Employee[] {
  return [...employees].sort(
    (a, b) => parseBirthDate(a.birthDate).getTime() - parseBirthDate(b.birthDate).getTime()
  );
}

export function sortByCreatedDate(employees: Employee[]): Employee[] {
  return [...employees].sort((a, b) => b.createdDate - a.createdDate);
}

export function applySort(employees: Employee[], sortOption: SortOption | null): Employee[] {
  if (sortOption === 'alphabet') return sortByAlphabet(employees);
  if (sortOption === 'birthDate') return sortByBirthDate(employees);
  return sortByCreatedDate(employees);
}
