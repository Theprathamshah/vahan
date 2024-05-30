import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletAddress } from './entities/wallet-address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WalletAddressService {

  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) { }

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<WalletAddress> {
    return this.walletAddressRepository.findOne({ where: { id }, relations: ['user'] });
  }

  create(walletAddress: WalletAddress): Promise<WalletAddress> {
    return this.walletAddressRepository.save(walletAddress);
  }

  async update(id: number, walletAddress: Partial<WalletAddress>): Promise<void> {
    await this.walletAddressRepository.update(id, walletAddress);
  }

  async remove(id: number): Promise<void> {
    await this.walletAddressRepository.delete(id);
  }
}
