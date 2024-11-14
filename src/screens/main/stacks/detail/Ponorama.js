import React from 'react';
import { WebView } from 'react-native-webview';

const PanoramaViewer = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.4.0/build/pannellum.css">
      <style>
        body { margin: 0; }
        #panorama { width: 100vw; height: 100vh; }
      </style>
    </head>
    <body>
      <div id="panorama"></div>
      <script src="https://cdn.jsdelivr.net/npm/pannellum@2.4.0/build/pannellum.js"></script>
      <script>
        pannellum.viewer('panorama', {
          "type": "equirectangular",
          "panorama": "https://tse2.mm.bing.net/th?id=OIP.fvpWBNwMtY8a8uR6whk59QHaEt&pid=Api&P=0&h=220",
          "autoLoad": true,
          "autoRotate": 0, // Không tự động quay
        });
      </script>
    </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlContent }}
      style={{ flex: 1 }}
    />
  );
};

export default PanoramaViewer;
