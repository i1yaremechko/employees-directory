import type { Employee, EmployeePosition } from '@app-types/employee';

export function filterByPosition(
  employees: Employee[],
  position: EmployeePosition | 'ALL' | null
): Employee[] {
  if (!position || position === 'ALL') return employees;
  return employees.filter((employee) => employee.position === position);
}

export function filterBySearch(employees: Employee[], query: string): Employee[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return employees;

  return employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
    const email = employee.email.toLowerCase();
    const tag = (employee.tag ?? '').toLowerCase();

    return fullName.includes(trimmed) || email.includes(trimmed) || tag.includes(trimmed);
  });
}
