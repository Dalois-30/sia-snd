import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { ExternalRequestService } from 'src/shared/services/external-request.service';

@Injectable()
export class BlockService {
    constructor(
        private readonly externalRequestService: ExternalRequestService
    ) { 
        this.getLatestBlock();
    }

    private readonly blockUrl = process.env.BASE_URL;

    async getLatestBlock(): Promise<any> {
        const url = `${this.blockUrl}/explorer/blocks`;
        log(url);
        return await this.externalRequestService.get(url);
    }

    async getBlockByHash(blockHash: string): Promise<any> {
        const url = `${this.blockUrl}/explorer/blocks/${blockHash}`;
        return await this.externalRequestService.get(url);
    }
}