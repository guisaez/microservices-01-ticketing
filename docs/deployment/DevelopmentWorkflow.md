## Development Workflow

| Local Machine |
-----------------
* Make Change to code for tickets service
* Commit code to a git branch (any besides master)
* Push branch to github

&darr; &darr; &darr; &darr; &darr;

| Github |
-------------
* Github receives updated branch
* You manually create a pull request to merge branch into master.
* Github automatically runs tests for project.
* After test pass, you merge th PR into master branch
* Because master branch has changed, github builds and deploys.

