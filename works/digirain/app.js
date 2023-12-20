const MAX_RAIN_THREADS = 33;
const CODE = `LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

PオSSイムSイPスMインCイヅンTエアルMアヂピSCイ1アDポRロSイT1ンオンアリアSサエペPロVイデンTデレCTウSアSスメンダンウLラマXイメモヂハルMヅCイムSオMンイSンオビS0

AペリアMか

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

PラエセンTイウMヂCタレCウサンダエンエモQウイデMドロルMQウアSンイSイアヂピSCイテMポラドロレMエイウS0

EイウSVイタエアウテMンエSCイウンTエウMQウイレMエSTアDVエンイアMか

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

VエリTアリアSPロVイデンT1デセルンTペRSピCイアTイSCオRポリSアリQウアMンオSTルMイLルMトタMイタQウエアSペRンアTウRヒCCオRルPTイエTモヂか

OPTイオCオMモヂマGンアMレCウサンダエンオSTルMCウM0

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

VオルPタテSマイオレSアリQウイDQウイアアリQウアMラボレオPTイオエンイMヒC1アヂGンイSSイモSQウイブSダMかNアTウSレM1CウLパエXPリCアボレイCイエンヂSンウLラアSスメンダQウアエラTレCウサンダエイSテ!

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

IPサMテMポラFウギアTアリアS1QウアSイエXCエPTウリ1デレCTウSオPTイオVオルPタテSBランヂTイイSVエンイアMエVエンイエTCオンセQウアTウRリベロデビTイS1VオルPタテハルMVエリタTイSエアルMテンエTウRドロレMンウMQウアM0
`;

const addLinesOfCode = async () => {
  new Array(MAX_RAIN_THREADS).fill(0).forEach(async (x, i) => {
    CODE.split("\n").forEach(async (line, j) => {
      const p = document.createElement("p");
      const sign = Math.round(Math.random() * 1) === 0 ? "-" : "";
      const vh = sign === "-" ? Math.random() * 5 : Math.random() * 55;

      p.setAttribute("class", "line-of-code");
      p.style.right = `${Math.random() * 120}vw`;
      p.style.top = `${sign}${vh}vh`;

      await revealCodeLikeRain(p, line, i, j);
    });
  });
};

const revealCodeLikeRain = async (p, line, i, j) => {
  let characters = "";

  return await line.split("").forEach(
    async (char, k) =>
      await new Promise(async (resolve) => {
        setTimeout(() => {
          let top = parseFloat(p.style.top.split("v")[0]);

          characters += char;

          p.textContent =
            characters.length > 1
              ? characters.substring(0, characters.length - 2)
              : "";
          const span = document.createElement("span");
          span.textContent = characters[characters.length - 1];
          span.setAttribute("class", "cursor");
          p.appendChild(span);

          top += 0.3 * (k + 0.3);
          p.style.top = `${top}vh`;

          document.getElementById("root").appendChild(p);

          if (k >= line.length - 1) {
            document.getElementById("root").removeChild(p);
          }

          resolve();
        }, 111 * (i + 1 + j + 1 + k + 1) + (333 * (i + 1) + 333 * (j + 1)));
      })
  );
};

const main = () => {
  addLinesOfCode();
};

main();
