import HeadingTitle from './HeadingTitle';
import Image from "next/image";
import Photo from "./Photo";


const About = () => {
  return (
    <section className="relative mx-auto xl:px-10 mt-30" id="about">
      <div className='container'>
        <HeadingTitle title="About" className="flex-row-reverse" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
          <div className="lg:col-span-1 col-auto flex flex-col items-start justify-center w-full lg:h-full">
            <Photo />
          </div>
          <div className="lg:col-span-2">
            <p className="text-base font-medium xl:text-md text-align mb-4 leading-6 dark:text-white/80">
              I&apos;m a Full-Stack Developer based in Bangkok, passionate crafting highly functional custom websites and scalable web applications tailored to business specific needs and requirements.
              I&apos;m proficient with PHP, Laravel, Node js, Express js, React JS, Vue Js, MySQL and Mongodb.
            </p>
            <p className="text-base font-medium xl:text-md text-align mb-4 leading-5 dark:text-white/80">
              I thrive on leveraging the best tools to build impactful digital web solutions that ensure
              both functionality and a great user experience. If you&apos;re looking for a professional PHP Laravel developer for backend systems or a React/Vue.js expert to build a clean, modern frontend, you&apos;re in the right place!
            </p>

            <a href="/assets/khinenweoo_resume.pdf" target="_blank" className="max-w-max">
              <div className="about_link flex items-center gap-2">
                <span className="text-violet-500 dark:text-purple hover:underline text-lg animate-bounce">Get My Resume </span>
                <div className="lg:w-18 lg:h-14 w-16 h-14 ">
                  <Image
                    src="/download_pdf_icon.svg"
                    alt="react"
                    width={90}
                    height={90}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About