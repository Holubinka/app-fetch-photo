import { PhotoService } from './photo.service';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Photo } from './photo.model';

@Resolver((of) => Photo)
export class PhotoResolver {
  constructor(@Inject(PhotoService) private customerService: PhotoService) {}

  @Query((returns) => Photo)
  photo(@Args('id') id: number): Promise<Photo> {
    return this.customerService.findOne(id);
  }

  @Query((returns) => [Photo])
  getPhotos(@Args('albumId', { nullable: true }) albumId?: number): Promise<Photo[]> {
    return this.customerService.findAll(albumId);
  }
}
