# Install dependencies using bundled Node
$nodeDir = Join-Path $PSScriptRoot 'node\node-v20.12.0-win-x64'
# Prepend Node directory to PATH so npm.cmd can find node.exe
$env:Path = "$nodeDir;$env:Path"
# Run npm install
& "${nodeDir}\npm.cmd" install
