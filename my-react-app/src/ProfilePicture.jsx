
function ProfilePicture(){

    const imageUrl = '/src/assets/pfp.jpg';

    const handleClick = (e) => {
        e.target.style.display = "none";
    };
    return(<img className="pookie" onClick={(e)=> {handleClick(e)}} src={imageUrl}></img>)
}


export default ProfilePicture