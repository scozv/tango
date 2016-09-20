# test lang
CURRENT_PATH=`pwd`
echo "pwd: `pwd`"

cd lang/es6
echo "pwd: `pwd`"
# nvm install v5.11.1
nodejs --version
npm i
npm install -g mocha istanbul
npm run coverage


cd $CURRENT_PATH
echo "pwd: `pwd`"

cd docs
echo "pwd: `pwd`"
# nvm install v5.11.1
npm install -g gitbook-cli grunt-cli
npm install
gitbook install && gitbook build


cd $CURRENT_PATH
echo "pwd: `pwd`"
