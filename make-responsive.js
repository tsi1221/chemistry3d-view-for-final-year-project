const fs = require('fs');
const path = require('path');

// Recursive function to get all HTML files
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html') || file.endsWith('.htm')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to make HTML responsive
function makeResponsive(htmlContent) {
  // Check if viewport meta tag exists
  const hasViewportMeta = /<meta\s+name\s*=\s*["']viewport["']/i.test(htmlContent);
  
  // Add viewport meta tag if missing
  if (!hasViewportMeta) {
    const headEndIndex = htmlContent.indexOf('</head>');
    if (headEndIndex !== -1) {
      const viewportMeta = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">\n    ';
      htmlContent = htmlContent.slice(0, headEndIndex) + viewportMeta + htmlContent.slice(headEndIndex);
    }
  }
  
  // Check if responsive CSS already exists
  if (!htmlContent.includes('/* RESPONSIVE CSS - AUTO ADDED */')) {
    // Find the style tag or create one
    const styleTagMatch = htmlContent.match(/<\/style>/i);
    
    if (styleTagMatch) {
      // Add to existing style tag
      const responsiveCss = `
    /* RESPONSIVE CSS - AUTO ADDED */
    @media (max-width: 768px) {
      body {
        padding: 10px !important;
      }
      
      .dashboard, .container, main {
        padding: 0.8rem !important;
        border-radius: 1.5rem !important;
      }
      
      canvas {
        width: 100% !important;
        height: auto !important;
      }
      
      .control-panel {
        bottom: 10px !important;
        left: 10px !important;
        right: 10px !important;
        max-width: 100% !important;
        padding: 12px 16px !important;
        font-size: 0.9rem !important;
      }
      
      button {
        padding: 8px 12px !important;
        font-size: 0.85rem !important;
      }
      
      input[type="range"] {
        height: 8px !important;
      }
      
      input[type="range"]::-webkit-slider-thumb {
        width: 20px !important;
        height: 20px !important;
      }
      
      input[type="text"],
      input[type="number"],
      select,
      textarea {
        font-size: 16px !important;
        padding: 8px !important;
      }
      
      .hint, .info-box {
        font-size: 0.7rem !important;
        padding: 4px 8px !important;
      }
      
      h1, h2, h3 {
        font-size: calc(100% - 0.5rem) !important;
      }
    }
    
    @media (max-width: 480px) {
      body {
        padding: 5px !important;
      }
      
      .dashboard, .container, main {
        padding: 0.5rem !important;
        border-radius: 1rem !important;
      }
      
      .control-panel {
        bottom: 5px !important;
        left: 5px !important;
        right: 5px !important;
        padding: 8px 12px !important;
        border-radius: 20px !important;
      }
      
      button {
        padding: 6px 10px !important;
        font-size: 0.75rem !important;
      }
      
      input[type="text"],
      input[type="number"],
      select {
        font-size: 14px !important;
        padding: 6px !important;
      }
    }
    
    /* Touch device optimization */
    @supports (touch-action: manipulation) {
      * {
        -webkit-tap-highlight-color: transparent !important;
        touch-action: manipulation;
      }
    }`;
      
      htmlContent = htmlContent.replace(/<\/style>/i, responsiveCss + '\n    </style>');
    } else {
      // Add style tag before </head>
      const headEndIndex = htmlContent.indexOf('</head>');
      if (headEndIndex !== -1) {
        const styleTag = `<style>${responsiveCss}\n    </style>\n    `;
        htmlContent = htmlContent.slice(0, headEndIndex) + styleTag + htmlContent.slice(headEndIndex);
      }
    }
  }
  
  // Add resize listener for canvas if it has canvas elements and no existing resize handler
  if (htmlContent.includes('<canvas') && !htmlContent.includes('window.addEventListener(\'resize\'')) {
    const closeBodyIndex = htmlContent.indexOf('</body>');
    if (closeBodyIndex !== -1) {
      const resizeScript = `
<script>
// AUTO-ADDED: Responsive canvas resizing
window.addEventListener('resize', () => {
  const canvases = document.querySelectorAll('canvas');
  canvases.forEach(canvas => {
    if (canvas.parentElement) {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      if (canvas.getContext('2d')) {
        canvas.getContext('2d').scale(dpr, dpr);
      }
    }
  });
});
</script>`;
      htmlContent = htmlContent.slice(0, closeBodyIndex) + resizeScript + htmlContent.slice(closeBodyIndex);
    }
  }
  
  return htmlContent;
}

// Main execution
const publicDir = path.join(__dirname, 'public');
const htmlFiles = getAllHtmlFiles(publicDir);

console.log(`Found ${htmlFiles.length} HTML files to process...`);

let updated = 0;
let errors = 0;

htmlFiles.forEach((filePath, index) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = makeResponsive(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      updated++;
      console.log(`✓ Updated: ${path.relative(publicDir, filePath)}`);
    }
  } catch (error) {
    errors++;
    console.error(`✗ Error processing ${filePath}: ${error.message}`);
  }
  
  // Progress indicator
  if ((index + 1) % 20 === 0) {
    console.log(`  ...processed ${index + 1}/${htmlFiles.length}`);
  }
});

console.log(`\n✅ Complete!`);
console.log(`   Total files: ${htmlFiles.length}`);
console.log(`   Updated: ${updated}`);
console.log(`   Errors: ${errors}`);
