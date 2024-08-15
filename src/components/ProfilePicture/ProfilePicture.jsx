import "./ProfilePicture.css"
import ImgLogo from "/Imgs/avatar-jessica.jpeg"

function ProfilePicture(){
    return (
        <div className="details">
            <div>
                <img id="profile-picture" src={ImgLogo} />
            </div>
            <div>
                <h1 id="profile-name">Jessica Randall</h1>
                <h3 id="profile-address">London, United Kingdom</h3>
                <q id="profile-description">Front-end developer and avid reader.</q>
            </div>
        </div>
    )
}

export default ProfilePicture;