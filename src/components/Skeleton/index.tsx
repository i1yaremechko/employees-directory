import './index.scss';

interface EmployeeListSkeletonProps {
  count?: number;
}

export function EmployeeListSkeleton({ count = 6 }: EmployeeListSkeletonProps) {
  return (
    <ul className="employee-list-skeleton" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className="employee-list-skeleton__item">
          <div className="employee-list-skeleton__avatar" />
          <div className="employee-list-skeleton__lines">
            <div className="employee-list-skeleton__line employee-list-skeleton__line--title" />
            <div className="employee-list-skeleton__line employee-list-skeleton__line--subtitle" />
          </div>
        </li>
      ))}
    </ul>
  );
}