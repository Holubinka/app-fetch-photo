import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoResolver } from './photo.resolver';
import { ResourceByPathModule } from '../shared/resourceByPath.module';
import { ResourceByPathService } from '../shared/resourceByPath.service';

@Module({
  imports: [ResourceByPathModule],
  providers: [PhotoService, PhotoResolver, ResourceByPathService],
})
export class PhotoModule {}
