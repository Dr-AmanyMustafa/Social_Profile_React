import "./ProfileDetails.css"
import ProfileItems from "../ProfileItems/ProfileItems";

function ProfileDetails(){
    const ArrayOfObjects = [
        {ItemName:"GitHub"},
        {ItemName:"Frontend Mentor"},
        {ItemName:"LinkedIn"},
        {ItemName:"Twitter"},
        {ItemName:"Instagram"}
    ];
    return (
        <div id="ItemsWrapper">
            {ArrayOfObjects.map((item) => {
                return (
                    <ProfileItems ItemName={item.ItemName}></ProfileItems>
                );
            })}
        </div>
    );
}

export default ProfileDetails;