import React from 'react';

/**
 * README Image
 * Most important component here. Allows us to send components
 * as images back to Github. Everything we make will be inside
 * @param width
 * @param height 
 */
const ReadMeImg: React.StatelessComponent<{ width: String, height: String }> = ({ children, width, height }) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg">
    <foreignObject width={width} height={height}>
      <div {...{ xmlns: "http://www.w3.org/1999/xhtml" }}>
        <style>{`
            * {
              margin: 0;
              box-sizing: border-box;
            }
          `}</style>
        {children}
      </div>
    </foreignObject>
  </svg>
);

export default ReadMeImg;