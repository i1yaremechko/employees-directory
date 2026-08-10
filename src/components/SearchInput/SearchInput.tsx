import type { ChangeEvent } from 'react';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSortClick?: () => void;
  isSortActive?: boolean;
}

export function SearchInput({
  value,
  onChange,
  onSortClick,
  isSortActive = false,
}: SearchInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputBox}>
        <img className={styles.searchIcon} src="/images/search.svg" alt="" />
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name, tag, email..."
          value={value}
          onChange={handleChange}
          aria-label="Search employees"
        />
        <button
          type="button"
          className={styles.sortButton}
          onClick={onSortClick}
          aria-label="Sort"
        >
          <img
            className={`${styles.sortIcon} ${isSortActive ? styles.sortIconActive : ''}`}
            src="/images/list.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
