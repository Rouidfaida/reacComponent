
import React from "react";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import Name from "./Components/Profile/FullName";
import Adresse from "./Components/Profile/Address"
function App() {
  return (
    <div   style={{  
      backgroundImage: "linear-gradient(to right, aqua, blue)",   width: 700, height: 500,backgroundColor : 'aqua',
      marginLeft: '500px',
      marginTop: '50px',
      borderRadius: 20,

    }}>
       <ProfilePhoto/>
       <Name/>
       <Adresse/>
       </div>
  );
}

export default App;
