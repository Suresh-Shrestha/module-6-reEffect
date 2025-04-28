import { createContext, useState } from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Hobbies from './Hobbies';
import Goals from './Goals';
import logo from './logo.svg';
import logoINFO from './logoINFO.png';
import photo from './myPhoto.png';
import UserContext from './UserContext';

function App() {
  const [userData, setUserData] = useState({
    about: {
    headerTitle: "About Me",
    name: "Suresh",
    photo: { me: photo, width: '150px' },
    description: "I am a passionate developer who loves coding and building applications."
    },
    education: {
    headerTitle: "Education",
    description: "I am doing associate degree from MCC College."
    },
    hobbies: {
    headerTitle: "Hobbies",
    description: "I enjoy hiking, photography, and playing the guitar in my free time."
    },
    goals: {
    headerTitle: "My Goal",
    description: "This is a goal I'd like to achieve in the next year. As it changes, I will update it!",
    suggestedEntry: "Put a top goal here.",
    buttonLabel: "Add",
    totalGoalsAdded: 0
    }
    });

return (
<UserContext.Provider value={{userData, setUserData}}>
<div className="App">
<PersonalInfo />
<Education />
<Hobbies />
<Goals />

<header className="App-header">
<img src={logoINFO} className="infoLogo" alt="xlogo" />
<img src={logo} className="reactLogo" alt="logo" />
</header>
</div>
</UserContext.Provider>
);
}

export default App;