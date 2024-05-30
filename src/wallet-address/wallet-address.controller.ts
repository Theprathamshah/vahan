import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './entities/wallet-address.entity';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';

@Controller('wallet')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) { }

  @Get()
  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<WalletAddress> {
    return this.walletAddressService.findOne(id);
  }

  @Post()
  create(@Body() createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = new WalletAddress();
    walletAddress.userId = createWalletAddressDto.userId;
    walletAddress.address = createWalletAddressDto.address;
    return this.walletAddressService.create(walletAddress);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() walletAddress: Partial<WalletAddress>): Promise<void> {
    return this.walletAddressService.update(id, walletAddress);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.walletAddressService.remove(id);
  }
}
