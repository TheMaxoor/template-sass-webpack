git fetch origin
git reset --hard origin/master
yarn install
NODE_ENV=production yarn run build
