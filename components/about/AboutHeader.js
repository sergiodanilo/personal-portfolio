import React from "react";
import Image from 'next/image'

export default function AboutHeader() {

  return (
    <div className="header-intro theme-bg-primary text-white py-5">
      <div className="container">
        <div className="profile-teaser media flex-column flex-md-row">
          <Image
            src="/profile.png"
            alt="Picture of the author"
            width={200}
            height={200}
          />
          <div className="media-body text-center text-md-left" style={{marginLeft: 40}}>
            <div className="lead">Hello, my name is</div>
            <h2 className="mt-0 display-4 font-weight-bold">Sérgio Holanda</h2>
            <div className="bio mb-3">
              A skilled Java developer with proven expertise in using new tools and technical developments
              to drive improvements throughout an entire software development lifecycle. Frontend enthusiast.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
