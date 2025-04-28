import React, { useContext } from 'react';
import UserContext from './UserContext';

function Education() {
const { education } = useContext(UserContext);

return (
<div>
<h2>{education.headerTitle}</h2>
<p>{education.description}</p>
</div>
);
}

export default Education;