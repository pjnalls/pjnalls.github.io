(function () {
  const intlTags = document.getElementsByClassName("intl");
  const setLocale = () => {
    for (let i = 0; i < intlTags?.length; i++) {
      intlTags.item(i).textContent =
        localizationDB[intlTags.item(i).getAttribute("id")]?.get(
          localStorage.getItem("locale")
        ) ?? localizationDB[intlTags.item(i).getAttribute("id")]?.get("en-US");
    }
  };

  /**
   * LOCALIZATION DATABASE
   */
  var localizationDB = {
    /**
     * NAVIGATION BAR
     */
    about: new Map([
      ["en-US", "About"],
      ["ja", "自己紹介"],
      ["zh-TW", "自我介紹"],
      ["zh-CN", "自我介绍"],
      ["es-ES", "Introducción"],
      ["ko", "자기소개"],
    ]),
    skills: new Map([
      ["en-US", "Skills"],
      ["ja", "スキル"],
      ["zh-TW", "技能"],
      ["zh-CN", "技能"],
      ["es-ES", "Técnica"],
      ["ko", "기술"],
    ]),
    works: new Map([
      ["en-US", "Works"],
      ["ja", "作品"],
      ["zh-TW", "作品"],
      ["zh-CN", "作品"],
      ["es-ES", "Obras"],
      ["ko", "작품"],
    ]),
    blog: new Map([
      ["en-US", "Blog"],
      ["ja", "ブログ"],
      ["zh-TW", "博客"],
      ["zh-CN", "博客"],
      ["es-ES", "Blog"],
      ["ko", "블로그"],
    ]),
    resume: new Map([
      ["en-US", "Resume"],
      ["ja", "レジュメ"],
      ["zh-TW", "簡歷"],
      ["zh-CN", "简历"],
      ["es-ES", "CV (EN)"],
      ["ko", "이력서"],
    ]),
    cv: new Map([
      ["en-US", "CV (JA)"],
      ["ja", "履歴書"],
      ["zh-TW", "自我介紹"],
      ["zh-CN", "自我介绍"],
      ["es-ES", "CV (JA)"],
      ["ko", "자기소개"],
    ]),
    /**
     * "Hi 👋, I'm Preston."
     */
    hi_im: new Map([
      ["en-US", "Hi 👋, I'm"],
      ["ja", "こんにちは👋、"],
      ["zh-TW", "大家好 👋、 我叫"],
      ["zh-CN", "大家好 👋、 我叫"],
      ["es-ES", "Hola 👋, soy"],
      ["ko", "안녕하세요👋, 저는 "],
    ]),
    preston: new Map([
      ["en-US", "Preston"],
      ["ja", "プレストン"],
      ["zh-TW", "譜詹頓"],
      ["zh-CN", "谱詹顿"],
      ["es-ES", "Preston"],
      ["ko", "프래스턴"],
    ]),
    period: new Map([
      ["en-US", "."],
      ["ja", "です。"],
      ["zh-TW", "。"],
      ["zh-CN", "。"],
      ["es-ES", "."],
      ["ko", " 이에요"],
    ]),
    /**
     * "Polyglot Frontend Engineer"
     */
    headline: new Map([
      ["en-US", "Polyglot Frontend Engineer"],
      ["ja", "多言語フロントエンドエンジニア"],
      ["zh-TW", "多言語前端工程師"],
      ["zh-CN", "多言语前端工程师"],
      ["es-ES", "Ingeniero Frontend Políglota"],
      ["ko", "다국어 프론트엔드 엔지니어"],
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
        "en-US",
        "My focus is on combining aesthetical, functional design with efficient yet elegant frontend code.",
      ],
      [
        "ja",
        "目標は、美的で機能的なデザインと、効率的でエレガントなフロントエンド・コードを組み合わせることです。",
      ],
      ["zh-TW", `我的目標是用戶體驗工程的前端設計和開發。`],
      ["zh-CN", `我的目标是用户体验工程的前端设计和开发。`],
      [
        "es-ES",
        "Mi objetivo es combinar un diseño estético y funcional con un código frontend eficiente y elegante.",
      ],
      ["ko", "목표는 효율적이고 우아한 프론트엔드 디자인과 코드입니다."],
    ]),
    summary2: new Map([
      [
        "en-US",
        "I also focus on continually learning in the STEAM (Scientific, Technologic, Engineering, Artistic, and Mathematic) disciplines to cultivate better analytical and creative abilities for both professional and personal works.",
      ],
      [
        "ja",
        "また、STEAM（科学的、技術的、工学的、芸術的、数学的）分野の継続的な学習にも重点を置き、仕事でも個人的なプロジェクトでも、より優れた分析力と創造力を養う。",
      ],
      [
        "zh-TW",
        `我還專注於STEAM（科學、技術、工程、藝術和數學）學科的持續學習，為專業和個人項目培養更好的分析和創造能力。`,
      ],
      [
        "zh-CN",
        `我还专注于STEAM（科学、技术、工程、艺术和数学）学科的持续学习，为专业和个人项目培养更好的分析和创造能力。`,
      ],
      [
        "es-ES",
        "También me centro en aprender continuamente en las disciplinas STEAM (Scientific, Technologic, Engineering, Artistic, and Mathematic) para cultivar mejores habilidades analíticas y creativas tanto para proyectos profesionales como personales.",
      ],
      [
        "ko",
        "또한 STEAM(과학, 기술, 공학, 예술, 수학) 분야의 지속적인 학습에 중점을 두어 업무와 개인 프로젝트에서 더 나은 분석력과 창의력을 키울 수 있다.",
      ],
    ]),
    madeWith: new Map([
      ["en-US", "Made with"],
      ["ja", "使用技術"],
      ["zh-TW", "使用的技術"],
      ["zh-CN", "使用的技术"],
      ["es-ES", "Hecho con"],
      ["ko", "사용 기술"],
    ]),
    techUsed: new Map([
      ["en-US", "React, TypeScript, Tailwind CSS, Astro, Piskel, and ❤️."],
      ["ja", "React、TypeScript、 Tailwind CSS、 Astro、 Piskel、❤️。"],
      ["zh-TW", "React、TypeScript、Tailwind CSS、Astro、Piskel和❤️。"],
      ["zh-CN", "React、TypeScript、Tailwind CSS、Astro、Piskel和❤️。"],
      ["es-ES", "React, TypeScript, Tailwind CSS, Astro, Piskel y ❤️."],
      ["ko", "React, TypeScript, Tailwind CSS, Astro, Piskel, ❤️."],
    ]),
    /**
     * ABOUT PAGE
     */
    who_i_am: new Map([
      ["en-US", "Who I am"],
      ["ja", "はじめまして"],
      ["zh-TW", "關於我"],
      ["zh-CN", "关于我"],
      ["es-ES", "Sobre mí"],
      ["ko", "나에 대해"],
    ]),
    bio1: new Map([
      [
        "en-US",
        "I'm a frontend engineer with fullstack Javascript development and UI architecture experience. I provide React, Angular, and some cross-platform development consulting along with other technological services.",
      ],
      [
        "ja",
        "僕はフルスタックジャバスクリプト開発とUI（ユーザーインタフェース）のアーキテクチャーの経験があって、ReactとAngular、そしてクロスプラットフォーム開発のコンサルティングと共に他のテクノロジーコンサルタントとフロントエンドエンジニアでございます。",
      ],
      [
        "zh-TW",
        "我是多語言前端工程師，擁有全棧Javascript開發和UI架構經驗。我提供React、Angular和一些跨平台開發諮詢以及其他技術服務。",
      ],
      [
        "zh-CN",
        "我是多语言前端工程师，拥有全栈Javascript开发和UI架构经验。我提供React、Angular和一些跨平台开发咨询以及其他技术服务。",
      ],
      [
        "es-ES",
        "Soy un ingeniero frontend con experiencia en desarrollo fullstack Javascript y arquitectura UI proporcionando consultoría en React, Angular y algo de desarrollo multiplataforma junto con otros servicios tecnológicos.",
      ],
      [
        "ko",
        "저는 풀스택 자바스크립트 개발 및 UI 아키텍처 경험을 갖춘 프론트엔드 엔지니어입니다. React, Angular 및 일부 크로스 플랫폼 개발 컨설팅과 기타 기술 서비스를 제공합니다.",
      ],
    ]),
    bio2: new Map([
      [
        "en-US",
        "As hobbies, I learn and practice Python, data science, machine learning, mathematics, philosophy, yoga (in the traditional sense), and many languages and cultures as a polyglot.",
      ],
      [
        "ja",
        "趣味はPythonとデータサイエンス、機械学習、数学、哲学、伝統的なヨガ、そして違うが似ている言語と文化を学んだり練習したりすることです。",
      ],
      [
        "zh-TW",
        "作為業餘愛好，我學習和練習Python、數據科學、機器學習、數學、哲學、瑜伽（傳統意義上的）以及多種語言和文化。",
      ],
      [
        "zh-CN",
        "作为业余爱好，我学习和练习Python、数据科学、机器学习、数学、哲学、瑜伽（传统意义上的）以及多种语言和文化。",
      ],
      [
        "es-ES",
        "Como aficiones, aprendo y practico Python, ciencia de datos, aprendizaje automático, matemáticas, filosofía, yoga (en el sentido tradicional), idiomas y culturas como políglota.",
      ],
      [
        "ko",
        "취미로는 파이썬, 데이터 과학, 머신 러닝, 수학, 철학, 요가(전통적인 의미의 요가), 언어, 다국어로서의 문화 등을 배우고 연습합니다.",
      ],
    ]),
    bio3: new Map([
      [
        "en-US",
        "Work as a consultant and for personal pet works feels like high forms of both creative and analytical expression, and I strive to be completely devoted to and singularly focused on the process of designing and developing great DX, CX, UX, and, most importantly, PX — great people experience above all. 👆",
      ],
      [
        "ja",
        "コンサルタントとして仕事と個人的なプロジェクトが「最高な創造的で解析的な式」のような感じです。更に、僕は最も優れているDX（デベロッパーエクスペリエンス）とCX（カスタマーエクスペリエンス）、UX（ユーザーエクスペリエンス）、そして一番大事なPX（ピープルエクスペリエンス）のデザインと開発のプロセスを特にも献身的にも毎日努めております。 — great people experience above all. 👆",
      ],
      [
        "zh-TW",
        "作為一名顧問和個人工作，我感覺自己是創造性和分析性表達的高級形式，我努力全心投入並專注於設計和開發出色的DX、CX、UX，以及最重要的PX。— great people experience above all. 👆",
      ],
      [
        "zh-CN",
        "作为一名顾问和个人工作，我感觉自己是创造性和分析性表达的高级形式，我努力全心投入并专注于设计和开发出色的DX、CX、UX，以及最重要的PX。— great people experience above all. 👆",
      ],
      [
        "es-ES",
        "El trabajo como consultor y para obras personales se siente como altas formas de expresión tanto creativa como analítica, y me esfuerzo por estar completamente dedicado y singularmente centrado en el proceso de diseño y desarrollo de gran DX, CX, UX, y, lo más importante, PX. Gran experiencia de la gente por encima de todo.  — great people experience above all. 👆",
      ],
      [
        "ko",
        "컨설턴트로서 일하거나 개인적으로 반려동물을 키우는 일은 창의력과 분석력을 고도로 발휘하는 것 같습니다. 저는 무엇보다도 훌륭한 사용자 경험, 즉 훌륭한 DX, CX, UX, 그리고 가장 중요한 PX를 설계하고 개발하는 과정에 전적으로 헌신하고 집중하려고 노력합니다. — great people experience above all. 👆",
      ],
    ]),
    coding_statistics: new Map([
      ["en-US", "What my coding statistics are"],
      ["ja", "コーディング統計"],
      ["zh-TW", "編碼統計"],
      ["zh-CN", "编码统计"],
      ["es-ES", "Estadísticas de Codificación"],
      ["ko", "코딩 통계"],
    ]),
    total_gh_tribute: new Map([
      ["en-US", "🔥 Total GitHub Contributions and Streak Statistics"],
      ["ja", "🔥 GitHubの総貢献量とストリークの統計"],
      ["zh-TW", "🔥GitHub總貢獻和連續統計"],
      ["zh-CN", "🔥GitHub总贡献和连续统计"],
      ["es-ES", "🔥 Total de contribuciones a GitHub y estadísticas de rachas"],
      ["ko", "🔥 총 GitHub 기여도 및 연승 통계"],
    ]),
    overall_gh_stats: new Map([
      ["en-US", "🅰️ Overall GitHub Statistics and Grade"],
      ["ja", "🅰️ GitHub全体の統計と成績"],
      ["zh-TW", "🅰️ GitHub總體統計和評級"],
      ["zh-CN", "🅰️ GitHub总体统计和评级"],
      ["es-ES", "🅰️ Estadísticas generales de GitHub y calificación"],
      ["ko", "🅰️ 전체 GitHub 통계 및 등급"],
    ]),
    top_languages: new Map([
      ["en-US", "🔝 Top Programming Languages I Use on GitHub"],
      ["ja", "🔝 GitHubで使っているプログラミング言語のトップ"],
      ["zh-TW", "🔝 我在 GitHub 上使用的頂級編程語言"],
      ["zh-CN", "🔝 我在 GitHub 上使用的顶级编程语言"],
      [
        "es-ES",
        "🔝 Los principales lenguajes de programación que utilizo en GitHub",
      ],
      ["ko", "🔝 GitHub에서 사용하는 인기 프로그래밍 언어"],
    ]),
    /**
     * SKILLS PAGE
     */
    what_i_can_do: new Map([
      ["en-US", "What I Can Do"],
      ["ja", "僕に出来る事"],
      ["zh-TW", "我能做什麼"],
      ["zh-CN", "我能做什么"],
      ["es-ES", "Lo que puedo hacer"],
      ["ko", "내가 할 수 있는 일"],
    ]),
    toolkit: new Map([
      ["en-US", "🛠️ Toolkit I Use as a Frontend Engineer"],
      ["ja", "🛠️ フロントエンドエンジニアとして使っているツールキット"],
      ["zh-TW", "🛠️ 我作為前端工程師使用的工具包"],
      ["zh-CN", "🛠️ 我作为前端工程师使用的工具包"],
      [
        "es-ES",
        "🛠️ Conjunto de herramientas que utilizo como ingeniero de frontend",
      ],
      ["ko", "🛠️ 프론트엔드 엔지니어로서 사용하는 툴킷"],
    ]),
    other_tools: new Map([
      [
        "en-US",
        "🛠️ Other Tools I Use for Web, Mobile, and Cross-Platform Development",
      ],
      [
        "ja",
        "🛠️ ウェブ、モバイル、クロスプラットフォーム開発に使っているその他のツール",
      ],
      ["zh-TW", "🛠️ 我用於網絡、移動和跨平台開發的其他工具"],
      ["zh-CN", "🛠️ 我用于网络、移动和跨平台开发的其他工具"],
      [
        "es-ES",
        "🛠️ Otras herramientas que utilizo para el desarrollo web, móvil y multiplataforma",
      ],
      ["ko", "🛠️ 웹, 모바일 및 크로스 플랫폼 개발에 사용하는 기타 도구"],
    ]),
    natural_languages: new Map([
      ["en-US", "🌐 Natural Languages Ordered by Proficiency"],
      ["ja", "🌐 習熟度順に並んだ自然言語"],
      ["zh-TW", "🌐 按熟練程度排序的自然語言。"],
      ["zh-CN", "🌐 按熟练程度排序的自然语言。"],
      ["es-ES", "🌐 Lenguas naturales ordenadas por competencia"],
      ["ko", "🌐 숙련도 순으로 정렬된 자연어"],
    ]),
    en_AS: new Map([
      ["en-US", "English (American)"],
      ["ja", "英語（アメリカ）"],
      ["zh-TW", "英語（美國）"],
      ["zh-CN", "英语（美国）"],
      ["es-ES", "Inglés (Americano)"],
      ["ko", "영어(미국식)"],
    ]),
    en_A: new Map([
      ["en-US", "English (Academic)"],
      ["ja", "英語（アカデミック）"],
      ["zh-TW", "英語（學術）"],
      ["zh-CN", "英语（学术）"],
      ["es-ES", "Inglés (Académico)"],
      ["ko", "영어(아카데믹)"],
    ]),
    en_B: new Map([
      ["en-US", "English (Business)"],
      ["ja", "英語（ビジネス）"],
      ["zh-TW", "英語（商務）"],
      ["zh-CN", "英语（商务）"],
      ["es-ES", "Inglés (Comercial)"],
      ["ko", "영어(비즈니스)"],
    ]),
    ja_S: new Map([
      ["en-US", "Japanese"],
      ["ja", "日本語"],
      ["zh-TW", "日語"],
      ["zh-CN", "日语"],
      ["es-ES", "Japonés"],
      ["ko", "일본어"],
    ]),
    greek: new Map([
      ["en-US", "Greek"],
      ["ja", "ギリシャ語"],
      ["zh-TW", "希臘語"],
      ["zh-CN", "希腊语"],
      ["es-ES", "Griego (Idioma, Palabra)"],
      ["ko", "그리스어"],
    ]),
    latin: new Map([
      ["en-US", "Latin"],
      ["ja", "ラテン語"],
      ["zh-TW", "拉丁語"],
      ["zh-CN", "拉丁语"],
      ["es-ES", "Latín"],
      ["ko", "라틴어"],
    ]),
    zh_M: new Map([
      ["en-US", "Chinese (Mandarin)"],
      ["ja", "中国語（マンダリン）"],
      ["zh-TW", "中文（普通話）"],
      ["zh-CN", "中文（普通话）"],
      ["es-ES", "Chino (Mandarín)"],
      ["ko", "중국어(만다린어)"],
    ]),
    es_skill: new Map([
      ["en-US", "Spanish"],
      ["ja", "スペイン語"],
      ["zh-TW", "西班牙語"],
      ["zh-CN", "西班牙语"],
      ["es-ES", "Español"],
      ["ko", "스페인어"],
    ]),
    th: new Map([
      ["en-US", "Thai"],
      ["ja", "タイ"],
      ["zh-TW", "泰語"],
      ["zh-CN", "泰语"],
      ["es-ES", "Tailandés"],
      ["ko", "태국어"],
    ]),
    native: new Map([
      ["en-US", "Native Proficiency"],
      ["ja", "ネイティブの能力"],
      ["zh-TW", "母語能力"],
      ["zh-CN", "母语能力"],
      ["es-ES", "Competencia Nativa"],
      ["ko", "네이티브 능력"],
    ]),
    full_prof: new Map([
      ["en-US", "Full Working Proficiency"],
      ["ja", "完全な社会人能力"],
      ["zh-TW", "全部工作能力"],
      ["zh-CN", "全部工作能力"],
      ["es-ES", "Capacidad de Trabajo Completa"],
      ["ko", "완벽한 사회인 능력"],
    ]),
    etymological: new Map([
      ["en-US", "Etymological Proficiency"],
      ["ja", "語源の熟達度"],
      ["zh-TW", "詞彙能力"],
      ["zh-CN", "词汇能力"],
      ["es-ES", "Dominio de la Etimología"],
      ["ko", "어원 숙련도"],
    ]),
    limited_working: new Map([
      ["en-US", "Limited Working Proficiency"],
      ["ja", "限定的な実務能力"],
      ["zh-TW", "有限的工作能力"],
      ["zh-CN", "有限的工作能力"],
      ["es-ES", "Capacidad de Trabajo Limitada"],
      ["ko", "제한된 실무 능력"],
    ]),
    elementary: new Map([
      ["en-US", "Elementary"],
      ["ja", "初級"],
      ["zh-TW", "初級"],
      ["zh-CN", "初级"],
      ["es-ES", "Nivel Elemental"],
      ["ko", "초급"],
    ]),
    novice: new Map([
      ["en-US", "Novice"],
      ["ja", "初心者"],
      ["zh-TW", "初學"],
      ["zh-CN", "初学"],
      ["es-ES", "Principianter"],
      ["ko", "초보자"],
    ]),
    /**
     * WORKS PAGE
     */
    what_ive_created: new Map([
      ["en-US", "What I've Created"],
      ["ja", "僕が創造したもの"],
      ["zh-TW", "我所創造的"],
      ["zh-CN", "我所创造的"],
      ["es-ES", "Lo que he creado"],
      ["ko", "내가 만든 것"],
    ]),
  };
  setLocale();
})();
