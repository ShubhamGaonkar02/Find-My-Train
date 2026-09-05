import React, { useState, useEffect, useRef } from 'react';
import { searchTrains, searchStations } from '../services/dataService';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ type = 'train', placeholder = 'Search trains...', inputClassName, hideIcon }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Click outside to close dropdown
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }
        const data = type === 'train' ? await searchTrains(query) : await searchStations(query);
        setSuggestions(data);
    };

    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, type]);

  const handleSelect = (item) => {
    setQuery('');
    setShowDropdown(false);
    if (type === 'train') {
      navigate(`/train/${item.trainNumber}`);
    } else {
      navigate(`/station/${item.stationCode}`);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-lg mx-auto">
      <div className="relative w-full">
        {!hideIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
        )}
        <input
          type="text"
          className={inputClassName || `input-field ${!hideIcon ? 'pl-10' : ''}`}
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
        />
      </div>

      {showDropdown && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 z-[999] mt-2 bg-white dark:bg-slate-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-slate-700 max-h-64 overflow-y-auto backdrop-blur-sm">
          <div className="sticky top-0 bg-slate-50 dark:bg-slate-900/50 px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
            Suggestions
          </div>
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="px-5 py-4 hover:bg-brand-50 dark:hover:bg-brand-900/20 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 last:border-0 transition-all flex flex-col gap-1"
              onClick={() => handleSelect(item)}
            >
              <div className="font-medium text-slate-900 dark:text-slate-100">
                {type === 'train' ? `${item.trainNumber} - ${item.trainName}` : `${item.stationCode} - ${item.stationName}`}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {type === 'train' ? `Runs: ${item.source} to ${item.destination}` : `Platforms: ${item.platforms}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
