Meteor.methods({
  like: function(likeParameters) {
    check(likeParameters, {
      tId: String,
      collection: String, // challenge, project, idea,
      type: String //plus, minus
    });

    if (!Meteor.user()) {
      return;
    }

    var increment = 0;
    if (likeParameters.type === 'plus') {
      increment = 1;
    } else if (likeParameters.type === 'minus') {
      increment = -1;
    }

    tId = likeParameters.tId;

    switch(likeParameters.collection) {
      case 'challenge': {
        var alreadyVote  = Challenge.findOne({_id: tId, voters:{$in:[this.userId] }});
        if (alreadyVote) {
          console.log('Already vote');
          return;
        }
        Challenge.update({_id: tId},
          {
            $inc:{likes:increment},
            $push:{voters:this.userId}
          }
        );
        var challenge = Challenge.findOne({_id:tId});
        return challenge.likes;
        break;
      }
      case 'project': {
        var alreadyVote  = Project.findOne({_id: tId, voters:{$in:[this.userId]}});
        if (alreadyVote) {
          console.log('Already vote');
          return;
        }
        Project.update({_id: tId}, {
          $inc:{likes:increment},
          $push:{voters:this.userId}
        });
        var project = Project.findOne({_id:tId});
        return project.likes;
        break;
      }
      case 'idea': {
        var alreadyVote  = Idea.findOne({_id: tId, voters:{$in:[this.userId]}});
        if (alreadyVote) {
          console.log('Already vote');
          return;
        }
        Idea.update({_id: tId},
          {
            $inc:{likes:increment},
            $push:{voters:this.userId}
          }
        );
        var idea = Idea.findOne({_id:tId});
        return idea.likes;
        break;
      }
      case 'comment': {
        var alreadyVote  = Comment.findOne({_id: tId, voters:{$in:[this.userId] }});
        if (alreadyVote) {
          console.log('Already vote');
          return;
        }
        Comment.update({_id: tId},
          {
            $inc:{likes:increment},
            $push:{voters:this.userId}
          }
        );
        var comment = comment.findOne({_id:tId});
        return comment.likes;
        break;
      }
    }
    return true;
  }
})