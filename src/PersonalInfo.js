import React, { useContext } from 'react';
import UserContext from './UserContext';

function PersonalInfo() {
    const { userData, setUserData } = useContext(UserContext);
const { about } = userData;

return (
<div>
<h1>{about.headerTitle}</h1>
<img src={about.photo.me} alt="myself" style={{ width: about.photo.width }} />
<p>{about.description}</p>
</div>
);
}

export default PersonalInfo;