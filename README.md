![Screenshot-from-2023-08-24-17-56-37](https://github.com/Luismijias/Astros/assets/53336758/9f2daf81-85ad-4b32-b61a-4c93a0ca76cb)

# ASTROS

A ready to use solution for content management and multilingual websites using [Netuno](https://www.netuno.org/), [ReactJS](https://reactjs.org/), [Less](https://www.lesscss.org/) and [Ant Design](https://ant.design/).

## Requirement

#### Netuno Platform

[Follow the steps here](https://doc.netuno.org/docs/en/installation/)


### Running

Start the Netuno Server:

```
./netuno server app=astros
```

> May take while because is the first time and NPM Install will run to `ui` and `website` folder inside the application root folder.

:warning: If you got this error:
 
```
 npm ERR! code ERESOLVE
 npm ERR! ERESOLVE unable to resolve dependency tree
```
Then execute the command below inside the `website` folder:

`npm install --force`

:white_check_mark: Is not required, but is recommended to rename the app folder `(Netuno Root directory)/apps/astros/` to your desired name, and do not forget the `name` parameter in the configurations:

`config/_development.json`

`config/_production.json`

> Remember to restart the Netuno Server with your new app name.

## From Scratch

### Clone and Setup

Using SSH:
inside the netuno/apps paste this comand:

`git clone git@github.com:Luismijias/Astros.git`

### Running

In the Netuno root directory run

`./netuno server app=astros`

to start the backend server and then in the `(astros app directory)/website/` run

`npm run dev`

to start the frontend server.
# Astros
