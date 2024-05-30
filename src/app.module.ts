import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { WalletAddressModule } from './wallet-address/wallet-address.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'password',
    username: 'postgres',
    entities: [],
    database: 'postgres',
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
  }),
    UserModule,
    WalletAddressModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
