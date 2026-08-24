import { useNavigate } from 'react-router-dom';

import type { Employee } from '@common/types/employee';

import './index.scss';

interface EmployeeItemProps {
  employee: Employee;
  showBirthDate?: boolean;
}

function formatPosition(position: string): string {
  if (!position) return '';
  return position.charAt(0) + position.slice(1).toLowerCase();
}

function formatBirthDateShort(birthDate: string): string {
  if (!birthDate) return '';
  const parts = birthDate.split('.');
  if (parts.length < 2) return birthDate;

  const day = Number(parts[0]);
  const month = Number(parts[1]);

  if (Number.isNaN(day) || Number.isNaN(month)) return birthDate;

  const date = new Date(2000, month - 1, day);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }).toLowerCase();
}

export function EmployeeItem({ employee, showBirthDate = false }: EmployeeItemProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="employee-item"
      onClick={() => navigate(`/employees/${employee.id}`)}
    >
      <img className="employee-item__avatar" alt="Avatar" src={employee.avatarUrl} />
      <div className="employee-item__description">
        <p className="employee-item__title">
          {employee.firstName} {employee.lastName}
          {employee.tag && <span className="employee-item__tag">{employee.tag}</span>}
        </p>
        <p className="employee-item__position">{formatPosition(employee.position)}</p>
      </div>
      {showBirthDate && (
        <span className="employee-item__birth-date">
          {formatBirthDateShort(employee.birthDate)}
        </span>
      )}
    </button>
  );
}