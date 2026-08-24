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

export type SortOption = 'alphabet' | 'birthDate';
