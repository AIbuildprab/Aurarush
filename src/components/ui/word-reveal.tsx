
/**
 * Headline whose words rise into place one after another. Pure CSS (see `.word-inner`),
 * so it works in Server Components and is disabled by prefers-reduced-motion.
 * Ported from the first version of the site.
 */
export function WordReveal({
  text,
  as: Tag = "h2",
  className,
  id,
}: {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  id?: string;
}) {
  const words = text.split(" ");
  return (
    <Tag id={id} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="word-mask">
            <span className="word-inner" style={{ animationDelay: `${index * 40}ms` }}>
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
