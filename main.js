module.exports = function template () {
  return `
  {
    "name": "{{name}}",
    "short_name": "{{short_name}}",
    "lang": "{{lang}}",
    "start_url": "{{{start_url}}}",
    "display": "{{display}}",
    "background_color": "{{background_color}}",
    "theme_color": "{{theme_color}}",
    "icons": [  
      {  
        "src": "/images/icon-192x192.png",  
        "sizes": "192x192",  
        "type": "image/png"  
      },  
      {  
        "src": "/images/icon-256x256.png",  
        "sizes": "256x256",  
        "type": "image/png"  
      },  
      {  
        "src": "/images/icon-384x384.png",  
        "sizes": "384x384",  
        "type": "image/png"  
      },  
      {  
        "src": "/images/icon-512x512.png",  
        "sizes": "512x512",  
        "type": "image/png"  
      }
    ]
  }
`
}
