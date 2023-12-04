export const FUJI_CL_FUNCTIONS_ROUTER = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0";
export const FUJI_CL_FUNCTIONS_DON_ID = "0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000";
export const FUJI_SECERTS_ENCRYPT_GATEAWAY = "https://01.functions-gateway.testnet.chain.link/";
export const SUSHISWAP_ROUTER = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
export const Traderiod_NFT_CONTRACT_ADDRESS = "0xF34964D5399109fbDF19524F08B0939eaFe9978c"

// const funcType='1';const amountIn='20000000000000000';const amountOutMin = '0';const address1 = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c';const address2 = '0x97dB2DA85708C4cDB73D9601FDE3C1d4f3a0CdaE';const deadline = '100000000000000000';const string = `${funcType},${amountIn},${amountOutMin},${address1},${address2},${deadline}`;return Functions.encodeString(string.toString());

/** DOCUMENTATION
 *  // https://docs.traderjoexyz.com/guides/swap-tokens
 * 
 * Your Script must comply with chainlink's functions JS source code requirments
 * Your script's return function must follow the following format:
 * 
 * return Functinos.encodeString(returnableActions)
 * 
 * returnableActions = "x,x,x,x,x,x" // paramteres seprated by ","
 * 
 * 
 * After minting your NFT, use Chainlink Automation to automatically have excuteTrade();
 * 
 * */ 

