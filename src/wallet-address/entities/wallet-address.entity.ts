import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WalletAddress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(() => User, user => user.walletAddresses)
    user: User;

    @Column()
    userId: number;
}
