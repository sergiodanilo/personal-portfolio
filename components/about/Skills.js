import React from "react";

const backend = [
  "Java", "Spring (Boot, Data, Security)", "JPA (Hibernate, MyBatis)", "Rest, SOAP"
]

const frontendBasic = [
  "HTML", "CSS", "Javascript"
]

const frontendFrameworks = [
  "React", "Angular", "Node", "Express", "Webpack"
]

const frontendStyles = [
  "Bootstrap", "AntDesign", "Material UI"
]

const others = [
  "Oracle (PL/SQL)", "PostgreSQL", "MongoDB", "Git", "Docker", "Jenkins"
]

const Skills = () => {

  return(
    <section className="skills-section section py-5">
      <div className="container">
        <h3 className="section-title font-weight-bold text-center mb-3">Skills Overview</h3>
        <div className="section-intro mx-auto text-center mb-5 text-secondary">I have more than 10 years of experience
          building rich web applications for clients all over the world. Below is a quick overview of my main technical
          skill sets and tools I use. Want to find out more about my experience? <a href="resume.html">Check out my
            online resume</a>.
        </div>

        <div className="skills-blocks mx-auto pt-5">
          <div className="row">
            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
              <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                <h4 className="skills-cat text-center mb-3 mt-5">Backend</h4>
                <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="44px" viewBox="0 0 35 44" version="1.1">
                    <title>db</title>
                    <desc>Created with Sketch.</desc>
                    <defs/>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                      <g id="Landing" transform="translate(-924.000000, -604.000000)" stroke="#FFFFFF" strokeWidth="1.5625">
                        <g id="Section-skills" transform="translate(292.000000, 424.000000)">
                          <g id="content" transform="translate(0.000000, 162.000000)">
                            <g id="Col-R" transform="translate(443.000000, 0.000000)">
                              <g id="icon" transform="translate(166.000000, 0.000000)">
                                <g id="db" transform="translate(19.000000, 15.000000)">
                                  <path d="M37.8125,8.6875 C37.8125,11.2757812 30.8984375,13.375 21.40625,13.375 C11.9140625,13.375 5,11.2757812 5,8.6875 C5,6.09921875 11.9140625,4 21.40625,4 C30.8984375,4 37.8125,6.09921875 37.8125,8.6875 L37.8125,8.6875 Z" id="Path"/>
                                  <path d="M37.8125,9 L37.8125,19.9375 C37.8125,22.5257813 30.8984375,24.625 21.40625,24.625 C11.9140625,24.625 5,22.5257813 5,19.9375 L5,9" id="Path"/>
                                  <path d="M37.8125,30 L37.8125,40.9375 C37.8125,43.5257813 30.8984375,45.625 21.40625,45.625 C11.9140625,45.625 5,43.5257813 5,40.9375 L5,30" id="Path"/>
                                  <path d="M37.8125,20 L37.8125,30.9375 C37.8125,33.5257813 30.8984375,35.625 21.40625,35.625 C11.9140625,35.625 5,33.5257813 5,30.9375 L5,20" id="Path"/>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>

                <ul className="skills-list list-unstyled text-secondary">
                  {
                    backend.map((item, idx) =>
                      <li key={idx} className="mb-2">
                        <svg className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary" aria-hidden="true"
                             focusable="false" data-prefix="fas" data-icon="check" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        {item}
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>

            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
              <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                <h4 className="skills-cat text-center mb-3 mt-5">Frontend</h4>
                <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                <svg width="44px" height="37px" viewBox="0 0 44 37" version="1.1">
                    <title>frontend-icon</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                      <g id="Landing" transform="translate(-477.000000, -608.000000)" stroke="#FFFFFF" strokeWidth="1.5625">
                        <g id="Section-skills" transform="translate(292.000000, 424.000000)">
                          <g id="content" transform="translate(0.000000, 162.000000)">
                            <g id="Col-L">
                              <g id="icon" transform="translate(167.000000, 0.000000)">
                                <g id="frontend-icon" transform="translate(15.000000, 15.000000)">
                                  <path d="M46.09375,16.40625 L3.90625,16.40625 L46.09375,16.40625 Z" id="Path"></path>
                                  <path d="M43.75,8.59375 L6.25,8.59375 C4.95546875,8.59375 3.90625,9.64296875 3.90625,10.9375 L3.90625,40.625 C3.90625,41.9195312 4.95546875,42.96875 6.25,42.96875 L43.75,42.96875 C45.0445313,42.96875 46.09375,41.9195312 46.09375,40.625 L46.09375,10.9375 C46.09375,9.64296875 45.0445313,8.59375 43.75,8.59375 L43.75,8.59375 Z" id="Path"></path>
                                  <path d="M41.40625,12.5 C41.40625,12.9320312 41.0570312,13.28125 40.625,13.28125 C40.1929688,13.28125 39.84375,12.9320312 39.84375,12.5 C39.84375,12.0679688 40.1929688,11.71875 40.625,11.71875 C41.0570312,11.71875 41.40625,12.0679688 41.40625,12.5 L41.40625,12.5 Z" id="Path"></path>
                                  <path d="M36.71875,12.5 C36.71875,12.9320312 36.3695312,13.28125 35.9375,13.28125 C35.5054688,13.28125 35.15625,12.9320312 35.15625,12.5 C35.15625,12.0679688 35.5054688,11.71875 35.9375,11.71875 C36.3695312,11.71875 36.71875,12.0679688 36.71875,12.5 L36.71875,12.5 Z" id="Path"></path>
                                  <path d="M32.03125,12.5 C32.03125,12.9320312 31.6820312,13.28125 31.25,13.28125 C30.8179688,13.28125 30.46875,12.9320312 30.46875,12.5 C30.46875,12.0679688 30.8179688,11.71875 31.25,11.71875 C31.6820312,11.71875 32.03125,12.0679688 32.03125,12.5 L32.03125,12.5 Z" id="Path"></path>
                                  <polyline id="Path" points="19.53125 25.78125 14.84375 29.6875 19.53125 33.59375"></polyline>
                                  <polyline id="Path" points="30.46875 25.78125 35.15625 29.6875 30.46875 33.59375"></polyline>
                                  <path d="M22.65625,36.71875 L27.34375,22.65625 L22.65625,36.71875 Z" id="Path"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>

                <h4 className="mb-3">Basics</h4>
                <ul className="skills-list list-unstyled text-secondary">
                  {
                    frontendBasic.map((item, idx) =>
                      <li key={idx} className="mb-2">
                        <svg className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary" aria-hidden="true"
                             focusable="false" data-prefix="fas" data-icon="check" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        {item}
                      </li>
                    )
                  }
                </ul>
                <hr />
                <h4 className="mb-3 mt-4">Frameworks</h4>
                <ul className="skills-list list-unstyled text-secondary">
                  {
                    frontendFrameworks.map((item, idx) =>
                      <li key={idx} className="mb-2">
                        <svg className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary" aria-hidden="true"
                             focusable="false" data-prefix="fas" data-icon="check" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        {item}
                      </li>
                    )
                  }
                </ul>
                <hr />
                <h4 className="mb-3 mt-4">Styles</h4>
                <ul className="skills-list list-unstyled text-secondary">
                  {
                    frontendStyles.map((item, idx) =>
                      <li key={idx} className="mb-2">
                        <svg className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary" aria-hidden="true"
                             focusable="false" data-prefix="fas" data-icon="check" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        {item}
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>

            <div className="skills-block col-12 col-lg-4">
              <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                <h4 className="skills-cat text-center mb-3 mt-5">Database & DevOps</h4>
                <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44px" height="42px" viewBox="0 0 44 42" version="1.1">
                    <title>swiss_army_knife</title>
                    <desc>Created with Sketch.</desc>
                    <defs/>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="swiss_army_knife" transform="translate(-3.000000, -4.000000)" fill="#FFFFFF" fillRule="nonzero">
                        <path d="M46.828125,36.4453125 C46.828125,36.4375 46.8203125,36.4375 46.8203125,36.4296875 C46.796875,36.3671875 46.7578125,36.3203125 46.71875,36.2734375 C46.6953125,36.2421875 46.6796875,36.203125 46.65625,36.171875 C46.6171875,36.1328125 46.5703125,36.109375 46.53125,36.078125 C46.4921875,36.0546875 46.4609375,36.015625 46.4140625,36 C46.375,35.984375 46.328125,35.984375 46.2890625,35.96875 C46.234375,35.953125 46.171875,35.9375 46.1171875,35.9375 C46.109375,35.9375 46.109375,35.9375 46.1015625,35.9375 C46.0546875,35.9375 46.0078125,35.953125 45.9609375,35.96875 C45.9140625,35.9765625 45.8671875,35.9765625 45.828125,35.9921875 L44.5546875,36.4609375 L43.4140625,35.7265625 C43.203125,35.59375 42.9453125,35.5625 42.71875,35.6484375 L41.4453125,36.1171875 L40.3046875,35.3828125 C40.1015625,35.25 39.8359375,35.21875 39.609375,35.3046875 L38.3359375,35.7734375 L37.1953125,35.0390625 C36.984375,34.90625 36.7265625,34.875 36.5,34.9609375 L35.2265625,35.4296875 L34.0859375,34.6953125 C33.875,34.5625 33.6171875,34.53125 33.390625,34.6171875 L32.1171875,35.0859375 L30.9765625,34.3515625 C30.765625,34.21875 30.5078125,34.1875 30.28125,34.2734375 L29.0078125,34.7421875 L27.8671875,34.0078125 C27.703125,33.8984375 27.5,33.859375 27.3046875,33.8984375 L27.078125,33.9375 L43.0078125,18.0078125 C44.5,16.546875 45.3125,14.5859375 45.3125,12.5 C45.3125,10.4140625 44.5,8.453125 43.0234375,6.9765625 C41.546875,5.5 39.5859375,4.6875 37.5,4.6875 C35.7890625,4.6875 34.171875,5.2421875 32.828125,6.25 L16.40625,6.25 C8.40625,6.25 3.609375,10.171875 3.40625,10.3359375 C3.2265625,10.484375 3.125,10.703125 3.125,10.9375 C3.125,11.171875 3.2265625,11.390625 3.40625,11.5390625 C3.609375,11.703125 8.40625,15.625 16.40625,15.625 L23.328125,15.625 L6.9765625,31.9765625 C5.5,33.453125 4.6875,35.4140625 4.6875,37.5 C4.6875,39.5859375 5.5,41.546875 6.9765625,43.0234375 C8.453125,44.5 10.4140625,45.3125 12.5,45.3125 C14.2109375,45.3125 15.828125,44.7578125 17.171875,43.75 L46.09375,43.75 C46.5234375,43.75 46.875,43.3984375 46.875,42.96875 L46.875,36.71875 C46.875,36.671875 46.859375,36.625 46.84375,36.578125 C46.8359375,36.5390625 46.84375,36.4921875 46.828125,36.4453125 Z M16.40625,14.0625 C10.8515625,14.0625 6.90625,11.9921875 5.265625,10.9375 C6.9140625,9.8828125 10.859375,7.8125 16.40625,7.8125 L31.140625,7.8125 L24.890625,14.0625 L16.40625,14.0625 Z M8.078125,41.921875 C6.8984375,40.7421875 6.25,39.171875 6.25,37.5 C6.25,35.828125 6.8984375,34.2578125 8.078125,33.078125 L25.7578125,15.3984375 C25.7578125,15.3984375 25.7578125,15.3984375 25.7578125,15.3984375 L33.0703125,8.0859375 C34.2578125,6.8984375 35.828125,6.25 37.5,6.25 C39.171875,6.25 40.7421875,6.8984375 41.921875,8.078125 C43.1015625,9.2578125 43.75,10.828125 43.75,12.5 C43.75,14.171875 43.1015625,15.7421875 41.921875,16.921875 L16.921875,41.921875 C15.7421875,43.1015625 14.171875,43.75 12.5,43.75 C10.828125,43.75 9.2578125,43.1015625 8.078125,41.921875 Z M18.859375,42.1875 L25.1640625,35.8828125 L27.2890625,35.5078125 L28.5,36.2890625 C28.7109375,36.421875 28.96875,36.453125 29.1953125,36.3671875 L30.46875,35.8984375 L31.609375,36.6328125 C31.8125,36.765625 32.078125,36.796875 32.3046875,36.7109375 L33.578125,36.2421875 L34.71875,36.9765625 C34.9296875,37.109375 35.1875,37.140625 35.4140625,37.0546875 L36.6875,36.5859375 L37.828125,37.3203125 C38.03125,37.453125 38.296875,37.484375 38.5234375,37.3984375 L39.796875,36.9296875 L40.9375,37.6640625 C41.1484375,37.796875 41.40625,37.828125 41.6328125,37.7421875 L42.90625,37.2734375 L44.046875,38.0078125 C44.171875,38.09375 44.3203125,38.1328125 44.46875,38.1328125 C44.5625,38.1328125 44.65625,38.1171875 44.7421875,38.0859375 L45.3125,37.84375 L45.3125,42.1875 L18.859375,42.1875 Z" id="Shape"/>
                        <path d="M36.71875,15.625 C38.0078125,15.625 39.0625,14.5703125 39.0625,13.28125 C39.0625,11.9921875 38.0078125,10.9375 36.71875,10.9375 C35.4296875,10.9375 34.375,11.9921875 34.375,13.28125 C34.375,14.5703125 35.4296875,15.625 36.71875,15.625 Z M36.71875,12.5 C37.1484375,12.5 37.5,12.8515625 37.5,13.28125 C37.5,13.7109375 37.1484375,14.0625 36.71875,14.0625 C36.2890625,14.0625 35.9375,13.7109375 35.9375,13.28125 C35.9375,12.8515625 36.2890625,12.5 36.71875,12.5 Z" id="Shape"/>
                        <path d="M17.1875,38.28125 C17.390625,38.28125 17.5859375,38.203125 17.7421875,38.0546875 C18.046875,37.75 18.046875,37.2578125 17.7421875,36.953125 L15.9453125,35.15625 L17.734375,33.3671875 C18.0390625,33.0625 18.0390625,32.5703125 17.734375,32.265625 C17.4296875,31.9609375 16.9375,31.9609375 16.6328125,32.265625 L14.84375,34.0546875 L13.0546875,32.265625 C12.75,31.9609375 12.2578125,31.9609375 11.953125,32.265625 C11.6484375,32.5703125 11.6484375,33.0625 11.953125,33.3671875 L13.7421875,35.15625 L11.953125,36.9453125 C11.6484375,37.25 11.6484375,37.7421875 11.953125,38.046875 C12.1015625,38.203125 12.296875,38.28125 12.5,38.28125 C12.703125,38.28125 12.8984375,38.203125 13.0546875,38.0546875 L14.84375,36.2578125 L16.6328125,38.046875 C16.7890625,38.203125 16.984375,38.28125 17.1875,38.28125 Z" id="Shape"/>
                      </g>
                    </g>
                  </svg>
                </div>
                <ul className="skills-list list-unstyled text-secondary">
                  {
                    others.map((item, idx) =>
                      <li key={idx} className="mb-2">
                        <svg className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary" aria-hidden="true"
                             focusable="false" data-prefix="fas" data-icon="check" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                        {item}
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
