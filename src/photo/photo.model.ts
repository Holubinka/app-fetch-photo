import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Photo {
  @Field((type) => ID)
  id: number;

  @Field()
  albumId: number;

  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  thumbnailUrl: string;
}
