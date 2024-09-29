import { Module } from '@nestjs/common';
import { BlockService } from './service/block.service';
import { BlockController } from './block/block.controller';
import { ExternalRequestService } from 'src/shared/services/external-request.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [BlockService, ExternalRequestService],
  controllers: [BlockController],
  imports: [SharedModule]
})
export class BlockModule {}
