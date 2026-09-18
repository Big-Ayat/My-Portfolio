import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ArrowIconSolid from '../components/icons/ArrowIconSolid'

export default function ProjectDetails() {
  return (
    <Layout>
      {/* Hero Section Start */}
      <section className="bg-secondary pt-20">
        <div className="max-w-[1075px] mx-auto px-4 xl:px-0" data-aos="flip-down" data-aos-delay="300">
          <div className="grid grid-cols-1 lg:grid-cols-2 pb-12">
            <div className="mb-10">
              <ul className="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px]">
                  <a className="text-black-text-800" href="#">UI Design</a>
                </li>
                <li className="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px] ml-[10px]">
                  <a className="text-orange" href="#">03 May 2019</a>
                </li>
              </ul>

              <h4 className="text-black-800 font-bold font-Syne leading-snug text-[32px] lg:text-[44px]">
                Mendero fintech dashboard design
              </h4>
            </div>
            <ul className="flex flex-wrap gap-y-6 lg:gap-y-0">
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Client</span>
                <h2 className="text-black-800 text-[15px] font-bold font-sans leading-none">Mashorom</h2>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Category</span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">User Experience</h4>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Tools</span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">Figma, Webflow</h4>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Start date</span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">09/01/ 2020</h4>
              </li>
              <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">End date</span>
                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">09/01/ 2020</h4>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 mb-12">
            <img className="w-full rounded-[20px]" src="/assets/images/blog-details/banner.png" alt="banner" />
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      <section className="bg-white pb-[120px] mt-[-130px] pt-[130px] md:mt-[-280px] md:pt-[280px]">
        <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1">
            <h3 className="text-[32px] font-bold font-Syne leading-10 mb-4">Overview</h3>
            <p className="paragraph mb-12">
              Minimalism combined with elements of french typography and brutalism helped us to realize the site
              exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative
              and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with
              elements of french typography and visually restrained, but stylish. Informative and pleasant to use,
              with an elegant aftertaste of a serious financial institutional client, and close collaboration.
            </p>
            <p className="paragraph mb-12">
              That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only
              reflects who you are and what you stand for, but words that truly land with those that read them,
              calling your audience in and making them want more.
            </p>
            <ul className="text-black-800 text-xl font-bold font-Syne mb-12">
              <li className="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                Advantage
              </li>
              <li className="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                Accomplished
              </li>
              <li className="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                Marketplace startups
              </li>
              <li className="relative z-[1] before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-4 before:-z-[1] before:w-[6px] before:h-[6px] pl-10">
                SaaS startups
              </li>
            </ul>

            <h3 className="text-[32px] font-bold font-Syne leading-10 mb-4">Typography</h3>
            <p className="paragraph mb-12">
              The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a
              ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with
              something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky
              ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the
              content, and the technical and geometric Sora font for the body copy and paste overall hierachy.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 sm:col-span-5">
              <img className="w-full h-full rounded-[20px]" src="/assets/images/blog-details/post1.png" alt="post image" />
            </div>
            <div className="col-span-12 sm:col-span-7">
              <img className="w-full h-full rounded-[20px]" src="/assets/images/blog-details/post2.png" alt="post image" />
            </div>
          </div>

          <div className="grid grid-cols-1">
            <h3 className="text-[32px] font-bold font-Syne leading-10 mb-4">Conclusion</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <p className="paragraph">
              The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a
              ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with
              something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky
              ‘construction’ vibe. We use Chaney for general display and when we want to drive attention to the
              content, and the technical and geometric Sora font for the body copy and paste overall hierachy.
            </p>
            <p className="paragraph">
              The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a
              ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with
              something in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky
              ‘construction’ vibe.
            </p>
          </div>
        </div>
      </section>

      {/* Project Section Start */}
      <section className="bg-white pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12" data-aos="flip-down">
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Portfolio</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  Related{' '}
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[32px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    wo
                  </span>
                  rk
                </h3>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6" data-aos="flip-down">
              <div className="rounded-[20px] overflow-hidden mb-6">
                <img src="/assets/images/projects/project3.png" alt="project1" />
              </div>
              <div className="flex flex-wrap flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  <Link
                    className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                    to="/projects"
                  >
                    APP
                  </Link>
                  <Link
                    className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                    to="/projects"
                  >
                    DEVELOPMENT
                  </Link>
                </div>
                <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                  <h4 className="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize">
                    <Link className="transition-all" to="/project-details">
                      Basinik Finance App
                    </Link>
                  </h4>
                  <Link to="/project-details" className="group-hover:animate-arrow-move-up">
                    <ArrowIconSolid />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6" data-aos="flip-down" data-aos-delay="300">
              <div className="rounded-[20px] overflow-hidden mb-6">
                <img src="/assets/images/projects/project4.png" alt="project1" />
              </div>
              <div className="flex flex-wrap flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  <Link
                    className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                    to="/projects"
                  >
                    APP
                  </Link>
                  <Link
                    className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                    to="/projects"
                  >
                    DEVELOPMENT
                  </Link>
                </div>
                <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                  <h4 className="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize">
                    <Link className="transition-all" to="/project-details">
                      Oxilex Dashboard design
                    </Link>
                  </h4>
                  <Link to="/project-details" className="group-hover:animate-arrow-move-up">
                    <ArrowIconSolid />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section End */}
    </Layout>
  )
}
