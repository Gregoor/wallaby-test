module.exports = {
  'files': [
    'src/vector.js'
  ],
  'tests': [
    'test/*-spec.js'
  ],
	preprocessors: {
		'**/*.js': [file => require('babel').transform(file.content)]
	}
};