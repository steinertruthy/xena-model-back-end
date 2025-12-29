import { Transform } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';
import { StringUtils } from 'src/common/utils/string.utils';

export class CreateUserDto {
  @IsString()
  @Length(1, 32)
  @Transform(({ value }: { value: string }) =>
    StringUtils.normalizedWork(value),
  )
  name: string;

  @IsEmail()
  @Length(6, 120)
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  email: string;

  @IsString()
  account_type_id: string;

  @IsString()
  @Length(8, 120)
  password: string;
}
