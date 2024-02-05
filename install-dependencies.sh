#!/bin/bash

# Manually initialize nvm based on your .bashrc configuration
export NVM_DIR="/usr/local/share/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# Install Node.js version 16 and set it as the default
nvm install 16
nvm alias default 16
nvm use default

# Install dependencies with yarn
yarn

