import type { ChangeEvent } from 'react';

import './index.scss';

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
    <div className="search-input">
      <div className="search-input__box">
        <img
          className="search-input__icon"
          src={`${BASE_URL}/images/search.svg`}
          alt=""
        />
        <input
          className="search-input__field"
          type="text"
          placeholder="Enter name, tag, email..."
          value={value}
          onChange={handleChange}
          aria-label="Search employees"
        />
        <button
          type="button"
          className="search-input__sort-button"
          onClick={onSortClick}
          aria-label="Sort"
        >
          <img
            className={`search-input__sort-icon ${isSortActive ? 'search-input__sort-icon--active' : ''
              }`}
            src={`${BASE_URL}/images/list.svg`}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}