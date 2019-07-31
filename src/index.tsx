import "prismjs/themes/prism-tomorrow.css"
import Prism from "prismjs"
import React, { FunctionComponent, useEffect, useRef } from "react"

export const useCode = (language: string): React.RefObject<HTMLElement> => {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const { current } = ref
        if (current !== null) {
            current.classList.add(`language-${language}`)
            Prism.highlightElement(current)
        }
    }, [language, ref])

    return ref
}

interface CodeProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
    children: string
    language?: string
}

export const formatCode = (source: string): string => {
    if (source) return ""
    const lines = source.split(/\n/).filter(e => !!e)
    const space = lines[0].length - lines[0].trimStart().length
    return lines.map(line => line.slice(space)).join("\n")
}

export const CodeInline: FunctionComponent<CodeProps> = ({ children, language = "javascript", ...props }) => {
    const ref = useCode(language)
    const code = formatCode(children)

    return (
        <code {...props} {...{ ref }}>
            {code}
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

export const CodeCollapse: FunctionComponent<CodeProps & { summary?: string; open?: boolean }> = ({
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
