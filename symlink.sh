#!/bin/bash

cwd=`pwd`
files=(.bashrc .bashrc.veezus .vimrc .vimrc.veezus .gitconfig .git-completion.bash)
for f in ${files[@]}; do
	[ -e $HOME/$f ] || `ln -s $cwd/$f $HOME/$f`
done
