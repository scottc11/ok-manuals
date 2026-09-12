"use client";

import type { IconType } from "react-icons";
import { FaUsb, FaWaveSquare } from "react-icons/fa";
import { IconDIN } from "./icons/IconDIN";
import { IconMIDI } from "./icons/IconMIDI";
import { IconTRS } from "./icons/IconTRS";
import { PiWaveSquare } from "react-icons/pi";
import { CiGrid32 } from "react-icons/ci";
import {
  IoHardwareChip,
  IoMusicalNotes,
  IoHeadset,
  IoVolumeHigh,
  IoRadio,
  IoCode,
  IoWifi,
  IoLockClosed,
  IoPower,
} from "react-icons/io5";

/**
 * Icon registry — maps Contentful icon name strings to react-icons/io5 components.
 * To add a new icon, import it above and add a single entry here.
 */
const ICON_MAP: Record<string, IconType> = {
  cpu: IoHardwareChip,
  music: IoMusicalNotes,
  headphones: IoHeadset,
  volume: IoVolumeHigh,
  radio: IoRadio,
  code: IoCode,
  wifi: IoWifi,
  lock: IoLockClosed,
  power: IoPower,
  usb: FaUsb,
  din: IconDIN,
  trs: IconTRS,
  midi: IconMIDI,
  squareWave: PiWaveSquare,
  grid: CiGrid32,
};

interface ContentBlockFeatureCardProps {
  entry: any;
}

export default function ContentBlockFeatureCard({
  entry,
}: ContentBlockFeatureCardProps) {
  const fields = entry?.fields ?? {};
  const title: string = fields.title ?? "";
  const description: string = fields.description ?? "";
  const tag: string = fields.tag ?? "";
  const icon: string = fields.icon ?? "";

  const IconComponent = icon
    ? (ICON_MAP[icon] as React.ComponentType<{ size?: number | string }>)
    : null;

  return (
    <div className="bg-[#0c0c0c] p-8 group hover:bg-[#131313] transition-colors duration-300 relative overflow-hidden h-full">
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />

      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 border border-[#ffffff12] flex items-center justify-center text-gold group-hover:border-gold transition-colors duration-300">
          {IconComponent ? <IconComponent size={18} /> : null}
        </div>
        {tag && (
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#efefef30] font-semibold border border-[#ffffff08] px-2 py-0.5">
            {tag}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-[15px] tracking-tight text-[#efefef] mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#efefef50] text-[13px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
