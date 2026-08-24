import { useMemo, useState, type ReactNode } from 'react';

import { applySort } from '@common/utils/sorting';
import { EmployeeList } from '@components/EmployeeList';
import { ErrorState } from '@components/ErrorState';
import { FilterTabs } from '@components/FilterTabs';
import { OfflineBanner } from '@components/OfflineBanner';
import { SearchInput } from '@components/SearchInput';
import { EmployeeListSkeleton } from '@components/Skeleton';
import { SortControl } from '@components/SortControl';
import { useEmployeeFilters } from '@pages/EmployeesPage/hooks/useEmployeeFilters';
import { useEmployees } from '@pages/EmployeesPage/hooks/useEmployees';
import { filterByPosition, filterBySearch } from '@pages/EmployeesPage/utils/filtering';

import './index.scss';

export function EmployeesPage(): ReactNode {
  const { employees, isLoading, error, refetch } = useEmployees();
  const { search, position, sort, setSearch, setPosition, setSort } = useEmployeeFilters();
  const [isSortOpen, setIsSortOpen] = useState(false);

  const isNoConnection = Boolean(
    error && (error.status === 0 || !navigator.onLine || error.message === 'Failed to fetch')
  );
  const isUnexpectedError = Boolean(error && !isNoConnection);

  const visibleEmployees = useMemo(() => {
    const byPosition = filterByPosition(employees, position);
    const bySearch = filterBySearch(byPosition, search);
    return applySort(bySearch, sort);
  }, [employees, position, search, sort]);

  const filterSectionClassName = [
    'employees-page__filter-section',
    isUnexpectedError && 'employees-page__filter-section--has-error',
    isNoConnection && 'employees-page__filter-section--offline',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="employees-page">
      {isNoConnection && <OfflineBanner />}
      <div className={filterSectionClassName}>
        {!isNoConnection && (
          <>
            <h1 className="employees-page__title">Search</h1>
            <SearchInput
              value={search}
              onChange={setSearch}
              onSortClick={() => setIsSortOpen(true)}
              isSortActive={Boolean(sort)}
            />
          </>
        )}
        <FilterTabs active={position} onChange={setPosition} />
      </div>

      {(isLoading || isNoConnection) && <EmployeeListSkeleton />}

      {!isLoading && isUnexpectedError && (
        <ErrorState variant="unexpected" onRetry={refetch} />
      )}

      {!isLoading && !isUnexpectedError && !isNoConnection && (
        <EmployeeList employees={visibleEmployees} sort={sort} />
      )}

      <SortControl
        isOpen={isSortOpen}
        value={sort}
        onChange={setSort}
        onClose={() => setIsSortOpen(false)}
      />
    </div>
  );
}