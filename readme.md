All code is GPLv3, in accordance with the original license.

## Using in Foundry VTT

[Using these plugins in foundry](https://mdekrey.github.io/foundryvtt-dnd4eBeta)

## Branches

This consists of several branches:

- [original/tracking](https://github.com/mdekrey/foundryvtt-dnd4eBeta/tree/original/tracking) - should match the original at https://github.com/EndlesNights/dnd4eBeta... or at least the last version I've used for my own work.
- [original/main](https://github.com/mdekrey/foundryvtt-dnd4eBeta/tree/original/main) - the latest version including my personal tweaks.
- [mashup/main](https://github.com/mdekrey/foundryvtt-dnd4eBeta/tree/mashup/main) - the latest version of my own variation of 4e - heavily house-ruled.

## Development

### New features

Branch from either `original/main` (to release a common feature) or branch from `mashup/main` (to release a mashup-only feature).

### Bugs

- If present in the base repository, branch from `original/tracking`, but submit PRs back to https://github.com/EndlesNights/dnd4eBeta.
- If present in the customized 4e and mashup, branch from `original/main`, and submit PRs to original/main.
- If present only in mashup, branch from `mashup/main`, and submit PRs to mashup/main.

Submit PRs to the appropriate target branch.

### Bringing in the latest from EndlesNights's version

Run the following:

    git remote add EndlesNights https://github.com/EndlesNights/dnd4eBeta.git
    git fetch EndlesNights
    git fetch origin
    git checkout origin/original/main
    git merge EndlesNights/main --no-commit
    # regex replace `dnd4e(?!(BETA|mdekrey|-system))` with `dnd4emdekrey`
    # resolve remaining merge conflicts and commit
    git push origin HEAD:original/main
    git push origin $(git merge-base origin/original/main EndlesNights/main):original/tracking

    git fetch origin
    git checkout origin/mashup/main
    git merge origin/original/main --no-commit
    # replace `dnd4emdekrey` with `dndmashup`
    # resolve merge conflicts and commit
    git push origin HEAD:mashup/main

Once done, be sure to tag them and release.

## Releases

Releases are done via GitHub actions automation.

### original/main

Create a new tag as follows:

    git fetch
    git tag 4e/v0.2.78 origin/original/main
    git push --tags

This will automatically deploy the latest version for standard 4e work.

### mashup/main

Create a new tag as follows:

    git fetch
    git tag mashup/v0.0.1 origin/mashup/main
    git push --tags

This will automatically deploy the latest version for the custom mashup system.
