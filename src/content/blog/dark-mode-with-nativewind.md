---
title: 'Dark Mode with NativeWind'
description: 'Here we take a look at how dark mode is implemented with NativeWind and some areas of development which need careful attention.'
pubDate: 'Nov 21 2024'
heroImage: '/posts/dark-mode-with-nativewind.jpg'
---

Implementing dark mode for React Native apps has never been easier thanks to Tailwind CSS and NativeWind ☀️🌙

A short, concise guide in the NativeWind documentation for implementing dark mode is available here:<br/>
https://www.nativewind.dev/core-concepts/dark-mode<br/>
Make sure not to forget to update the `tailwind.config.js` file with the JavaScript code specified in the guide as it's key to ensuring that the `.dark` class selector is recognized throughout the app and the styles from the themes can update asynchronously.

Additionally, if you'd like to support both system preference and manual selections of dark and light themes, then please refer to a code snippet in the Tailwind CSS documentation available here:<br/>
https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection<br/>
"On native, instead of `localstorage` you can use a storage solution such as React Native Async Storage (https://github.com/react-native-async-storage/async-storage) and instead of adding classNames to the document, simply call `colorScheme.set` with the appropriate value" (Dark Mode | NativeWind, https://www.nativewind.dev/core-concepts/dark-mode).

I have experience implementing dark mode for Expo Router apps such as Habit AppLit (https://github.com/pjnalls/habit-applit/) for which I was able to use a bit more straightforward solution—as the Expo Tabs Template sets up most of what you need to implement a toggle button between light and dark modes.<br/>
You simply run `npx create-expo-app . --template tabs`, then install and setup NativeWind, and `import { useColorScheme } from 'nativewind';` throughout all of the files rather than importing it from `'react-native'`.

I hope this post helps someone with the same problems I had with implementing dark mode.

Thank you for reading!
