// Purpose: Contains texts that will be used in the UI when rendering the buttons
// label has to be the exact same as in your candy machine config
import CollectionImg from './collection.jpg'
export const mintText = [
  { label: "WL", mintText: "WL mint paying with SOL", buttonLabel: "Mint now!", header: "WL Mint" },
  { label: "OG", mintText: "Mint Paying with ABC", buttonLabel: "Mint now!", header: "OG Mint" },
  { label: "Public", mintText: "Mint Cyberopolis Exclusive NFT", buttonLabel: "Mint now!", header: "Public Mint" },
  { label: "default", mintText: "default mintText", buttonLabel: "Mint now!", header: "Default"}
];

//header image in the ui. replace with your own
console.log(CollectionImg.src);
export const image = CollectionImg.src;

//website title
export const headerText = "Cyberopolis Mint";