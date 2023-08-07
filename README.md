# nft-theGraph

A NFT project demo, experiment purpose for The Graph and PWA. ( the Graph doesn't support hosted service on sepolia while developing, so it's using ethereum goerli network)

# introducation
The project contains a minting page and a library page, and you can visit the details of each NFT through the library page. Each NFT details are read by customized the Graph API, which you can play : [here](https://thegraph.com/hosted-service/subgraph/ricy137/fake-doodles)

[live demo](https://nft-the-graph.vercel.app/)

## Tech stack
- React
- Typescript
- UnoCSS
- The Graph
- Vite

## codes structure
- `src/components`: contains all the components, which are common components used by different projects
- `src/hooks`: contains all the common hooks, which can be used by different projects
- `src/pages`: contains all the pages
- `src/utils`: contains all the utils functions
- `src/services`: project specific, for project's state management 
- `src/modules`: project specific components
