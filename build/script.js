const animateOb = {
    hdnl: null,
    el: null,
    init: function (id) {
      this.el = document.getElementById(id)
    },
    grow: function(){
      this.stopAnimate();
      this.hdnl = setInterval(() => {
      this.doWidth(5)}, 40)
    },
    shrink: function (){this.stopAnimate();
      this.hdnl = setInterval(() => {
      this.doWidth(-5)}, 40)
    },
    stopAnimate: function (){
      clearInterval(this.hdnl)
    },
    doWidth: function (val){
      let w = this.el.offsetWidth // content + padding + border
      
      if ((val > 0 && w < 300) || (val < 0 && w >100)){
        this.el.style.width = w + val + 'px'
        this.el.style.height = w + val + 'px'
      }
    
    },
    rightMove: function () {
      this.stopAnimate();
      this.hdnl = setInterval(() => this.doMoveLeftRight(5),40)
      
    },
    leftMove: function () {
      this.stopAnimate();
      this.hdnl = setInterval(() => this.doMoveLeftRight(-5),40)
      
    },
    upMove: function () {
      this.stopAnimate();
      this.hdnl = setInterval(() => this.doMoveUpDown(-5),40)
      
    },
    downMove: function () {
      this.stopAnimate();
      this.hdnl = setInterval(() => this.doMoveUpDown(5),40)
      
    },
    doMoveLeftRight: function (val){
      let left = this.el.offsetLeft;
      
  
      if ((val > 0 && left < 500) || (val < 0 && left > 10)) {
        this.el.style.left = val + left + 'px'
      }
      
    },
    doMoveUpDown: function(val){
      let top = this.el.offsetTop;
      if ((val > 0 && top < 300) || (val < 0 && top > 10)) {
        this.el.style.top = val + top + 'px'
      }
    }
  };
  
  animateOb.init('d1')
  const growBtn = document.getElementById("grow-btn");
  const shrinkBtn = document.getElementById("shrink-btn");
  const stopBtn = document.getElementById("stop-btn");
  const rightBtn = document.getElementById("right-btn");
  const leftBtn = document.getElementById("left-btn");
  const upBtn = document.getElementById("up-btn");
  const downBtn = document.getElementById("down-btn");
  growBtn.addEventListener('click', () => animateOb.grow())
  shrinkBtn.addEventListener('click', () => animateOb.shrink())
  stopBtn.addEventListener('click', () => animateOb.stopAnimate())
  rightBtn.addEventListener('click', () => animateOb.rightMove())
  leftBtn.addEventListener('click', () => animateOb.leftMove())
  upBtn.addEventListener('click', () => animateOb.upMove())
  downBtn.addEventListener('click', () => animateOb.downMove())