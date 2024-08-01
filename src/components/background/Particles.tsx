import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main>
      <Spline
        scene='https://prod.spline.design/hJsV6RIj3BLn4Fba/scene.splinecode'
        style={{ position: 'fixed', zIndex: 0 }}
      />
    </main>
  );
}
