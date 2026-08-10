import { useMemo, useState, type ReactNode } from 'react';

import { filterByPosition, filterBySearch } from '@utils/filtering';
import { applySort } from '@utils/sorting';

import { useEmployeeFilters } from '@hooks/useEmployeeFilters';
import { useEmployees } from '@hooks/useEmployees';

import { EmployeeList } from '@components/EmployeeList/EmployeeList';
import { ErrorState } from '@components/ErrorState/ErrorState';
import { FilterTabs } from '@components/FilterTabs/FilterTabs';
import { SearchInput } from '@components/SearchInput/SearchInput';
import { EmployeeListSkeleton } from '@components/Skeleton/EmployeeListSkeleton';
import { SortControl } from '@components/SortControl/SortControl';
import { OfflineBanner } from '@/components/OfflineBanner/OfflineBanner';

import styles from './EmployeesPage.module.scss';

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

  const filterSectionClass = `${styles.filterSection} ${isUnexpectedError ? styles['filterSection--hasError'] : ''
    } ${isNoConnection ? styles['filterSection--offline'] : ''}`;

  return (
    <div className={styles.page}>
      {isNoConnection && <OfflineBanner />}
      <div className={filterSectionClass}>
        {!isNoConnection && (
          <>
            <h1 className={styles.title}>Search</h1>
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
        <EmployeeList
          employees={visibleEmployees}
          sort={sort}
        />
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
