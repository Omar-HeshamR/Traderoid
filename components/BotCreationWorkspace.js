import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import { COLORS } from '@/library/theme'
import { SIZING } from '@/library/sizing'
import { BotCreationWorkspaceInputLabel, BotCreationWorkspaceTagItem, 
BotCreationWorkspaceScriptConfigurationLabel, BotCreationWorkspaceUnderlinedSpan,
BotCreationWorkspaceDragAndDropYourScriptSpan, BotCreationWorkspaceOrSpan,
BotCreationWorkspaceAffirmationSpan, BotCreationWorkspaceFileNameSpan } from '@/library/typography'
import { MdClose } from "react-icons/md";
import { MdCloudUpload } from "react-icons/md";
import { useStorage } from "@thirdweb-dev/react";
import { ethers } from 'ethers';
import TradioABI from "@/contracts/abi/TraderoidABI.json"
import { Traderiod_NFT_CONTRACT_ADDRESS } from '@/CENTERAL_VALUES';

const BotCreationWorkspace = () => {

  const [botName, setBotName] = useState('');
  const [description, setDescription ] = useState('')
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const ManagementFee = useRef();
  const PerformanceFee = useRef()
  const fileInputRef = useRef(null);
  const [fileText, setFileText] = useState('');

  const storage = useStorage();

  const [isMinting, setIsMinting] = useState(false)
  const [mintMessege, setMintMessege] = useState('')
  async function handleNFTmint(){
    setIsMinting(true)
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const metadeta = {
        name: botName,
        manager: address,
        tags: selectedTags,
        description: description,
        assets: selectedAssets,
        ManagementFee: parseInt(ManagementFee.current.value),
        PerformanceFee: parseInt(PerformanceFee.current.value),
        script: fileText
    };
    console.log(metadeta)
    const contract = new ethers.Contract(Traderiod_NFT_CONTRACT_ADDRESS, TradioABI, signer);
    const url = await storage.upload(metadeta);
    const tx = await contract.safeMint(url, metadeta.ManagementFee);
    await tx.wait();
    console.log("NFT Minted!");
    setMintMessege("NFT Minted!");
    setIsMinting(false)
    }catch(err){
        console.log(err)
        setMintMessege(err.toString())
        setIsMinting(false)
    }
  }

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleTagRemove = (tag) => {
    const updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
    setSelectedTags(updatedTags);
  };

  const handleAssetSelect = (asset) => {
    if (!selectedAssets.includes(asset)) {
      setSelectedAssets([...selectedAssets, asset]);
    }
  };

  const handleAssetRemove = (asset) => {
    const updatedAssets = selectedAssets.filter((selectedAsset) => selectedAsset !== asset);
    setSelectedAssets(updatedAssets);
  };

  const PerformanceChange = () => {
    const inputValue = PerformanceFee.current.value;
    if (inputValue > 75) {
        PerformanceFee.current.value = 75;
    }
  };

  const ManagementChange = () => {
    const inputValue = ManagementFee.current.value;
    if (inputValue > 75) {
        ManagementFee.current.value = 75;
    }
  };

  const handleFileInputContainerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e) => {
    console.log('File input changed:', e.target.files);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setFileText(e.target.result);
      reader.readAsText(file);
      console.log('Selected file:', file);
      setUploadedFileName(file.name);
    }
  };

  return (
    <Section>
        <LabelAndInputColumn>
            <BotCreationWorkspaceInputLabel htmlFor="botName">
                Name of your bot
            </BotCreationWorkspaceInputLabel>
            <BotNameInput 
            id="botName" 
            maxLength={50} 
            placeholder="My bot"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            />
        </LabelAndInputColumn>

        <CentralRow>
            <LabelAndInputColumn>
                <BotCreationWorkspaceInputLabel>
                    Tags
                </BotCreationWorkspaceInputLabel>
                <SelectWrapper>
                <SelectedItemRow>
                    {selectedTags.map((tag) => (
                        <TagObject key={tag}>
                        <BotCreationWorkspaceTagItem>{tag}</BotCreationWorkspaceTagItem>
                        <CloseIcon onClick={() => handleTagRemove(tag)} />
                        </TagObject>
                    ))}
                    </SelectedItemRow>
                    <Select onChange={(e) => handleTagSelect(e.target.value)}>
                    <DeselectedOption></DeselectedOption>
                    <Option value="Risky">Risky</Option>
                    <Option value="Analytical">Analytical</Option>
                    <Option value="Trending">Trending</Option>
                    <Option value="2023">2023</Option>
                    <Option value="Stable">Stable</Option>
                    <Option value="Dynamic">Dynamic</Option>
                    </Select>
                </SelectWrapper>
            </LabelAndInputColumn>

            <LabelAndInputColumn>
                <BotCreationWorkspaceInputLabel>
                    Assets
                </BotCreationWorkspaceInputLabel>
                <SelectWrapper>
                <SelectedItemRow>
                    {selectedAssets.map((asset) => (
                        <TagObject key={asset}>
                        <BotCreationWorkspaceTagItem>{asset}</BotCreationWorkspaceTagItem>
                        <CloseIcon onClick={() => handleAssetRemove(asset)} />
                        </TagObject>
                    ))}
                    </SelectedItemRow>
                    <Select onChange={(e) => handleAssetSelect(e.target.value)}>
                    <DeselectedOption></DeselectedOption>
                    <Option value="BTC">Bitcoin</Option>
                    <Option value="ETH">ETH</Option>
                    <Option value="LINK">LINK</Option>
                    <Option value="MANIA">MANIA</Option>
                    <Option value="MATIC">MATIC</Option>
                    <Option value="UNI">UNI</Option>
                    </Select>
                </SelectWrapper>
            </LabelAndInputColumn>

            <LabelAndInputColumn>
                <BotCreationWorkspaceInputLabel>
                    Management Fee
                </BotCreationWorkspaceInputLabel>
                <FeeWrapper>
                    <SmallInput
                    placeholder="0.00"
                    type="number"
                    min="0"
                    max="5"
                    ref={ManagementFee}
                    onChange={ManagementChange}
                    />
                    %
                </FeeWrapper>
            </LabelAndInputColumn>

            <LabelAndInputColumn>
                <BotCreationWorkspaceInputLabel>
                    Performance Fee
                </BotCreationWorkspaceInputLabel>
                <FeeWrapper>
                    <SmallInput
                    placeholder="0.00"
                    type="number"
                    min="0"
                    max="75"
                    ref={PerformanceFee}
                    onChange={PerformanceChange}
                    />
                    %
                </FeeWrapper>
            </LabelAndInputColumn>           
        </CentralRow>

        <LabelAndInputColumn style={{marginTop: SIZING.px24}}>
            <BotCreationWorkspaceInputLabel>
                Description
            </BotCreationWorkspaceInputLabel>
            <Textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)}/>

        </LabelAndInputColumn>

        <LabelAndInputColumn style={{marginTop: SIZING.px24}}>
            <BotCreationWorkspaceScriptConfigurationLabel>
                For more information on how your script should be configured, please refer to this&nbsp;
                <BotCreationWorkspaceUnderlinedSpan>
                    link
                </BotCreationWorkspaceUnderlinedSpan>
            </BotCreationWorkspaceScriptConfigurationLabel>

            <FileInputContainer onClick={handleFileInputContainerClick}>
                <FileInput type="file" accept=".js" ref={fileInputRef} onChange={handleFileInputChange}/>
                {uploadedFileName ? (
                    <></>
                    ) : (
                    <CloudIcon />
                )}
                {uploadedFileName ? (
                    <BotCreationWorkspaceAffirmationSpan>
                        You&apos;ve successfully uploaded&nbsp;
                        <BotCreationWorkspaceFileNameSpan>
                            {uploadedFileName}
                        </BotCreationWorkspaceFileNameSpan>
                    </BotCreationWorkspaceAffirmationSpan>
                    ) : (
                    <BotCreationWorkspaceDragAndDropYourScriptSpan>
                        Drag &amp; Drop your script
                    </BotCreationWorkspaceDragAndDropYourScriptSpan>
                )}
                {uploadedFileName ? (
                    <></>
                    ) : (
                    <BotCreationWorkspaceOrSpan>
                        or
                    </BotCreationWorkspaceOrSpan>
                )}
                {uploadedFileName ? (
                    <BrowseFilesButton>
                        Change File
                    </BrowseFilesButton>
                    ) : (
                    <BrowseFilesButton>
                        Browse Files
                    </BrowseFilesButton>
                )}
            </FileInputContainer>

        </LabelAndInputColumn>

        <CreateBotButton onClick={handleNFTmint} disabled={isMinting} >
            Create
        </CreateBotButton>  
        {mintMessege && <>{mintMessege}</>}
    </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: column;
