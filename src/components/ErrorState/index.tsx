import './index.scss';

interface ErrorStateProps {
  variant?: 'unexpected' | 'no-connection';
  onRetry?: () => void;
}

const BASE_URL = import.meta.env.BASE_URL;

export function ErrorState({ variant = 'unexpected', onRetry }: ErrorStateProps) {
  const isNoConnection = variant === 'no-connection';

  const handleAction = () => {
    if (isNoConnection && onRetry) {
      onRetry();
    } else if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <div className="error-state" role="alert">
      <img
        src={`${BASE_URL}/images/flying-saucer.svg`}
        alt=""
        className="error-state__icon"
      />

      <h2 className="error-state__title">
        {isNoConnection ? 'Error' : 'Unexpected error occurred...'}
      </h2>

      <p className="error-state__message">
        {isNoConnection
          ? "Can't load data. Check your internet connection and try again"
          : 'Try again a bit later'}
      </p>

      <button type="button" className="error-state__button" onClick={handleAction}>
        {isNoConnection ? 'Try again' : 'Reload page'}
      </button>
    </div>
  );
}