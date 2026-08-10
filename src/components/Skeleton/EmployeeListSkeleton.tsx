import styles from './EmployeeListSkeleton.module.scss';

interface EmployeeListSkeletonProps {
  count?: number;
}

export function EmployeeListSkeleton({ count = 6 }: EmployeeListSkeletonProps) {
  return (
    <ul className={styles.skeletonList} aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className={styles.skeletonItem}>
          <div className={styles.skeletonAvatar} />
          <div className={styles.skeletonLines}>
            <div className={`${styles.skeletonLine} ${styles['skeletonLine--title']}`} />
            <div className={`${styles.skeletonLine} ${styles['skeletonLine--subtitle']}`} />
          </div>
        </li>
      ))}
    </ul>
  );
}
