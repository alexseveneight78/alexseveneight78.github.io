!function(t){function e(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e){new Vue({el:"#app",data:{playerHealth:100,monsterHealth:100,gameIsRunning:!1,turns:[]},methods:{startGame:function(){this.gameIsRunning=!0,this.playerHealth=100,this.monsterHealth=100,this.turns=[]},attack:function(){var t=this.calculateDamage(3,10);this.monsterHealth-=t,this.turns.unshift({isPlayer:!0,text:"Player hits Monster for "+t}),this.checkWin()||this.monsterAttacks()},specialAttack:function(){var t=this.calculateDamage(10,20);this.monsterHealth-=t,this.turns.unshift({isPlayer:!0,text:"Player hits Monster hard for "+t}),this.checkWin()||this.monsterAttacks()},heal:function(){this.playerHealth<=90?this.playerHealth+=10:this.playerHealth=100,this.turns.unshift({isPlayer:!0,text:"Player heals for 10"}),this.monsterAttacks()},giveUp:function(){this.gameIsRunning=!1},monsterAttacks:function(){var t=this.calculateDamage(5,12);this.playerHealth-=t,this.checkWin(),this.turns.unshift({isPlayer:!1,text:"Monster hits Player for "+t})},calculateDamage:function(t,e){return Math.max(Math.floor(Math.random()*e)+1,t)},checkWin:function(){return this.monsterHealth<=0?(confirm("You won! New game?")?this.startGame():this.gameIsRunning=!1,!0):this.playerHealth<=0&&(confirm("You lost! New game?")?this.startGame():this.gameIsRunning=!1,!0)}}})}]);
//# sourceMappingURL=build.js.map
