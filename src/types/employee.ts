export type EmployeePosition = 'DEVELOPER' | 'DESIGNER' | 'MANAGER' | 'ANALYST' | 'RECRUITER';

export type EmployeeStatus = 'ACTIVE' | 'INACTIVE';

export interface Employee {
  id: string;
  createdDate: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  position: EmployeePosition;
  status: EmployeeStatus;
  tag: string | null;
  avatarUrl: string;
}

export const POSITION_TABS: { key: string; label: string; value: EmployeePosition | 'ALL' }[] = [
  { key: 'all', label: 'All', value: 'ALL' },
  { key: 'designers', label: 'Designers', value: 'DESIGNER' },
  { key: 'analysts', label: 'Analysts', value: 'ANALYST' },
  { key: 'managers', label: 'Managers', value: 'MANAGER' },
  { key: 'developers', label: 'Developers', value: 'DEVELOPER' },
  { key: 'recruiters', label: 'Recruiters', value: 'RECRUITER' },
];

export type SortOption = 'alphabet' | 'birthDate';
