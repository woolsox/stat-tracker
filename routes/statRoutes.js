module.exports = function(app) {
 let stats = require('../controller/statController');

 app.route('/api/activities')
   .get(stats.listAllActivities)
   .post(stats.createActivity);

 app.route('/api/activities/:id')
   .get(stats.readActivity)
   .put(stats.updateActivity)
   .delete(stats.deleteActivity)
}
