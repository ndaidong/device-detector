var traceur = require('traceur');
traceur.require.makeDefault((filename) => {
  return filename.indexOf('node_modules') === -1;
});

var fs = require('fs');
var path = require('path');

/**
 * Import specs
 */

var dirs = [''];
dirs.forEach(function(dir){
  var where = './test/specs/' + dir;
  if(fs.existsSync(where)){
    fs.readdirSync(where).forEach(function(file){
      if(path.extname(file) === '.js'){
        require(path.join('.' + where, file));
      }
    });
  }
});
