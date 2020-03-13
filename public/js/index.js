const container = document.querySelector('.container');

fetch('/postDisplay').then(result=>result.json()).then(console.log).catch(console.log)

