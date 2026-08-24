import './index.scss';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

const BASE_URL = import.meta.env.BASE_URL;

export function EmptyState({
  title = "We didn't find anyone",
  subtitle = 'Try to adjust your request',
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <img
        src={`${BASE_URL}/images/left-pointing-magnifying-glass.svg`}
        alt="Not found"
        className="empty-state__icon"
      />
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__subtitle">{subtitle}</p>
    </div>
  );
}