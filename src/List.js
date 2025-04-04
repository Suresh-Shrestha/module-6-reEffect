import userEvent from '@testing-library/user-event';
import './List.css'
import React, {useState, useRef} from 'react'
function List ({
    listTitle = 'myList',
    placeholderText = 'enter an item',
    buttonLabel = 'add item',
    Listdescriptin = 'item',
}){
    const listInput = useRef(null)
    const [listObject, setListObject] = useState({
        listEntries: [],
        listItem: []
    })
    const handleAddItem = () => {
        const currentListEntries = [
            ...listObject.listEntries,
            listInput.current.value
        ]
        const currentListItem = currentListEntries.map((entry) => (
            <li key ={currentListEntries.indexOf(entry)}> {entry}</li>
        ))
        setListObject({
            listEntries: currentListEntries,
            listItem: currentListItem
        })
        listInput.current.value = "";
    }
    return(
        <div>
            
<h3>{listTitle}</h3>

<input placeholder={placeholderText} ref={listInput}></input>

<button onClick={handleAddItem}>{buttonLabel}</button>

<h4>{ Listdescriptin}</h4>

<ol>{listObject.listItem}</ol>

        </div>
    );
}
export default List;