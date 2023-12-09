import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div className="text-black absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-start small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black w-full sm:w-1/2 small:w-1/3 sm:text-white lg:text-black">
          Unleash Your Culinary Creativity with Chef Velez&apos;s Cooking Events
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black sm:text-white lg:text-black">
          Embark on a culinary journey like never before with our curated
          cooking events. Dive into a world of flavors and techniques that will
          elevate your skills to new heights. Get ready to savor the art of
          cooking and master the culinary craft with Chef Velez.
        </p>
        <UnderlineLink href="/store">Explore Events</UnderlineLink>
      </div>
      <Image
        src="/HERO3.jpg"
        loading="eager"
        priority={true}
        quality={95}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
