import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Layout from '../components/Layout'

interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "“I had the absolute pleasure of building several products with Ayatullah Olowu. He's a talented designer with skills that reach beyond just design as he's always looking for ways to push the boundaries of how we can make our product better.”",
    author: 'Chisom Okoye (Kuda)',
  },
  {
    quote:
      "“Ayatullah is a committed, dedicated professional, and highly skilled designer, responsive to immediate changes, and always adds his own twist to the designs he creates.“",
    author: 'Judi Trkmani (Cybernetic Labs)',
  },
  {
    quote: '“His turaround time is impressive. He has the shortest turnaround time in my history of working with product designer.”',
    author: 'Aladehusi Olugbenga (KPMG)',
  },
  {
    quote:
      "“He's an inspiring designer. His designs are simply amazing and greatly facilitate every developer's workflow. My brief collaboration with him was an exceptional experience, elevating my standards. I am grateful for the opportunity and look forward to potentially collaborating again in the future.”",
    author: 'Ufuk ÇETİN (Enertech)',
  },
]

const brandLogos = [
  '/assets/images/brand/logo1.svg',
  '/assets/images/brand/logo2.svg',
  '/assets/images/brand/logo3.svg',
  '/assets/images/brand/logo4.svg',
  '/assets/images/brand/logo5.svg',
  '/assets/images/brand/logo6.svg',
]

/** 48x48 solid quotation-mark icon used on each testimonial slide. */
function QuoteIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.75 13.5L21.75 30C21.7475 32.3862 20.7985 34.6739 19.1112 36.3612C17.4239 38.0485 15.1362 38.9975 12.75 39C12.3522 39 11.9706 38.842 11.6893 38.5607C11.408 38.2794 11.25 37.8978 11.25 37.5C11.25 37.1022 11.408 36.7206 11.6893 36.4393C11.9706 36.158 12.3522 36 12.75 36C14.3413 36 15.8674 35.3679 16.9926 34.2426C18.1179 33.1174 18.75 31.5913 18.75 30V28.5H7.5C6.70435 28.5 5.94129 28.1839 5.37868 27.6213C4.81607 27.0587 4.5 26.2956 4.5 25.5L4.5 13.5C4.5 12.7044 4.81607 11.9413 5.37868 11.3787C5.94129 10.8161 6.70435 10.5 7.5 10.5L18.75 10.5C19.5456 10.5 20.3087 10.8161 20.8713 11.3787C21.4339 11.9413 21.75 12.7044 21.75 13.5ZM40.5 10.5H29.25C28.4544 10.5 27.6913 10.8161 27.1287 11.3787C26.5661 11.9413 26.25 12.7044 26.25 13.5L26.25 25.5C26.25 26.2956 26.5661 27.0587 27.1287 27.6213C27.6913 28.1839 28.4544 28.5 29.25 28.5H40.5V30C40.5 31.5913 39.8679 33.1174 38.7426 34.2426C37.6174 35.3679 36.0913 36 34.5 36C34.1022 36 33.7206 36.158 33.4393 36.4393C33.158 36.7206 33 37.1022 33 37.5C33 37.8978 33.158 38.2794 33.4393 38.5607C33.7206 38.842 34.1022 39 34.5 39C36.8862 38.9975 39.1739 38.0485 40.8612 36.3612C42.5485 34.6739 43.4975 32.3862 43.5 30V13.5C43.5 12.7044 43.1839 11.9413 42.6213 11.3787C42.0587 10.8161 41.2957 10.5 40.5 10.5Z"
        fill="#080808"
        fillOpacity="0.9"
      />
    </svg>
  )
}

/** 48x2 divider line placed before each testimonial's author name. */
function DividerIcon() {
  return (
    <svg width="48" height="2" viewBox="0 0 48 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H48" stroke="#080808" strokeOpacity="0.4" />
    </svg>
  )
}

