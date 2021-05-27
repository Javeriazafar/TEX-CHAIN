const routes =  require('next-routes')();


routes.add('/Campaigns/index', '/Campaigns/index').add('/Campaigns/:address','/Campaigns/view');
module.exports= routes;
