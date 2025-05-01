import React, { useState, useRef, useEffect, useContext } from 'react';
import './List.css';
import UserContext from './UserContext';
import useGoalTimer from './hooks/useGoalTimer';

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
const [selectedGoal, setSelectedGoal] = useState(null);
const listInput = useRef(null);
const timerInput = useRef(null);
const listRef = useRef(null);
const { userData, setUserData } = useContext(UserContext);
const { goals } = userData;
const { time, isRunning, startTimer, pauseTimer, resetTimer } = useGoalTimer();

useEffect(() => {
console.log("🟡 List updated:", items);

if (listRef.current) {
listRef.current.scrollIntoView({ behavior: 'smooth' });
}
}, [items]);

const handleAdd = () => {
const value = listInput.current.value.trim();
if (!value) {
alert(emptyInputAlert);
return;
}
setItems([...items, { text: value, completed: false }]);
setUserData(prev => ({
    about: {
    headerTitle: prev.about.headerTitle,
    name: prev.about.name,
    photo: {
    me: prev.about.photo.me,
    width: prev.about.photo.width
    },
    description: prev.about.description
    },
    education: {
    headerTitle: prev.education.headerTitle,
    description: prev.education.description
    },
    hobbies: {
    headerTitle: prev.hobbies.headerTitle,
    description: prev.hobbies.description
    },
    goals: {
    headerTitle: prev.goals.headerTitle,
    description: prev.goals.description,
    suggestedEntry: prev.goals.suggestedEntry,
    buttonLabel: prev.goals.buttonLabel,
    totalGoalsAdded: prev.goals.totalGoalsAdded + 1 // <-- only change here
    }
    }));
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

const handleStartTimer = () => {
const duration = parseInt(timerInput.current.value);
if (isNaN(duration) || duration <= 0) {
alert("Please enter a valid time in minutes");
return;
}
startTimer(duration * 60);
};

const formatTime = (seconds) => {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;
return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const toggleComplete = (index) => {
const newItems = [...items];
newItems[index].completed = !newItems[index].completed;
setItems(newItems);
};

return (
<div>
<h3>{listTitle}</h3>
<input type="text" ref={listInput} placeholder={placeholderText} className='inputData' />
<button onClick={handleAdd} className='AddButton'>{buttonLabel}</button>
<button onClick={handleClear} className='removeBotton'>{clearButtonLabel}</button>
<p>{Listdescriptin}</p>

<div className="timer-container">
<h4>Goal Timer</h4>
<input
type="number"
ref={timerInput}
placeholder="Enter minutes"
min="1"
className="inputData"
/>
<div className="timer-controls">
{!isRunning ? (
<button onClick={handleStartTimer}>Start Timer</button>
) : (
<button onClick={pauseTimer}>Pause</button>
)}
<button onClick={resetTimer}>Reset</button>
</div>
<div className="timer-display">
{formatTime(time)}
</div>
</div>

<ul ref={listRef}>
{items.map((item, i) => (
<li
key={i}
className={item.completed ? 'completed' : ''}
onClick={() => toggleComplete(i)}
>
{item.text}
</li>
))}
</ul>
</div>
);
};

export default List;