#!/bin/sh
if [ $1 ]
  then
    echo "creating file" $1".md"
  else
    echo -e "\033[41;37m Please enter the filename... \033[39;49;0m"
    exit;
fi

if [ ! -d "posts/`date +%Y-%m-%d`" ]
  then
    mkdir posts/`date +%Y-%m-%d`
fi

if [ -f "posts/`date +%Y-%m-%d`/"$1".md" ]
  then
    echo -e "\033[41;37m FAIL: file exists! \033[39;49;0m"
    exit;
fi

cat > posts/`date +%Y-%m-%d`/$1.md<< END_TEXT
---
path: "/`date +%Y-%m-%d`/$1"
date: "`date +%Y-%m-%d`"
title: "$1"
tags: []
---

END_TEXT

echo -e "\033[32;49;1m SUCCESS \033[39;49;0m"
