export const contractAbI = [
	{
		inputs: [{ internalType: 'uint16', name: '_chainId', type: 'uint16' }],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint16',
				name: 'version',
				type: 'uint16',
			},
		],
		name: 'DefaultReceiveVersionSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint16',
				name: 'version',
				type: 'uint16',
			},
		],
		name: 'DefaultSendVersionSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint16',
				name: 'version',
				type: 'uint16',
			},
		],
		name: 'NewLibraryVersionAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint16',
				name: 'srcChainId',
				type: 'uint16',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'srcAddress',
				type: 'bytes',
			},
			{ indexed: false, internalType: 'uint64', name: 'nonce', type: 'uint64' },
			{
				indexed: false,
				internalType: 'address',
				name: 'dstAddress',
				type: 'address',
			},
		],
		name: 'PayloadCleared',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint16',
				name: 'srcChainId',
				type: 'uint16',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'srcAddress',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'dstAddress',
				type: 'address',
			},
			{ indexed: false, internalType: 'uint64', name: 'nonce', type: 'uint64' },
			{ indexed: false, internalType: 'bytes', name: 'payload', type: 'bytes' },
			{ indexed: false, internalType: 'bytes', name: 'reason', type: 'bytes' },
		],
		name: 'PayloadStored',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint16',
				name: 'chainId',
				type: 'uint16',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'srcAddress',
				type: 'bytes',
			},
		],
		name: 'UaForceResumeReceive',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'ua', type: 'address' },
			{
				indexed: false,
				internalType: 'uint16',
				name: 'version',
				type: 'uint16',
			},
		],
		name: 'UaReceiveVersionSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'ua', type: 'address' },
			{
				indexed: false,
				internalType: 'uint16',
				name: 'version',
				type: 'uint16',
			},
		],
		name: 'UaSendVersionSet',
		type: 'event',
	},
	{
		inputs: [],
		name: 'BLOCK_VERSION',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'DEFAULT_VERSION',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'chainId',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'defaultReceiveLibraryAddress',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'defaultReceiveVersion',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'defaultSendLibrary',
		outputs: [
			{
				internalType: 'contract ILayerZeroMessagingLibrary',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'defaultSendVersion',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
			{ internalType: 'address', name: '_userApplication', type: 'address' },
			{ internalType: 'bytes', name: '_payload', type: 'bytes' },
			{ internalType: 'bool', name: '_payInZRO', type: 'bool' },
			{ internalType: 'bytes', name: '_adapterParams', type: 'bytes' },
		],
		name: 'estimateFees',
		outputs: [
			{ internalType: 'uint256', name: 'nativeFee', type: 'uint256' },
			{ internalType: 'uint256', name: 'zroFee', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
			{ internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
		],
		name: 'forceResumeReceive',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getChainId',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_version', type: 'uint16' },
			{ internalType: 'uint16', name: '_chainId', type: 'uint16' },
			{ internalType: 'address', name: '_userApplication', type: 'address' },
			{ internalType: 'uint256', name: '_configType', type: 'uint256' },
		],
		name: 'getConfig',
		outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
			{ internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
		],
		name: 'getInboundNonce',
		outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
			{ internalType: 'address', name: '_srcAddress', type: 'address' },
		],
		name: 'getOutboundNonce',
		outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: '_userApplication', type: 'address' },
		],
		name: 'getReceiveLibraryAddress',
		outputs: [
			{
				internalType: 'address',
				name: 'receiveLibraryAddress',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: '_userApplication', type: 'address' },
		],
		name: 'getReceiveVersion',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: '_userApplication', type: 'address' },
		],
		name: 'getSendLibraryAddress',
		outputs: [
			{ internalType: 'address', name: 'sendLibraryAddress', type: 'address' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: '_userApplication', type: 'address' },
		],
		name: 'getSendVersion',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
			{ internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
		],
		name: 'hasStoredPayload',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '', type: 'uint16' },
			{ internalType: 'bytes', name: '', type: 'bytes' },
		],
		name: 'inboundNonce',
		outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'isReceivingPayload',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'isSendingPayload',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'latestVersion',
		outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
		name: 'libraryLookup',
		outputs: [
			{
				internalType: 'contract ILayerZeroMessagingLibrary',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_newLayerZeroLibraryAddress',
				type: 'address',
			},
		],
		name: 'newVersion',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '', type: 'uint16' },
			{ internalType: 'address', name: '', type: 'address' },
		],
		name: 'outboundNonce',
		outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
			{ internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
			{ internalType: 'address', name: '_dstAddress', type: 'address' },
			{ internalType: 'uint64', name: '_nonce', type: 'uint64' },
			{ internalType: 'uint256', name: '_gasLimit', type: 'uint256' },
			{ internalType: 'bytes', name: '_payload', type: 'bytes' },
		],
		name: 'receivePayload',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
			{ internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
			{ internalType: 'bytes', name: '_payload', type: 'bytes' },
		],
		name: 'retryPayload',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
			{ internalType: 'bytes', name: '_destination', type: 'bytes' },
			{ internalType: 'bytes', name: '_payload', type: 'bytes' },
			{
				internalType: 'address payable',
				name: '_refundAddress',
				type: 'address',
			},
			{ internalType: 'address', name: '_zroPaymentAddress', type: 'address' },
			{ internalType: 'bytes', name: '_adapterParams', type: 'bytes' },
		],
		name: 'send',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '_version', type: 'uint16' },
			{ internalType: 'uint16', name: '_chainId', type: 'uint16' },
			{ internalType: 'uint256', name: '_configType', type: 'uint256' },
			{ internalType: 'bytes', name: '_config', type: 'bytes' },
		],
		name: 'setConfig',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint16',
				name: '_newDefaultReceiveVersion',
				type: 'uint16',
			},
		],
		name: 'setDefaultReceiveVersion',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint16',
				name: '_newDefaultSendVersion',
				type: 'uint16',
			},
		],
		name: 'setDefaultSendVersion',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint16', name: '_newVersion', type: 'uint16' }],
		name: 'setReceiveVersion',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint16', name: '_newVersion', type: 'uint16' }],
		name: 'setSendVersion',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint16', name: '', type: 'uint16' },
			{ internalType: 'bytes', name: '', type: 'bytes' },
		],
		name: 'storedPayload',
		outputs: [
			{ internalType: 'uint64', name: 'payloadLength', type: 'uint64' },
			{ internalType: 'address', name: 'dstAddress', type: 'address' },
			{ internalType: 'bytes32', name: 'payloadHash', type: 'bytes32' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'uaConfigLookup',
		outputs: [
			{ internalType: 'uint16', name: 'sendVersion', type: 'uint16' },
			{ internalType: 'uint16', name: 'receiveVersion', type: 'uint16' },
			{
				internalType: 'address',
				name: 'receiveLibraryAddress',
				type: 'address',
			},
			{
				internalType: 'contract ILayerZeroMessagingLibrary',
				name: 'sendLibrary',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];
