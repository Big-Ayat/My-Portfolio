import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ArrowIconSolid from '../components/icons/ArrowIconSolid'

interface Project {
  image: string
  title: string
  href: string
  span: string
  delay?: number
}

const projects: Project[] = [
  {
    image: '/assets/images/portfolios/project1.png',
    title: 'Planetopia',
    href: 'https://www.behance.net/gallery/178935071/Planetopia',
    span: 'col-span-12 md:col-span-6 lg:col-span-5',
    delay: 600,
  },
  {
    image: '/assets/images/portfolios/project2.png',
    title: 'Gamezone AR/VR Design',
    href: 'https://www.behance.net/gallery/161244663/Gaming-Zone',
    span: 'col-span-12 md:col-span-6 lg:col-span-7',
    delay: 800,
  },
  {
    image: '/assets/images/portfolios/project6.png',
    title: 'coming soon',
    href: '#',
    span: 'col-span-12 md:col-span-6 lg:col-span-7',
  },
  {
    image: '/assets/images/portfolios/project7.png',
    title: 'coming soon',
    href: '#',
    span: 'col-span-12 md:col-span-6 lg:col-span-5',
    delay: 300,
  },
]

export default function Projects() {
  return (
    <Layout>
      <section className="bg-white pt-20 pb-[120px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12" data-aos="flip-down" data-aos-delay="400">
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Portfolio</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  My recent{' '}
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    w
                  </span>
                  orks
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {projects.map((project) => (
              <div key={project.title + project.image} className={project.span} data-aos="flip-down" data-aos-delay={project.delay}>
                <div className="overflow-hidden relative rounded-[20px] group before:absolute before:left-0 before:right-0 before:contents before:bg-black-600 before:w-full before:h-full before:opacity-0 hover:before:opacity-80 before:transition-opacity before:duration-300 h-full">
                  <img className="w-full h-full" src={project.image} alt={project.title} />
                  <div className="absolute bottom-[-150px] left-6 right-6 transition-all duration-300 group-hover:bottom-6">
                    <div className="flex flex-wrap items-center justify-between text-white hover:text-orange">
                      <h4 className="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize peer">
                        <a className="transition-all" href={project.href} target="_blank" rel="noreferrer">
                          {project.title}
                        </a>
                      </h4>
                      <Link to="/project-details" className="peer-hover:animate-arrow-move-up">
                        <ArrowIconSolid />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
