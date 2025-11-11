import React from "react";

type TextLinkProps = {
    text?: string;
    href: string;
    external?: boolean;
    children?: React.ReactNode;
}

const TextLink = ({ text, href, external, children }: TextLinkProps) => {
    return (
        <a className="text-lavender hover:underline" href={href} target={external ? '_blank' : '_self'}>
            {text && text}
            {children && children}
        </a>
    )
}

export default TextLink;