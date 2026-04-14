interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <div id={id} className="py-6 mb-12" style={{ boxSizing: "border-box" }}>
      <div className="container">{children}</div>
    </div>
  );
}
