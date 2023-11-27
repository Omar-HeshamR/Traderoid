import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, localWallet, 
  embeddedWallet} from "@thirdweb-dev/react";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * 
  {
    font-family: "Inter";
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none; 
    a {
      color: inherit; 
      text-decoration: none; 
    }
  }
`

export default function App({ Component, pageProps }) {
  return (<>
      <ThirdwebProvider
        activeChain="avalanche-fuji" clientId="cc42b11c37e27d6f284c1fd4203573d1"
        supportedWallets={[ metamaskWallet({ recommended: true }), coinbaseWallet(),walletConnect(),
          localWallet(), embeddedWallet({ auth: { options: ["email","google","apple","facebook",],},}),
        ]}
      >

      <GlobalStyle />
      <Component {...pageProps} />

    </ThirdwebProvider>
  </>)
}
