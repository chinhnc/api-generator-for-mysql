var config   = require('./config');
var connect = require('knex')({
	client: 'mysql',
	connection: {
	    host     : '127.0.0.1',
	    user     : 'root',
	    password : 'root',
	    database : 'api_generator',
	    charset  : 'utf8'
	}
});
var gulp = require('gulp'),
	template = require('gulp-template'),
    gulp_data = require('gulp-data'),
    rename = require('gulp-rename');

gulp.task('gen', () => {
	return connect.raw('SHOW TABLES')
		.then(([tables]) => {
			tables.forEach((table) => {
				tableName = table[`Tables_in_${'api_generator'}`];
				
				genModel(tableName);
				genCtrl(tableName);

				console.log('Schema table ' + tableName);
			});
			return;
		})
		.catch((error) => {
			console.log("Cann't connect to DB!\n", error);
			return [];
		});
});


function genCtrl (name){
    gulp.src('./templates/controller-template.js')
    .pipe(gulp_data(function (){
        return {name : name}
    }))
    .pipe(template())
    .pipe(rename(name+'.js'))
    .pipe(gulp.dest('./app/controllers/'));
}

function genModel (name, data){
    gulp.src('./templates/model-template.js')
    .pipe(gulp_data(function (){
        return {name : name}
    }))
    .pipe(template())
    .pipe(rename(name+'.js'))
    .pipe(gulp.dest('./app/models/'));
}
