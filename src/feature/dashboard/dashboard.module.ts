import { Module } from '@nestjs/common';
import { DashboardService } from './service/dashboard.service';
import { DashboardController } from './dashboard/dashboard.controller';

@Module({
  providers: [DashboardService],
  controllers: [DashboardController]
})
export class DashboardModule {}
