# Standard Version

Some notes on automated versioning and changelog generation using `standard-version`.

References:

- https://github.com/conventional-changelog/standard-version

## Pre-Requisites

1. [Node.js](https://nodejs.org/en/) and npm installed

## Generate new release

This will create new tag, generate changelog, and commit

```bash
npx standard-version
```

To sync with remote, make sure to push with follow tags

```bash
git push --folow-tags origin <YOUR_BRANCH_NAME>
```

### Skip Lifecycle Steps

When generating using standard-version, there's a flag to configure which lifecycle (bump, changelog, commit, tag) will be skipped.

```bash
# to skip commit & tag:
npx standard-version --skip.commit --skip.tag

# to skip changelog:
npx standard-version --skip.changelog
```

References:

- https://github.com/conventional-changelog/standard-version#skipping-lifecycle-steps

### Override version number

We can override version number using `--release-as`

```bash
npx standard-version --release-as minor

# or
npx standard-version --release-as 1.2.3
```

References:

- https://github.com/conventional-changelog/standard-version#release-as-a-target-type-imperatively-npm-version-like

## Accidentally Create wrong release or tag?

This are the commands that can be used to revert the changes

```bash
git reset HEAD~1

git tag -d v1.2.3
```
