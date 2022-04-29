import ProfileListing from './profile/prfileMap';
import './App.css';
import profileData from './Data';
import HandleName from './profile/handleName';

function App() {
  return (
    <div className="App">
      
      <ProfileListing/>
      <HandleName data={profileData[0]}/>
     
    </div>
  );
}

export default App;
