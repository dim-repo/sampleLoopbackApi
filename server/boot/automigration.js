module.exports = function(app) {
  var dataSource = app.dataSources.postgres;

  dataSource.isActual('FishShop', function(err,actual) {
    if (!actual){
      dataSource.autoupdate('FishShop', function(err, result){
        if(err) throw err;
        console.log(result);
      })
    }
    
  });

  dataSource.isActual('User', function(err,actual) {
    if (!actual){
      dataSource.autoupdate('User', function(err, result){
        if(err) throw err;
        console.log(result);
      })
    }
    
  });

  dataSource.isActual('Review', function(err,actual) {
    if (!actual){
      dataSource.autoupdate('Review', function(err, result){
        if(err) throw err;
        console.log(result);
      })
    }
    
  });

  dataSource.isActual('Reviewer', function(err,actual) {
    if (!actual){
      dataSource.autoupdate('Reviewer', function(err, result){
        if(err) throw err;
        console.log(result);
      })
    }
    
  });

};