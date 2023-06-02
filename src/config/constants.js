export const DevWallet = '0x99E877887Dc1fE2Bf960FE5fe24C5C5808609F59';
export const IPFS_BASE_URL = 'https://ipfs.io/ipfs/';
export const VIDEO_TYPE = ['video/mp4', 'video/mov', 'video/webm'];
export const IMAGE_TYPE = [
	'image/jpeg',
	'image/png',
	'image/gif',
	'image/svg',
	'image/jpg',
];
export const AUDIO_TYPE = ['audio/mpeg'];

export const NFTAddr = {
	56: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	97: '0x900b2d10ac7cf25A2446ed78F9f0a5ba4aa3242E',
	324: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	42161: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	421613: '0x566247811Dc653c37d3A75894bE8eA2d67303394',
	280: '0xC3475125F04f0811d41519A8AB5Ad89ee64c1b82',
	80001: '0x9a8C76FFEEBf291f7C718Bfbb5628D73d0aC3069',
};

export const EndpointAddress = {
	10102: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	97: '0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1',
	324: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	42161: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	10143: '0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab',
	280: '0x6BDB4Eff77dcBB4a4E9D39cA99B5e7c0e315e7c2',
	10109: '0xf69186dfBa60DdB133E91E9A4B5673624293d8F8',
	10165: '0x093D2CF57f764f09C3c2Ac58a42A2601B8C79281',
};

export const CHAIN_ZKMAIN = 324;
export const CHAIN_ZKTEST = 280;
export const CHAIN_BSC = 56;
export const CHAIN_ARBI_ONE = 42161;
export const CHAIN_BSC_TEST = 97;
export const CHAIN_ARBI_TEST = 421613;
export const CHAIN_POLY_TEST = 80001;

export const CHAIN_INFO = {
	56: {
		chainId: '0x38',
		endPointChainId: '',
		chainName: 'Binace Smart Chain',
		nativeCurrency: {
			name: 'BNB',
			symbol: 'BNB',
			decimals: 18,
		},
		rpcUrls: ['https://bsc-dataseed.binance.org/'],
		blockExplorerUrls: ['https://bscscan.com/'],
	},
	97: {
		chainId: '0x61',
		endPointChainId: '10102',
		chainName: 'Binace Test Chain',
		nativeCurrency: {
			name: 'BNB',
			symbol: 'BNB',
			decimals: 18,
		},
		rpcUrls: ['https://bsc-testnet.public.blastapi.io'],
		blockExplorerUrls: ['https://testnet.bscscan.com'],
	},

	324: {
		chainId: '0x144',
		chainName: 'Zksync Main Net',
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://mainnet.era.zksync.io'],
		blockExplorerUrls: ['https://explorer.zksync.io/'],
	},

	42161: {
		chainId: '0xA4B1',
		chainName: 'Arbitrum One',
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://arbitrum-mainnet.infura.io'],
		blockExplorerUrls: ['https://arbiscan.io/'],
	},

	421613: {
		chainId: '0x66EED',
		endPointChainId: '10143',
		chainName: 'Arbitrum Testnet',
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
		blockExplorerUrls: ['https://goerli.arbiscan.io/'],
	},

	280: {
		chainId: '0x118',
		endPointChainId: '10165',
		chainName: 'Zksync Test Net',
		nativeCurrency: {
			name: 'ETH',
			symbol: 'ETH',
			decimals: 18,
		},
		rpcUrls: ['https://zksync2-testnet.zksync.dev'],
		blockExplorerUrls: ['https://goerli.explorer.zksync.io/'],
	},
	80001: {
		chainId: '0x13881',
		endPointChainId: '10109',
		chainName: 'Polygon Mumbai Testnet',
		nativeCurrency: {
			name: 'MATIC',
			symbol: 'MATIC',
			decimals: 18,
		},
		rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
		blockExplorerUrls: ['https://mumbai-explorer.matic.toda'],
	},
};
