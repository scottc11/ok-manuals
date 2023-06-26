import React from "react";

type LinkProps = {
    text?: string;
    href: string;
    external?: boolean;
    anchor?: boolean;
    children?: React.ReactNode;
}

const Link = ({text, href, external, children}: LinkProps) => {
    return (
        <a href={href} target={external ? '_blank' : '_self'}>
            {text && text}
            {children && children}
        </a>
    )
}

export default Link;