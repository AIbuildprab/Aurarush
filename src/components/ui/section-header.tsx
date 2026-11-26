export function SectionHeader({
  id,
  title,
  intro,
  aside,
  as: Tag = "h2",
}: {
  id: string;
  title: string;
  intro?: string;
  aside?: React.ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <Tag id={id} className="h2">{title}</Tag>
        {intro ? <p className="lead mt-5">{intro}</p> : null}
      </div>
      {aside}
    </div>
  );
}
