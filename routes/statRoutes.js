module.exports = function(app) {
 let stats = require('../controller/statController');

 app.route('/api/activities')
   .get(stats.listAllActivities)
   .post(stats.createActivity);

 app.route('/api/activities/:id')
   .get(stats.readActivity)
   .put(stats.updateActivity)
   .delete(stats.deleteActivity);


 app.route('/api/activities/:id/stats')
   .post(stats.postStat);

 app.route('/api/stats/:id')
   .delete(stats.deleteStat);
}
