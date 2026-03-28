import { http, createConfig } from 'wagmi'
import { bscTestnet } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'
import { PROJECT_ID } from '../../../env';

export const config = createConfig({
  chains: [bscTestnet],
  transports: {
    [bscTestnet.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({
      projectId: PROJECT_ID,
    }),
  ],
})