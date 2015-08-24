/**
 * QuestionsController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	addQuestion: function (req, res) {

		var params = req.params.all();

		console.log(req.body.question);
		// return res.json({});

		var q = req.body.question;
		var guid = Math.floor(Math.random()*16777215).toString(16);


	Questions.create({question:q, id:guid}).exec(function createCB(err,created){

      if (err) {console.log(err);}
      
      console.log(created);
      return res.json({
        question: "Question created - " + created.question
      });

    });
  },

  getAllQuestions: function(req, res){

	var aq = {};

	Questions.find({}).exec(function findCB(err, found){
		
		for(var i=0;i<found.length;i++){
			aq[found[i].id] = found[i].question;
			console.log('Found question ' + found[i].question);
		}

		return res.json(aq);

	});
  },

  getQuestion: function(req, res){

	var params = req.body;

	Questions.find({id: params.id}).exec(function findCB(err, found){

		return res.json({id: found.id, question: found.question, token: found.token});

	});

  },

  updateQuestion: function(req, res){

	// var params = req.params.all();
	var params = req.body;
    
    Questions.update({question:params.questionOld},{question:params.question}).exec(function afterwards(err, updated){

      if (err) {
        res.serverError(err);
        return;
      }

      console.log('Updated question ' + updated[0].question);
    });

  },

  deleteQuestion: function(req, res){

	// var params = req.params.all();
	var params = req.body;

    Questions.destroy({question:params.question}).exec(function deleteCB(err){
      
      if (err) {
        res.serverError(err);
        return;
      }

      console.log('The record has been deleted');

      /*return res.json({
        
      });*/

    });
  },
	
};

