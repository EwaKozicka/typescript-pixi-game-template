export default {
  pixi: {
    width: window.innerWidth,
    height: window.innerHeight,
    webgl: true, //false for 2dContext, true for autoDetectRenderer
    rendererOptions: {
      //pixi rendererOptions
      backgroundColor: 0xffffff
    }
  },
  
  game: {
    port:{ width: 800, height: 600 }
  }
};
