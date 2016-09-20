# publish docs
CURRENT_PATH=`pwd`


cd docs
gitbook install && gitbook build && \
  grunt publish


cd $CURRENT_PATH
