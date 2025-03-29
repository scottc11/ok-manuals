import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { TbCircuitPushbutton } from "react-icons/tb";
import { GrConnect } from "react-icons/gr";
import DFU, { ProgressCallback } from "../dfu-util-js/dfu";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Section from "../components/Section/Section";
import SectionSubheading from "../components/SectionSubHeading/SectionSubHeading";

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
        <div className="bg-offwhite text-black font-body pb-8">
            <Section>
                <h1 className="text-4xl md:text-6xl pt-12 pb-6 font-bold font-bungee">OK200 Firmware Updater</h1>
                <p>This web application is designed to update the firmware of OK200 Eurorack modules.</p>
                <p>Just follow the steps below, and everything will be ok 🙂.</p>
            </Section>
            <Section>
                <SectionHeading title="STEP 1:" />
                <h3 className="text-2xl pb-4">Are you using Google Chrome v61 or greater? 👀</h3>
                <p>In order for this to work, you are going to need to <a className="text-azure hover:text-azure/80 underline" target="_blank" href="https://www.google.com/intl/en_ca/chrome/?brand=CHBD&gclid=Cj0KCQjwyLGjBhDKARIsAFRNgW-0DbYRWHdafOcyVQptTB-Ko36qyNh3Whw0Bp7RcopmCFanZ26NPPsaAmq4EALw_wcB&gclsrc=aw.dshttps://www.google.com/search?q=Install+Google+Chrome&rlz=1C5CHFA_enCA969CA969&oq=Install+Google+Chrome&aqs=chrome..69i57.562j0j7&sourceid=chrome&ie=UTF-8">Install Google Chrome</a>. It is the only way 🙏.</p>
            </Section>

            <Section>
                <SectionHeading title="STEP 2:" />
                <h3 className="text-2xl pb-4">Obtain firmware file <span className="inline-block"><AiOutlineDownload /></span></h3>
                <p>You need a copy of the firmware you wish to upload to your module. To do so:</p>
                <ol className="list-decimal list-inside">
                    <li>Navigate to the <a className="text-azure hover:text-azure/80 underline" target="_blank" href="https://github.com/scottc11/ok-web-programmer/blob/master/src/firmware">GitHub repository</a> which holds all the available firmware files.</li>
                    <li>Select the firmware file you wish to upload. It will have a <b>'.bin'</b> extension.</li>
                    <li>On the far right, there should be a <span className="inline-block"><AiOutlineDownload /></span> icon. Press that icon and <b>download the file to your local computer</b>.</li>
                </ol>
            </Section>

            <Section>
                <SectionHeading title="STEP 3:" />
                <h3 className="text-2xl pb-4">Connect module to your computer / Google Chrome and prepare for upload <span className="inline-block"><GrConnect /></span></h3>
                <p>You now need to physically connect the module to your computer / laptop / tablet (? 🤷‍♂️). Follow these steps:</p>
                <ol className="list-decimal list-inside">
                    <li>Power <b>OFF</b> your system.</li>
                    <li>Bring your laptop over to your system (or bring your system close to your laptop)</li>
                    <li>Remove your module from the case, <b>but keep the power cable connected</b>.</li>
                    <li>Using a standard USB cable, connect one end of the cable to the associated USB connector on underside of the module</li>
                    <li>Connect the other end of the USB cable to your computer</li>
                    <li>Power on your Eurorack case / power supply. The module needs to be powered for the firmware upload to work. Once powered, it should be operating as usual.</li>
                    <li>Now, on the underside of the module, there is a <b>tiny black button</b> and a <b>tiny white button</b> (near where the Benders are mounted)</li>
                    <ul>
                        <li><span className="inline-block"><TbCircuitPushbutton /></span> Press and hold down the BLACK button</li>
                        <li>While the black button is being held down, <span className="inline-block"><TbCircuitPushbutton /></span> press the WHITE button</li>
                    </ul>
                    <li>The module should now be "frozen" (ie. clock LED no longer flashing, touch pads unresponsive). This is GOOD! The module is now in "BOOTLOADER" mode.</li>
                </ol>
            </Section>

            <Section>
                <SectionHeading title="STEP 4:" />
                <h3 className="text-2xl pb-4">Officially connect the module to the Google Chrome browser</h3>
                <p>Device Status: {dfu && connected ? 'connected' : 'disconnected'}</p>
                <ol className="list-decimal list-inside">
                    <li>Press this <button onClick={() => connect()}>Connect</button> button.</li>
                    <li>A dropdown will appear. Select <span className="text-azure">"STM32 BOOTLOADER"</span> from that dropdown.</li>
                </ol>
            </Section>

            {/* <button onClick={() => disconnect()}>Disconnect</button> */}

            <Section>
                <SectionHeading title="STEP 5:" />
                <h3 className="text-2xl pb-4">Upload firmware to the module</h3>
                <ol className="list-decimal list-inside">
                    <li>
                        Remember that file you downloaded from GitHub earlier? Select that file 👇
                    </li>
                    <br></br>
                    <input
                        type="file"
                        id="firmwareFile"
                        name="file"
                        disabled={false}
                        onChange={(e) => chooseFile(e)}
                    />
                    <p></p>
                    <li>Now press the <span className="text-lava">Upload</span> button 👇</li>
                    <br></br>
                    <button className="bg-lava text-white px-4 py-2 rounded-md hover:bg-lava/80" disabled={dfu && file ? false : true} onClick={() => dfu.upload(file)}>Upload</button>
                    {dfu && file &&
                        <p>
                            {uploadStatus}: %{progress.toFixed(2)}
                        </p>
                    }
                </ol>
            </Section>

            <Section>
                <SectionHeading title="STEP 6:" />
                <h3 className="text-2xl pb-4">Finishing up</h3>
                <ol className="list-decimal list-inside">
                    <li>Once the upload process is complete, the module should automatically reset itself and start running the newly uploaded firmware</li>
                    <li>Power off your Eurorack system / disconnect the power supply</li>
                    <li>Gently remove the USB cable from the modules USB connector</li>
                    <li>You can now mount the module back into your case and turn on the power.</li>
                    <li>After the module powers up, you are going to want to <b>calibrate the BENDER components</b> (ALT + MODE)</li>
                    <li>You are done!</li>
                </ol>
            </Section>
        </div>
    );
}

export default FirmwareUpdater;