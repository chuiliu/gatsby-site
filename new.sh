#!/bin/sh
if [ $1 ]
  then
    echo 'creating file' $1'.md'
  else
    echo 'please enter the filename...'
    exit;
fi

if [ ! -d "posts/`date +%Y-%m-%d`" ]; then
  mkdir posts/`date +%Y-%m-%d`
fi
cat > posts/`date +%Y-%m-%d`/$1.md<< END_TEXT
---
path: "/`date +%Y-%m-%d`/$1"
date: "`date +%Y-%m-%d`"
title: "$1"
tags: []
---

END_TEXT

echo 'success!'
