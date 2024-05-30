import { WalletAddress } from 'src/wallet-address/entities/wallet-address.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
    @OneToMany(() => WalletAddress, walletAddress => walletAddress.user)
    walletAddresses:WalletAddress[]
}
