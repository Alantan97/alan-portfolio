type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-accent sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-secondary">{description}</p> : null}
    </div>
  );
}
