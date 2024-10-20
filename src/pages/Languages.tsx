import { Accordion, Container, Text, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { motion } from 'framer-motion';

function Languages() {
  useDocumentTitle("Languages | Preston's Portfolio");
  return (
    <motion.main
      key='languages'
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ zIndex: 2 }}
    >
      <Container
        className='p-lg'
        m={0}
        px={12}
        size={'sm'}
        ta={'left'}
        w={'calc(100vw - 24px)'}
        maw={480}
        mt={80}
      >
        <Title
          fw={500}
          order={2}
          ta={'left'}
          my={'lg'}
        >
          🔤 Languages Ordered by <br />
          Least-to-Greatest Proficiencies
        </Title>
        <hr />
        <br />
        <Accordion defaultValue={'lang-en'}>
          <Accordion.Item
            key={'lang-zh'}
            value={'lang-zh'}
          >
            <Accordion.Control>Cantonese</Accordion.Control>
            <Accordion.Panel lang='zh'>
              大家好! 我叫譜詹頓，還是只叫詹詹。
              <br />
              我會傾偈用徜徉同繁涓中文，
              <br />
              但係都好想徜徉粵語。
              <br />
              為咗愛好，真係好喜歡聽同做音樂。
              <br />
              都中意瑜伽同辛辣食物。
              <br />
              希望我哋可以一起練習語言嘅！
              <br />
              期待同你傾偈！
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={'lang-ko'}
            value={'lang-ko'}
          >
            <Accordion.Control>Korean</Accordion.Control>
            <Accordion.Panel lang='ko'>
              여러분 안녕하세요, 처음 뵙겠습니다!
              <br />
              프레스턴이라고 합니다.
              <br />
              미국에서 태어나고 자랐고, 지금도 살고 있습니다.
              <br />
              음악을 듣거나 만드는 것을 좋아합니다.
              <br />
              요가와 매운 음식도 좋아해니다.
              <br />잘 부탁드립니다 🙇
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={'lang-es'}
            value={'lang-es'}
          >
            <Accordion.Control>Spanish</Accordion.Control>
            <Accordion.Panel lang='es'>
              ¡Hola a todos!
              <br />
              Soy Preston de Estados Unidos.
              <br />
              Estudié español en la escuela durante unos 3 o 4 años.
              <br />
              ¡Espero hablar contigo pronto!
              <br />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={'lang-zh-Hans'}
            value={'lang-zh-Hans'}
          >
            <Accordion.Control>Mandarin &#40;Simplified&#41;</Accordion.Control>
            <Accordion.Panel lang='zh-Hans'>
              您好！👋 我的中文名字是谱詹顿，你可以叫我詹詹。
              <br />
              我来自美国，我的母语是中文，我也会说一些其他语言。
              <br />
              学习中文已经两年左右了。
              <br />
              因为我最近越来越觉得中文是很重要的语言，
              <br />
              所以我很想要继续学习。
              <br />
              关于我的兴趣爱好，我喜欢听各种不同音乐，
              <br />
              吃各种不同食物，做瑜伽，交流不同的文化。
              <br />
              无论如何，谢谢您造访我的网站！🙂
              <br />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={'lang-zh-Hant'}
            value={'lang-zh-Hant'}
          >
            <Accordion.Control>
              Mandarin &#40;Traditional&#41;
            </Accordion.Control>
            <Accordion.Panel lang='zh-Hant'>
              您好！👋 我的中文名字是譜詹頓，你可以叫我詹詹。
              <br />
              我來自美國，我的母語是中文，我也會說一些其他語言。
              <br />
              學習中文已經兩年左右了。
              <br />
              因為我最近越來越覺得中文是很重要的語言，
              <br />
              所以我很想要繼續學習。
              <br />
              關於我的興趣愛好，我喜歡聽各種不同音樂，
              <br />
              吃各種不同食物，做瑜伽，交流不同的文化。
              <br />
              無論如何，謝謝您造訪我的網站！🙂
              <br />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item
            key={'lang-ja'}
            value={'lang-ja'}
          >
            <Accordion.Control>Japanese</Accordion.Control>
            <Accordion.Panel lang='ja'>
              どうも。初めまして。
              <br />
              プレストンと申します。
              <br />
              アメリカ生まれ育ち、今も住んでいます。
              <br />
              ウェブとスマホのアプリを7年間以上作っています。
              <br />
              時間がある時、音楽を聴いたり、ヨガをしたりします。
              <br />
              よろしくお願いします🙇
              <br />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            key={'lang-en'}
            value={'lang-en'}
          >
            <Accordion.Control>English</Accordion.Control>
            <Accordion.Panel lang='en'>
              Hi! I'm Preston 👋
              <br />
              <br />
              I'm from the United States.
              <br />
              I work as a software engineer in my hometown.
              <br />
              I like to practice yoga and learn foreign languages in my free
              time.
              <br />
              <br />
              I've studied Japanese for over 10 years.
              <br />
              In school, I took 3 to 4 years of Spanish.
              <br />
              I've currently learned Mandarin for about 1 year and Korean for
              about 3 to 4 months. <br />
              Recently, I started learning Cantonese.
              <br />
              <br />
              I'm looking forward to practicing more in my target languages in
              the future 🙂
              <br />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <br />
        <br />
        <Text ta={'right'}>詹詹 (Zhānzhān) @pjnalls</Text>
        <br />
        <br />
      </Container>
    </motion.main>
  );
}

export default Languages;
