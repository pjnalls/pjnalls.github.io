(function () {
  const intlTags = document.getElementsByClassName("intl");
  const setLocale = () => {
    localStorage.setItem(
      "locale",
      Intl.NumberFormat().resolvedOptions().locale ?? "en-US"
    );
    for (let i = 0; i < intlTags?.length; i++) {
      intlTags.item(i).textContent =
        localizationDB[intlTags.item(i).getAttribute("id")].get(
          localStorage.getItem("locale")
        ) ?? localizationDB[intlTags.item(i).getAttribute("id")].get("en-US");
    }
  };

  /**
   * LOCALIZATION DATABASE
   */
  var localizationDB = {
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
      ["hi", "नमस्ते 👋, मेरा नाम "],
    ]),
    preston: new Map([
      ["en-US", "Preston"],
      ["ja", "プレストン"],
      ["zh-TW", "譜詹頓"],
      ["zh-CN", "谱詹顿"],
      ["es-ES", "Preston"],
      ["ko", "프래스턴"],
      ["hi", "प्रेस्टन"],
    ]),
    period: new Map([
      ["en-US", "."],
      ["ja", "です。"],
      ["zh-TW", "。"],
      ["zh-CN", "。"],
      ["es-ES", "."],
      ["ko", "이에요"],
      ["hi", "है"],
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
      ["hi", "पॉलीग्लॉट फ्रंटएंड इंजीनियर"],
    ]),
    /**
     * "My focus is on combining aesthetical,
        functional design with efficient yet elegant 
        frontend code.

        I also focus on continually learning in 
        the STEAM (Scientific, Technologic, Engineering, 
        Artistic, and Mathematic) disciplines to cultivate 
        better analytical and creative abilities for both 
        professional and personal projects."
     */
    summary1: new Map([
      [
        "en-US",
        "My focus is on combining aesthetical, functional design with efficient yet elegant frontend code.",
      ],
      [
        "ja",
        "僕の焦点は、美的で機能的なデザインと、効率的でエレガントなフロントエンド・コードを組み合わせることです。",
      ],
      ["zh-TW", `我的工作重點是用戶體驗工程的前端設計和開發。`],
      ["zh-CN", `我的工作重点是用户体验工程的前端设计和开发。`],
      [
        "es-ES",
        "Mi objetivo es combinar un diseño estético y funcional con un código frontend eficiente y elegante.",
      ],
      // ["ko", "다국어 프론트엔드 엔지니어"],
      // ["hi", "पॉलीग्लॉट फ्रंटएंड इंजीनियर"],
    ]),
    summary2: new Map([
      [
        "en-US",
        "I also focus on continually learning in the STEAM (Scientific, Technologic, Engineering, Artistic, and Mathematic) disciplines to cultivate better analytical and creative abilities for both professional and personal projects.",
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
      // ["ko", "다국어 프론트엔드 엔지니어"],
      // ["hi", "पॉलीग्लॉट फ्रंटएंड इंजीनियर"],
    ]),
    madeWith: new Map([
      ["en-US", "Made with"],
      ["ja", "使用技術"],
      ["zh-TW", "使用的技術"],
      ["zh-CN", "使用的技术"],
      ["es-ES", "Hecho con"],
      ["ko", "사용 기술"],
      ["hi", "प्रौद्योगिकी का प्रयोग किया गया"],
    ]),
    techUsed: new Map([
      ["en-US", "React, TypeScript, Tailwind CSS, Astro, Piskel, and ❤️."],
      ["ja", "React、TypeScript、 Tailwind CSS、 Astro、 Piskel、❤️。"],
      ["zh-TW", "React、TypeScript、Tailwind CSS、Astro、Piskel和❤️"],
      ["zh-CN", "React、TypeScript、Tailwind CSS、Astro、Piskel和❤️"],
      ["es-ES", "React, TypeScript, Tailwind CSS, Astro, Piskel y ❤️."],
      ["ko", "React, TypeScript, Tailwind CSS, Astro, Piskel, ❤️."],
      ["hi", "React, TypeScript, Tailwind CSS, Astro, Piskel, और ❤️"],
    ]),
  };
  setLocale();
})();
