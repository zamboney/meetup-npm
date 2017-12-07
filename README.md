# NPM 

## form 0 to ninja!



## `npm init`
create the `package.json` file



## `npm install` 
installing a new dependency package that can be used in the package


 
## `npm publish`


NPM is a registry that can store packages for other developers use


1. `npm adduser` (done once in a machine).
    * register the user in the machine
2. `npm publish`.
    * publish the package to the default repository


### .npmrc

`.npmrc` is a config file that can set the registry end point (and also other properties

> using `npm config list` to check the complete list of properties that can be set.

> in this demo we will use local `.npmrc` the general `.npmrc` located in `~/.npmrc` on mac and `%userprofile%/.npmrc` in windows




## NPM version


npm using *SEMVER* version.


using `npm publish` can do only once per version (a.k.a. `package.json` version propery).




## NPM run

in the `package.json` There is a property called `scripts`. This property can be used as a task run.


NPM run can read this scripts and also can detect it there a `pre` or `post` script



## npm Groups


using npm on your code can be focetr