padding: ${SIZING.px36} ${SIZING.px36};
background-color: ${COLORS.Black875};
border-radius: ${SIZING.px16};
`
const LabelAndInputColumn = styled.div`
display: flex;
flex-direction: column;
gap: ${SIZING.px8};
`
const BotNameInput = styled.input`
line-height: 100%;
padding: ${SIZING.px8} ${SIZING.px16};
letter-spacing: -0.02rem;
font-size: ${SIZING.px16};
background-color: ${COLORS.Black850};
border: 1px solid ${COLORS.Black800};
outline: none;
border-radius: ${SIZING.px96};
color: ${COLORS.Black100};
font-family: "Uncut Sans Medium";

&:focus {
border-color: ${COLORS.Black600};
}
&::placeholder {
font-family: "Uncut Sans Regular";
color: ${COLORS.Black600};
}
`
const CentralRow = styled.div`
display: flex;
justify-content: space-between;
margin-top: ${SIZING.px24};
`
const SelectWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: ${SIZING.px352};
padding-left: ${SIZING.px4};
padding-right: ${SIZING.px16};
padding-top: ${SIZING.px4};
padding-bottom: ${SIZING.px4};
letter-spacing: -0.02rem;
font-size: ${SIZING.px16};
background-color: ${COLORS.Black850};
border: 1px solid ${COLORS.Black800};
outline: none;
border-radius: ${SIZING.px96};
color: ${COLORS.Black100};
font-family: "Uncut Sans Medium";
`
const Select = styled.select`
width: 18px;
background-color: transparent;
border: none;
outline: none;
`
const SelectedItemRow = styled.div`
display: flex;
align-items: center;
width: calc(100% - 18px - ${SIZING.px16});
gap: ${SIZING.px4};
-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%);
mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%);
overflow: scroll;
`
const TagObject = styled.div`
display: flex;
align-items: center;
padding: ${SIZING.px8} ${SIZING.px16};
gap: ${SIZING.px8};
background-color: ${COLORS.Black800};
border-radius: ${SIZING.px96};
`
const CloseIcon = styled(MdClose)`
font-size: ${SIZING.px12};
cursor: pointer;
fill: ${COLORS.Black300};

&:hover{
fill: ${COLORS.Black100};
}
`
const DeselectedOption = styled.option`
display: none;
`
const Option = styled.option`
background-color: ${COLORS.Black900Default};
`
const FeeWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: ${SIZING.px128};
padding: ${SIZING.px8} ${SIZING.px16};
background-color: ${COLORS.Black850};
border: 1px solid ${COLORS.Black800};
border-radius: ${SIZING.px96};
font-family: "Uncut Sans Bold";
color: ${COLORS.Black700};
`
const SmallInput = styled.input`
width: 80%;
line-height: 100%;
letter-spacing: -0.02rem;
font-size: ${SIZING.px16};
outline: none;
border: none;
background-color: transparent;
color: ${COLORS.Black100};
font-family: "Uncut Sans Medium";

