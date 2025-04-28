import React, { useState, useRef, useEffect } from 'react';
import './List.css';

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
const listRef = useRef(null);

useEffect(() => {
console.log("🟡 List updated:", items);

if (listRef.current) {
listRef.current.scrollIntoView({ behavior: 'smooth' });
}
}, [items]);

const handleAdd = () => {w3qaw1qa
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
<h3>{listTitle}</h3>
<input type="text" ref={listInput} placeholder={placeholderText} className='inputData' />
<button onClick={handleAdd} className='AddButton'>{buttonLabel}</button>
<button onClick={handleClear} className='removeBotton'>{clearButtonLabel}</button>
<p>{Listdescriptin}</p>
<ul ref={listRef}>
{items.map((item, i) => (
<li key={i}>{item}</li>
))}
</ul>
</div>
);
};

export default List;