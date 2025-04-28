import React, { useContext } from 'react';
import UserContext from './UserContext';

function Hobbies() {
    const { userData, setUserData } = useContext(UserContext);
const { hobbies } = userData;

return (
<div>
<h2>{hobbies.headerTitle}</h2>
<p>{hobbies.description}</p>
</div>
);
}

export default Hobbies;