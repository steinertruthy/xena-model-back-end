import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';
import { StringUtils } from 'src/common/utils/string.utils';

export class CreateRoleDto {
  @IsString()
  @Length(1, 24)
  @Transform(({ value }: { value: string }) =>
    StringUtils.normalizedWork(value),
  )
  name: string;

  @IsString()
  @Length(1, 24)
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  tag: string;
}
