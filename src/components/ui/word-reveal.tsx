import { cn } from "@/lib/utils";

export function WordReveal({
  text,
  as: Tag = "h2",
  className,
  highlight,
  id,
}: {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  highlight?: string;
  id?: string;
  mode?: "load" | "view";
}) {
  const words = text.split(" ");
  const target = highlight?.split(" ") ?? [];
  let start = -1;
  let end = -1;

  if (target.length > 0) {
    for (let index = 0; index <= words.length - target.length; index += 1) {
      if (target.every((word, offset) => words[index + offset] === word)) {
        start = index;
        end = index + target.length - 1;
        break;
      }
    }
  }

  return (
    <Tag id={id} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="word-mask">
            <span
              className={cn("word-inner", index >= start && index <= end && "text-gradient")}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
