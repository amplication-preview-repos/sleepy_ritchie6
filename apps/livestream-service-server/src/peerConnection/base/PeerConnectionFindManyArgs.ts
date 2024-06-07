/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PeerConnectionWhereInput } from "./PeerConnectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PeerConnectionOrderByInput } from "./PeerConnectionOrderByInput";

@ArgsType()
class PeerConnectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PeerConnectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PeerConnectionWhereInput, { nullable: true })
  @Type(() => PeerConnectionWhereInput)
  where?: PeerConnectionWhereInput;

  @ApiProperty({
    required: false,
    type: [PeerConnectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PeerConnectionOrderByInput], { nullable: true })
  @Type(() => PeerConnectionOrderByInput)
  orderBy?: Array<PeerConnectionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PeerConnectionFindManyArgs as PeerConnectionFindManyArgs };