export default function SectionSubheading({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="font-bungee bg-onyx/10 -mx-2 px-2 mt-12 mb-2 rounded-sm">
      <h3 className="text-xl py-2">{title || children}</h3>
    </div>
  );
}
