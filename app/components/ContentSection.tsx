interface ContentSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Designed to wrap content inside a tailwind container, but also allow for a background color
 * to be applied which covers the full width of the screen.
 *
 * @param id - The id of the section
 * @param children - The children of the section
 * @param backgroundClassName - The background class name of the section
 * @returns 
 */
export default function ContentSection({
  id,
  children,
  className = "",
}: ContentSectionProps) {
  return (
    <div
      id={id}
      className={`${className} py-6`}
      style={{ boxSizing: "border-box" }}
    >
      <div className="container">
        {children}
      </div>
    </div>
  );
}
