import React, { ChangeEvent, useEffect, useState } from "react";
import DFU, { ProgressCallback } from "../dfu-util-js/dfu";
import Code from "../components/Code/Code";
import Button from "../components/Button/Button";

function FirmwareUpdater() {

    const [dfu] = useState<DFU>(new DFU());
    const [connected, setConnected] = useState(false);
    const [deviceStatus, setDeviceStatus] = useState('');
    const [file, setFile] = useState<any>(null);
    const [progress, setProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleProgress: ProgressCallback = (percentage, state) => {
        setProgress(percentage);
        setUploadStatus(state);
    }

    const connect = async () => {
        navigator.usb.requestDevice({ filters: [] }).then(async (device: USBDevice) => {
            await dfu.connect(device);
            dfu.setProgressCallback(handleProgress);
            if (dfu.isOpened()) {
                setConnected(true);
                const status = await dfu.getStatus();
                setDeviceStatus(`${status.status}`);
            } else {
                setDeviceStatus('Failed to connect to device');
            }
        });
    };

    const disconnect = async () => {
        await dfu.disconnect();
        setDeviceStatus('disconnected');
    }

    const chooseFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const reader = new FileReader();

            reader.onload = () => {
                setFile(reader.result);
            };

            reader.readAsArrayBuffer(event.target.files[0]);
        }
    }

    useEffect(() => {

    }, [dfu])

    return (
        <div className="bg-offwhite text-black font-body">
            
            <p>At this stage, we need to officially connect the module to the Google Chrome browser</p>
                        
            <p>1. Press this <Button onClick={() => connect()}>Connect</Button> button.</p>
            <p>2. A window should appear containing a list of all the available USB devices on your computer. Select the device named <Code>STM32 BOOTLOADER</Code> from that dropdown.</p>

            <div className={`p-4 my-4 rounded-lg border-2 ${connected ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700'}`}>
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <p className="font-medium">Device Status: {dfu && connected ? 'Connected' : 'Not connected'}</p>
                </div>
            </div>

            {/* <button onClick={() => disconnect()}>Disconnect</button> */}

            <p>3. Using the file selector below, select the <Code>.bin</Code> file you wish to upload to the module.</p>

            <input
                type="file"
                id="firmwareFile"
                name="file"
                disabled={false}
                onChange={(e) => chooseFile(e)}
            />

            <p>4. Now press this <Button disabled={dfu && file ? false : true} onClick={() => dfu.upload(file)}>Upload</Button> button.</p>
            <br></br>
            
            {
                process.env.NODE_ENV !== 'production' && (
                    <Button
                        onClick={() => {
                            // Simulate upload progress
                            setUploadStatus('Simulating upload');
                            setProgress(0);

                            const interval = setInterval(() => {
                                setProgress(prev => {
                                    if (prev >= 100) {
                                        clearInterval(interval);
                                        setUploadStatus('Completed');
                                        return 100;
                                    }

                                    // Simulate different stages
                                    if (prev < 30) {
                                        setUploadStatus('Erasing flash memory');
                                    } else if (prev < 75) {
                                        setUploadStatus('Writing firmware');
                                    } else {
                                        setUploadStatus('Verifying upload');
                                    }

                                    return prev + (Math.random() * 3);  // Increment by random amount for realism
                                });
                            }, 200);  // Update every 200ms
                        }}
                    >
                        Simulate Upload Process
                    </Button>
                )
            }

            {dfu &&
                <div className="mt-4 border rounded-lg p-4 bg-white font-mono shadow-sm">
                    <div className="mb-2 flex justify-between items-center">
                        <span className="font-medium text-gray-700">{uploadStatus}</span>
                        <span className="font-medium text-azure">{progress.toFixed(2)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-azure h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    {progress === 100 && (
                        <p className="mt-2 text-green-600 font-medium">Upload complete!</p>
                    )}
                </div>
            }
        </div>
    );
}

export default FirmwareUpdater;