import ReactPlayer from 'react-player';

export const HeroBackground = () => {
  return (
    <>
      <div className="relative">
        <ReactPlayer
          src="https://youtu.be/j80ezKNLyxM"
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
          className="z-0 fixed mx-auto top-0"
        />
      </div>
      <div
        className="z-10 fixed mx-auto bg-[#cfb7ffb0] dark:bg-[#1f074fb0] top-0"
        style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
      ></div>
    </>
  );
};
