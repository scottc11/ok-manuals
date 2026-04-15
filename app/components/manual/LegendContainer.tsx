import type { LegendItem } from "./Definition";

export default function LegendContainer({
  items,
}: {
  items: LegendItem[];
}) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b-2 border-black">
          <th className="text-left w-32">Label</th>
          <th className="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        {[...items]
          .sort((a, b) => (a.imageRef ?? 0) - (b.imageRef ?? 0))
          .map((item) => (
            <tr
              key={item.label}
              className="border-b-2 border-onyx/10 border-dotted"
            >
              <td className="font-bold pr-4 py-2">
                <span className="text-azure font-unica">{item.label}</span>
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
