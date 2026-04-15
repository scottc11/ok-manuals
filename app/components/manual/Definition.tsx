export type LegendDefinition = {
  label: string;
  description?: string;
};

export type IO =
  | "led"
  | "input"
  | "output"
  | "display"
  | "touch"
  | "button"
  | "toggle-switch"
  | "slide-potentiometer"
  | "potentiometer"
  | "bender";

export type LegendItem = {
  label: string;
  gestureLabel?: string;
  description: string;
  altLabel?: string;
  altDescription?: string;
  type: IO;
  voltageRange?: string;
  imageRef?: number;
};

export default function Definition({
  item,
  plural,
  owner,
  e,
}: {
  item: LegendDefinition | LegendItem;
  plural?: boolean;
  owner?: boolean;
  e?: boolean;
}) {
  return (
    <span className="text-azure font-unica p-1 rounded-sm">
      {item.label}
      {plural ? (owner ? "'s" : e ? "es" : "s") : null}
    </span>
  );
}
