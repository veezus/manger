#!/usr/bin/env bash

cwd=`pwd`
files=(.bashrc .bashrc.veezus .ctags .vimrc .vimrc.veezus .gitconfig .git-completion.bash)
for f in ${files[@]}; do
	[ -e $HOME/$f ] || `ln -s $cwd/$f $HOME/$f`
done
