import React from 'react';

function PersonalInfo({ headerTitle, name, photo, description }) {
return (
<div>
<h3>{headerTitle}</h3>
<h3>{name}</h3>
<img src={photo.me} width={photo.width} alt={"photo of " + name} />
<p>{description}</p>
</div>
);
}

export default PersonalInfo;