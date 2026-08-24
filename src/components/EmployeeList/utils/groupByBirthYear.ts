import type { Employee } from '@common/types/employee';

export interface EmployeeGroup {
  year: number;
  items: Employee[];
}

export function groupByBirthYear(employees: Employee[]): EmployeeGroup[] {
  const groupsMap = employees.reduce<Record<number, Employee[]>>((acc, employee) => {
    const year = new Date(employee.birthDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(employee);
    return acc;
  }, {});

  return Object.keys(groupsMap)
    .map(Number)
    .sort((a, b) => b - a)
    .map((year) => ({
      year,
      items: groupsMap[year],
    }));
}
