import React from 'react'

export default function SearchForm(props) {
  return (
    <form>
      <input type="text" onChange={props.getInputValue} />
      <div className="btn-wrapper">
        <button onClick={props.handleSearchClick} className="btn" id="username" >Search by username</button>
        <button onClick={props.handleSearchClick} className="btn" id="content">Search by content</button>
      </div>
    </form>
  )
}
