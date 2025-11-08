import React from "react";

type LinkProps = {
    text?: string;
    href: string;
    external?: boolean;
    anchor?: boolean;
    children?: React.ReactNode;
}

const Link = ({text, href, external, anchor, children}: LinkProps) => {

    const handleScrollTo = (e: React.MouseEvent) => {
        if (anchor) {
            const id = href.split("#")[1];
            e.preventDefault();
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        }
    }

    return (
        <a className="text-lavender hover:underline" href={href} onClick={handleScrollTo} target={external ? '_blank' : '_self'}>
            {text && text}
            {children && children}
        </a>
    )
}

export default Link;