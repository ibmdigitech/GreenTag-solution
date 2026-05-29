@echo off
set "PATH=%~dp0node\node-v20.12.0-win-x64;%PATH%"
call "%~dp0node\node-v20.12.0-win-x64\npm.cmd" install --ignore-scripts
