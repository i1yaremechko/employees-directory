import flyingSaucer from '/images/flying-saucer.svg';
import styles from './ErrorState.module.scss';

interface ErrorStateProps {
  variant?: 'unexpected' | 'no-connection';
  onRetry?: () => void;
}

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
    <div className={styles.error} role="alert">
      <img
        src={flyingSaucer}
        alt=""
        className={styles.error__icon}
        width={56}
        height={56}
      />

      <h2 className={styles.error__title}>
        {isNoConnection ? 'Error' : 'Unexpected error occurred...'}
      </h2>

      <p className={styles.error__message}>
        {isNoConnection
          ? "Can't load data. Check your internet connection and try again"
          : 'Try again a bit later'}
      </p>

      <button type="button" className={styles.error__button} onClick={handleAction}>
        {isNoConnection ? 'Try again' : 'Reload page'}
      </button>
    </div>
  );
}
