import "prismjs/themes/prism-tomorrow.css";
import React, { FunctionComponent } from "react";
interface CodeProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
    children: string;
    language?: string;
    lang?: string;
}
export declare const CodeInline: FunctionComponent<CodeProps>;
export declare const Code: FunctionComponent<CodeProps>;
export {};
