import React from 'react'

export default function Profile() {
  const firstName = "Amily"  
  const lastName = "Mansell"
  const avatar = "/profile-hex.png"



  return (
    <aside>
      <div className="profile">
        <img className="profile__image" src={avatar} />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
      </div>
    </aside>
  );
}