&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

&[type=number] {
-moz-appearance: textfield;
}

&:focus {
border-color: ${COLORS.Black600};
}

&::placeholder {
font-family: "Uncut Sans Regular";
color: ${COLORS.Black600};
}
`
const Textarea = styled.textarea`
line-height: 130%;
padding: ${SIZING.px16};
font-size: ${SIZING.px16};
background-color: ${COLORS.Black850};
border: 1px solid ${COLORS.Black800};
outline: none;
border-radius: ${SIZING.px16};
color: ${COLORS.Black200};
font-family: "Uncut Sans Regular";
resize: none;

&:focus {
border-color: ${COLORS.Black600};
}
`
const FileInput = styled.input`
display: none;
`
const FileInputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: ${SIZING.px64};
font-size: ${SIZING.px16};
background-color: ${COLORS.Black850};
border: 1px dashed ${COLORS.Black800};
border-radius: ${SIZING.px16};
cursor: pointer;    
`
const CloudIcon = styled(MdCloudUpload)`
font-size: ${SIZING.px128};
fill: ${COLORS.Black800};
`
const BrowseFilesButton = styled.div`
margin-top: ${SIZING.px32};
padding: ${SIZING.px16} ${SIZING.px24};
letter-spacing: -0.05rem;
font-size: ${SIZING.px20};
font-family: "Uncut Sans Medium";
border: 1px solid ${COLORS.Black800};
color: ${COLORS.Black700};
border-radius: ${SIZING.px96};
transition: 0.4s ease-in-out;

&:hover{
color: ${COLORS.Black500};
border: 1px solid ${COLORS.Black600};
}
`
const CreateBotButton = styled.button`
margin-top: ${SIZING.px24};
padding: ${SIZING.px16} 0;
letter-spacing: -0.025rem;
font-size: ${SIZING.px20};
font-family: "Uncut Sans Semibold";
color: ${COLORS.StandardWhiteDefault};
background-color: ${COLORS.DartmouthGreen900Default};
border-radius: ${SIZING.px96};
border: none;
outline: none;
transition: 0.4s ease-in-out;
cursor: pointer;

&:hover{
background-color: ${COLORS.DartmouthGreen800};
}
`

export default BotCreationWorkspace