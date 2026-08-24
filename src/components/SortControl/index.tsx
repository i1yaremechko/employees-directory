import { useEffect } from 'react';

import type { SortOption } from '@common/types/employee';

import './index.scss';

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
    <div className="sort-control">
      <button
        type="button"
        className="sort-control__backdrop"
        onClick={onClose}
        aria-label="Close sort menu"
      />
      <div
        className="sort-control__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sort-title"
      >
        <h3 id="sort-title" className="sort-control__title">
          Sort by
        </h3>
        <button
          type="button"
          className="sort-control__close-button"
          onClick={onClose}
          aria-label="Close"
        >
          <img
            src={`${BASE_URL}/images/close.svg`}
            alt=""
            className="sort-control__close-icon"
          />
        </button>

        <div
          className="sort-control__options"
          role="radiogroup"
          aria-labelledby="sort-title"
        >
          <label className="sort-control__option">
            <input
              type="radio"
              name="sort"
              checked={value === 'alphabet'}
              onClick={() => handleSelect('alphabet')}
              onChange={() => { }}
            />
            <img
              src={
                value === 'alphabet'
                  ? `${BASE_URL}/images/selected.svg`
                  : `${BASE_URL}/images/unselected.svg`
              }
              alt=""
              className="sort-control__radio-icon"
            />
            <span className="sort-control__label-text">Alphabet</span>
          </label>
          <label className="sort-control__option">
            <input
              type="radio"
              name="sort"
              checked={value === 'birthDate'}
              onClick={() => handleSelect('birthDate')}
              onChange={() => { }}
            />
            <img
              src={
                value === 'birthDate'
                  ? `${BASE_URL}/images/selected.svg`
                  : `${BASE_URL}/images/unselected.svg`
              }
              alt=""
              className="sort-control__radio-icon"
            />
            <span className="sort-control__label-text">Birth date</span>
          </label>
        </div>
      </div>
    </div>
  );
}