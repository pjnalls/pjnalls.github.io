import { motion } from 'framer-motion';
import { Accordion, Anchor, Container, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

function OneLove() {
  useDocumentTitle("#onelove | Preston's Portfolio");
  return (
    <motion.main
      key="onelove"
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container
        className="p-lg"
        m={0}
        px={0}
        size={'sm'}
        ta={'left'}
        w={'calc(100vw - 24px)'}
      >
        <Anchor
          href="https://www.youtube.com/watch?v=QMbvpftTEUs&list=PLYjQZOtMsA8qlIbelxPov2WtdNmcT-69-&index=1"
          target="_blank"
          rel="noreferrer"
        >
          <Title fw={500} ta={'left'} order={2} my={'lg'}>
            🌏🌍🌎 "One Love"
          </Title>
        </Anchor>
        <hr />
        <br />
        <Accordion defaultValue={'1love-en'}>
          <Accordion.Item key={'1love-en'} value={'1love-en'}>
            <Accordion.Control>🇺🇸 English</Accordion.Control>
            <Accordion.Panel lang="en">
              We can teach ourselves how to hate,
              <br />
              Yet we can also teach ourselves how to love.
              <br />
              If lightness and darkness complete a day,
              <br />
              Why love one and hate the other?
              <br />
              We can choose to learn to love all things according to their
              nature so that peace abounds in us and all around us.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={'1love-es'} value={'1love-es'}>
            <Accordion.Control>🇪🇸 Spanish</Accordion.Control>
            <Accordion.Panel lang="es">
              Podemos enseñarnos a odiar,
              <br />
              Sin embargo, también podemos enseñarnos a amar.
              <br />
              Si la luz y la oscuridad completan un día,
              <br />
              ¿Por qué amar a uno y odiar al otro?
              <br />
              Podemos elegir aprender a amar todas las cosas según su naturaleza
              para que la paz abunde en nosotros y a nuestro alrededor.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={'1love-zh-Hans'} value={'1love-zh-Hans'}>
            <Accordion.Control>
              🇨🇳 Mandarin &#40;Simplified&#41;
            </Accordion.Control>
            <Accordion.Panel lang="zh-Hans">
              我们可以教会自己如何去恨，
              <br />
              然而我们也可以教自己如何去爱。
              <br />
              如果光明和黑暗是完整的一天，
              <br />
              为什么要爱其中之一而恨另一个呢
              <br />
              我们可以选择学会根据事物的本质来爱一切事物，
              这样我们和我们周围就会充满和平。
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={'1love-zh-Hant'} value={'1love-zh-Hant'}>
            <Accordion.Control>
              🇹🇼 Mandarin &#40;Traditional&#41;
            </Accordion.Control>
            <Accordion.Panel lang="zh-Hant">
              我們可以教自己如何去恨，
              <br />
              然而我們也可以教自己如何去愛。
              <br />
              如果光明和黑暗是完整的一天，
              <br />
              為什麼要愛其中一個而恨另一個呢
              <br />
              我們可以選擇學習根據事物的本質來愛一切事物，
              這樣我們和我們周圍就會充滿和平。
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={'1love-ja'} value={'1love-ja'}>
            <Accordion.Control>🇯🇵 Japanese</Accordion.Control>
            <Accordion.Panel lang="ja">
              私たちは憎む方法を自分自身に教えることができます。
              <br />
              しかし、私たちは愛する方法を自分自身に教えることもできます。
              <br />
              光と闇が一日完結するなら
              <br />
              なぜ一方を愛し、もう一方を憎むのでしょうか？
              <br />
              私たちは、私たちと私たちの周りに平和が満ち溢れるように、
              すべてのものをその性質に応じて愛することを
              学ぶことを選択できます。
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={'1love-ko'} value={'1love-ko'}>
            <Accordion.Control>🇰🇷 Korean</Accordion.Control>
            <Accordion.Panel lang="ko">
              우리는 미워하는 법을 스스로 가르칠 수 있습니다.
              <br />
              하지만 우리는 사랑하는 법을 스스로 가르칠 수도 있습니다.
              <br />
              빛과 어둠이 하루를 완성한다면,
              <br />
              왜 한쪽을 사랑하고 다른 쪽을 미워합니까?
              <br />
              우리는 모든 것을 그 본성에 따라 사랑하는 평화가 넘치도록 선택할 수
              있습니다.
            </Accordion.Panel>
          </Accordion.Item>
          <br />
          <br />
          <Text ta={'right'}>詹詹 (Zhānzhān) @pjnalls</Text>
          <br />
          <br />
        </Accordion>
      </Container>
    </motion.main>
  );
}

export default OneLove;
