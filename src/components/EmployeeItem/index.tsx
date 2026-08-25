import { useNavigate } from 'react-router-dom';

import type { Employee } from '@/common/types';
import {
  formatBirthDateShort,
  formatPosition,
} from '@components/EmployeeItem/utils';

import './index.scss';

interface EmployeeItemProps {
  employee: Employee;
  showBirthDate?: boolean;
}

export function EmployeeItem({
  employee,
  showBirthDate = false,
}: EmployeeItemProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="employee-item"
      onClick={() => navigate(`/employees/${employee.id}`)}
    >
      <img
        className="employee-item__avatar"
        alt={`${employee.firstName} ${employee.lastName}`}
        src={employee.avatarUrl}
      />
      <div className="employee-item__description">
        <p className="employee-item__title">
          {employee.firstName} {employee.lastName}
          {employee.tag && (
            <span className="employee-item__tag">{employee.tag}</span>
          )}
        </p>
        <p className="employee-item__position">
          {formatPosition(employee.position)}
        </p>
      </div>
      {showBirthDate && (
        <span className="employee-item__birth-date">
          {formatBirthDateShort(employee.birthDate)}
        </span>
      )}
    </button>
  );
}