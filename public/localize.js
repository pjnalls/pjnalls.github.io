(function () {
  const intlTags = document.getElementsByClassName("intl");
  const setLocale = () => {
    for (let i = 0; i < intlTags?.length; i++) {
      intlTags.item(i).textContent =
        localizationDB[intlTags.item(i).getAttribute("id")]?.get(
          localStorage.getItem("locale")
        ) ?? localizationDB[intlTags.item(i).getAttribute("id")]?.get("en_US");
    }
  };
  const locale = localStorage?.getItem("locale") ?? "en_US";
  document
    .getElementById("linked-footer")
    ?.setAttribute(
      "href",
      `https://www.linkedin.com/in/pjnalls/${
        locale === "en_US" ? "" : `?locale=${locale}`
      }`
    );
  document
    .getElementById("linked-navbar")
    ?.setAttribute(
      "href",
      `https://www.linkedin.com/in/pjnalls/${
        locale === "en_US" ? "" : `?locale=${locale}`
      }`
    );

  /**
   * LOCALIZATION DATABASE
   */
  var localizationDB = {
    /**
     * NAVIGATION BAR
     */
    about: new Map([
      ["en_US", "About"],
      ["ja_JP", "自己紹介"],
      ["zh_TW", "自我介紹"],
      ["zh_CN", "自我介绍"],
      ["es_ES", "Introducción"],
      ["ko_KR", "자기소개"],
    ]),
    skills: new Map([
      ["en_US", "Skills"],
      ["ja_JP", "スキル"],
      ["zh_TW", "技能"],
      ["zh_CN", "技能"],
      ["es_ES", "Técnica"],
      ["ko_KR", "기술"],
    ]),
    works: new Map([
      ["en_US", "Works"],
      ["ja_JP", "作品"],
      ["zh_TW", "作品"],
      ["zh_CN", "作品"],
      ["es_ES", "Obras"],
      ["ko_KR", "작품"],
    ]),
    blog: new Map([
      ["en_US", "Blog"],
      ["ja_JP", "ブログ"],
      ["zh_TW", "博客"],
      ["zh_CN", "博客"],
      ["es_ES", "Blog"],
      ["ko_KR", "블로그"],
    ]),
    resume: new Map([
      ["en_US", "Resume"],
      ["ja_JP", "レジュメ"],
      ["zh_TW", "簡歷"],
      ["zh_CN", "简历"],
      ["es_ES", "CV (EN)"],
      ["ko_KR", "이력서"],
    ]),
    cv: new Map([
      ["en_US", "CV (JA)"],
      ["ja_JP", "履歴書"],
      ["zh_TW", "自我介紹"],
      ["zh_CN", "自我介绍"],
      ["es_ES", "CV (JA)"],
      ["ko_KR", "자기소개"],
    ]),
    /**
     * "Hi 👋, I'm Preston."
     */
    hi_im: new Map([
      ["en_US", "Hi 👋, I'm"],
      ["ja_JP", "こんにちは👋、"],
      ["zh_TW", "大家好 👋、 我叫"],
      ["zh_CN", "大家好 👋、 我叫"],
      ["es_ES", "Hola 👋, soy"],
      ["ko_KR", "안녕하세요👋, 저는 "],
    ]),
    preston: new Map([
      ["en_US", "Preston"],
      ["ja_JP", "プレストン"],
      ["zh_TW", "譜詹頓"],
      ["zh_CN", "谱詹顿"],
      ["es_ES", "Preston"],
      ["ko_KR", "프래스턴"],
    ]),
    period: new Map([
      ["en_US", "."],
      ["ja_JP", "です。"],
      ["zh_TW", "。"],
      ["zh_CN", "。"],
      ["es_ES", "."],
      ["ko_KR", " 이에요"],
    ]),
    /**
     * "Polyglot Frontend Engineer"
     */
    headline: new Map([
      ["en_US", "Polyglot Frontend Engineer"],
      ["ja_JP", "多言語フロントエンドエンジニア"],
      ["zh_TW", "多言語前端工程師"],
      ["zh_CN", "多言语前端工程师"],
      ["es_ES", "Ingeniero Frontend Políglota"],
      ["ko_KR", "다국어 프론트엔드 엔지니어"],
    ]),
    /**
     * "My focus is on combining aesthetical,
        functional design with efficient yet elegant 
        frontend code.

        I also focus on continually learning in 
        the STEAM (Scientific, Technologic, Engineering, 
        Artistic, and Mathematic) disciplines to cultivate 
        better analytical and creative abilities for both 
        professional and personal works."
     */
    summary1: new Map([
      [
        "en_US",
        "My focus is on combining aesthetical, functional design with efficient yet elegant frontend code.",
      ],
      [
        "ja_JP",
        "目標は、美的で機能的なデザインと、効率的でエレガントなフロントエンド・コードを組み合わせることです。",
      ],
      ["zh_TW", `我的目標是用戶體驗工程的前端設計和開發。`],
      ["zh_CN", `我的目标是用户体验工程的前端设计和开发。`],
      [
        "es_ES",
        "Mi objetivo es combinar un diseño estético y funcional con un código frontend eficiente y elegante.",
      ],
      ["ko_KR", "목표는 효율적이고 우아한 프론트엔드 디자인과 코드입니다."],
    ]),
    summary2: new Map([
      [
        "en_US",
        "I also focus on continually learning in the STEAM (Scientific, Technologic, Engineering, Artistic, and Mathematic) disciplines to cultivate better analytical and creative abilities for both professional and personal works.",
      ],
      [
        "ja_JP",
        "また、STEAM（科学的、技術的、工学的、芸術的、数学的）分野の継続的な学習にも重点を置き、仕事でも個人的なプロジェクトでも、より優れた分析力と創造力を養う。",
      ],
      [
        "zh_TW",
        `我還專注於STEAM（科學、技術、工程、藝術和數學）學科的持續學習，為專業和個人項目培養更好的分析和創造能力。`,
      ],
      [
        "zh_CN",
        `我还专注于STEAM（科学、技术、工程、艺术和数学）学科的持续学习，为专业和个人项目培养更好的分析和创造能力。`,
      ],
      [
        "es_ES",
        "También me centro en aprender continuamente en las disciplinas STEAM (Scientific, Technologic, Engineering, Artistic, and Mathematic) para cultivar mejores habilidades analíticas y creativas tanto para proyectos profesionales como personales.",
      ],
      [
        "ko_KR",
        "또한 STEAM(과학, 기술, 공학, 예술, 수학) 분야의 지속적인 학습에 중점을 두어 업무와 개인 프로젝트에서 더 나은 분석력과 창의력을 키울 수 있다.",
      ],
    ]),
    madeWith: new Map([
      ["en_US", "Made with"],
      ["ja_JP", "使用技術"],
      ["zh_TW", "使用的技術"],
      ["zh_CN", "使用的技术"],
      ["es_ES", "Hecho con"],
      ["ko_KR", "사용 기술"],
    ]),
    techUsed: new Map([
      ["en_US", "React, TypeScript, Tailwind CSS, Astro, Piskel, and ❤️."],
      ["ja_JP", "React、TypeScript、 Tailwind CSS、 Astro、 Piskel、❤️。"],
      ["zh_TW", "React、TypeScript、Tailwind CSS、Astro、Piskel和❤️。"],
      ["zh_CN", "React、TypeScript、Tailwind CSS、Astro、Piskel和❤️。"],
      ["es_ES", "React, TypeScript, Tailwind CSS, Astro, Piskel y ❤️."],
      ["ko_KR", "React, TypeScript, Tailwind CSS, Astro, Piskel, ❤️."],
    ]),
    /**
     * ABOUT PAGE
     */
    who_i_am: new Map([
      ["en_US", "Who I am"],
      ["ja_JP", "はじめまして"],
      ["zh_TW", "關於我"],
      ["zh_CN", "关于我"],
      ["es_ES", "Sobre mí"],
      ["ko_KR", "나에 대해"],
    ]),
    bio1: new Map([
      [
        "en_US",
        "I'm a frontend engineer with fullstack Javascript development and UI architecture experience. I provide React, Angular, and some cross-platform development consulting along with other technological services.",
      ],
      [
        "ja_JP",
        "僕はフルスタックジャバスクリプト開発とUI（ユーザーインタフェース）のアーキテクチャーの経験があって、ReactとAngular、そしてクロスプラットフォーム開発のコンサルティングと共に他のテクノロジーコンサルタントとフロントエンドエンジニアでございます。",
      ],
      [
        "zh_TW",
        "我是多語言前端工程師，擁有全棧Javascript開發和UI架構經驗。我提供React、Angular和一些跨平台開發諮詢以及其他技術服務。",
      ],
      [
        "zh_CN",
        "我是多语言前端工程师，拥有全栈Javascript开发和UI架构经验。我提供React、Angular和一些跨平台开发咨询以及其他技术服务。",
      ],
      [
        "es_ES",
        "Soy un ingeniero frontend con experiencia en desarrollo fullstack Javascript y arquitectura UI proporcionando consultoría en React, Angular y algo de desarrollo multiplataforma junto con otros servicios tecnológicos.",
      ],
      [
        "ko_KR",
        "저는 풀스택 자바스크립트 개발 및 UI 아키텍처 경험을 갖춘 프론트엔드 엔지니어입니다. React, Angular 및 일부 크로스 플랫폼 개발 컨설팅과 기타 기술 서비스를 제공합니다.",
      ],
    ]),
    bio2: new Map([
      [
        "en_US",
        "As hobbies, I learn and practice Python, data science, machine learning, mathematics, philosophy, yoga (in the traditional sense), and many languages and cultures as a polyglot.",
      ],
      [
        "ja_JP",
        "趣味はPythonとデータサイエンス、機械学習、数学、哲学、伝統的なヨガ、そして違うが似ている言語と文化を学んだり練習したりすることです。",
      ],
      [
        "zh_TW",
        "作為業餘愛好，我學習和練習Python、數據科學、機器學習、數學、哲學、瑜伽（傳統意義上的）以及多種語言和文化。",
      ],
      [
        "zh_CN",
        "作为业余爱好，我学习和练习Python、数据科学、机器学习、数学、哲学、瑜伽（传统意义上的）以及多种语言和文化。",
      ],
      [
        "es_ES",
        "Como aficiones, aprendo y practico Python, ciencia de datos, aprendizaje automático, matemáticas, filosofía, yoga (en el sentido tradicional), idiomas y culturas como políglota.",
      ],
      [
        "ko_KR",
        "취미로는 파이썬, 데이터 과학, 머신 러닝, 수학, 철학, 요가(전통적인 의미의 요가), 언어, 다국어로서의 문화 등을 배우고 연습합니다.",
      ],
    ]),
    bio3: new Map([
      [
        "en_US",
        "Work as a consultant and for personal pet works feels like high forms of both creative and analytical expression, and I strive to be completely devoted to and singularly focused on the process of designing and developing great DX, CX, UX, and, most importantly, PX — great people experience above all. 👆",
      ],
      [
        "ja_JP",
        "コンサルタントとして仕事と個人的なプロジェクトが「最高な創造的で解析的な式」のような感じです。更に、僕は最も優れているDX（デベロッパーエクスペリエンス）とCX（カスタマーエクスペリエンス）、UX（ユーザーエクスペリエンス）、そして一番大事なPX（ピープルエクスペリエンス）のデザインと開発のプロセスを特にも献身的にも毎日努めております。 — great people experience above all. 👆",
      ],
      [
        "zh_TW",
        "作為一名顧問和個人工作，我感覺自己是創造性和分析性表達的高級形式，我努力全心投入並專注於設計和開發出色的DX、CX、UX，以及最重要的PX。— great people experience above all. 👆",
      ],
      [
        "zh_CN",
        "作为一名顾问和个人工作，我感觉自己是创造性和分析性表达的高级形式，我努力全心投入并专注于设计和开发出色的DX、CX、UX，以及最重要的PX。— great people experience above all. 👆",
      ],
      [
        "es_ES",
        "El trabajo como consultor y para obras personales se siente como altas formas de expresión tanto creativa como analítica, y me esfuerzo por estar completamente dedicado y singularmente centrado en el proceso de diseño y desarrollo de gran DX, CX, UX, y, lo más importante, PX. Gran experiencia de la gente por encima de todo.  — great people experience above all. 👆",
      ],
      [
        "ko_KR",
        "컨설턴트로서 일하거나 개인적으로 반려동물을 키우는 일은 창의력과 분석력을 고도로 발휘하는 것 같습니다. 저는 무엇보다도 훌륭한 사용자 경험, 즉 훌륭한 DX, CX, UX, 그리고 가장 중요한 PX를 설계하고 개발하는 과정에 전적으로 헌신하고 집중하려고 노력합니다. — great people experience above all. 👆",
      ],
    ]),
    coding_statistics: new Map([
      ["en_US", "What my coding statistics are"],
      ["ja_JP", "コーディング統計"],
      ["zh_TW", "編碼統計"],
      ["zh_CN", "编码统计"],
      ["es_ES", "Estadísticas de Codificación"],
      ["ko_KR", "코딩 통계"],
    ]),
    total_gh_tribute: new Map([
      ["en_US", "🔥 Total GitHub Contributions and Streak Statistics"],
      ["ja_JP", "🔥 GitHubの総貢献量とストリークの統計"],
      ["zh_TW", "🔥GitHub總貢獻和連續統計"],
      ["zh_CN", "🔥GitHub总贡献和连续统计"],
      ["es_ES", "🔥 Total de contribuciones a GitHub y estadísticas de rachas"],
      ["ko_KR", "🔥 총 GitHub 기여도 및 연승 통계"],
    ]),
    overall_gh_stats: new Map([
      ["en_US", "🅰️ Overall GitHub Statistics and Grade"],
      ["ja_JP", "🅰️ GitHub全体の統計と成績"],
      ["zh_TW", "🅰️ GitHub總體統計和評級"],
      ["zh_CN", "🅰️ GitHub总体统计和评级"],
      ["es_ES", "🅰️ Estadísticas generales de GitHub y calificación"],
      ["ko_KR", "🅰️ 전체 GitHub 통계 및 등급"],
    ]),
    top_languages: new Map([
      ["en_US", "🔝 Top Programming Languages I Use on GitHub"],
      ["ja_JP", "🔝 GitHubで使っているプログラミング言語のトップ"],
      ["zh_TW", "🔝 我在 GitHub 上使用的頂級編程語言"],
      ["zh_CN", "🔝 我在 GitHub 上使用的顶级编程语言"],
      [
        "es_ES",
        "🔝 Los principales lenguajes de programación que utilizo en GitHub",
      ],
      ["ko_KR", "🔝 GitHub에서 사용하는 인기 프로그래밍 언어"],
    ]),
    /**
     * SKILLS PAGE
     */
    what_i_can_do: new Map([
      ["en_US", "What I Can Do"],
      ["ja_JP", "僕に出来る事"],
      ["zh_TW", "我能做什麼"],
      ["zh_CN", "我能做什么"],
      ["es_ES", "Lo que puedo hacer"],
      ["ko_KR", "내가 할 수 있는 일"],
    ]),
    toolkit: new Map([
      ["en_US", "🛠️ Toolkit I Use as a Frontend Engineer"],
      ["ja_JP", "🛠️ フロントエンドエンジニアとして使っているツールキット"],
      ["zh_TW", "🛠️ 我作為前端工程師使用的工具包"],
      ["zh_CN", "🛠️ 我作为前端工程师使用的工具包"],
      [
        "es_ES",
        "🛠️ Conjunto de herramientas que utilizo como ingeniero de frontend",
      ],
      ["ko_KR", "🛠️ 프론트엔드 엔지니어로서 사용하는 툴킷"],
    ]),
    other_tools: new Map([
      [
        "en_US",
        "🛠️ Other Tools I Use for Web, Mobile, and Cross-Platform Development",
      ],
      [
        "ja_JP",
        "🛠️ ウェブ、モバイル、クロスプラットフォーム開発に使っているその他のツール",
      ],
      ["zh_TW", "🛠️ 我用於網絡、移動和跨平台開發的其他工具"],
      ["zh_CN", "🛠️ 我用于网络、移动和跨平台开发的其他工具"],
      [
        "es_ES",
        "🛠️ Otras herramientas que utilizo para el desarrollo web, móvil y multiplataforma",
      ],
      ["ko_KR", "🛠️ 웹, 모바일 및 크로스 플랫폼 개발에 사용하는 기타 도구"],
    ]),
    natural_languages: new Map([
      ["en_US", "🌐 Natural Languages Ordered by Proficiency"],
      ["ja_JP", "🌐 習熟度順に並んだ自然言語"],
      ["zh_TW", "🌐 按熟練程度排序的自然語言。"],
      ["zh_CN", "🌐 按熟练程度排序的自然语言。"],
      ["es_ES", "🌐 Lenguas naturales ordenadas por competencia"],
      ["ko_KR", "🌐 숙련도 순으로 정렬된 자연어"],
    ]),
    en_AS: new Map([
      ["en_US", "English (American)"],
      ["ja_JP", "英語（アメリカ）"],
      ["zh_TW", "英語（美國）"],
      ["zh_CN", "英语（美国）"],
      ["es_ES", "Inglés (Americano)"],
      ["ko_KR", "영어(미국식)"],
    ]),
    en_A: new Map([
      ["en_US", "English (Academic)"],
      ["ja_JP", "英語（アカデミック）"],
      ["zh_TW", "英語（學術）"],
      ["zh_CN", "英语（学术）"],
      ["es_ES", "Inglés (Académico)"],
      ["ko_KR", "영어(아카데믹)"],
    ]),
    en_B: new Map([
      ["en_US", "English (Business)"],
      ["ja_JP", "英語（ビジネス）"],
      ["zh_TW", "英語（商務）"],
      ["zh_CN", "英语（商务）"],
      ["es_ES", "Inglés (Comercial)"],
      ["ko_KR", "영어(비즈니스)"],
    ]),
    ja_S: new Map([
      ["en_US", "Japanese"],
      ["ja_JP", "日本語"],
      ["zh_TW", "日語"],
      ["zh_CN", "日语"],
      ["es_ES", "Japonés"],
      ["ko_KR", "일본어"],
    ]),
    greek: new Map([
      ["en_US", "Greek"],
      ["ja_JP", "ギリシャ語"],
      ["zh_TW", "希臘語"],
      ["zh_CN", "希腊语"],
      ["es_ES", "Griego (Idioma, Palabra)"],
      ["ko_KR", "그리스어"],
    ]),
    latin: new Map([
      ["en_US", "Latin"],
      ["ja_JP", "ラテン語"],
      ["zh_TW", "拉丁語"],
      ["zh_CN", "拉丁语"],
      ["es_ES", "Latín"],
      ["ko_KR", "라틴어"],
    ]),
    zh_M: new Map([
      ["en_US", "Chinese (Mandarin)"],
      ["ja_JP", "中国語（マンダリン）"],
      ["zh_TW", "中文（普通話）"],
      ["zh_CN", "中文（普通话）"],
      ["es_ES", "Chino (Mandarín)"],
      ["ko_KR", "중국어(만다린어)"],
    ]),
    es_skill: new Map([
      ["en_US", "Spanish"],
      ["ja_JP", "スペイン語"],
      ["zh_TW", "西班牙語"],
      ["zh_CN", "西班牙语"],
      ["es_ES", "Español"],
      ["ko_KR", "스페인어"],
    ]),
    th: new Map([
      ["en_US", "Thai"],
      ["ja_JP", "タイ"],
      ["zh_TW", "泰語"],
      ["zh_CN", "泰语"],
      ["es_ES", "Tailandés"],
      ["ko_KR", "태국어"],
    ]),
    native: new Map([
      ["en_US", "Native Proficiency"],
      ["ja_JP", "ネイティブの能力"],
      ["zh_TW", "母語能力"],
      ["zh_CN", "母语能力"],
      ["es_ES", "Competencia Nativa"],
      ["ko_KR", "네이티브 능력"],
    ]),
    full_prof: new Map([
      ["en_US", "Full Working Proficiency"],
      ["ja_JP", "完全な社会人能力"],
      ["zh_TW", "全部工作能力"],
      ["zh_CN", "全部工作能力"],
      ["es_ES", "Capacidad de Trabajo Completa"],
      ["ko_KR", "완벽한 사회인 능력"],
    ]),
    etymological: new Map([
      ["en_US", "Etymological Proficiency"],
      ["ja_JP", "語源の熟達度"],
      ["zh_TW", "詞彙能力"],
      ["zh_CN", "词汇能力"],
      ["es_ES", "Dominio de la Etimología"],
      ["ko_KR", "어원 숙련도"],
    ]),
    limited_working: new Map([
      ["en_US", "Limited Working Proficiency"],
      ["ja_JP", "限定的な実務能力"],
      ["zh_TW", "有限的工作能力"],
      ["zh_CN", "有限的工作能力"],
      ["es_ES", "Capacidad de Trabajo Limitada"],
      ["ko_KR", "제한된 실무 능력"],
    ]),
    elementary: new Map([
      ["en_US", "Elementary"],
      ["ja_JP", "初級"],
      ["zh_TW", "初級"],
      ["zh_CN", "初级"],
      ["es_ES", "Nivel Elemental"],
      ["ko_KR", "초급"],
    ]),
    novice: new Map([
      ["en_US", "Novice"],
      ["ja_JP", "初心者"],
      ["zh_TW", "初學"],
      ["zh_CN", "初学"],
      ["es_ES", "Principianter"],
      ["ko_KR", "초보자"],
    ]),
    /**
     * WORKS PAGE
     */
    what_ive_created: new Map([
      ["en_US", "What I've Created"],
      ["ja_JP", "僕が創造したもの"],
      ["zh_TW", "我所創造的"],
      ["zh_CN", "我所创造的"],
      ["es_ES", "Lo que he creado"],
      ["ko_KR", "내가 만든 것"],
    ]),
  };
  setLocale();
})();
