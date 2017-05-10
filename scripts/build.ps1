dotnet restore $PSScriptRoot/../src/holmescode.com.csproj
dotnet publish $PSScriptRoot/../src/holmescode.com.csproj -c Release -o $PSScriptRoot/../src/build
