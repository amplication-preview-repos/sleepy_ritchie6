/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumPeerConnectionStatus } from "./EnumPeerConnectionStatus";
import { StreamWhereUniqueInput } from "../../stream/base/StreamWhereUniqueInput";

@InputType()
class PeerConnectionWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumPeerConnectionStatus,
  })
  @IsEnum(EnumPeerConnectionStatus)
  @IsOptional()
  @Field(() => EnumPeerConnectionStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => StreamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StreamWhereUniqueInput)
  @IsOptional()
  @Field(() => StreamWhereUniqueInput, {
    nullable: true,
  })
  stream?: StreamWhereUniqueInput;
}

export { PeerConnectionWhereInput as PeerConnectionWhereInput };