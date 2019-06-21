const config = require("../");
const fs = require("fs");
const stylelint = require("stylelint");

const validCss = fs.readFileSync("./tests/css-valid.css", "utf-8");
const invalidCss = fs.readFileSync("./tests/css-invalid.css", "utf-8");

describe("flags no warnings with valid css", () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: validCss,
			config
		});
	});

	it("did not error", () => {
		return result.then(data => expect(data.errored).toBeFalsy());
	});

	it("flags no warnings", () => {
		return result.then(data =>
			expect(data.results[0].warnings).toHaveLength(0)
		);
	});
});

describe("flags warnings with invalid css", () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: invalidCss,
			config
		});
	});

	it("did error", () => {
		return result.then(data => expect(data.errored).toBeTruthy());
	});

	it("flags one warning", () => {
		return result.then(data =>
			expect(data.results[0].warnings).toHaveLength(3)
		);
	});

	it("correct warning text", () => {
		return result.then(data =>
			expect(data.results[0].warnings[0].text).toBe(
				'Expected "#fff" to be "#FFF" (color-hex-case)'
			)
		);
	});

	it("correct rule flagged", () => {
		return result.then(data =>
			expect(data.results[0].warnings[0].rule).toBe(
				"color-hex-case"
			)
		);
	});

	it("correct severity flagged", () => {
		return result.then(data =>
			expect(data.results[0].warnings[0].severity).toBe("error")
		);
	});

	it("correct line number", () => {
		return result.then(data =>
			expect(data.results[0].warnings[0].line).toBe(3)
		);
	});

	it("correct column number", () => {
		return result.then(data =>
			expect(data.results[0].warnings[0].column).toBe(10)
		);
	});
});
