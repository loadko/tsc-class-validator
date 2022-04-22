import 'reflect-metadata'
import { Type } from 'class-transformer'
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

export class ParentDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ChildDto)
  items: ChildDto[]
}

export class ChildDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  age: string

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => SubChildDto)
  subItems: SubChildDto[]
}

export class SubChildDto {
  @IsString()
  @IsNotEmpty()
  age: string

  @IsString()
  @IsNotEmpty()
  tooth: string

  @IsString()
  @IsNotEmpty()
  footh: string
}