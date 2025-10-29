'use server';

import { connectDB } from '../mongodb';
import { User } from '@/models/User';
import * as bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import { ethers } from 'ethers';
import { encryptText } from '@/lib/crypto-utils';

export async function createWallets(email: string, fullname: string) {
  await connectDB();

  // === Check if user already exists ===
  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error('Email already registered.');
  }

  // === BTC Wallet Generation (Legacy P2PKH) ===
  const btcMnemonic = bip39.generateMnemonic(); // 12-word mnemonic
  const seed = await bip39.mnemonicToSeed(btcMnemonic);

  // Directly use bitcoin.bip32 (works on v5.x)
  const root = bitcoin.bip32.fromSeed(seed);

  // Derive first account using BIP44 path for Bitcoin
  const path = "m/44'/0'/0'/0/0";
  const child = root.derivePath(path);

  // Generate Bitcoin address (mainnet)
  const { address: btcAddress } = bitcoin.payments.p2pkh({
    pubkey: child.publicKey,
    network: bitcoin.networks.bitcoin,
  });

  // Export private key (WIF format)
  const btcPrivateKey = child.toWIF();

  // === ETH Wallet Generation ===
  const ethWallet = ethers.Wallet.createRandom();
  const ethAddress = await ethWallet.getAddress();
  const ethMnemonic = ethWallet.mnemonic?.phrase || null;
  const ethPrivateKey = ethWallet.privateKey;

  // USDT (ERC20) uses same ETH address
  const usdtAddress = ethAddress;

  // === Encrypt sensitive data ===
  const btcMnemonicEncrypted = encryptText(btcMnemonic);
  const btcPrivateKeyEncrypted = encryptText(btcPrivateKey);
  const ethMnemonicEncrypted = ethMnemonic ? encryptText(ethMnemonic) : null;
  const ethPrivateKeyEncrypted = encryptText(ethPrivateKey);

  // === Save user to MongoDB ===
  const newUser = await User.create({
    fullname,
    email,
    btcAddress,
    ethAddress,
    usdtAddress,
    btcMnemonicEncrypted,
    btcPrivateKeyEncrypted,
    ethMnemonicEncrypted,
    ethPrivateKeyEncrypted,
  });

  // === Return public-only details ===
  return {
    user: {
      _id: newUser._id,
      fullname: newUser.fullname,
      email: newUser.email,
      btcAddress: newUser.btcAddress,
      ethAddress: newUser.ethAddress,
      usdtAddress: newUser.usdtAddress,
    },
  };
}
