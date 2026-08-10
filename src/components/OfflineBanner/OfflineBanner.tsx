import { type ReactNode } from 'react';

import styles from './OfflineBanner.module.scss';

interface OfflineBannerProps {
  message?: string;
}

export function OfflineBanner({
  message = "Can't load data. Check your internet connection and try again",
}: OfflineBannerProps): ReactNode {
  return (
    <div className={styles.banner} role="alert">
      <h2 className={styles.banner__title}>Error</h2>
      <p className={styles.banner__message}>{message}</p>
    </div>
  );
}