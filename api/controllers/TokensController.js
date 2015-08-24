/**
 * TokensController
 *
 * @description :: Server-side logic for managing tokens
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `TokensController.create()`
   */
  create: function (req, res) {

    var params = req.params.all();
    var guid = Math.floor(Math.random()*16777215).toString(16);

    console.log(params);

    Tokens.create({token: params.token, id: guid}).exec(function createCB(err,created){

      if (err) {console.log(err);}
      
      return res.json({
        token: "Created token with name" + created.token
      });

    });

    
  },


  /**
   * `TokensController.update()`
   */
  update: function (req, res) {

    var params = req.params.all();
    
    Tokens.update({token:params.tokenOld},{token:params.token}).exec(function afterwards(err, updated){

      if (err) {
        res.serverError(err);
        return;
      }

      console.log('Updated token ' + updated[0].token);
    });
  },


  /**
   * `TokensController.delete()`
   */
  delete: function (req, res) {

    var params = req.params.all();

    Tokens.destroy({token:params.token}).exec(function deleteCB(err){
      
      if (err) {
        res.serverError(err);
        return;
      }

      console.log('The record has been deleted');

      /*return res.json({
        
      });*/

    });

    
  },


  /**
   * `TokensController.show()`
   */
  show: function (req, res) {
    
  var params = req.params.all();

  Tokens.find({id:params.id}).exec(function findCB(err, found){
    
    return res.json({id:found.id, token:found.token});

  });

  },

  showAll: function (req, res) {

    var tk = {};

  Tokens.find({}).exec(function findCB(err, found){
    
    for(var i=0;i<found.length;i++){
        tk[found[i].id] = found[i].token;
      console.log('Found token ' + found[i].token);
    }

    return res.json(tk);

  });

  }
};