export default function About() {
  return (
    <Layout>
      <section className="bg-secondary pt-20 pb-[120px]" data-aos="zoom-in">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
            <img className="mx-auto" src="/assets/images/about/about2.png" alt="about me" />
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
              <span className="text-orange text-xl">About me</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">Ayatullah Olowu</h3>

              <h4 className="text-black-800 text-2xl mt-3 mb-4">Product Designer</h4>

              <p className="paragraph mb-6">
                I am a versatile product designer with over 6 years working experience in helping start-ups and businesses to
                solve user problems with minimalistic clean design and user-friendly layouts. I can help you with: - Product
                design using Figma, Sketch & Invision, Jira among many others - User flows, wireframes, use cases - Low and hi
                fidelity prototyping, testing, animated interactions - Design Systems, guides, design documentation and
                component libraries.
              </p>

              <p className="paragraph mb-6">
                Interested in working with me? Kindly get in touch and I will bring your ideas to life. .
              </p>

              <div>
                <img src="/assets/images/signature.svg" alt="signature" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-[120px] overflow-x-hidden">
        <div className="container" data-aos="zoom-out">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] xl:gap-[134px]">
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] mb-5">
                Ensuring client happiness.
              </h3>
              <p className="paragraph mb-7">
                My vision as a designer is to prioritize the happiness of my clients, striving to exceed their expectations
                with every project. By understanding their needs and desires, I aim to create solutions that not only meet
                but surpass their satisfaction. Through effective communication, attention to detail, and a commitment to
                excellence, I endeavor to foster long-lasting relationships built on trust and mutual success. My ultimate
                goal is to leave a positive and lasting impact on every client, ensuring their happiness and fulfillment.
              </p>
              <ul className="flex flex-wrap gap-9 2xl:gap-[40px]">
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    20+
                  </span>
                  <p className="paragraph">Worldwide client</p>
                </li>
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-Syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    100+
                  </span>
                  <p className="paragraph">Job done successfully</p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-end">
              <div className="flex flex-wrap flex-col mb-12">
                <span className="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative z-10 before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">
                  6+
                </span>
                <span className="strock-text mt-5">
                  Years of <br /> experience
                </span>
              </div>

              <div className="px-6 py-6 bg-black-800 rounded-lg flex flex-wrap justify-between items-end group">
                <div className="flex flex-col flex-wrap gap-y-2">
                  <span className="text-orange text-lg font-normal leading-none">SAY HELLO!</span>
                  <h4 className="text-white text-2xl xl:text-[28px] font-bold font-Syne leading-none">
                    olowuayatullah@gmail.com
                  </h4>
                </div>
                <div className="flex flex-wrap justify-end">
                  <a href="#" className="group-hover:animate-arrow-move-up">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 34L34 14" stroke="#FFB646" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M14 14H34V34"
                        stroke="#FFB646"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-[120px] testimonial" data-aos="fade-up">
        <div className="px-8 xl:pr-0 xl:pl-[4%] 2xl:pl-[6%] 3xl:pl-[17%]">
          <div className="flex flex-col xl:flex-row gap-x-[55px] 2xl:gap-x-[100px] 3xl:gap-x-[165px]">
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 md:text-center xl:text-left mb-10">
              <span className="text-orange text-xl">Testimonial</span>
              <h3 className="inline-block text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-2px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  What people
                </span>
                <br className="hidden xl:inline-block" /> are saying
              </h3>
            </div>

            <Swiper
              className="w-full"
              pagination={false}
              breakpoints={{
                576: { slidesPerView: 2, spaceBetween: 45 },
                992: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 45 },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.author}>
                  <span className="inline-block mb-5 sm:mb-8">
                    <QuoteIcon />
                  </span>
                  <p className="text-black-text-800 text-[16px] sm:text-lg xl:text-xl font-bold font-Syne leading-7 mb-4">
                    {testimonial.quote}
                  </p>
                  <h4 className="flex flex-wrap items-center gap-4 text-black-800 text-[16px] sm:text-lg font-extrabold font-Syne leading-7">
                    <span>
                      <DividerIcon />
                    </span>{' '}
                    {testimonial.author}
                  </h4>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <div className="bg-white brandCarousel" data-aos="flip-down">
        <div className="container">
          <Swiper
            className="py-6 border-t border-b border-black-text-100"
            modules={[Autoplay]}
            loop
            speed={2000}
            autoplay={{ delay: 2000 }}
            spaceBetween={24}
            pagination={false}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {brandLogos.map((logo) => (
              <SwiperSlide key={logo}>
                <img className="mx-auto block" src={logo} alt=" brandlogo" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  )
}
