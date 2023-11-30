import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Unleash Culinary Creativity with  Cooking Classes
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Embark on a culinary journey like never before with our curated
          cooking classes. Dive into a world of flavors and techniques that will
          elevate your skills to new heights. Get ready to savor the art of
          cooking and master the culinary craft with our expert instructors.
        </p>
        <UnderlineLink href="/store">Explore classes</UnderlineLink>
      </div>
      <Image
        src="/chefvelez.jpg"
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
