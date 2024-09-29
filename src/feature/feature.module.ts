import { Module } from '@nestjs/common';
import { BlockModule } from './block/block.module';
import { TransactionModule } from './transaction/transaction.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HostModule } from './host/host.module';

@Module({
  imports: [BlockModule, TransactionModule, DashboardModule, HostModule]
})
export class FeatureModule {}
