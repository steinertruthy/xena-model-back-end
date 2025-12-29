import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { StringUtils } from 'src/common/utils/string.utils';

export class CreateAccountTypeDto {
  @IsString()
  @Length(1, 24)
  @Transform(({ value }: { value: string }) =>
    StringUtils.normalizedWork(value),
  )
  name: string;

  @IsString()
  @Length(1, 24)
  @Transform(({ value }: { value: string }) => value.toLowerCase().trim())
  tag: string;

  @IsOptional()
  @IsString()
  @Length(0, 256)
  @Transform(({ value }: { value: string }) =>
    StringUtils.normalizedWork(value),
  )
  description: string;

  @IsOptional()
  @IsBoolean()
  is_public: boolean;

  @IsString()
  default_role_id: string;
}
