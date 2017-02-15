<p align="center">
  <b style="font-size: 25px">🦄 Colloq - Colloquium 🙈</b><br />
  <i>Monorepo for the whole of colloq's stack</i>
</p>

<p align="center">
  <a href="https://travis-ci.org/tdeekens/colloq">
    <img alt="Travis CI Status" src="https://img.shields.io/travis/tdeekens/colloq/master.svg?style=flat-square&label=travis"> ♦️
  </a>
  <a href="https://david-dm.org/tdeekens/colloq">
    <img alt="Travis CI Status" src="https://david-dm.org/tdeekens/colloq.svg?style=flat"> ♦️
  </a>
  <a href="https://david-dm.org/tdeekens/colloq#info=devDependencies">
    <img alt="Travis CI Status" src="https://david-dm.org/tdeekens/colloq/dev-status.svg">
  </a>
</p>

<p align="center">
   <b style="font-size: 25px">Architecture Overview (💖 📦s)</b><br />
   <i>In simple terms this is an experiment to explore GraphQL with multiple NodeJs services</i><br />
   <img alt="Service Overview" src="https://raw.githubusercontent.com/tdeekens/colloq/master/docs/architecture.jpg" /><br />
</p>

## Technologies

This obviously is a bit of a technology playground resulting in some adventurous choices being made.

### Server

All services are implemented with HapiJs and are kept simple as in that authentication should either be handled by JWTs or a service at some point.
The whole GraphQL functionality is implemented using the `graphql-server-hapi` from the lovely people at Apollo GraphQL.

### Testing

The testing library used is `ava` as it encourages parallel test runs, enforcing no dependencies between suites. Moreover, it can be used for server side units/API testing as much as it can be used for UI snapshot testing.

- Units with logic such as fixtures are tested as units
- API and resource are tested as a component (route all down the stack until fixtures)

The local `envs` module encapsulates the `process.env.NODE_ENV` set in the `package.json` to reduce string dependencies and allow for easy switching in e.g. the models.

### Linting

Despite the project being a Monorepo and all projects theoretically being deployable independently all linting is homogenous. The project uses `xo` with a minimal set of custom linting rules.

### Debugging

The `debug`-package is used within services giving more insight whenever debug scopes are set as they are when running `npm run dev:watch`.

### Dependencies

`yarn` is used by default when installing packages locally and on `TravisCI`. All however just works with `npm`.

## Services

All services follow the same patterns and are implemented with Hapi as a framework. Each `route` within `routes` contains a fixture, a module for each HTTP method and an `index`-file which exports an `attachRoute`-fn which is invoked with the server by the overall routes `index`. The routes `index` itself exports an `attachRoutes` which is imported in `server.js`.

In general terms:

1. `server.js` imports `index/attachRoutes`
2. `index/attachRoutes` imports all `routes/*/index` (exporting `attachRoute`)
2. `routes/*/index` imports all `routes/*/{get, post, put, delete}`

Each route then has a model for its resource which runs in "fixture-mode" or "database-mode" (not supported yet).

### GraphQL

Outward facing GraphQL API aggregating data from all behind services.

In development runs on [:3000](http://localhost:3000). The GraphiQL route is only available under development [:3000/graphiql](http://localhost:3000/graphiql)

The GraphQL schema is modularised into [`/types`](graphql/types) and [`/resolvers`](graphql/resolvers) to keep it not too bloated.

### Conferences

Stateless service (without database) performing database calls, exposing HTTP/REST API for conference resources.

In development runs on [:4000](http://localhost:4000).

### Persons

Stateless service (without database) performing database calls, exposing HTTP/REST API for person resources. Which are persons themselves, attendees, speakers and representatives.

In development runs on [:4001](http://localhost:4001).

### Organizations

Stateless service (without database) performing database calls, exposing HTTP/REST API for organization resources.

In development runs on [:4002](http://localhost:4002).

## Development

- `yarn i`
- `yarn lint`
   + Lints all the things through `xo`
- `yarn test`
   + Runs all tests within all services (uses `.test` configuration)
   + Each service also has a separate `npm test` to be run in isolation
- `yarn run dev`
   + Starts all services in parallel in dev mode (each using nodemon) on respective local ports (configured on a `.dev`)
   + Each service also has a separate `npm run dev` to be run in isolation

## Quick demo and playground

- `yarn install`
- [:4001](http://localhost:3000/grapiql)

## Production

All services are dockerized and run almost identical to their development environment. In case of a non-dockerized production environment PM2 will take care of scaling out processes (see `processes.json`).

### Health & Metrics

All services expose a `GET /health` and a `GET /metrics` resource. The first can be pinged for general availability of the service, the latter for uptime, load, memory and cpu consumption.

## Todo

- [ ] A frontend with Inferno or PReact
- [ ] Think about testing GraphQL API
- [ ] Implement an authentification based on OAuth2 or JWT and integrate with GraphQl
