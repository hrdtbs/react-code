import "prismjs/themes/prism-tomorrow.css"
import Prism from "prismjs"
import React, { FunctionComponent, useEffect, useRef } from "react"

interface CodeProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
    children: string
    language?: string
    lang?: string
}

export const CodeInline: FunctionComponent<CodeProps> = ({ children, language = "javascript", lang, ...props }) => {
    const codeRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const { current } = codeRef
        if (current !== null && children !== "") {
            Prism.highlightElement(current)
        }
    }, [codeRef, children])

    const space = children.search(/\S/) === 0 ? 0 : children.search(/\S/) - 1
    return (
        <code {...props} ref={codeRef} className={`language-${language || lang}`}>
            {children
                .split("\n")
                .map(line => line.slice(space))
                .slice(1)
                .join("\n")}
        </code>
    )
}

export const Code: FunctionComponent<CodeProps> = ({ style, className, ...props }) => {
    return (
        <pre {...{ style, className }}>
            <CodeInline {...props} />
        </pre>
    )
}

export const CodeCollapsible: FunctionComponent<CodeProps & { summary?: string; open?: boolean }> = ({
    summary,
    open,
    style,
    className,
    ...props
}) => {
    return (
        <details {...{ style, className, open }}>
            <summary>{summary}</summary>
            <Code {...props} />
        </details>
    )
}
