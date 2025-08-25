import HeadingTitle from './HeadingTitle';
import Image from "next/image";
import Photo from "./Photo";


const About = () => {
  return (
    <div className="relative mx-auto xl:px-10 mt-40 mb-30 z-10" id="about">
      <div className='container'>
        <HeadingTitle title="About" className="flex-row-reverse" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div className="col-span-2">
            <p className="text-left md:tracking-wide mb-4 lg:text-1xl leading-8">
              Hey, I&apos;m a Full-Stack Developer based in Bangkok, passionate about crafting dynamic and efficient web applications.
              I have over four years of experience in web development. I'm comfortable working with frameworks and libraries, including
              Laravel, React.js, Vue.js, Express.js and MERN stack.
            </p>
            <p>
              My passion drives me to continuously learn, adapt. I always look for opportunities to grow my skills and stay ahead of industry trends.
              I thrive on leveraging the best tools to build impactful digital web solutions that ensure
              both functionality and a great user experience. Let&apos;s collaborate to make your digital vision a reality!
            </p>

            <a href="/assets/khinenweoo_resume.pdf" target="_blank" className="max-w-max">
              <div className="about_link flex items-center gap-2">
                <span className="text-purple hover:underline text-lg animate-bounce">Get My Resume </span>
                <div className="lg:w-18 lg:h-14 w-16 h-14 ">
                  <Image
                    src="/download_pdf_icon.svg"
                    alt="react"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="lg:col-span-1 col-auto flex flex-col items-start justify-center w-full lg:h-full">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About