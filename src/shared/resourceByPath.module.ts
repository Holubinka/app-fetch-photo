import { Module } from '@nestjs/common';
import { ResourceByPathService } from './resourceByPath.service';

@Module({
  providers: [ResourceByPathService],
})
export class ResourceByPathModule {}
