export type TypographyProps = {
  text: string;
  as?: string;
};

// TODO: Add different styles with CVA

export default function Typography({ as, text }: TypographyProps) {
  switch (as) {
    case "h1":
      return <h1 className="text-3xl">{text}</h1>;
    case "h2":
      return <h2 className="text-xl">{text}</h2>;
    case "p":
      return <p>{text}</p>;
    case "span":
    default:
      return <span>{text}</span>;
  }
}
