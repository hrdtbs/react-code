```command
yarn add @hrdtbs/react-code
```

[Prismjs](https://prismjs.com/#supported-languages)

[Examples](https://stackblitz.com/edit/react-code-example?file=index.js)

## useCode(language: string): React.RefObject<HTMLElement>

Highlight the element given `ref` in the specified `language` using Prismjs.

## Code: FunctionComponent<Partial<language: string>>

Code block element. children must be string.

```jsx
import { Code } from "@hrdtbs/react-code"
export default () => (
    <Code>{`

        function func(){
            console.log("hello")
        }

    `}</Code>
)
```

The above is output like the following code.

```js
function func(){
    console.log("hello")
}
```

Unwanted spaces are removed automatically.

## CodeInline: FunctionComponent<Partial<language: string>>

Code inline element. children must be string.

## CodeCollapse: FunctionComponent<Partial<{language: string;summary: string;open: boolean;}>>

Openable Code block element. children must be string.

