
import './App.css';

import FullName from './Component/Profile/FullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import Address from './Component/Profile/Address'


function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <br/>
    <FullName/>
    <br/>
    <Address/>
    </div>
  );
}

export default App;
