import React from 'react';
import List from './List';

function Goals() {
return (
<div>
<h3>My Goals</h3>
<p>This are goals I'd like to achieve in the next year</p>
<List
clearButtonLabel="Clear"
emptyInputAlert="Please type a goal before adding!"
emptyListAlert="There are no goals to clear!"
/>
</div>
);
}

export default Goals;