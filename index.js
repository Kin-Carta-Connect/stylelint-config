const possibleErrors = require('./rules/possible-errors');
const limitLanguageFeatures = require('./rules/limit-language-features');
const stylisticIssues = require('./rules/stylistic-issues');

module.exports = {
	plugins: ["stylelint-scss", "stylelint-no-unsupported-browser-features"],
	rules: {
		...possibleErrors,
		...limitLanguageFeatures,
		...stylisticIssues
	}
};
