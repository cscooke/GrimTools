# Grim Tools 

## Installation

You can install Node Version Manager via:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`

Change directories to the project root and run:

```
nvm install && nvm use
npm install -g bower grunt-cli
npm install && bower install
```

Congrats, you are ready to start developing.

## Development

Tasks: `grunt dev`

The 'dev' task will generate a few 'config' files for the project, and then spin up a development server locally (default is *localhost:9000*). The generated files for the dev task include:

1. `app/index.html` Copied from `templates/index.tpl.html` and then bower/project js/css are injected

Editing any of the above files will result in your changes being overwritten on the next run of `grunt dev`, so it is recommended to edit the the original files instead, e.g:

1. `app/index.html` -> Edit `templates/index.tpl.html` instead
