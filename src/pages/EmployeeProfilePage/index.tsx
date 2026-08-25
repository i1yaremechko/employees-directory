import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ApiError, fetchEmployeeById } from '@common/api/employees';
import type { Employee } from '@/common/types';
import { ErrorState } from '@components/ErrorState';
import {
  UNKNOWN_ERROR_MESSAGE,
  calculateAge,
  formatBirthDateLong,
  formatPosition,
} from '@pages/EmployeeProfilePage/utils';

import './index.scss';

const BASE_URL = import.meta.env.BASE_URL;

export function EmployeeProfilePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    if (!id) return;

    let isCancelled = false;
    setIsLoading(true);
    setError(null);

    fetchEmployeeById(id)
      .then((data) => {
        if (!isCancelled) setEmployee(data);
      })
      .catch((err: unknown) => {
        if (!isCancelled) {
          setError(err instanceof ApiError ? err : new ApiError(UNKNOWN_ERROR_MESSAGE));
        }
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [id]);

  if (isLoading) {
    return <div className="employee-profile-page__loading">Loading...</div>;
  }

  if (error || !employee) {
    return (
      <ErrorState
        variant={error?.status ? 'unexpected' : 'no-connection'}
        onRetry={() => navigate(0)}
      />
    );
  }

  return (
    <div className="employee-profile-page">
      <div className="employee-profile-page__top-wrapper">
        <div className="employee-profile-page__content">
          <button
            type="button"
            className="employee-profile-page__back-button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={`${BASE_URL}/images/arrow.svg`} alt="" aria-hidden="true" />
          </button>
          <img
            className="employee-profile-page__avatar"
            alt="Avatar"
            src={employee.avatarUrl}
          />

          <h1 className="employee-profile-page__title">
            {employee.firstName} {employee.lastName}
            {employee.tag && (
              <span className="employee-profile-page__tag">{employee.tag}</span>
            )}
          </h1>

          <p className="employee-profile-page__position">
            {formatPosition(employee.position)}
          </p>
        </div>
      </div>

      <div className="employee-profile-page__bottom-wrapper">
        <div className="employee-profile-page__info-row">
          <img
            className="employee-profile-page__info-icon"
            src={`${BASE_URL}/images/star.svg`}
            alt="Birth date icon"
            aria-hidden="true"
          />
          <span className="employee-profile-page__info-text employee-profile-page__info-text--birth-date">
            {formatBirthDateLong(employee.birthDate)}
          </span>
          <span className="employee-profile-page__info-extra">
            {calculateAge(employee.birthDate)} years old
          </span>
        </div>
        <div className="employee-profile-page__info-row">
          <img
            className="employee-profile-page__info-icon"
            src={`${BASE_URL}/images/phone.svg`}
            alt="Phone icon"
            aria-hidden="true"
          />
          <span className="employee-profile-page__info-text">{employee.phone}</span>
        </div>
      </div>
    </div>
  );
}