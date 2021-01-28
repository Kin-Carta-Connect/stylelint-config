# Request for contributions

Please contribute to this repository if any of the following is true:
- You have expertise in community development, communication, or education
- You want open source communities to be more collaborative and inclusive
- You want to help lower the burden to first time contributors

# How to contribute

Prerequisites:

- familiarity with [GitHub PRs](https://help.github.com/articles/using-pull-requests) (pull requests) and issues
- knowledge of Markdown for editing `.md` documents

In particular, I look for the following types of contributions:

- ideas: participate in an Issues thread or start your own to have your voice heard
- resources: submit a PR to add to [docs README.md](/README.md) with links to related content
- outline sections: help us ensure that this repository is comprehensive. if there is a topic that is overlooked, please add it, even if it is just a stub in the form of a header and single sentence. Initially, most things fall into this category
- write: contribute your expertise in an area by helping us expand the included content
- copy editing: fix typos, clarify language, and generally improve the quality of the content
- formatting: help keep content easy to read with consistent formatting
- code: Fix issues or contribute new features to this or any related projects

# How to submit a PR

The steps run on each PR or `main` branch push by the CI are the following.

## 1. `commit-analyzer` - analyze commits

Analyze commits with [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) using the `conventionalcommits` ([spec](https://www.conventionalcommits.org/en/v1.0.0/)) preset.

> conventional-changelog main purpose is to generate changelogs and release notes from a project's commit messages and metadata.

The data provided by this module will be used to trigger a release and to generate the notes.

### Commit Message Format

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

A commit message consists of a **header**, **body** and **footer**.
The header has a **type**, *scope* and *description*:

```text
<type>(<scope>): <description>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

The `header` is mandatory and must conform to the [Commit Message Header](#commit-message-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-message-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-message-footer) format describes what the footer is used for and the structure it must have.

Any line of the commit message cannot be longer than 100 characters.

#### Commit Message Header

```text
<type>(<scope>): <short description>
  │       │             │
  │       │             └─⫸ Description in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: stylelint|rules|jest|node|react|(etc.)
  │
  └─⫸ Commit Type: build|chore|ci|docs|feat|fix|perf|refactor|test|style
```

The `<type>` and `<description>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

Must be one of the following:

- **feat**: A new feature
- **feature**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **revert**: A revert
- **docs**: Documentation only changes
- **style**: Style changes
- **chore**: Changes that do not affect the build system (example scopes: npm, dependencies)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: GHActions, Circle, BrowserStack)

##### Scope

The scope should be the name of the module affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of example scopes:

- `rules`
- `stylelint`
- `jest`
- `node`
- `react`
- `npm`
- `dependencies`
- `compare`

##### Description

Use the description field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Commit Message Body

Just as in the description, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

#### Commit Message Footer

The footer can contain information about breaking changes and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.

```
BREAKING CHANGE: <breaking change description>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a description of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

### Examples

Appears under "Features" header, ava subheader:

```text
feat(ava): add 'ava' linting rules
```

Appears under "Bug Fixes" header, jest subheader, with a link to issue #28:

```text
fix(jest): fix jest test runner warnings

Closes #28
```

Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```text
perf(react): remove react slow rules

BREAKING CHANGE: The react rules 1, 2, 3 have been removed for performance reason.
```

The following commit and commit 667ecc1 do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```
revert: feat(react): add react rules

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

Release triggers are:

- Commits with a `breaking change` will be associated with a **major** release.
- Commits with type `feat` will be associated with a **minor** release.
- Commits with type `fix` will be associated with a **patch** release.
- Commits with type `perf` will be associated with a **patch** release.
- Commits with type `build` will be associted with a **patch** release.
- Commits with type `ci` will be associted with a **patch** release.
- Commits with type `chore` will be associted with a **patch** release.
- Commits with type `docs` will be associted with a **patch** release.
- Commits with type `refactor` will be associted with a **patch** release.
- Commits with type `style` will be associted with a **patch** release.
- Commits with type `test` will be associted with a **patch** release.
- Commits with scope `no-release` will not be associated with a release type even if they have a breaking change or the type `feat`, `fix` or `perf`.

## 2. `release-notes-generator` - generate changelog content with conventional-changelog

Generate release notes for the commits added since the last release with conventional-changelog. It will add those notes to releases. Github will show those notes for each relese.

## 3. `changelog` - update a changelog file

Create or update a changelog file in the local project directory with the changelog content created in the previous steps.

## 4. `npm` - publish the npm package

## 5. `github` - publish a GitHub release and comment on released Pull Requests/Issues

## 6. `git` - commit release assets to the project's git repository

# Contributor Code of Conduct

As contributors and maintainers of this project, and in the interest of
fostering an open and welcoming community, we pledge to respect all people who
contribute through reporting issues, posting feature requests, updating
documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free
experience for everyone, regardless of level of experience, gender, gender
identity and expression, sexual orientation, disability, personal appearance,
body size, race, ethnicity, age, religion, or nationality.

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery
* Personal attacks
* Trolling or insulting/derogatory comments
* Public or private harassment
* Publishing other's private information, such as physical or electronic
  addresses, without explicit permission
* Other unethical or unprofessional conduct

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

By adopting this Code of Conduct, project maintainers commit themselves to
fairly and consistently applying these principles to every aspect of managing
this project. Project maintainers who do not follow or enforce the Code of
Conduct may be permanently removed from the project team.

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community.

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting a project maintainer. All complaints will be reviewed and
investigated and will result in a response that is deemed necessary and appropriate
to the circumstances. Maintainers are obligated to maintain confidentiality with
regard to the reporter of an incident.


This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 1.3.0, available at
[http://contributor-covenant.org/version/1/3/0/][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/3/0/
