import myphoto from "../images/profilephotofaida.png"
function ProfilePhoto() {
    return (
          <img style={{width:200 ,height:200,    borderRadius: 120, marginLeft:220, marginTop:50
                  }} src={myphoto} alt="photoprof"/>
         
    );
  }
  export default ProfilePhoto;
