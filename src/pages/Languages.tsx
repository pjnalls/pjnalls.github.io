import { Accordion, Container, Text, Title } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Languages() {
  useDocumentTitle("Languages | Preston's Portfolio");
  return (
    <motion.main
      key="languages"
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container
        className="p-lg"
        m={0}
        px={0}
        size={"sm"}
        ta={"left"}
        w={"calc(100vw - 24px)"}
      >
        <Title fw={500} fz={20} order={2} ta={"center"}>
          Self Introductions Ordered by <br />
          Least-to-Greatest Proficiencies
        </Title>
        <br />
        <Accordion defaultValue={"lang-zh"}>
          <Accordion.Item key={"lang-zh"} value={"lang-zh"}>
            <Accordion.Control>Cantonese</Accordion.Control>
            <Accordion.Panel lang="zh">
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
          <Accordion.Item key={"lang-ko"} value={"lang-ko"}>
            <Accordion.Control>Korean</Accordion.Control>
            <Accordion.Panel lang="ko">
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
          <Accordion.Item key={"lang-zh-Hans"} value={"lang-zh-Hans"}>
            <Accordion.Control>Chinese &#40;Simplified&#41;</Accordion.Control>
            <Accordion.Panel lang="zh-Hans">
              大家好！我叫谱詹顿，还是只叫詹詹。
              <br />
              我会聊天用简体跟繁体中文，
              <br />
              但是也很想学粤语。
              <br />
              为了爱好，真的很喜欢听和做音乐。
              <br />
              也喜欢瑜伽和辛辣食物。
              <br />
              希望我们可以一起练习语言的！
              <br />
              期待跟你聊天！
              <br />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={"lang-zh-Hant"} value={"lang-zh-Hant"}>
            <Accordion.Control>Chinese &#40;Traditional&#41;</Accordion.Control>
            <Accordion.Panel lang="zh-Hant">
              大家好！我叫譜詹頓，還是只叫詹詹。
              <br />
              我會聊天用簡體跟繁體中文，
              <br />
              但是也很想學粵語。
              <br />
              為了愛好，真的很喜歡聽和做音樂。
              <br />
              也喜歡瑜伽和辛辣食物。
              <br />
              希望我們可以一起練習語言的！
              <br />
              期待跟你聊天！
              <br />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={"lang-es"} value={"lang-es"}>
            <Accordion.Control>Spanish</Accordion.Control>
            <Accordion.Panel lang="es">
              ¡Hola a todos!
              <br />
              Soy Preston de Estados Unidos.
              <br />
              Estudié español en la escuela durante unos 3 o 4 años.
              <br />
              ¡Esperamos hablar con usted!
              <br />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={"lang-ja"} value={"lang-ja"}>
            <Accordion.Control>Japanese</Accordion.Control>
            <Accordion.Panel lang="ja">
              どうも皆さん、初めまして！
              <br />
              アメリカ生まれ育ち、今も住んでおります、プレストンと言います。
              <br />
              コーディングしたり、絵を描いたり、音楽を聴いたり、
              <br />
              外国語を勉強したりするのが好きです。
              <br />
              よろしくお願いします🙇
              <br />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={"lang-en"} value={"lang-en"}>
            <Accordion.Control>English</Accordion.Control>
            <Accordion.Panel lang="en">
              Hello, everyone!
              <br />
              I'm Preston from the United States.
              <br />
              I've studied Japanese for over 10 years,
              <br />
              studied Spanish in school for about 3 or 4 years, Mandarin for
              about 1 year, Korean for about 3 or 4 months and recently started
              learning Cantonese.
              <br />
              I'm looking forward to speaking with you! 🙂
              <br />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <br />
        <br />
        <Text ta={"right"}>詹詹 @pjnalls</Text>
        <br />
        <Text lts={-0.2} style={{ fontWeight: 600, textAlign: "center" }}>
          <NavLink
            className="anchor-text"
            to={"https://www.duolingo.com/profile/pjnalls"}
            target="_blank"
            rel="noreferrer"
          >
            View my Duolingo profile here
          </NavLink>
          .
        </Text>
      </Container>
    </motion.main>
  );
}

export default Languages;
