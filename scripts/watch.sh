#!/usr/bin/env bash
# script:  watch
# author:  Mike Smullin <mike@smullindesign.com>
# license: GPLv3
# description:
#   watches the given path for changes
#   and executes a given command when changes occur
# usage:
#   watch <path> <cmd...>
#

path=$1
shift
cmd=$*
sha=0
update_sha() {
  sha=`ls -lR $path | openssl sha1`
  # sha=`ls -lR --time-style=full-iso $path | sha1sum`
}
update_sha
previous_sha=$sha
build() {
  echo -e "building..."
  $cmd
  echo -e "--> resumed watching."
}
compare() {
  update_sha
  if [[ $sha != $previous_sha ]] ; then
    echo "change detected."
    build
    previous_sha=$sha
  # else
  #   echo -n .
  fi
}
trap build SIGINT
trap exit SIGQUIT

echo -e "--> Press Ctrl+C to force build, Ctrl+\\ to exit."
echo -e "--> watching \"$path\"."
while true; do
  compare
  sleep 1
done
