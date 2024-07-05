import React, { useEffect, useRef } from "react";

type CanvasProps = {
    draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
}

const Canvas = ({draw}: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current
        
        if (canvas) {
            const context = canvas.getContext('2d');
            let frameCount = 0
            let animationFrameId = 0;

            //Our draw came here
            const render = () => {
                frameCount++
                draw(context, frameCount)
                animationFrameId = window.requestAnimationFrame(render)
            }
            render();

            return () => {
                window.cancelAnimationFrame(animationFrameId)
            }
        }
    }, [draw]);

    return (
        <canvas ref={canvasRef} width="200" height="200" style={{ border: "1px solid #000000" }}>
            your browser does not support the HTML5 canvas tag.
        </canvas>
    );
};


export default Canvas;