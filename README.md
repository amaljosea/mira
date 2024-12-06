# mira-amm-web

This repository contains the source code for the [Mira Exchange](https://mira.ly/) web interface.
The web interface enables users to interact with the Mira decentralized exchange (DEX) on
the [Fuel blockchain](https://fuel.network/).
It provides an intuitive interface for performing token swaps, providing liquidity, and managing liquidity positions
within the Mira protocol.

## Resources

- [Mira Website](https://mira.ly/)
- [Core Contract](https://github.com/mira-amm/mira-v1-core)
- [Periphery Scripts](https://github.com/mira-amm/mira-v1-periphery)
- [TypeScript SDK](https://github.com/mira-amm/mira-v1-ts)
- [Rust SDK](https://github.com/mira-amm/mira-v1-rs)

# GraphQL Code Generation

## How `graphql-codegen:watch` Works

The `graphql-codegen:watch` script in the `package.json` file runs the GraphQL Code Generator in watch mode. This means it will automatically regenerate TypeScript types whenever there are changes to GraphQL schema or operations.

### To start the watch mode, run:

```bash
npm run graphql-codegen:watch
```

### Generated Types Location

The generated TypeScript types are stored in the `graphql.ts` file. This file is automatically updated whenever the code generation process runs.

### Corresponding Types for Queries

To find the corresponding types for GraphQL queries and mutations, you can refer to the generated file. Each query and mutation will have associated types for the request and response data.

For example, if you have a query named `getPoolAPR`, the generated types might look like this:

```bash
export type GetPoolAprQuery = {
  // ...fields
};
```

### Naming Conventions

- **Queries**: Queries are typically named using camelCase, reflecting the action they perform. For example, `getPoolAPR`.

- **Mutations**: Mutations follow a similar naming convention, often starting with a verb that describes the action, such as `createPool`, `updatePool`, or `deletePool`.

### Directory Structure

Keep your GraphQL queries and mutations in the `queries` and `mutations` directories, respectively. This helps in organizing GraphQL operations.

### Example

Here is an example of how you might use a generated type in your code

```bash
import { GetPoolAprQuery } from "@/src/generated/graphql";

// Use the type in your query function
const result = await request<GetPoolAprQuery>({
  url: SQDIndexerUrl,
  document: getPoolAPRQuery,
  variables: { poolId, time24HoursAgo },
});
```

By following these guidelines, you can effectively manage and utilize the generated types for GraphQL operations.
