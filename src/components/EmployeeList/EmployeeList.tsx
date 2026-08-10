import { groupByBirthYear } from '@utils/sorting';
import type { Employee, SortOption } from '@app-types/employee';
import { EmployeeItem } from '@components/EmployeeItem/EmployeeItem';

import styles from './EmployeeList.module.scss';

interface EmployeeListProps {
  employees: Employee[];
  sort: SortOption | null;
  emptyTitle?: string;
  emptySubtitle?: string;
}

export function EmployeeList({
  employees,
  sort,
  emptyTitle = "We didn't find anyone",
  emptySubtitle = 'Try to adjust your request',
}: EmployeeListProps) {
  if (employees.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <img
          src="/images/left-pointing-magnifying-glass.svg"
          alt="Not found"
          className={styles.emptyIcon}
        />
        <h3 className={styles.emptyTitle}>{emptyTitle}</h3>
        <p className={styles.emptySubtitle}>{emptySubtitle}</p>
      </div>
    );
  }

  if (sort === 'birthDate') {
    const groups = groupByBirthYear(employees);

    return (
      <div className={styles.container}>
        {groups.map((group, index) => (
          <div key={group.year} className={styles.group}>
            {index > 0 && (
              <div className={styles.divider}>
                <span className={styles.dividerYear}>{group.year}</span>
              </div>
            )}
            <ul className={styles.groupList}>
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
    <ul className={styles.list}>
      {employees.map((employee) => (
        <li key={employee.id}>
          <EmployeeItem employee={employee} />
        </li>
      ))}
    </ul>
  );
}
