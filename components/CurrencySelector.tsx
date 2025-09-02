import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ALL_CURRENCIES } from '../constants';
import { SearchIcon, ChevronDownIcon } from './Icons';

interface CurrencySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const selectorRef = useRef<HTMLDivElement>(null);

  const selectedCurrency = useMemo(() => {
    return ALL_CURRENCIES.find(c => c.value === value) || ALL_CURRENCIES[0];
  }, [value]);

  const filteredCurrencies = useMemo(() => {
    if (!query) return ALL_CURRENCIES;
    const lowerCaseQuery = query.toLowerCase();
    return ALL_CURRENCIES.filter(
      currency =>
        currency.label.toLowerCase().includes(lowerCaseQuery) ||
        currency.value.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]);

  const handleSelect = (currencyCode: string) => {
    onChange(currencyCode);
    setQuery('');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectorRef}>
      <button
        type="button"
        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedCurrency.label} ({selectedCurrency.value})</span>
        <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 top-full mt-2 w-full bg-white border border-slate-300 rounded-lg shadow-lg max-h-60 overflow-hidden flex flex-col">
          <div className="p-2 border-b border-slate-200">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search currency..."
                className="w-full pl-9 pr-3 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                value={query}
                onChange={e => setQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <ul className="overflow-y-auto flex-1">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map(currency => (
                <li
                  key={currency.value}
                  className={`px-4 py-2 cursor-pointer hover:bg-indigo-50 ${value === currency.value ? 'bg-indigo-100' : ''}`}
                  onClick={() => handleSelect(currency.value)}
                >
                  {currency.label} <span className="text-slate-500">({currency.value})</span>
                </li>
              ))
            ) : (
                <li className="px-4 py-2 text-slate-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;