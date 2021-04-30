const { browser } = require("protractor")

exports.config={
    frameWork:'jasmine',
    specs:['compliedJSFiles/Tests/SIGNUP.js'],
    capabilities:{
        browserName:'chrome'
        //directConnect:true
    },
   // onPrepare:function(){
     //   browser.manage().window().maximize();
   // }
   jasmineNodeOpts: {
    defaultTimeoutInterval : 2500000
  
  }
  
}
