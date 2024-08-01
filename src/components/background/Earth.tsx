import Spline from '@splinetool/react-spline';

export default function Earth() {
  return (
    <main>
      <Spline
        scene='https://prod.spline.design/zZOE89ikinP7Pj6l/scene.splinecode'
        style={{
          height: '100vh',
          position: 'fixed',
          zIndex: 1,
        }}
      />
    </main>
  );
}
