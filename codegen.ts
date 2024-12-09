import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://49f988ac-a875-4740-a610-478af353216d.squids.live/mira-indexer/v/v1/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
