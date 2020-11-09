import React from 'react'

export default function SearchForm(props) {
  // console.log(props.inputMessage)

  return (
    <form>
      <input
        type="text"
        onChange={props.getInputValue}
        value={props.inputValue}
      />
      <div className="btn-wrapper center">
        <button onClick={props.handleSearchClick} className="btn" id="username" >Search by username</button>
        <button onClick={props.handleSearchClick} className="btn" id="content">Search by content</button>
      </div>
      {
        props.inputSelected ?
          <p className={props.messageStyle}>{props.inputSelected}</p> :
          null
      }

    </form>
  )
}
