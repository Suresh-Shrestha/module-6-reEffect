import React, { useContext } from 'react';
import UserContext from './UserContext';
import List from './List';

function Goals() {
    const { userData, setUserData } = useContext(UserContext);
const { goals } = userData;

return (
<div>
<h2>{goals.headerTitle}</h2>
<p>{goals.description}</p>
<p>Goals added so far: {goals.totalGoalsAdded}</p>
<List
clearButtonLabel="Clear"
emptyInputAlert="Please type a goal before adding!"
emptyListAlert="There are no goals to clear!"
/>
</div>
);
}

export default Goals;