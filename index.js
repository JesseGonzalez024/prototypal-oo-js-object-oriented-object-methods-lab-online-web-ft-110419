function BoardMember(name, homestate, training){
  this.name = name 
  this.homestate = homestate
  this.training = training
  
  BoardMember.prototype.veto = function() {
    return "No, I must disagree"
  }
  
  BoardMember.prototype.approve = function() {
    return "You can do that!"
  }
  
  BoardMember.prototype.doCharity = function() {
    return "I like to help people."
  }
  
   BoardMember.prototype.releasePressStatemen = function() {
    return "You will see great things from Scuber."
  }
  
  function sayHi(){
     return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`
  }
}
