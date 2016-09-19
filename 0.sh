# Building the environment for only 1st time
nvm install v5.11.1
npm install -g gitbook-cli grunt-cli
npm install
gitbook install && gitbook build
