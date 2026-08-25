import { parseBirthDate } from '@/common/utils';
import type { Employee } from '@/common/types';

export interface EmployeeGroup {
  year: number;
  items: Employee[];
}

export function groupByBirthYear(employees: Employee[]): { year: number; items: Employee[] }[] {
  const groups: { year: number; items: Employee[] }[] = [];

  employees.forEach((employee) => {
    const year = parseBirthDate(employee.birthDate).getFullYear();
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && lastGroup.year === year) {
      lastGroup.items.push(employee);
    } else {
      groups.push({ year, items: [employee] });
    }
  });

  return groups;
}
