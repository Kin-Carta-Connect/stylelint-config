module.exports = {
	"number-max-precision": 6,
	"shorthand-property-no-redundant-values": true,
	"value-no-vendor-prefix": true,
	"property-no-vendor-prefix": true,
	"declaration-block-no-redundant-longhand-properties": true,
	"declaration-no-important": true,
	"declaration-block-single-line-max-declarations": 1,
	// Disabled because it doesn't work with Sass composed selectors
	// https://gitlab.com/amazerealise-fe-group/fe-boilerplate/issues/33
	// "selector-class-pattern": [
	// 	"^(--)?([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
	// 	{
	// 		resolveNestedSelectors: true,
	// 		message:
	// 			"Expect class selector to conform to AR BEM flavour, see styleguide docs (regexr.com/4b2ts tests). Example: `listing-card --featured`"
	// 	}
	// ],
	"selector-max-empty-lines": 0,
	"selector-max-compound-selectors": 4,
	"selector-max-specificity": "0,4,1",
	"selector-no-vendor-prefix": true,
	"at-rule-no-vendor-prefix": true,
	"max-nesting-depth": 3
};
