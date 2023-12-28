import { Container, Text, Title } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { motion } from "framer-motion";

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
        px={12}
        size={"xs"}
        ta={"left"}
        style={{ margin: "0 auto" }}
      >
        <Title fw={500} fz={20} order={2}>
          Self Introductions Ordered by <br />
          Least-to-Greatest Proficiencies
        </Title>
        <br />
        <Text lang={"zh"}>
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
        </Text>
        <br />
        <Text lang={"ko"}>
          여러분 안녕하세요, 처음 뵙겠습니다!
          <br />
          프레스턴이라고 합니다.
          <br />
          미국에서 태어나고 자랐고, 지금도 살고 있습니다.
          <br />
          음악을 듣거나 만드는 것을 좋아합니다.
          <br />
          요가와 매운 음식도 좋아해니다.
          <br />
          잘 부탁드립니다 🙇
          <br />
        </Text>
        <br />
        <Text lang={"zh-Hans"}>
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
        </Text>
        <br />
        <Text lang={"zh-Hant"}>
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
        </Text>
        <br />
        <Text lang="es">
          ¡Hola a todos!
          <br />
          Soy Preston de Estados Unidos.
          <br />
          Estudié español en la escuela durante unos 3 o 4 años.
          <br />
          ¡Esperamos hablar con usted!
          <br />
        </Text>
        <br />
        <Text lang="ja">
          どうも皆さん、初めまして！
          <br />
          今年の末に日本語能力試験N1（新一級）を受けさせて頂いて、満点で合格いたす目標がございます、プレストンと申します。
          <br />
          アメリカ生まれ育ち、今も住んでおります。
          <br />
          音楽を聴いたり作ったりするのが好きでございます。
          <br />
          よろしくお願いいたします🙇
          <br />
        </Text>
        <br />
        <Text lang="en">
          Hello, everyone!
          <br />
          I'm Preston from the United States.
          <br />
          I've studied Japanese for over 10 years,
          <br />
          studied Spanish in school for about 3 or 4 years, Mandarin for about 1
          year, Korean for about 3 or 4 months and recently started learning
          Cantonese.
          <br />
          I'm looking forward to speaking with you! 🙂
          <br />
        </Text>
        <br />
      </Container>
    </motion.main>
  );
}

export default Languages;
