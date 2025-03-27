import { useState } from "react";

const Goals = ({ headerTitle, description, suggestedEntry, buttonLabel }) => {
const [myGoal, setMyGoal] = useState();

const handleClick = () => {
setMyGoal(document.getElementById("goal").value);
};

return (
<div>
<h2>{headerTitle}</h2>
<h3>{myGoal}</h3>
<p>{description}</p>
<input id="goal" name="goal" placeholder={suggestedEntry} />
<button onClick={handleClick}>{buttonLabel}</button>
</div>
);
};

export default Goals;