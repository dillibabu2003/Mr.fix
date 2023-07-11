import "./UserProfile.css";
import proimg from "./noprofil.jpg";

function UserProfile() {
  return (
    <div className="wrapper">
      <div className="profile-wrapper">
        <div className="image-and-id">
          <img className="profile-img" src={proimg} />
          <div className="userid-and-name">
            <div className="user-name"> Dilli Babu</div>
            <div className="user-id"> <b>Id: </b>&nbsp; seceuser001 </div>
          </div>
        </div>
        <div className="info">
        <div className="info-items"> <b>Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:</b> dillisurya@gmail.com</div>
        <div className="info-items"><b>PassWord  &nbsp; &nbsp;:</b> ds@1234</div>
        <div className="info-items"><b>Contact &nbsp; &nbsp; &nbsp; &nbsp;:</b>9360324636</div>
       </div>
      </div>
    </div>
  );
}

export default UserProfile;
