# To contribute

**If you are working on an existing issue, please claim it with your comment, so there is no duplicate work.**

## What you will need before you begin:
1. Ensure NodeJS version 12.16.3 LTS or larger is installed on your system.
2. Clone the repository.
3. Run `npm install` in the folder that you've just cloned to ensure you have all dependencies that are needed for development.
4. Run the typescript compiler with `npm run build`
5. Open `index.html` using an http server.
   * If using vscode you can use the `ritwickdey.liveserver` extension
   * You can also use the `npx http-server` command to run the [http-server](https://www.npmjs.com/package/http-server) with an optional port like 8080 or 4200 or a [random port](http://cubicspot.blogspot.com/2016/04/need-random-tcp-port-number-for-your.html)
   * Use `npm run start` that will run the above command

## Hidden Files in VSCode
Some files are hidden in vscode by default, see the `files.exclude` option in the [settings file](.vscode/settings.json)

There is a [recommended extension](.vscode/extensions.json) `adrianwilczynski.toggle-hidden` that allows to easily toggle hidden files on and off

## Steps to follow when your work is ready:
When your work is done:
1. Run `npm run build`.
2. After a successful build, make a commit and push your changes. If you're fixing a existing issue: be sure to link to that issue in the git commit message, like so: `Closes #issueNumberThatGetsFixed`.
3. Create a new Pull Request.
4. Write a good description of the changes this pull-request will make.
5. You must provide screenshots if there is a visual change.
