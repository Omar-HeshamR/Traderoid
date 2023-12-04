import React, { useState, useEffect } from 'react'
import LeftBar from '@/components/LeftBar'
import TopBar from '@/components/TopBar'
import {Section, ScrollableContainer, CardGrid} from '@/library/structure'
import BotCard from '@/components/BotCard'
import TradioABI from "@/contracts/abi/TraderoidABI.json"
import { Traderiod_NFT_CONTRACT_ADDRESS } from '@/CENTERAL_VALUES';
import { ethers } from 'ethers';
import { useStorage, useSigner } from '@thirdweb-dev/react';

const Marketplace = () => {
  
  const [nftData, setNftData] = useState([]);
  const signer = useSigner();
  const storage = useStorage();

  useEffect(() => {
    const asyncFunc = async () => {
        if(!signer){return}
        const contract = new ethers.Contract(Traderiod_NFT_CONTRACT_ADDRESS, TradioABI, signer);
        const tokenURIs = await contract.getAllTokenURIs(); // Replace with your contract's method
        const dataPromises = tokenURIs.map(async (uri, index) => {
          const data = await storage.download(uri);
          const metadataResponse = await fetch(data.url);
          const botWalletAddress = await contract.BotsWalletAddresses(index);
          const metadata = await metadataResponse.json();
          metadata.walletAddress = botWalletAddress;
          return metadata;
        });
        const results = await Promise.all(dataPromises);
        setNftData(results);
        console.log(results)
    }
    asyncFunc()
  }, [signer])

  return (
    <Section>

      <LeftBar selected="marketplace"/>

      <ScrollableContainer>

        <TopBar header="Explore trending bots" type="filter"/>

        <CardGrid>
          {nftData.map((botObject, index) => (
              <BotCard bot_object={botObject} key={index}/>
          ))}
        </CardGrid>

      </ScrollableContainer>

      {/* <InvestModal/> */}

      {/* <WithdrawModal /> */}

    </Section>
  )
}

export default Marketplace