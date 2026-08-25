import { EmployeeItem } from '@components/EmployeeItem';
import { EmptyMessage } from '@components/EmptyMessage';
import { groupByBirthYear } from './utils';
import type { Employee, SortOption } from '@/common/types';

import './index.scss';

interface EmployeeListProps {
  employees: Employee[];
  sort: SortOption | null;
  emptyTitle?: string;
  emptySubtitle?: string;
}

export function EmployeeList({
  employees,
  sort,
  emptyTitle,
  emptySubtitle,
}: EmployeeListProps) {
  if (employees.length === 0) {
    return <EmptyMessage title={emptyTitle} subtitle={emptySubtitle} />;
  }

  if (sort === 'birthDate') {
    const groups = groupByBirthYear(employees);

    return (
      <div className="employee-list">
        {groups.map((group, index) => (
          <div key={group.year} className="employee-list__group">
            {index > 0 && (
              <div className="employee-list__divider">
                <span className="employee-list__divider-year">{group.year}</span>
              </div>
            )}
            <ul className="employee-list__group-list">
              {group.items.map((employee) => (
                <li key={employee.id}>
                  <EmployeeItem employee={employee} showBirthDate />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="employee-list employee-list--plain">
      {employees.map((employee) => (
        <li key={employee.id}>
          <EmployeeItem employee={employee} />
        </li>
      ))}
    </ul>
  );
}