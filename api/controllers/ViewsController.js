/**
 * ViewsController
 *
 * @description :: Server-side logic for managing views
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	admin: function (req, res) {
		// console.log("Request received");
    	return res.view("admin");
  },
};

