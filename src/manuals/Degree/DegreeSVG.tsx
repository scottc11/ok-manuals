import * as React from "react"
import { SVGProps } from "react"


const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
    const handleHover = (e: any) => {
        if (e.target.id == "clock-input") {
            console.log(e.target);
        }
    }
    // const handleHover = (e:)
    return (
        <svg
            onMouseMove={handleHover}
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 1.5,
            }}
            viewBox="0 0 607 365"
            
            {...props}
        >
            <path
                d="M2330 0h2799v1790H2330z"
                style={{
                    fill: "none",
                }}
                transform="matrix(.3069 0 0 .30615 -829.066 -72)"
            />
            <path
                d="M1385.2 72h28.8v43.2h-28.8z"
                style={{
                    fill: "#404040",
                }}
                transform="matrix(20.99997 0 0 8.43056 -29087.958 -607)"
            />
            <path
                d="m1432 140.4 1.8-1.8v3.6l-1.8-1.8Zm1.8 0h19.8"
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: 1,
                }}
                transform="matrix(0 -1 1 0 -110.4 1584.398)"
            />
            <path
                d="m1432 140.4 1.8-1.8v3.6l-1.8-1.8Zm1.8 0h156.6"
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1384 -43.2)"
            />
            <path
                d="m1432 140.4 1.8-1.8v3.6l-1.8-1.8Zm1.8 0h156.6"
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1384 -72)"
            />
            <path
                d="M1471.6 198v-86.4"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1384 -72)"
            />
            <path
                d="M1471.6 198v-86.4"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1344.398 -72)"
            />
            <path
                d="M1471.6 198v-86.4"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1304.8 -72)"
            />
            <path
                d="M1471.6 198v-86.4"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1265.2 -72)"
            />
            <circle
                cx={1584.1}
                cy={198.9}
                r={11.7}
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "3.5px",
                }}
                transform="matrix(1 0 0 1 -1554.1 -73.17)"
            />
            <g transform="matrix(.11339 0 0 .11339 -26.693 91.715)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -365.62 -90.977)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -245.757 -23.336)">
                <circle
                    id="clock-input"
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    id="clock-input"
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g id="global-gate-out" transform="matrix(.11339 0 0 .11339 -26.693 63.05)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -365.62 -119.643)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -245.757 -52.001)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g id="global-bend-out" transform="matrix(.11339 0 0 .11339 -26.693 34.25)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -365.62 -148.443)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -245.757 -80.801)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g id="clock-out" transform="matrix(.11339 0 0 .11339 -26.693 5.45)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -365.62 -177.243)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -245.757 -109.602)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <circle
                cx={1584.1}
                cy={198.9}
                r={11.7}
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "3.5px",
                }}
                transform="matrix(1 0 0 1 -1496.498 -73.17)"
            />
            <g transform="matrix(.11339 0 0 .11339 30.905 91.715)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -308.021 -90.977)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -188.159 -23.336)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 30.905 63.05)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -308.021 -119.643)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -188.159 -52.001)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 30.905 34.25)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -308.021 -148.443)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -188.159 -80.801)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 30.905 5.45)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -308.021 -177.243)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -188.159 -109.602)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <circle
                cx={1584.1}
                cy={198.9}
                r={11.7}
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "3.5px",
                }}
                transform="matrix(1 0 0 1 -1456.9 -73.17)"
            />
            <g transform="matrix(.11339 0 0 .11339 70.506 91.715)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -268.42 -90.977)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -148.557 -23.336)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 70.506 63.05)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -268.42 -119.643)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -148.557 -52.001)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 70.506 34.25)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -268.42 -148.443)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -148.557 -80.801)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 70.506 5.45)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -268.42 -177.243)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -148.557 -109.602)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <circle
                cx={1584.1}
                cy={198.9}
                r={11.7}
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "3.5px",
                }}
                transform="matrix(1 0 0 1 -1417.298 -73.17)"
            />
            <g transform="matrix(.11339 0 0 .11339 110.105 91.715)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -228.821 -90.977)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -108.959 -23.336)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 110.105 63.05)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -228.821 -119.643)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -108.959 -52.001)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 110.105 34.25)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -228.821 -148.443)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -108.959 -80.801)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 110.105 5.45)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -228.821 -177.243)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -108.959 -109.602)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <circle
                cx={1584.1}
                cy={198.9}
                r={11.7}
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "3.5px",
                }}
                transform="matrix(1 0 0 1 -1377.7 -73.17)"
            />
            <g transform="matrix(.11339 0 0 .11339 149.707 91.715)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -189.22 -90.977)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -69.357 -23.336)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 149.707 63.05)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -189.22 -119.643)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -69.357 -52.001)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 149.707 34.25)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -189.22 -148.443)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -69.357 -80.801)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <g transform="matrix(.11339 0 0 .11339 149.707 5.45)">
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={500}
                    cy={300}
                    r={100}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.89456 0 0 .89456 -189.22 -177.243)">
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={442.25}
                    cy={242.25}
                    r={9.75}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
            </g>
            <g transform="matrix(.63432 0 0 .63433 -69.357 -109.602)">
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
                <circle
                    cx={435}
                    cy={235}
                    r={11}
                    style={{
                        fill: "#262626",
                    }}
                />
            </g>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1237.592 -161.161)"
            >
                {"GATE OUT"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1237.187 -132.26)"
            >
                {"CV IN"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1237.69 -189.857)"
            >
                {"BEND OUT"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1238.154 -218.761)"
            >
                {"1 V/O OUT"}
            </text>
            <text
                x={1467}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1448.647 -237.457)"
            >
                {"CLOCK OUT"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 8,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1260.269 -241.1)"
            >
                {"D"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 8,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1299.79 -241.161)"
            >
                {"C"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 8,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1339.267 -241.161)"
            >
                {"B"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 8,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1379.264 -241.161)"
            >
                {"A"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 8,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -903.77 102.7)"
            >
                {"D"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 8,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -975.694 102.639)"
            >
                {"C"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 8,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1047.57 102.639)"
            >
                {"B"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 8,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1119.967 102.639)"
            >
                {"A"}
            </text>
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 127.95)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 127.95)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 127.95)"
            />
            <g transform="matrix(1 0 0 1 -2114.9 123.45)">
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
            </g>
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 130.25)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 130.25)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 130.25)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 88.35)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 88.35)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 88.35)"
            />
            <g transform="matrix(1 0 0 1 -2114.9 83.85)">
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
            </g>
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 90.65)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 90.65)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 90.65)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 48.75)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 48.75)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 48.75)"
            />
            <g transform="matrix(1 0 0 1 -2114.9 44.25)">
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
            </g>
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 51.05)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 51.05)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 51.05)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 8.5)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 8.5)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 8.5)"
            />
            <g transform="matrix(1 0 0 1 -2114.9 4)">
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
            </g>
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 10.8)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 10.8)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 10.8)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -30.45)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -30.45)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -30.45)"
            />
            <g transform="matrix(1 0 0 1 -2114.9 -34.95)">
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
            </g>
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -28.15)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -28.15)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -28.15)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -70.05)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -70.05)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -70.05)"
            />
            <g transform="matrix(1 0 0 1 -2114.9 -74.55)">
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
            </g>
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -67.75)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -67.75)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -67.75)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -109.65)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -109.65)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -109.65)"
            />
            <g transform="matrix(1 0 0 1 -2114.9 -114.15)">
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
            </g>
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -107.35)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -107.35)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -107.35)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -149.25)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -149.25)"
            />
            <path
                d="m2392.4 184.6 7.79 4.5v9l-7.79 4.5-7.79-4.5v-9l7.79-4.5Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2110.4 -149.25)"
            />
            <g transform="matrix(1 0 0 1 -2114.9 -153.75)">
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
                <circle cx={2396.9} cy={198.1} r={4.5} />
            </g>
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -146.95)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -146.95)"
            />
            <path
                d="M2396.9 182.25c0-1.242-1.01-2.25-2.25-2.25a2.252 2.252 0 0 0-2.25 2.25v9.1c0 1.242 1.01 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-9.1Z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(1 0 0 1 -2112.65 -146.95)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1783.67 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1783.67 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1774.67 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1774.67 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1765.67 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1765.67 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1792.67 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1792.67 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1783.67 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1783.67 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1774.67 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1774.67 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1765.67 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1765.67 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1792.67 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1792.67 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1783.67 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1783.67 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1774.67 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1774.67 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1765.67 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1765.67 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1792.67 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1792.67 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1783.67 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1783.67 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1774.67 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1774.67 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1765.67 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1765.67 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1792.67 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1792.67 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1744.069 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1744.069 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1735.069 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1735.069 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1726.069 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1726.069 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1753.069 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1753.069 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1744.069 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1744.069 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1735.069 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1735.069 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1726.069 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1726.069 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1753.069 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1753.069 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1744.069 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1744.069 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1735.069 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1735.069 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1726.069 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1726.069 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1753.069 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1753.069 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1744.069 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1744.069 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1735.069 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1735.069 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1726.069 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1726.069 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1753.069 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1753.069 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1704.47 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1704.47 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1695.47 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1695.47 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1686.47 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1686.47 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1713.47 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1713.47 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1704.47 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1704.47 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1695.47 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1695.47 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1686.47 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1686.47 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1713.47 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1713.47 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1704.47 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1704.47 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1695.47 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1695.47 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1686.47 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1686.47 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1713.47 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1713.47 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1704.47 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1704.47 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1695.47 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1695.47 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1686.47 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1686.47 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1713.47 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1713.47 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1664.868 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1664.868 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1655.868 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1655.868 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1646.868 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1646.868 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1673.868 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1673.868 -16.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1664.868 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1664.868 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1655.868 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1655.868 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1646.868 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1646.868 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1673.868 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1673.868 -3.463) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1664.868 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1664.868 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1655.868 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1655.868 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1646.868 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1646.868 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1673.868 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1673.868 8.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1664.868 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1664.868 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1655.868 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1655.868 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1646.868 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1646.868 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1673.868 21.537) scale(.7874)"
            />
            <circle
                cx={2370.8}
                cy={301.6}
                r={1.8}
                style={{
                    fill: "#fff100",
                }}
                transform="translate(-1673.868 21.537) scale(.7874)"
            />
            <path
                d="M1615.6 286.016c0-3.872-2.87-7.016-6.4-7.016h-12.6"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "1.04px",
                    strokeLinecap: "square",
                    strokeDasharray: "2.09,4.18,2.09,0",
                }}
                transform="matrix(1 0 0 .9125 -1384 -48.488)"
            />
            <path
                d="M1464.4 279h-11.6c-3.53 0-6.4 3.144-6.4 7.016v57.968c0 3.872 2.87 7.016 6.4 7.016h156.4c3.53 0 6.4-3.144 6.4-7.016v-57.968"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "1.04px",
                    strokeLinecap: "square",
                    strokeDasharray: "2.09,4.18,2.09,0",
                }}
                transform="matrix(1 0 0 .9125 -1384 -48.488)"
            />
            <path
                d="M1478.8 278.1h24.6"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: 1,
                    strokeLinecap: "square",
                    strokeDasharray: "2,4,2,0",
                }}
                transform="matrix(1 0 0 1 -1384 -72)"
            />
            <path
                d="M1478.8 278.1h24.6"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: 1,
                    strokeLinecap: "square",
                    strokeDasharray: "2,4,2,0",
                }}
                transform="matrix(1 0 0 1 -1304.2 -72)"
            />
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#f2c84b",
                }}
                transform="matrix(1 0 0 1 -1259.146 83.9)"
            >
                {"D"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#f2c84b",
                }}
                transform="matrix(1 0 0 1 -1298.468 83.839)"
            >
                {"C"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#f2c84b",
                }}
                transform="matrix(1 0 0 1 -1338.518 83.839)"
            >
                {"B"}
            </text>
            <text
                x={1464}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#f2c84b",
                }}
                transform="matrix(1 0 0 1 -1377.942 83.839)"
            >
                {"A"}
            </text>
            <g transform="matrix(.1559 0 0 .1559 -99.49 29.48)">
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.1559 0 0 .1559 -59.89 29.48)">
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.1559 0 0 .1559 -20.29 29.48)">
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.1559 0 0 .1559 19.31 29.48)">
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.1559 0 0 .1559 -99.49 69.08)">
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.1559 0 0 .1559 -59.89 69.08)">
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.1559 0 0 .1559 -20.29 69.08)">
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <g transform="matrix(.1559 0 0 .1559 19.31 69.08)">
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
                <circle
                    cx={1200}
                    cy={880}
                    r={30}
                    style={{
                        fill: "#d9d9d9",
                    }}
                />
            </g>
            <path
                d="M1630 365.4h1.8l-1.8-1.8-1.8 1.8h1.8v3.6h-158.4"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1384 -72)"
            />
            <path
                d="M1630 365.4h1.8l-1.8-1.8-1.8 1.8h1.8v3.6h-158.4"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 -1 -1384 671.4)"
            />
            <path
                d="M1631 360h-2v-1.8h-2v-1.8h2v-1.8h2v1.8h2v1.8h-2v1.8Z"
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".84px",
                }}
                transform="matrix(1.2 0 0 1.18519 -1709.999 -138.667)"
            />
            <path
                d="M1624.6 383.4h10.8v1.8h-10.8z"
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: "1.18px",
                }}
                transform="matrix(.66666 0 0 1 -840.667 -70.2)"
            />
            <path
                d="M2407 382.555c0-.306-.47-.555-1.05-.555h-44.9c-.58 0-1.05.249-1.05.555v16.89c0 .306.47.555 1.05.555h44.9c.58 0 1.05-.249 1.05-.555v-16.89Z"
                style={{
                    fill: "#2a2a2a",
                }}
                transform="matrix(.70213 0 0 1.33333 -1585.928 -221.541)"
            />
            <path
                d="M2408.42 382.555c0-.72-1.11-1.305-2.47-1.305h-44.9c-1.36 0-2.47.585-2.47 1.305v16.89c0 .72 1.11 1.305 2.47 1.305h44.9c1.36 0 2.47-.585 2.47-1.305v-16.89Zm-1.42 0c0-.306-.47-.555-1.05-.555h-44.9c-.58 0-1.05.249-1.05.555v16.89c0 .306.47.555 1.05.555h44.9c.58 0 1.05-.249 1.05-.555v-16.89Z"
                style={{
                    fill: "#f2c84b",
                }}
                transform="matrix(.70213 0 0 1.33333 -1585.928 -221.541)"
            />
            <path d="M102.006 297.541c0-1.242-1.009-2.25-2.247-2.25H75.456a2.251 2.251 0 0 0-2.247 2.25v4.5c0 1.242 1.01 2.25 2.247 2.25H99.76a2.251 2.251 0 0 0 2.247-2.25v-4.5Z" />
            <path d="M102.006 297.541c0-1.242-1.009-2.25-2.247-2.25H75.456a2.251 2.251 0 0 0-2.247 2.25v4.5c0 1.242 1.01 2.25 2.247 2.25H99.76a2.251 2.251 0 0 0 2.247-2.25v-4.5Z" />
            <path
                d="M2407 382.555c0-.306-.47-.555-1.05-.555h-44.9c-.58 0-1.05.249-1.05.555v16.89c0 .306.47.555 1.05.555h44.9c.58 0 1.05-.249 1.05-.555v-16.89Z"
                style={{
                    fill: "#2a2a2a",
                }}
                transform="matrix(.70213 0 0 1.33333 -1546.326 -221.541)"
            />
            <path
                d="M2408.42 382.555c0-.72-1.11-1.305-2.47-1.305h-44.9c-1.36 0-2.47.585-2.47 1.305v16.89c0 .72 1.11 1.305 2.47 1.305h44.9c1.36 0 2.47-.585 2.47-1.305v-16.89Zm-1.42 0c0-.306-.47-.555-1.05-.555h-44.9c-.58 0-1.05.249-1.05.555v16.89c0 .306.47.555 1.05.555h44.9c.58 0 1.05-.249 1.05-.555v-16.89Z"
                style={{
                    fill: "#f2c84b",
                }}
                transform="matrix(.70213 0 0 1.33333 -1546.326 -221.541)"
            />
            <path d="M141.608 297.541c0-1.242-1.01-2.25-2.247-2.25h-24.303a2.251 2.251 0 0 0-2.247 2.25v4.5c0 1.242 1.009 2.25 2.247 2.25h24.303a2.251 2.251 0 0 0 2.247-2.25v-4.5Z" />
            <path d="M141.608 297.541c0-1.242-1.01-2.25-2.247-2.25h-24.303a2.251 2.251 0 0 0-2.247 2.25v4.5c0 1.242 1.009 2.25 2.247 2.25h24.303a2.251 2.251 0 0 0 2.247-2.25v-4.5Z" />
            <path
                d="M2407 382.555c0-.306-.47-.555-1.05-.555h-44.9c-.58 0-1.05.249-1.05.555v16.89c0 .306.47.555 1.05.555h44.9c.58 0 1.05-.249 1.05-.555v-16.89Z"
                style={{
                    fill: "#2a2a2a",
                }}
                transform="matrix(.70213 0 0 1.33333 -1506.727 -221.541)"
            />
            <path
                d="M2408.42 382.555c0-.72-1.11-1.305-2.47-1.305h-44.9c-1.36 0-2.47.585-2.47 1.305v16.89c0 .72 1.11 1.305 2.47 1.305h44.9c1.36 0 2.47-.585 2.47-1.305v-16.89Zm-1.42 0c0-.306-.47-.555-1.05-.555h-44.9c-.58 0-1.05.249-1.05.555v16.89c0 .306.47.555 1.05.555h44.9c.58 0 1.05-.249 1.05-.555v-16.89Z"
                style={{
                    fill: "#f2c84b",
                }}
                transform="matrix(.70213 0 0 1.33333 -1506.727 -221.541)"
            />
            <path d="M181.207 297.541c0-1.242-1.01-2.25-2.248-2.25h-24.303a2.251 2.251 0 0 0-2.247 2.25v4.5c0 1.242 1.01 2.25 2.247 2.25h24.303a2.251 2.251 0 0 0 2.248-2.25v-4.5Z" />
            <path d="M181.207 297.541c0-1.242-1.01-2.25-2.248-2.25h-24.303a2.251 2.251 0 0 0-2.247 2.25v4.5c0 1.242 1.01 2.25 2.247 2.25h24.303a2.251 2.251 0 0 0 2.248-2.25v-4.5Z" />
            <path
                d="M2407 382.555c0-.306-.47-.555-1.05-.555h-44.9c-.58 0-1.05.249-1.05.555v16.89c0 .306.47.555 1.05.555h44.9c.58 0 1.05-.249 1.05-.555v-16.89Z"
                style={{
                    fill: "#2a2a2a",
                }}
                transform="matrix(.70213 0 0 1.33333 -1467.126 -221.541)"
            />
            <path
                d="M2408.42 382.555c0-.72-1.11-1.305-2.47-1.305h-44.9c-1.36 0-2.47.585-2.47 1.305v16.89c0 .72 1.11 1.305 2.47 1.305h44.9c1.36 0 2.47-.585 2.47-1.305v-16.89Zm-1.42 0c0-.306-.47-.555-1.05-.555h-44.9c-.58 0-1.05.249-1.05.555v16.89c0 .306.47.555 1.05.555h44.9c.58 0 1.05-.249 1.05-.555v-16.89Z"
                style={{
                    fill: "#f2c84b",
                }}
                transform="matrix(.70213 0 0 1.33333 -1467.126 -221.541)"
            />
            <path d="M220.808 297.541c0-1.242-1.009-2.25-2.247-2.25h-24.303a2.251 2.251 0 0 0-2.247 2.25v4.5c0 1.242 1.01 2.25 2.247 2.25h24.303a2.251 2.251 0 0 0 2.247-2.25v-4.5Z" />
            <path d="M220.808 297.541c0-1.242-1.009-2.25-2.247-2.25h-24.303a2.251 2.251 0 0 0-2.247 2.25v4.5c0 1.242 1.01 2.25 2.247 2.25h24.303a2.251 2.251 0 0 0 2.247-2.25v-4.5Z" />
            <g transform="matrix(1 0 0 1 -1389.898 -77.9)">
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1350.298 -77.9)">
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1310.698 -77.9)">
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1271.098 -77.9)">
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1477.5}
                    cy={409.1}
                    r={5.9}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <path
                d="M1702 331.2v94.5c0 3.477 2.82 6.3 6.3 6.3h16.2c3.48 0 6.3-2.823 6.3-6.3V122.4"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1369.6 -79.2)"
            />
            <g transform="matrix(.97746 0 0 .97746 -1398.235 -277.799)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2352.743 -462.984)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1398.235 -238.199)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2352.743 -423.384)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1398.235 -40.2)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2352.743 -225.385)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1398.235 -.6)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2352.743 -185.785)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1398.235 -79.8)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2352.743 -264.985)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1398.235 -119.4)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2352.743 -304.584)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1398.235 -158.999)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2352.743 -344.184)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1398.235 -198.6)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2352.743 -383.784)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <path d="M335.997 151.2c0-1.987-1.612-3.6-3.6-3.6a3.601 3.601 0 0 0-3.6 3.6v61.2c0 1.986 1.613 3.6 3.6 3.6 1.988 0 3.6-1.614 3.6-3.6v-61.2Z" />
            <path d="M335.997 151.2c0-1.987-1.612-3.6-3.6-3.6a3.601 3.601 0 0 0-3.6 3.6v61.2c0 1.986 1.613 3.6 3.6 3.6 1.988 0 3.6-1.614 3.6-3.6v-61.2Z" />
            <path
                d="M1732 231.042c0-.023-.13-.042-.3-.042h-.6c-.17 0-.3.019-.3.042v16.916c0 .023.13.042.3.042h.6c.17 0 .3-.019.3-.042v-16.916Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.47244 0 0 3.35293 -485.585 -621.229)"
            />
            <path
                d="M1728 248.4h6v14.4h-6z"
                style={{
                    fill: "#2a2a2a",
                }}
                transform="matrix(1 0 0 1 -1398.6 -75.6)"
            />
            <path
                d="M1728 254.1h6v3.9h-6z"
                style={{
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1398.6 -76.05)"
            />
            <g transform="matrix(1 0 0 1 -1405.1 -42.7)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2622.717 -289.928)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1405.1 -71.5)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2622.717 -318.727)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1405.1 -100.3)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2622.717 -347.528)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1405.1 -13.9)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2622.717 -261.128)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -529.4 56.373)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -529.4 68.372)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1389.4 -69.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -529.4 62.373)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1389.4 -63.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -529.4 74.373)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -529.4 86.373)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1389.4 -51.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -529.4 80.372)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1389.4 -45.9)"
            />
            <path
                d="M1721.8 136.8h3.6l-1.8 1.8-1.8-1.8Zm1.8 0V135c-.04-1.245.62-1.782 1.8-1.8h3.6c1.22.024 1.79-.609 1.8-1.8v-1.8h-1.8l1.8-1.8 1.8 1.8h-1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1394.8 -46.8)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1379.5 -81)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1383.1 -81)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1386.7 -81)"
            />
            <path
                d="M1729 154.8c1.22.019 1.86-.541 1.8-1.8v-1.8c-.02-1.175-.61-1.791-1.8-1.8h-7.2v1.8l-1.8-1.8 1.8-1.8v1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(-1 0 0 -1 2055.998 196.2)"
            />
            <path
                d="M1729 154.8c1.22.019 1.86-.541 1.8-1.8v-1.8c-.02-1.175-.61-1.791-1.8-1.8h-7.2v1.8l-1.8-1.8 1.8-1.8v1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1391.203 -108)"
            />
            <path
                d="M1707.4 126c2.25-.151 3.42-1.379 3.6-3.6.07-2.328 1.31-3.493 3.6-3.6h0v3.6h3.6v3.6h3.6"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1382.199 -97.2)"
            />
            <path
                d="M1680.4 190.8s-3.68.221-3.6-3.6c.08-3.821 0-37.8 0-37.8s-.07-3.86 3.6-3.612"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".52px",
                }}
                transform="matrix(1 0 0 .91977 -1355.198 -56.692)"
            />
            <path
                d="M1694.8 131.4a3.6 3.6 0 0 0-3.6-3.6h-7.2a3.6 3.6 0 0 0-3.6 3.6v32.4a3.6 3.6 0 0 0 3.6 3.6h7.2a3.6 3.6 0 0 0 3.6-3.6v-32.4Z"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1355.198 -72)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -72.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -99.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -103.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -126.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -130.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -134)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -153.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -157.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -161)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1354.2 -164.6)"
            />
            <path
                d="M1702 331.2v94.5c0 3.477 2.82 6.3 6.3 6.3h16.2c3.48 0 6.3-2.823 6.3-6.3V122.4"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1297.6 -79.2)"
            />
            <g transform="matrix(.97746 0 0 .97746 -1326.235 -277.799)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2280.743 -462.984)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1326.235 -238.199)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2280.743 -423.384)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1326.235 -40.2)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2280.743 -225.385)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1326.235 -.6)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2280.743 -185.785)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1326.235 -79.8)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2280.743 -264.985)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1326.235 -119.4)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2280.743 -304.584)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1326.235 -158.999)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2280.743 -344.184)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1326.235 -198.6)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2280.743 -383.784)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <path d="M407.997 151.2c0-1.987-1.613-3.6-3.6-3.6a3.601 3.601 0 0 0-3.6 3.6v61.2c0 1.986 1.613 3.6 3.6 3.6s3.6-1.614 3.6-3.6v-61.2Z" />
            <path d="M407.997 151.2c0-1.987-1.613-3.6-3.6-3.6a3.601 3.601 0 0 0-3.6 3.6v61.2c0 1.986 1.613 3.6 3.6 3.6s3.6-1.614 3.6-3.6v-61.2Z" />
            <path
                d="M1732 231.042c0-.023-.13-.042-.3-.042h-.6c-.17 0-.3.019-.3.042v16.916c0 .023.13.042.3.042h.6c.17 0 .3-.019.3-.042v-16.916Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.47244 0 0 3.35293 -413.585 -621.229)"
            />
            <path
                d="M1728 248.4h6v14.4h-6z"
                style={{
                    fill: "#2a2a2a",
                }}
                transform="matrix(1 0 0 1 -1326.6 -75.6)"
            />
            <path
                d="M1728 254.1h6v3.9h-6z"
                style={{
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1326.6 -76.05)"
            />
            <g transform="matrix(1 0 0 1 -1333.1 -42.7)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2550.717 -289.928)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1333.1 -71.5)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2550.717 -318.727)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1333.1 -100.3)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2550.717 -347.528)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1333.1 -13.9)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2550.717 -261.128)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -457.4 56.373)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -457.4 68.372)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1317.4 -69.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -457.4 62.373)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1317.4 -63.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -457.4 74.373)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -457.4 86.373)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1317.4 -51.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -457.4 80.372)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1317.4 -45.9)"
            />
            <path
                d="M1721.8 136.8h3.6l-1.8 1.8-1.8-1.8Zm1.8 0V135c-.04-1.245.62-1.782 1.8-1.8h3.6c1.22.024 1.79-.609 1.8-1.8v-1.8h-1.8l1.8-1.8 1.8 1.8h-1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1322.8 -46.8)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1307.501 -81)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1311.1 -81)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1314.7 -81)"
            />
            <path
                d="M1729 154.8c1.22.019 1.86-.541 1.8-1.8v-1.8c-.02-1.175-.61-1.791-1.8-1.8h-7.2v1.8l-1.8-1.8 1.8-1.8v1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(-1 0 0 -1 2127.998 196.2)"
            />
            <path
                d="M1729 154.8c1.22.019 1.86-.541 1.8-1.8v-1.8c-.02-1.175-.61-1.791-1.8-1.8h-7.2v1.8l-1.8-1.8 1.8-1.8v1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1319.203 -108)"
            />
            <path
                d="M1707.4 126c2.25-.151 3.42-1.379 3.6-3.6.07-2.328 1.31-3.493 3.6-3.6h0v3.6h3.6v3.6h3.6"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1310.199 -97.2)"
            />
            <path
                d="M1680.4 190.8s-3.68.221-3.6-3.6c.08-3.821 0-37.8 0-37.8s-.07-3.86 3.6-3.612"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".52px",
                }}
                transform="matrix(1 0 0 .91977 -1283.198 -56.692)"
            />
            <path
                d="M1694.8 131.4a3.6 3.6 0 0 0-3.6-3.6h-7.2a3.6 3.6 0 0 0-3.6 3.6v32.4a3.6 3.6 0 0 0 3.6 3.6h7.2a3.6 3.6 0 0 0 3.6-3.6v-32.4Z"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1283.198 -72)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -72.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -99.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -103.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -126.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -130.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -134)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -153.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -157.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -161)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1282.2 -164.6)"
            />
            <path
                d="M1702 331.2v94.5c0 3.477 2.82 6.3 6.3 6.3h16.2c3.48 0 6.3-2.823 6.3-6.3V122.4"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1225.6 -79.2)"
            />
            <g transform="matrix(.97746 0 0 .97746 -1254.235 -277.799)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2208.743 -462.984)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1254.235 -238.199)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2208.743 -423.384)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1254.235 -40.2)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2208.743 -225.385)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1254.235 -.6)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2208.743 -185.785)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1254.235 -79.8)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2208.743 -264.985)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1254.235 -119.4)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2208.743 -304.584)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1254.235 -158.999)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2208.743 -344.184)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1254.235 -198.6)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2208.743 -383.784)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <path d="M479.997 151.2c0-1.987-1.612-3.6-3.6-3.6a3.601 3.601 0 0 0-3.6 3.6v61.2c0 1.986 1.613 3.6 3.6 3.6 1.988 0 3.6-1.614 3.6-3.6v-61.2Z" />
            <path d="M479.997 151.2c0-1.987-1.612-3.6-3.6-3.6a3.601 3.601 0 0 0-3.6 3.6v61.2c0 1.986 1.613 3.6 3.6 3.6 1.988 0 3.6-1.614 3.6-3.6v-61.2Z" />
            <path
                d="M1732 231.042c0-.023-.13-.042-.3-.042h-.6c-.17 0-.3.019-.3.042v16.916c0 .023.13.042.3.042h.6c.17 0 .3-.019.3-.042v-16.916Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.47244 0 0 3.35293 -341.585 -621.229)"
            />
            <path
                d="M1728 248.4h6v14.4h-6z"
                style={{
                    fill: "#2a2a2a",
                }}
                transform="matrix(1 0 0 1 -1254.6 -75.6)"
            />
            <path
                d="M1728 254.1h6v3.9h-6z"
                style={{
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1254.6 -76.05)"
            />
            <g transform="matrix(1 0 0 1 -1261.1 -42.7)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2478.717 -289.928)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1261.1 -71.5)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2478.717 -318.727)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1261.1 -100.3)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2478.717 -347.528)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1261.1 -13.9)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2478.717 -261.128)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -385.4 56.373)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -385.4 68.372)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1245.4 -69.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -385.4 62.373)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1245.4 -63.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -385.4 74.373)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -385.4 86.373)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1245.4 -51.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -385.4 80.372)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1245.4 -45.9)"
            />
            <path
                d="M1721.8 136.8h3.6l-1.8 1.8-1.8-1.8Zm1.8 0V135c-.04-1.245.62-1.782 1.8-1.8h3.6c1.22.024 1.79-.609 1.8-1.8v-1.8h-1.8l1.8-1.8 1.8 1.8h-1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1250.8 -46.8)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1235.501 -81)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1239.1 -81)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1242.7 -81)"
            />
            <path
                d="M1729 154.8c1.22.019 1.86-.541 1.8-1.8v-1.8c-.02-1.175-.61-1.791-1.8-1.8h-7.2v1.8l-1.8-1.8 1.8-1.8v1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(-1 0 0 -1 2199.998 196.2)"
            />
            <path
                d="M1729 154.8c1.22.019 1.86-.541 1.8-1.8v-1.8c-.02-1.175-.61-1.791-1.8-1.8h-7.2v1.8l-1.8-1.8 1.8-1.8v1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1247.203 -108)"
            />
            <path
                d="M1707.4 126c2.25-.151 3.42-1.379 3.6-3.6.07-2.328 1.31-3.493 3.6-3.6h0v3.6h3.6v3.6h3.6"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1238.199 -97.2)"
            />
            <path
                d="M1680.4 190.8s-3.68.221-3.6-3.6c.08-3.821 0-37.8 0-37.8s-.07-3.86 3.6-3.612"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".52px",
                }}
                transform="matrix(1 0 0 .91977 -1211.198 -56.692)"
            />
            <path
                d="M1694.8 131.4a3.6 3.6 0 0 0-3.6-3.6h-7.2a3.6 3.6 0 0 0-3.6 3.6v32.4a3.6 3.6 0 0 0 3.6 3.6h7.2a3.6 3.6 0 0 0 3.6-3.6v-32.4Z"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1211.198 -72)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -72.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -99.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -103.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -126.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -130.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -134)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -153.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -157.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -161)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1210.2 -164.6)"
            />
            <path
                d="M1702 331.2v94.5c0 3.477 2.82 6.3 6.3 6.3h16.2c3.48 0 6.3-2.823 6.3-6.3V122.4"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1153.6 -79.2)"
            />
            <g transform="matrix(.97746 0 0 .97746 -1182.235 -277.799)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2136.743 -462.984)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1182.235 -238.199)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2136.743 -423.384)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1182.235 -40.2)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2136.743 -225.385)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1182.235 -.6)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2136.743 -185.785)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1182.235 -79.8)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2136.743 -264.985)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1182.235 -119.4)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2136.743 -304.584)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1182.235 -158.999)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2136.743 -344.184)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(.97746 0 0 .97746 -1182.235 -198.6)">
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1800}
                    cy={328.4}
                    r={11.6}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.51507 0 0 1.51507 -2136.743 -383.784)">
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1791.3}
                    cy={334.1}
                    r={2.9}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <path d="M551.997 151.2c0-1.987-1.612-3.6-3.6-3.6a3.601 3.601 0 0 0-3.6 3.6v61.2c0 1.986 1.613 3.6 3.6 3.6 1.988 0 3.6-1.614 3.6-3.6v-61.2Z" />
            <path d="M551.997 151.2c0-1.987-1.612-3.6-3.6-3.6a3.601 3.601 0 0 0-3.6 3.6v61.2c0 1.986 1.613 3.6 3.6 3.6 1.988 0 3.6-1.614 3.6-3.6v-61.2Z" />
            <path
                d="M1732 231.042c0-.023-.13-.042-.3-.042h-.6c-.17 0-.3.019-.3.042v16.916c0 .023.13.042.3.042h.6c.17 0 .3-.019.3-.042v-16.916Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.47244 0 0 3.35293 -269.585 -621.229)"
            />
            <path
                d="M1728 248.4h6v14.4h-6z"
                style={{
                    fill: "#2a2a2a",
                }}
                transform="matrix(1 0 0 1 -1182.6 -75.6)"
            />
            <path
                d="M1728 254.1h6v3.9h-6z"
                style={{
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1182.6 -76.05)"
            />
            <g transform="matrix(1 0 0 1 -1189.1 -42.7)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2406.717 -289.928)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1189.1 -71.5)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2406.717 -318.727)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1189.1 -100.3)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2406.717 -347.528)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <g transform="matrix(1 0 0 1 -1189.1 -13.9)">
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.3}
                    r={6.7}
                    style={{
                        fill: "#f2c84b",
                    }}
                />
            </g>
            <g transform="matrix(1.70078 0 0 1.70079 -2406.717 -261.128)">
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
                <circle
                    cx={1737.5}
                    cy={352.5}
                    r={2.5}
                    style={{
                        fill: "#999",
                    }}
                />
            </g>
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -313.4 56.373)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -313.4 68.372)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1173.4 -69.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -313.4 62.373)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1173.4 -63.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -313.4 74.373)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -313.4 86.373)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1173.4 -51.9)"
            />
            <path
                d="M1730.8 173.35c0-.304-.13-.55-.3-.55h-13.8c-.17 0-.3.246-.3.55v1.1c0 .304.13.55.3.55h13.8c.17 0 .3-.246.3-.55v-1.1Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(.5 0 0 .27273 -313.4 80.372)"
            />
            <path
                d="M1727.2 176.55c0-.083-.07-.15-.15-.15h-10.5c-.08 0-.15.067-.15.15v.3c0 .083.07.15.15.15h10.5c.08 0 .15-.067.15-.15v-.3Z"
                style={{
                    fill: "#999",
                }}
                transform="matrix(1 0 0 1 -1173.4 -45.9)"
            />
            <path
                d="M1721.8 136.8h3.6l-1.8 1.8-1.8-1.8Zm1.8 0V135c-.04-1.245.62-1.782 1.8-1.8h3.6c1.22.024 1.79-.609 1.8-1.8v-1.8h-1.8l1.8-1.8 1.8 1.8h-1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1178.8 -46.8)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1163.5 -81)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1167.1 -81)"
            />
            <path
                d="M1714.6 142.2h1.8V153h-1.8z"
                style={{
                    fill: "#999",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1170.7 -81)"
            />
            <path
                d="M1729 154.8c1.22.019 1.86-.541 1.8-1.8v-1.8c-.02-1.175-.61-1.791-1.8-1.8h-7.2v1.8l-1.8-1.8 1.8-1.8v1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(-1 0 0 -1 2271.998 196.2)"
            />
            <path
                d="M1729 154.8c1.22.019 1.86-.541 1.8-1.8v-1.8c-.02-1.175-.61-1.791-1.8-1.8h-7.2v1.8l-1.8-1.8 1.8-1.8v1.8"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1175.203 -108)"
            />
            <path
                d="M1707.4 126c2.25-.151 3.42-1.379 3.6-3.6.07-2.328 1.31-3.493 3.6-3.6h0v3.6h3.6v3.6h3.6"
                style={{
                    fill: "none",
                    stroke: "#999",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1166.199 -97.2)"
            />
            <path
                d="M1680.4 190.8s-3.68.221-3.6-3.6c.08-3.821 0-37.8 0-37.8s-.07-3.86 3.6-3.612"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".52px",
                }}
                transform="matrix(1 0 0 .91977 -1139.198 -56.692)"
            />
            <path
                d="M1694.8 131.4a3.6 3.6 0 0 0-3.6-3.6h-7.2a3.6 3.6 0 0 0-3.6 3.6v32.4a3.6 3.6 0 0 0 3.6 3.6h7.2a3.6 3.6 0 0 0 3.6-3.6v-32.4Z"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1139.198 -72)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -72.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -99.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -103.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -126.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -130.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -134)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -153.8)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -157.4)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -161)"
            />
            <circle
                cx={1674}
                cy={411.2}
                r={0.8}
                style={{
                    fill: "#f2c84b",
                    stroke: "#f2c84b",
                    strokeWidth: ".5px",
                }}
                transform="matrix(1 0 0 1 -1138.2 -164.6)"
            />
            <text
                x={1467}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1444.6 66.2)"
            >
                {"RECORD"}
            </text>
            <g id="record-btn" transform="matrix(1.6198 0 0 1.6198 -2274 -248.69)">
                <circle
                    cx={1422.4}
                    cy={339.6}
                    r={8.4}
                    style={{
                        fill: "#b4e1ec",
                    }}
                />
                <circle
                    cx={1422.4}
                    cy={339.6}
                    r={8.4}
                    style={{
                        fill: "#b4e1ec",
                    }}
                />
                <circle
                    cx={1422.4}
                    cy={339.6}
                    r={8.4}
                    style={{
                        fill: "#b4e1ec",
                    }}
                />
            </g>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1443.636 12.74)"
            >
                {"FREEZE"}
            </text>
            <path
                id="freeze-btn"
                d="M1405.5 309.6h21.104v21.104H1405.5z"
                style={{
                    fill: "#b4e1ec",
                }}
                transform="matrix(1 0 0 1 -1386.047 -68.4)"
            />
            <path
                d="M1405.5 309.6h21.104v21.104H1405.5z"
                style={{
                    fill: "#b4e1ec",
                }}
                transform="matrix(1 0 0 1 -1386.047 -68.4)"
            />
            <path
                d="M1405.5 309.6h21.104v21.104H1405.5z"
                style={{
                    fill: "#b4e1ec",
                }}
                transform="matrix(1 0 0 1 -1386.047 -68.4)"
            />
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1442.184 -34.1)"
            >
                {"RESET"}
            </text>
            <g id ="reset-btn" transform="matrix(1.01237 0 0 1.01237 -1410 -136.306)">
                <circle
                    cx={1422.4}
                    cy={339.6}
                    r={8.4}
                    style={{
                        fill: "#b4e1ec",
                    }}
                />
                <circle
                    cx={1422.4}
                    cy={339.6}
                    r={8.4}
                    style={{
                        fill: "#b4e1ec",
                    }}
                />
                <circle
                    cx={1422.4}
                    cy={339.6}
                    r={8.4}
                    style={{
                        fill: "#b4e1ec",
                    }}
                />
            </g>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1442.184 -73.7)"
            >
                {"CLOCK"}
            </text>
            <g transform="matrix(.45096 0 0 .45097 -360.09 -251.12)">
                <circle cx={865} cy={930} r={22} />
                <circle cx={865} cy={930} r={22} />
            </g>
            <circle
                cx={865}
                cy={930}
                r={22}
                transform="matrix(.45096 0 0 .45097 -360.09 -251.12)"
            />
            <path
                d="M860 779h7v33h-7z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(.28346 0 0 .28346 -214.632 -62.461)"
            />
            <g transform="matrix(.45096 0 0 .45097 -360.09 -251.12)">
                <circle cx={865} cy={930} r={22} />
                <circle cx={865} cy={930} r={22} />
            </g>
            <circle
                id="tempo-pot"
                cx={865}
                cy={930}
                r={22}
                transform="matrix(.45096 0 0 .45097 -360.09 -251.12)"
            />
            <path
                d="M860 779h7v33h-7z"
                style={{
                    fill: "#d9d9d9",
                }}
                transform="matrix(.28346 0 0 .28346 -214.632 -62.461)"
            />
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1345.199 -103.085)"
            >
                {"RANGE"}
            </text>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1304.4 -103.083)"
            >
                {"MODE"}
            </text>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1268.598 -103.083)"
            >
                {"CV MODE"}
            </text>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1380.998 -103.149)"
            >
                {"AL"}
                <tspan x={1469.75} y={259.1}>
                    {"T"}
                </tspan>
            </text>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1343.198 -63.551)"
            >
                {"BEND"}
            </text>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1302.4 -63.549)"
            >
                {"SEQ."}
            </text>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1266.6 -63.549)"
            >
                {"LENGTH"}
            </text>
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1388.198 -63.549)"
            >
                {"QUANTIZE"}
            </text>
            <g transform="matrix(.85263 0 0 1.12903 -1158.806 -103.226)">
                <path
                    d="M1541 237.35c0-.855-.92-1.55-2.05-1.55h-14.9c-1.13 0-2.05.695-2.05 1.55v3.1c0 .855.92 1.55 2.05 1.55h14.9c1.13 0 2.05-.695 2.05-1.55v-3.1Z"
                    style={{
                        fill: "none",
                    }}
                />
                <clipPath id="a">
                    <path d="M1541 237.35c0-.855-.92-1.55-2.05-1.55h-14.9c-1.13 0-2.05.695-2.05 1.55v3.1c0 .855.92 1.55 2.05 1.55h14.9c1.13 0 2.05-.695 2.05-1.55v-3.1Z" />
                </clipPath>
                <g clipPath="url(#a)">
                    <text
                        x={1466}
                        y={259.1}
                        style={{
                            fontFamily: "&quot",
                            fontSize: 5,
                            fill: "#f2c84b",
                        }}
                        transform="matrix(1.17284 0 0 .88571 -193.473 10.996)"
                    >
                        {"BEND"}
                    </text>
                </g>
                <path
                    d="M1541 237.35c0-.855-.92-1.55-2.05-1.55h-14.9c-1.13 0-2.05.695-2.05 1.55v3.1c0 .855.92 1.55 2.05 1.55h14.9c1.13 0 2.05-.695 2.05-1.55v-3.1Z"
                    style={{
                        fill: "none",
                        stroke: "#f2c84b",
                        strokeWidth: ".5px",
                    }}
                />
            </g>
            <path
                d="M1546.7 246.6c3.7 0 6.7 3.002 6.7 6.7 0 3.698-3 6.7-6.7 6.7s-6.7-3.002-6.7-6.7c0-3.698 3-6.7 6.7-6.7Zm-6.7 6.7h-7.01"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".59px",
                }}
                transform="matrix(.85363 0 0 .85362 -1153.503 -49.723)"
            />
            <circle
                cx={1546.7}
                cy={253.3}
                r={6.7}
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "1.17px",
                }}
                transform="matrix(.85363 0 0 .85362 -1113.902 -49.723)"
            />
            <circle
                cx={1546.7}
                cy={253.3}
                r={6.7}
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: "1.17px",
                }}
                transform="matrix(.85363 0 0 .85362 -1232.704 -49.723)"
            />
            <path
                d="M1546.7 246.6c3.7 0 6.7 3.002 6.7 6.7 0 3.698-3 6.7-6.7 6.7s-6.7-3.002-6.7-6.7c0-3.698 3-6.7 6.7-6.7Zm-6.7 6.7h-7.01"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".59px",
                }}
                transform="matrix(-.85363 0 0 .85362 1447.5 -49.546)"
            />
            <g transform="matrix(.99474 0 0 1.12903 -1375.99 -63.626)">
                <path
                    d="M1541 237.35c0-.855-.79-1.55-1.76-1.55h-15.48c-.97 0-1.76.695-1.76 1.55v3.1c0 .855.79 1.55 1.76 1.55h15.48c.97 0 1.76-.695 1.76-1.55v-3.1Z"
                    style={{
                        fill: "none",
                    }}
                />
                <clipPath id="b">
                    <path d="M1541 237.35c0-.855-.79-1.55-1.76-1.55h-15.48c-.97 0-1.76.695-1.76 1.55v3.1c0 .855.79 1.55 1.76 1.55h15.48c.97 0 1.76-.695 1.76-1.55v-3.1Z" />
                </clipPath>
                <g clipPath="url(#b)">
                    <text
                        x={1466}
                        y={259.1}
                        style={{
                            fontFamily: "&quot",
                            fontSize: 5,
                            fill: "#f2c84b",
                        }}
                        transform="matrix(1.00529 0 0 .88571 51.595 10.996)"
                    >
                        {"CLEAR"}
                    </text>
                </g>
                <path
                    d="M1541 237.35c0-.855-.79-1.55-1.76-1.55h-15.48c-.97 0-1.76.695-1.76 1.55v3.1c0 .855.79 1.55 1.76 1.55h15.48c.97 0 1.76-.695 1.76-1.55v-3.1Z"
                    style={{
                        fill: "none",
                        stroke: "#f2c84b",
                        strokeWidth: ".47px",
                    }}
                />
            </g>
            <path
                d="M1546.7 246.6c3.7 0 6.7 3.002 6.7 6.7 0 3.698-3 6.7-6.7 6.7s-6.7-3.002-6.7-6.7c0-3.698 3-6.7 6.7-6.7Zm-6.7 6.7h-4.9"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".59px",
                }}
                transform="matrix(.85363 0 0 .85362 -1153.503 -10.124)"
            />
            <path
                d="M1546.7 246.6c3.7 0 6.7 3.002 6.7 6.7 0 3.698-3 6.7-6.7 6.7s-6.7-3.002-6.7-6.7c0-3.698 3-6.7 6.7-6.7Zm-6.7 6.7h-5.84"
                style={{
                    fill: "none",
                    stroke: "#f2c84b",
                    strokeWidth: ".59px",
                }}
                transform="matrix(-.85363 0 0 .85362 1447.5 -9.946)"
            />
            <text
                x={1466}
                y={259.1}
                style={{
                    fontFamily: "&quot",
                    fontSize: 5,
                    fill: "#fafafa",
                }}
                transform="matrix(1 0 0 1 -1326.788 95.54)"
            >
                {"SELECT"}
            </text>
            <path
                d="M1552.35 428h32.4c2.85 0 5.4-2.309 5.4-5.154"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1383.754 -75.15)"
            />
            <path
                d="M1582.95 428h1.8c2.85 0 5.4-2.309 5.4-5.154"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(1 0 0 1 -1423.353 -75.15)"
            />
            <path
                d="M1552.35 428h32.4c2.85 0 5.4-2.309 5.4-5.154"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(-1 0 0 1 1677.75 -75.15)"
            />
            <path
                d="M1582.95 428h1.8c2.85 0 5.4-2.309 5.4-5.154"
                style={{
                    fill: "none",
                    stroke: "#fafafa",
                    strokeWidth: 1,
                }}
                transform="matrix(-1 0 0 1 1717.352 -75.15)"
            />
        </svg>
    )
}
export default SvgComponent
