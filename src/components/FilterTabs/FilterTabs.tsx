import { POSITION_TABS } from '@app-types/employee';
import type { EmployeePosition } from '@app-types/employee';

import styles from './FilterTabs.module.scss';

interface FilterTabsProps {
  active: EmployeePosition | 'ALL';
  onChange: (value: EmployeePosition | 'ALL') => void;
}

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className={styles.tabs} role="tablist">
      {POSITION_TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={active === tab.value}
          className={`${styles.tab} ${active === tab.value ? styles.tabActive : ''}`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
