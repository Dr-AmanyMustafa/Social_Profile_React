function ProfileItems(props){
    return (
        <div id="ItemsWrapper">
            <button>
                <label>{props.ItemName}</label>
            </button>
        </div>
    )
}

export default ProfileItems;