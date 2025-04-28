import React, { useContext } from 'react';
import UserContext from './UserContext';

function Hobbies() {
const { hobbies } = useContext(UserContext);

return (
<div>
<h2>{hobbies.headerTitle}</h2>
<p>{hobbies.description}</p>
</div>
);
}

export default Hobbies;