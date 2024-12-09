// This file is necessary to allow import of .graphql files in the codebase.
declare module "*.graphql" {
  import {DocumentNode} from "graphql";
  const content: DocumentNode;
  export default content;
}
