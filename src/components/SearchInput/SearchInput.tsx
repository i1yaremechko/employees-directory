import type { ChangeEvent } from 'react';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSortClick?: () => void;
  isSortActive?: boolean;
}

const BASE_URL = import.meta.env.BASE_URL;

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
        <img className={styles.searchIcon} src={`${BASE_URL}/images/search.svg`} alt="" />
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
            src={`${BASE_URL}/images/list.svg`}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
