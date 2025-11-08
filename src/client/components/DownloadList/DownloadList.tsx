import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

export type DownloadItem = {
    label: string;
    file: string; // relative filename within basePath, e.g. 'degree-v1.bin'
    sizeLabel?: string; // optional human-readable size, e.g. '60 KB'
    description?: string; // optional short note shown inline
};

type DownloadListProps = {
    items: DownloadItem[];
    basePath?: string; // e.g. 'firmware/'
};

const DownloadList: React.FC<DownloadListProps> = ({ items, basePath = "firmware/" }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b-2 border-black">
                        <th className="text-left py-2">Firmware</th>
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        const href = `${basePath}${item.file}`;
                        return (
                            <tr key={item.file} className="border-b border-black/10">
                                <td className="py-2 align-middle">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{item.label}</span>
                                        {item.description ? (
                                            <span className="text-xs text-black/70">{item.description}</span>
                                        ) : null}
                                    </div>
                                </td>
                                <td className="py-2 align-middle">
                                    <span className="text-black/80">{item.sizeLabel ?? ""}</span>
                                </td>
                                <td className="py-2 align-middle">
                                    <a
                                        className="inline-flex items-center gap-2 rounded border border-azure text-azure px-3 py-2 min-h-[44px] min-w-[44px] hover:bg-azure/10"
                                        href={href}
                                        download
                                        aria-label={`Download ${item.label}${item.sizeLabel ? ` (${item.sizeLabel})` : ""}`}
                                    >
                                        <span className="inline-block"><AiOutlineDownload /></span>
                                        <span className="hidden sm:inline">Download</span>
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DownloadList;


