function createSvgDocument(text, textColor, shapeContent) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="30" fill="${textColor}">${text}</text>
        ${shapeContent}
      </svg>
    `;
  }
  
  module.exports = { createSvgDocument };