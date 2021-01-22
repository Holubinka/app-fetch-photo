import { Inject, Injectable } from '@nestjs/common';
import { ResourceByPathService } from '../shared/resourceByPath.service';
import { Photo } from './photo.model';

@Injectable()
export class PhotoService {
  constructor(
    @Inject(ResourceByPathService)
    private resourceByPath: ResourceByPathService,
  ) {}

  async findOne(id: number): Promise<Photo> {
    return this.resourceByPath.getResourceByPath(`/photos/${id}`);
  }

  async findAll(albumId?: number): Promise<Photo[]> {
    if (albumId) {
      return this.resourceByPath.getResourceByPath(
        `/photos?albumId=${albumId}`,
      );
    }
    return this.resourceByPath.getResourceByPath('/photos');
  }
}
