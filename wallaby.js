module.exports = {
  'files': [
    'src/vector.js'
  ],
  'tests': [
    'tests/*-spec.js'
  ],
	preprocessors: {
		'**/*.js': [file => require('babel').transform(file.content, {modules: 'common', sourceMap: true})]
	},
  env: {
    type: 'node'
  }
};