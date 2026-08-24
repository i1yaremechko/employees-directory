import type { EmployeePosition } from '@common/types/employee';

export interface PositionTab {
  key: string;
  label: string;
  value: EmployeePosition | 'ALL';
}

export const POSITION_TABS: PositionTab[] = [
  { key: 'all', label: 'All', value: 'ALL' },
  { key: 'designers', label: 'Designers', value: 'DESIGNER' },
  { key: 'analysts', label: 'Analysts', value: 'ANALYST' },
  { key: 'managers', label: 'Managers', value: 'MANAGER' },
  { key: 'developers', label: 'Developers', value: 'DEVELOPER' },
  { key: 'recruiters', label: 'Recruiters', value: 'RECRUITER' },
];
