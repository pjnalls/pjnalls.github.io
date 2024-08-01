import { Text } from '@mantine/core';

export default function OneLoveText() {
  return (
    <main style={{ position: 'fixed', width: '100vw', marginTop: '12vh' }}>
      <Text
        fz={180}
        fw={700}
        style={{ color: '#fff', whiteSpace: 'nowrap', zIndex: 1 }}
      >
        ONE LOVE
      </Text>
    </main>
  );
}
