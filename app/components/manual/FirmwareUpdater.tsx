"use client";

import { type ChangeEvent, useEffect, useState } from "react";
import Code from "./Code";

type ProgressCallback = (percentage: number, state: string) => void;

export default function FirmwareUpdater() {
  const [dfu, setDfu] = useState<any>(null);
  const [connected, setConnected] = useState(false);
  const [file, setFile] = useState<ArrayBuffer | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");

  useEffect(() => {
    import("../../../lib/dfu-util-js/dfu").then((mod) => {
      const DFU = mod.default;
      setDfu(new DFU());
    });
  }, []);

  const handleProgress: ProgressCallback = (percentage, state) => {
    setProgress(percentage);
    setUploadStatus(state);
  };

  const connect = async () => {
    if (!dfu) return;
    try {
      const device = await (navigator as any).usb.requestDevice({
        filters: [],
      });
      await dfu.connect(device);
      dfu.setProgressCallback(handleProgress);
      if (dfu.isOpened()) {
        setConnected(true);
        await dfu.getStatus();
      }
    } catch (e) {
      console.error("USB connection failed", e);
    }
  };

  const chooseFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const reader = new FileReader();
      reader.onload = () => setFile(reader.result as ArrayBuffer);
      reader.readAsArrayBuffer(event.target.files[0]);
    }
  };

  return (
    <div className="bg-offwhite text-black font-body">
      <p>
        At this stage, we need to officially connect the module to the Google
        Chrome browser
      </p>

      <p>
        1. Press this{" "}
        <button
          onClick={connect}
          className="px-3 py-2 rounded disabled:opacity-50 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          Connect
        </button>{" "}
        button.
      </p>
      <p>
        2. A window should appear containing a list of all the available USB
        devices on your computer. Select the device named{" "}
        <Code>STM32 BOOTLOADER</Code> from that dropdown.
      </p>

      <div
        className={`p-4 my-4 rounded-lg border-2 ${connected ? "bg-green-100 border-green-500 text-green-700" : "bg-red-100 border-red-500 text-red-700"}`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${connected ? "bg-green-500" : "bg-red-500"}`}
          />
          <p className="font-medium">
            Device Status: {connected ? "Connected" : "Not connected"}
          </p>
        </div>
      </div>

      <p>
        3. Using the file selector below, select the <Code>.bin</Code> file you
        wish to upload to the module.
      </p>

      <input type="file" id="firmwareFile" name="file" onChange={chooseFile} />

      <p>
        4. Now press this{" "}
        <button
          disabled={!dfu || !file}
          onClick={() => dfu?.upload(file)}
          className="px-3 py-2 rounded disabled:opacity-50 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          Upload
        </button>{" "}
        button.
      </p>
      <br />

      {dfu && (
        <div className="mt-4 border rounded-lg p-4 bg-white font-mono shadow-sm">
          <div className="mb-2 flex justify-between items-center">
            <span className="font-medium text-gray-700">{uploadStatus}</span>
            <span className="font-medium text-azure">
              {progress.toFixed(2)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-azure h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <p className="mt-2 text-green-600 font-medium">
              Upload complete!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
