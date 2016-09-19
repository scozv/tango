# publish docs
CURRENT_PATH=`pwd`


cd docs
gitbook install && gitbook build && \
  grunt publish --gh-pages-message "gh-pages compiled on $(date +"%y%m%d%H%M")"


cd $CURRENT_PATH
