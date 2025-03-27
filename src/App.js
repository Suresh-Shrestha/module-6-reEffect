import logo from './logo.svg';
import logoINFO from './logoINFO.png';
import './App.css';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Hobbies from './Hobbies';
import photo from './myPhoto.png';
import Goals from './Goals';
function App() {
  return (
   <div className="App">
    <PersonalInfo
headerTitle="Personal Information"
name="Suresh"
photo={{ me: photo, width: '150px' }}
description="I am a passionate developer who loves coding and building applications."
/>

<Education
headerTitle="Education"
description="I am doing associate degree from MCC College."
/>

<Hobbies
headerTitle="Hobbies"
description="I enjoy hiking, photography, and playing the guitar in my free time."
/>
<Goals
headerTitle="My Goal"
description="This is a goal I'd like to achieve in the next year. As it changes, I will update it!"
suggestedEntry="Put a top goal here."
buttonLabel="Add"
/>
      <header className="App-header">
        <img src={logoINFO} className="infoLogo" alt="xlogo" />
        <img src={logo} className="reactLogo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
