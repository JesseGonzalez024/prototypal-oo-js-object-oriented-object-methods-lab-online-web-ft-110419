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
    return "You can do that!"
  }
}
