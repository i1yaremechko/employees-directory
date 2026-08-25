import { useSearchParams } from 'react-router-dom';

import type { EmployeePosition, SortOption } from '@/common/types';

export function useEmployeeFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') ?? '';
  const position = (searchParams.get('position') as EmployeePosition | 'ALL' | null) ?? 'ALL';
  const sort = (searchParams.get('sort') as SortOption | null) ?? null;

  const setSearch = (value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set('search', value);
      else next.delete('search');
      return next;
    });
  };

  const setPosition = (value: EmployeePosition | 'ALL') => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value && value !== 'ALL') next.set('position', value);
      else next.delete('position');
      return next;
    });
  };

  const setSort = (value: SortOption | null) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set('sort', value);
      else next.delete('sort');
      return next;
    });
  };

  return { search, position, sort, setSearch, setPosition, setSort };
}
