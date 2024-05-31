import {
    AbiItem
} from 'web3-utils'

export const FLUID_A: AbiItem[] = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vaultAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"int256","name":"newCol","type":"int256"},{"indexed":false,"internalType":"int256","name":"newDebt","type":"int256"}],"name":"LogOperate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"vaultAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"int256","name":"newCol","type":"int256"},{"indexed":false,"internalType":"int256","name":"newDebt","type":"int256"},{"indexed":false,"internalType":"uint256[]","name":"getIds","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"setIds","type":"uint256[]"}],"name":"LogOperateWithIds","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vaultAddress_","type":"address"},{"internalType":"uint256","name":"nftId_","type":"uint256"},{"internalType":"int256","name":"newCol_","type":"int256"},{"internalType":"int256","name":"newDebt_","type":"int256"},{"internalType":"uint256","name":"repayApproveAmt_","type":"uint256"}],"name":"operate","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"vaultAddress_","type":"address"},{"internalType":"uint256","name":"nftId_","type":"uint256"},{"internalType":"int256","name":"newCol_","type":"int256"},{"internalType":"int256","name":"newDebt_","type":"int256"},{"internalType":"uint256","name":"repayApproveAmt_","type":"uint256"},{"internalType":"uint256[]","name":"getIds_","type":"uint256[]"},{"internalType":"uint256[]","name":"setIds_","type":"uint256[]"}],"name":"operateWithIds","outputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"bytes","name":"_eventParam","type":"bytes"}],"stateMutability":"payable","type":"function"}]