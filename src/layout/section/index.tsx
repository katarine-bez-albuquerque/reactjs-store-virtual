import { IAttribute } from "../../model/attribute";

const Section = ({id, children}:IAttribute) => (
    <section id={id}>{children}</section>
);

export default Section;