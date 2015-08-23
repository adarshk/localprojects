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

    console.log(params);

    Tokens.create({name:params.name}).exec(function createCB(err,created){

      if (err) {console.log(err);}
      
      return res.json({
        token: "Created token with name" + created.name
      });

    });

    
  },


  /**
   * `TokensController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `TokensController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },


  /**
   * `TokensController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  }
};

