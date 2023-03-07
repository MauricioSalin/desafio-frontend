import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Icons
 */
import { TfiSearch } from 'react-icons/tfi';
import { MdHistory } from 'react-icons/md';

/**
 * Components
 */
import Input from '../Input';

/**
 * Hooks
 */
import useCache from '@/hooks/useCache';

const InputSearch: React.FC = () => {
  const [value, setValue] = useState('');
  const [openHistory, setOpenHistory] = useState(false);
  const [storedHistory, setStoredHistory] = useState([]);

  const { setLocalStorage, getLocalStorage } = useCache();

  const router = useRouter();

  const searchValue = (value: string) => {
    router.push({
      pathname: '/results',
      query: { searchQuery: value }
    });

    setOpenHistory(false);
  };

  const handleOnSearch = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (value.length) {
      searchValue(value);
      setLocalStorage('searchHistory', value);
    }
  };

  const handleOnFocus = () => {
    const history = getLocalStorage('searchHistory');

    setStoredHistory(history);
    setOpenHistory(true);
  };

  return (
    <div className="input-search">
      <Input
        id="input-search"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        onFocus={handleOnFocus}
        value={value}
        placeholder="Search"
      />

      {openHistory && (
        <div className="search-list">
          {storedHistory &&
            storedHistory.map((item: string) => (
              <div
                className="search-list-item"
                onClick={() => searchValue(item)}
              >
                <MdHistory size={22} />
                <span>{item}</span>
              </div>
            ))}
        </div>
      )}

      <button className="search-button" onClick={handleOnSearch}>
        <TfiSearch size={18} />
      </button>

      <style jsx>{`
        .input-search {
          position: relative;
          display: flex;
          flex-direction: row;
          width: 35%;
        }

        .search-list {
          width: 100%;
          position: absolute;
          text-align: left;
          top: 41px;
          left: 0;
          border-radius: 12px;
          background-color: #fff;
          height: 300px;
          border: 1px solid #ccc;
          box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
          padding: 10px 0;
        }

        .search-list-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: black;
          padding: 0 8px;
          cursor: pointer;
        }

        .search-list-item:hover {
          background-color: #0000000d;
        }

        .search-list-item span {
          margin: 8px;
        }

        .search-button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background-color: #f8f8f8;
          border-radius: 0 40px 40px 0;
          height: 40px;
          width: 64px;
          border-width: 1px 1px 1px 0;
          border-style: solid;
          border-color: #ccc;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default InputSearch;
