module.exports = {
  runtimeCompiler:true,
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'ThreeJS Demo'
    }
  },  
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/main.scss";`
      }
    }
  }
};
