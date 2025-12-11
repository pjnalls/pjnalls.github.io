import ReactPlayer from 'react-player';

export const HeroBackground = () => {
  return (
    <>
      <div className='relative bg-transparent'>
        <ReactPlayer
          src="/hero-movie.mp4"
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width="100%"
          height="100%"
          className="z-0 fixed mx-auto top-[-31.5vh] xs:[-30vh] sm:top-[-26vh] md:top-[-21.5vh] lg:top-[-12.5vh] bg-transparent"
        />
      </div>
      <div className="z-10 fixed mx-auto w-full h-full bg-[#cfb7ffb0] dark:bg-[#1f074fb0] top-0"></div>
    </>
  );
};
