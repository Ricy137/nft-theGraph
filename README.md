# nft-theGraph

A NFT project demo, experiment purpose for The Graph and PWA. ( the Graph doesn't support hosted service on sepolia while developing, so it's using ethereum goerli network)

# introducation

The project contains a minting page and a library page, and you can visit the details of each NFT through the library page.

## The Graph

Each NFT details are read from customized the Graph API, which you can play : [here](https://thegraph.com/hosted-service/subgraph/ricy137/fake-doodles)

## PWA

The project is PWA(Progressive Web Application), which means you can "install" it on your mobile or desktop.
The main goal of the PWA is to provide users a better accessibility(especially for mobile users), while maintain the web apps' _reach anyone, anyone on any device_ and avoid the annoying process of native app installation. Besides, it can also work offline! (requests involves network won't function, but it will provide an offline page, so even thoug user's offline, it won't be an empty page. Such a feature was only available in native app, but now it's available in PWA too! it will provider better user experience for users with bad network)

- Though the minting function is unavailable on mobile currently, it's still a good practice to build a PWA and attract mobile users.
- Please check your browser's support before using the feature, even if your browser doens't support it, the project will works as normal

### PWA Mobile installation

- Android: click the "install" button on the top right corner of the browser
- iOS: click the "share" button of the browser, and then click "add to home screen"

[live demo](https://nft-the-graph.vercel.app/)

## Tech stack

- React
- Typescript
- UnoCSS
- The Graph
- Vite
