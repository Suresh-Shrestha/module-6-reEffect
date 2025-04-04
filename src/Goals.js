
import List from "./List";
const Goals = ({ headerTitle, description, suggestedEntry, buttonLabel }) => { 

return (
<div>
<h2>{headerTitle}</h2>
<p>{description}</p>
<List listTitle="My top Goals" placeholderText="enter goals" buttonLabel={buttonLabel} Listdescriptin="Here is my list of goals:"></List>
</div>
);
};

export default Goals;