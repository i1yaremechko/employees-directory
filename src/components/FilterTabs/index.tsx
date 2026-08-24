import type { EmployeePosition } from '@common/types/employee';

import './index.scss';
import { POSITION_TABS } from './configs';

interface FilterTabsProps {
  active: EmployeePosition | 'ALL';
  onChange: (value: EmployeePosition | 'ALL') => void;
}

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="filter-tabs" role="tablist">
      {POSITION_TABS.map((tab) => {
        const isActive = active === tab.value;

        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`filter-tabs__tab ${isActive ? 'filter-tabs__tab--active' : ''}`}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}