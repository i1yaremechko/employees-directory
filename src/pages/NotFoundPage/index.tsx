import { useNavigate } from 'react-router-dom';

import { ErrorState } from '@components/ErrorState';

export function NotFoundPage() {
  const navigate = useNavigate();
  return <ErrorState variant="unexpected" onRetry={() => navigate('/')} />;
}
