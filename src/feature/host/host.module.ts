import { Module } from '@nestjs/common';
import { HostService } from './service/host.service';
import { HostController } from './controller/host.controller';

@Module({
  providers: [HostService],
  controllers: [HostController]
})
export class HostModule {}
