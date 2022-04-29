import profileData from "../Data";
import Profile from "./profile";
import './../App.css';
import HandleName from "./handleName";

function ProfileListing(){
    return(
        <div className="box1">
            
            {
                profileData.map((eachone) =>  <Profile image={'https://i.ytimg.com/vi/E_AhudFZnM0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEbRC2buw7fVG2_3aYEd_h7-X4rg'} data = {eachone}/>)
                
            }
            

        </div>
    );
}
export default ProfileListing
