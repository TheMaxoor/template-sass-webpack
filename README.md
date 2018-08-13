# Getting Started
## Prerequisite
We are using yarn to handle dependencies in this project. (More infos: https://yarnpkg.com/lang/en/)

## To build the files to `web/`:
Using Make :
```bash
make build
```

Using yarn (manually):
```bash
yarn install
NODE_ENV=production yarn run build
```

## To launch the development server :
Using Make :
```bash
make run
```

Using yarn (manually) :
```bash
yarn install
yarn run start
```
