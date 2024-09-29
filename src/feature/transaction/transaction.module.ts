import { Module } from '@nestjs/common';
import { TransactionService } from './service/transaction.service';
import { TransactionController } from './transaction/transaction.controller';

@Module({
  providers: [TransactionService],
  controllers: [TransactionController]
})
export class TransactionModule {}
