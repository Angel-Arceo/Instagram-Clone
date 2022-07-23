import React from 'react';
import "external-svg-loader";

const path = process.env.PUBLIC_URL.concat("/assets/icons/");

const Icon = ({name, width, height, stroke, strokeWidth, color, fill}) => {
    return (
        <>
            <svg
            data-src={`${path}${name}.svg`}
            fill={fill}
            width={width}
            height={height}
            color={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
            ></svg>
        </>
    )
}

Icon.defaultProps = {
    fill: "none",
    width:"25",
    height:"25",
    color:"#262626",
    stroke:"#000",
    strokeWidth: "0",
}

export default Icon;