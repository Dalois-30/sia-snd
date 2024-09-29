import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CacheService } from './services/cache.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: 50, // seconds
      max: 100, // maximum number of items in cache
    }),
  ],
  exports: [
    HttpModule,
    CacheModule.register({
      ttl: 50, // seconds
      max: 100, // maximum number of items in cache
    }),
  ],
  providers: [
    CacheService
  ]
})
export class SharedModule {}
