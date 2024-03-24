import { ILink } from "../../model/link";

const Link = ({href, children}:ILink) => (
    <a href={href}>{children}</a>
);

export default Link;