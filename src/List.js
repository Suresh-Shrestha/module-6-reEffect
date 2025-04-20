import React, { useState, useRef } from 'react';
import './List.css'
const List = ({
listTitle = "My List",
placeholderText = "Put top goals here",
buttonLabel = "Add",
Listdescriptin = "This is my list of goals.",
clearButtonLabel = "Clear List",
emptyInputAlert = "Textbox cannot be empty!",
emptyListAlert = "There are no items to clear!",
}) => {
const [items, setItems] = useState([]);
const listInput = useRef(null);

const handleAdd = () => {
const value = listInput.current.value.trim();
if (!value) {
alert(emptyInputAlert);
return;
}
setItems([...items, value]);
listInput.current.value = '';
listInput.current.focus();
};

const handleClear = () => {
if (items.length === 0) {
alert(emptyListAlert);
return;
}
setItems([]);
listInput.current.value = '';
listInput.current.focus();
};

return (
<div>
<h3>My top goals</h3>
<input type="text" ref={listInput} placeholder={placeholderText} class='inputData'/>
<button onClick={handleAdd}class='AddButton'>{buttonLabel}</button>
<button onClick={handleClear}class='removeBotton'>{clearButtonLabel}</button>
<p>{Listdescriptin}</p>
<ul>
{items.map((item, i) => (
<li key={i}>{item}</li>
))}
</ul>
</div>
);
};

export default List;