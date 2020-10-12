//arranca el servidor

module.exports = app => {

(async() => await app.db.sequelize.sync({alter:true}))();

  app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });


};





/** app.db.sequelize.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log('Server on port', app.get('port'));
    });
  });
  **/


  /**
   async function test () {
    await app.db.sequelize.sync();
  }
  **/
