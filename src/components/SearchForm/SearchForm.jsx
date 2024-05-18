import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import css from "./SearchForm.module.css"

export const SearchForm = ({onSubmit}) => {
  const [searchParams, setSearchParams] = useSearchParams(); //---

  const query = searchParams.get("query"); //---
  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

return (<form onSubmit={handleSubmit} className={css.wrapper}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="What movie do you want to find?"
          onChange={e => setSearchParams({ query: e.target.value })}
          value={query}
        />
        <button type="submit" className={css.icon}><BsSearch size="20px"/></button>
      </form>)
}