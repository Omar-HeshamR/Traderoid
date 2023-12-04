// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PullPrices {

    address[] public dataFeedAddresses;

    /**
     * Network: C-chain Fuji
     */
    constructor() {
        // for more: https://docs.chain.link/data-feeds/price-feeds/addresses?network=avalanche&page=1
        dataFeedAddresses = [
            0x5498BB86BC934c8D34FDA08E81D444153d0D06aD, // AVAX/USD
            0x31CF013A08c6Ac228C94551d535d5BAfE19c602a, // BTC/USD
            0x86d67c3D38D2bCeE722E601025C25a575021c6EA, // ETH/USD
            0x34C4c526902d88a3Aa98DB8a9b802603EB1E3470, // LINK/USD
            0xB0924e98CAFC880ed81F6A4cA63FD61006D1f8A0, // MATIC/USD
            0x38a9B7d0BEEc7e63E373853B5772FeF57633FE1E, // Mana/USD
            0x7b219F57a8e9C7303204Af681e9fA69d17ef626f  // UNI/USD
        ];
    }

    /**
     * Returns the latest answer.
     */
    function getLatestAnswers() public view returns (int[] memory) {
        int[] memory answers = new int[](dataFeedAddresses.length);
        for (uint i = 0; i < dataFeedAddresses.length; i++) {
            AggregatorV3Interface dataFeed = AggregatorV3Interface(dataFeedAddresses[i]);
            (, int answer,,,) = dataFeed.latestRoundData();
            answers[i] = answer;
        }
        return answers;
    }
}
