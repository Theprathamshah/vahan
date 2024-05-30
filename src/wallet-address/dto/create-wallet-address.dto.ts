import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateWalletAddressDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  address: string;
}
