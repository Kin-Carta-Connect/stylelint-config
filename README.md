# AR Stylelint config

> The AR recommended shareable config for stylelint.

It turns on all the possible errors rules within stylelint based on our CSS styleguide.

Use it as is or as a foundation for your own config. It will mainly be used within the AR foundation boilerplates.

## Installation

```bash
npm install -D @amazerealise/stylelint-config
```

## Usage

If you've installed ar-stylelint-config locally within your project, just set your stylelint config to:

```bash
{
  "extends": "@amazerealise/stylelint-config"
}
```

If you've globally installed @amazerealise/stylelint-config using the -g flag, then you'll need to use the absolute path to @amazerealise/stylelint-config in your config e.g.

```bash
{
  "extends": "/absolute/path/to/@amazerealise/stylelint-config"
}
```

You can also simply use the globally installed configuration name instead of the absolute path:

{
  "extends": "@amazerealise/stylelint-config"
}

### Extending the config

Simply add a "rules" key to your config, then add your overrides and additions there.

For example, to change the at-rule-no-unknown rule to use its ignoreAtRules option, turn off the block-no-empty rule, and add the unit-whitelist rule:

```json
{
  "extends": "@amazerealise/stylelint-config",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends"
      ]
    }],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## Complementary tools

### Editor plugins

-   [Ale](https://github.com/w0rp/ale): A Vim plugin that supports stylelint.
-   [Flycheck](https://github.com/flycheck/flycheck): An Emacs extension that supports stylelint.
-   [linter-stylelint](https://github.com/AtomLinter/linter-stylelint): An Atom plugin for stylelint.
-   [SublimeLinter-stylelint](https://github.com/SublimeLinter/SublimeLinter-stylelint): A Sublime Text plugin for stylelint.
-   [SublimeLinter-contrib-stylelint_d](https://github.com/jo-sm/SublimeLinter-contrib-stylelint_d): A Sublime Text plugin for stylelint that run's on daemon.
-   [vscode-stylelint](https://github.com/shinnn/vscode-stylelint): A Visual Studio Code extension for stylelint.

### Editors

-   [WebStorm](https://blog.jetbrains.com/webstorm/2016/09/webstorm-2016-3-eap-163-4830-stylelint-usages-for-default-exports-and-more/): Version 2016.3 onwards has built-in support for stylelint.

### Find stylelint rules

Find stylelint rules that are not configured in your stylelint config. This is useful to see what else is new and what is deprecated or updated.

Running this in your root folder will show the list.

```
npx stylelint-find-rules
```

More info here https://github.com/alexilyaev/stylelint-find-rules

## [Changelog](CHANGELOG.md)
