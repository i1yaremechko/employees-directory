import type { Employee } from '@app-types/employee';

const BASE_URL = 'https://68f747b1f7fb897c66152f05.mockapi.io';

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
    response = await fetch(`${BASE_URL}/employees`);
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
    response = await fetch(`${BASE_URL}/employees/${id}`);
  } catch {
    throw new ApiError('NETWORK_ERROR');
  }

  if (!response.ok) {
    throw new ApiError('REQUEST_FAILED', response.status);
  }

  return response.json();
}
