---
title: 'Type Inference'
description: 'Here we look at some of the benefits of using type inference over type declaration.'
pubDate: 'Nov 21 2024'
updatedDate: 'Nov 23 2024'
heroImage: '/posts/type-inference.jpg'
---

Type inference, to me, is enough of a reason to switch from using JavaScript to using TypeScript 🟨 → 🟦

While it's generally good practice to declare types, interfaces, and/or classes in TypeScript for handling data, maintaining a type may not be so practical—like for i18n internationalization (int'l) data shown above in the screenshot.

Int'l data (1) tends to scale vertically as, e.g., new pages are added to a website and also (2) tends to scale horizontally as, e.g., new languages get added to the data, so that's why it's very impractical to maintain both the type and actual data for int'l.
<br/>This is where there is a need for type inference.

Type inference in TypeScript allows 2 fantastic things shown above in the code to drastically speed up development time:
<br/>
(1.) Allows the use of the `typeof` keyword to infer the type objects for which types weren't declared.
<br/>
(2.) Allows Intellisense to provide accurate suggestions for keys, even in complex object structures.

If you're still not convinced about the benefits of TypeScript and type inference, please feel free to play around with the code shown in the image above at the TS Playground available [here](https://www.typescriptlang.org/play/?#code/MYewdgzgLgBAJgUwGYEMCuAbKAZFYDmMAvDAOQJikDcAUKJLIqplACoIAesJA3jTALJgUANwB0KAEYg0UUgC4yAQWmzSAGn6DSw8agCOCsgDElARQ1aBO0WIwBLMAGsEcR0dLZHLuAElKmgC+NFAAngAOCDAAIsjoWOxcxDBhkSBI8HEsiVC09NAwaPaKPADaLqGK0ABOjvgAuoqxzAmcUIHJfIIwFIpM8Wxtmt0AViglVt0wYjP92UOT3TbiUjJyiqSArQyAJQyAEwyA1gyAJgyAIgyAZgyWU9q6YgYegBEMgPIMgEIMgNEMgFcxgPKqF4KBQTAoEBg+VyNAwCFgGDw+EUFXSKQiCDhRWS5EotBoSDQYGAUHs4BSAAoKjCEKE4alERkiqUKXC5lhcAR6gBKGBdQTVcFoapgQr2UqQpnlUn1GAAHzFfNK9JwUPqwtC9VowTo4AgIDBdhA+AJUAJywkqjkzOZtEFhBIpDG1FVkA1CC1Or1BtuJryavtjt1+uuDmcrncbtt6s1GG13tIKFIJpoQA).
