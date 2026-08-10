import { useEffect } from 'react';

import type { SortOption } from '@app-types/employee';

import styles from './SortControl.module.scss';

interface SortControlProps {
  isOpen: boolean;
  value: SortOption | null;
  onChange: (value: SortOption | null) => void;
  onClose: () => void;
}

const BASE_URL = import.meta.env.BASE_URL;

export function SortControl({ isOpen, value, onChange, onClose }: SortControlProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (option: SortOption) => {
    onChange(value === option ? null : option);
    onClose();
  };

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.backdrop}
        onClick={onClose}
        aria-label="Close sort menu"
      />
      <div className={styles.panel} role="dialog" aria-modal="true" aria-labelledby="sort-title">
        <h3 id="sort-title" className={styles.title}>
          Sort by
        </h3>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          <img src={`${BASE_URL}/images/close.svg`} alt="" className={styles.closeIcon} />
        </button>

        <div className={styles.options} role="radiogroup" aria-labelledby="sort-title">
          <label className={styles.option}>
            <input
              type="radio"
              name="sort"
              checked={value === 'alphabet'}
              onClick={() => handleSelect('alphabet')}
              onChange={() => { }}
            />
            <img
              src={value === 'alphabet' ? `${BASE_URL}/images/selected.svg` : `${BASE_URL}/images/unselected.svg`}
              alt=""
              className={styles.radioIcon}
            />
            <span className={styles.labelText}>Alphabet</span>
          </label>
          <label className={styles.option}>
            <input
              type="radio"
              name="sort"
              checked={value === 'birthDate'}
              onClick={() => handleSelect('birthDate')}
              onChange={() => { }}
            />
            <img
              src={value === 'birthDate' ? '/images/selected.svg' : '/images/unselected.svg'}
              alt=""
              className={styles.radioIcon}
            />
            <span className={styles.labelText}>Birth date</span>
          </label>
        </div>
      </div>
    </div>
  );
}
