var chalk     = require('chalk');
var gulp      = require('gulp');
var log       = require('gulp-util').log;
var shell     = require('gulp-shell');
var spawn     = require('child_process').spawn;


var shellChalk = function(command, name) {
  var cmd  = command.split(' ').shift();
  var args = command.split(' ').slice(1);

  name = name || cmd;

  var spawned = spawn(cmd, args);

  spawned.stdout.on('data', function(data) {
    data
      .toString()
      .split('\n')
      .map(function(line)     { return line.replace(/^\.*\]/, '').trim(); })
      .filter(function(line)  { return line.length > 1; })
      .forEach(function(line) { log(chalk.cyan(name) + ' ' + line); });
  });

  spawned.on('exit', function() {
    this.emit('done');
  });

  return spawned;
};

gulp.task('watch', shell.task(['./node_modules/.bin/webpack-dev-server --hot --inline --progress --colors']));

gulp.task('electron', function() {
  return shellChalk('./node_modules/.bin/electron main.js', 'electron');
});

gulp.task('default', [ 'electron', 'watch' ]);
