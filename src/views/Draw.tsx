import React, { useEffect, useRef, useState } from "react";
import Canvas from "../components/Canvas/Canvas";
import Slider from "../components/Slider/Slider";


interface WaveformParams {
    amplitude?: number; // Height of the wave
    frequency?: number; // Frequency
    phase?: number;     // Phase shift of the wave
    offset?: number;    // Vertical offset
}

function drawTriangleWave(ctx: CanvasRenderingContext2D, color?: string, params?: WaveformParams) {
    // Define properties of the sine wave
    var amplitude = params?.amplitude || ctx.canvas.height / 4; // Height of the wave
    var period = ctx.canvas.width;
    var frequency = params?.frequency || 1 / period; // Frequency to fit one cycle in the canvas width
    var phase = params?.phase || 1.5; // Phase shift of the wave
    var offset = params?.offset || ctx.canvas.height / 2; // Vertical offset

    ctx.beginPath();
    ctx.moveTo(0, offset);

    for (let x = 0; x < ctx.canvas.width; x++) {
        const phaseShift = x + phase * period / (2 * Math.PI); // Adjust x for phase shift
        const y = amplitude * (2 * Math.abs(2 * ((phaseShift * frequency) - Math.floor(phaseShift * frequency + 0.5))) - 1) + offset;
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = color || '#0000FF'; // Color of the sine wave
    ctx.lineWidth = 2;
    ctx.stroke();
}

const drawSineWave = (ctx: CanvasRenderingContext2D, color?: string, params?: WaveformParams) => {
    // Define properties of the sine wave
    var amplitude = params?.amplitude || ctx.canvas.height / 4; // Height of the wave
    var period = ctx.canvas.width;
    var frequency = params?.frequency || (2 * Math.PI) / period; // Frequency to fit one cycle in the canvas width
    var phase = params?.phase || 0; // Phase shift of the wave
    var offset = params?.offset || ctx.canvas.height / 2; // Vertical offset

    // Draw the sine wave
    ctx.beginPath();
    ctx.moveTo(0, offset);

    for (var x = 0; x < ctx.canvas.width; x++) {
        var y = amplitude * Math.sin(frequency * x + phase) + offset;
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = color || '#0000FF'; // Color of the sine wave
    ctx.lineWidth = 2;
    ctx.stroke();
}

const Draw = () => {

    const sliderResolution = 100;
    let [frequency, setFrequency] = useState(0.05);

    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawSineWave(ctx, '#09ff00', { frequency: frequency });
        // drawTriangleWave(ctx, '#FF0000', { frequency: frequency });
    }

    const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    return (
        <div className="container">
            <Canvas draw={draw} />
            <Slider min={0} max={sliderResolution} onChange={(val) => setFrequency(scale(val, 0, sliderResolution, 0, 0.1))} />
        </div>
    );
};


export default Draw;