import './index.scss';

interface EmptyMessageProps {
  title?: string;
  subtitle?: string;
}

const BASE_URL = import.meta.env.BASE_URL;

export function EmptyMessage({
  title = "We didn't find anyone",
  subtitle = "Try to adjust your request",
}: EmptyMessageProps) {
  return (
    <div className="empty-message">
      <img
        src={`${BASE_URL}/images/left-pointing-magnifying-glass.svg`}
        alt=""
        className="empty-message__icon"
        aria-hidden="true"
      />
      <h2 className="empty-message__title">{title}</h2>
      <p className="empty-message__subtitle">{subtitle}</p>
    </div>
  );
}