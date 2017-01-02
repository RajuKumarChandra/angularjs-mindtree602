var app = angular.module("exampleApp",[]);

app.controller("topLevelCtrl",function(){

    this.reverseText = function(){
       console.log("In base reverse text");
    }

    this.changeCase = function(){
       console.log("In base change case");
    }
});

app.controller("firstChildCtrl",function(){

    this.reverseText = function(){
       console.log("In first child reverse text");
    }
});

app.controller("secondChildCtrl",function(){

    this.shiftText = function(){
       console.log("In second child Shift text");
    }
});