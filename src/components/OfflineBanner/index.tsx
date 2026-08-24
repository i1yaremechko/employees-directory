import type { ReactNode } from 'react';

import './index.scss';

interface OfflineBannerProps {
  message?: string;
}

export function OfflineBanner({
  message = "Can't load data. Check your internet connection and try again",
}: OfflineBannerProps): ReactNode {
  return (
    <div className="offline-banner" role="alert">
      <h2 className="offline-banner__title">Error</h2>
      <p className="offline-banner__message">{message}</p>
    </div>
  );
}