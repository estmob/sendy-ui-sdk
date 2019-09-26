# Sendy UI Integration 

## Build
```
npm install
npm start
```

## Table Of API
1. [Init](#markdown-header-init)
2. [final](#markdown-header-final)
3. [launch](#markdown-header-launch)

### init
Initialize module and register callback for receiving a link.

Parameters   |                    |
-------------|--------------------|
linkCallback | function(link)     |

### final
Finalize module.

### launch
Launch sendy service in a popup window.

Parameters   |                                            |
-------------|--------------------------------------------|
userKey      | String key for identifying user.(optional) |
name         | Name of popup window.(optional)            |

