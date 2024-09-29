import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import * as https from 'https'

@Injectable()
export class ExternalRequestService {
    constructor(
        private httpService: HttpService
    ) { }

    httpAgent = new https.Agent({ 
        rejectUnauthorized: false,
        family: 4,
    });
    async get(url: string): Promise<any> {
        const response = await lastValueFrom(
            this.httpService.get(url, {
                httpsAgent: this.httpAgent,
            }).pipe(
                map(res => res.data)
            )
        );
        console.log(response);
        return response;
    }
}