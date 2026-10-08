import type { Employee } from '@/common/types';

const API_URL: string = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api';

export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function fetchEmployees(): Promise<Employee[]> {
  let response: Response;

  try {
    response = await fetch(`${API_URL}/employees`);
  } catch {
    throw new ApiError('NETWORK_ERROR');
  }

  if (!response.ok) {
    throw new ApiError('REQUEST_FAILED', response.status);
  }

  return response.json();
}

export async function fetchEmployeeById(id: string): Promise<Employee> {
  let response: Response;

  try {
    response = await fetch(`${API_URL}/employees/${id}`);
  } catch {
    throw new ApiError('NETWORK_ERROR');
  }

  if (!response.ok) {
    throw new ApiError('REQUEST_FAILED', response.status);
  }

  return response.json();
}
