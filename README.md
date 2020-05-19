# Run local
- Copy public/env.js => public/configs/env-local.js
- Modified env-local.js

# ppm-app
**Techs**
- ReactJs: 16.8  
- Eslint: AirBnb rules
- CoreUI: 2.1.5
- Flow: js type checker
- Storybook: Interactive UI component dev & test

**Development**
- `copy .env => .env.local` => override environment variables if need
- `yarn`
- `yarn start`

**Folder structure**
- /components: shared components
- /containers: shared default containers
- /constant: shared constant variables like api url, key
- /configs: application configs, hook global state
- /helpers: helper scripts
- /hooks: shared hooks
- /scss: styling
- /services: implementation scripts (api call, local storage, cookies)
- /type: flow types
- /views: main pages
