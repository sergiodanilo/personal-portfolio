import Image from 'next/image';

const icons = ['javascript', 'typescript', 'react', 'nodejs', 'nest', 'bootstrap', 'mongodb']

export default function About() {
  return(
    <div class="project-wrapper container py-5">
      <div class="row">
        <section class="col-12 col-lg-8">
          <div class="section-row">
            <div class="mb-5">
              <Image
                src="https://res.cloudinary.com/personal-portfolio-images/image/upload/v1624201256/project-figure-main_oj9vqf.jpg"
                alt="Blog techs"
                className="img-fluid"
                width={730}
                height={330}
              />
            </div>
            <h3 class="section-title">Project techs</h3>
            <p>I started this portfolio page in order to learn and improve some technologies that I wasn't using in my job.</p>
          </div>
        </section>

        <aside class="project-sidebar col-12 col-lg-4 pl-lg-5">
          <div class="project-sidebar-inner bg-white p-4">
            <div class="sidebar-row">
              <h3 class="sidebar-title mb-3">Technologies Used</h3>
              <p class="mb-4">This project was made by these technologies:</p>
              <div class="webdev-icons row mb-5 align-items-center">
                {
                  icons.map(icon =>
                    <div class="webdev-icon col-4 col-md-3 mr-0 mb-4">
                      <Image class="img-fluid" src={`/${icon}.svg`} width={50} height={50} />
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}