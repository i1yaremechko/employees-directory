import { useEffect, useState } from 'react';

import { fetchEmployees, ApiError } from '@/common/api/employees';
import type { Employee } from '@/common/types';

interface UseEmployeesResult {
  employees: Employee[];
  isLoading: boolean;
  error: ApiError | null;
  refetch: () => void;
}

export function useEmployees(): UseEmployeesResult {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    setIsLoading(true);
    setError(null);

    fetchEmployees()
      .then((data) => {
        if (!isCancelled) setEmployees(data);
      })
      .catch((err: unknown) => {
        if (!isCancelled) {
          setError(err instanceof ApiError ? err : new ApiError('UNKNOWN_ERROR'));
        }
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [reloadToken]);

  const refetch = () => setReloadToken((token) => token + 1);

  return { employees, isLoading, error, refetch };
}
