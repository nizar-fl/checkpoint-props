import './../App.css';
import PropTypes from "prop-types";


function Profile({data ,image}){
    return(
        <div >
            <img className="profileimage" src={image} alt="" />
            <p className="fullName"> {data.fullName}</p>
            <p className="bio">{data.bio}</p>
            <p className="profession">{data.profession}</p>
            
            

        </div>
    )

}
export default Profile

Profile.defaultProps = {
    fullName:'unknown',
    bio:'unknown',
    profession:'unknown'
};


Profile.protoTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
}