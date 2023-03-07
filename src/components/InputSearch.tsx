import React, { useState } from "react";

import { TfiSearch } from "react-icons/tfi";

import Input from "./Input";

const InputSearch: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="input-search">
      <Input
        id="input-search"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        value={value}
        placeholder="Search"
      />

      <button className="search-button">
        <TfiSearch size={18} />
      </button>

      <style jsx>{`
        .input-search {
          display: flex;
          flex-direction: row;
          width: 35%;
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
