import React from "react";

const ResumeHeader = () => {

  return (
    <div className="header-intro header-intro-resume theme-bg-primary text-white py-5">
      <div className="container position-relative">
        <h2 className="page-heading mb-3">Resume</h2>
        <a
          className="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto"
          href="https://drive.google.com/file/d/1Rn9H-gyJPULQxKmLR3OyvNjUBX8AzwJx/view?usp=sharing"
          target="_blank"
        >
          <svg
            className="svg-inline--fa fa-download fa-w-16 mr-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="download"
            role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""
          >
            <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
          </svg>
          Download PDF Version
        </a>
      </div>
    </div>
  )
}

export default ResumeHeader;