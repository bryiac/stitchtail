

<h1 align="center">
  <b>⚠️ ARCHIVED ⚠️</b>

</h1>

<h3 align="center">
  <i>~ stitchtail ~</i>
</h3>

<p align="center">
  Generate classes depending on passed props using a <strong><u>base</u></strong>, <strong><u>variants</u></strong>, and <strong><u>compounds</u></strong>.
</p>

## 🧐 installation

```bash
# npm
npm install stitchtail

#yarn
yarn add stitchtail
```

- Using **[tailwind](https://tailwindcss.com/)** and its **[intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**? Try out the intellisense with **stitchtails** by simply adding this to your visual studio code `settings.json`.

```json
"tailwindCSS.experimental.classRegex": [
	["stitchtail(?:<.+>)?\\({([\\s\\S]*)}\\)", "(?<!\\[{[^}]*?)[\"'`]([^\"'`]*)[\"'`]"]
]
```

## 😎 examples

<!-- Typescript Example -->
<details open>
  <summary>
    &nbsp;<a href="https://stackblitz.com/edit/stitchtail-typescript"><strong>Typescript (https://stackblitz.com/edit/stitchtail-typescript)</strong></a>
  </summary>
  <p>

  #### Code:
  ###### src/components/Component.tsx
  ```ts
  import React from "react";
  import stitchtail from "stitchtail";

  interface Props {
    colors: "red" | "green" | "blue",
    disabled?: boolean,
    children?: React.ReactNode
  };

  const classes = stitchtail<Props>({
    base: "rounded-sm p-4 text-white text-center",

    variants: {
      colors: {
        red: "bg-red-500",
        green: "bg-green-500",
        blue: "bg-blue-500"
      },
      disabled: "cursor-not-allowed"
    },

    compounds: [
      [{ colors: "red", disabled: true }, "bg-pink-500"]
    ]
  });

  const Component = (props: Props) => {
    return (
      <div className={classes(props)}>
        {props.children}
      </div>
    );
  };

  export default Component;
  ```
  ###### src/index.tsx
  ```ts
  import React from "react";
  import ReactDOM from "react-dom";

  // Components
  import Component from "./components/Component";

  ReactDOM.render(
    <Component colors="red" disabled>
      Content
    </Component>,
    document.getElementById("root")
  );
  ```
  #### Result:
  ![result](https://i.imgur.com/pNMfDCh.png)

  </p>
</details>

<!-- Javascript Example -->
<details>
  <summary>
    &nbsp;<a href="https://stackblitz.com/edit/stitchtail-javascript"><strong>Javascript (https://stackblitz.com/edit/stitchtail-javascript)</strong></a>
  </summary>
  <p>

  #### Code:
  ###### src/components/Component.js
  ```js
  import React from "react";
  import stitchtail from "stitchtail";

  const classes = stitchtail({
    base: "rounded-sm p-4 text-white text-center",

    variants: {
      colors: {
        red: "bg-red-500",
        green: "bg-green-500",
        blue: "bg-blue-500"
      },
      disabled: "cursor-not-allowed"
    },

    compounds: [
      [{ colors: "blue", disabled: true }, "bg-purple-500"]
    ]
  });

  const Component = (props) => {
    const { children, ...rest } = props;

    return (
      <div className={classes(rest)}>
        {props.children}
      </div>
    );
  };

  export default Component;
  ```
  ###### src/index.js
  ```js
  import React from "react";
  import ReactDOM from "react-dom";

  // Components
  import Component from "./components/Component";

  ReactDOM.render(
    <Component colors="blue" disabled>
      Content
    </Component>,
    document.getElementById("root")
  );
  ```
  #### Result:
  ![result](https://i.imgur.com/nLbokKV.png)

  </p>
</details>

- It was intended to be used with **[tailwind](https://tailwindcss.com/)**, but you could also use your own classes or classes generated from some other library.

## 🥳 thanks

-  **[stitches.dev](https://stitches.dev/)** for inspiration on syntax and the whole concept in general.

-  **[typescript community](https://discord.gg/JGQXaC2PSu)** for help with generics and other issues encountered whilst making types.

## 🤔 contributing

- Don't be shy, open a **[pull request](https://github.com/coloredwax/stitchtail/pulls)**!

## 🥸 license

- Licensed under **[MIT](https://tldrlegal.com/license/mit-license)**, see the **[license](https://github.com/coloredwax/stitchtail/blob/main/LICENSE)** file for more information.
