import React from 'react'

export default function SearchForm(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.getInputValue}
        value={props.inputValue}
        placeholder="Enter search tweet" name="fname" autoFocus
      />
      <div className="btn-wrapper center">
        <button onClick={props.handleSearchClick} className="btn" id="username" >Username</button>
        <button onClick={props.handleSearchClick} className="btn" id="content">Content</button>
      </div>
      {
        props.inputSelected ?
          <p className={props.messageStyle}>{props.inputSelected}</p> :
          null
      }

    </form>
  )
}
