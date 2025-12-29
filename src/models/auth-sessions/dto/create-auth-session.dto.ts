import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class CreateAuthSessionDto {
  @IsString()
  @Length(6, 120)
  email: string;

  @IsString()
  @Length(8, 120)
  password: string;

  @IsOptional()
  @IsBoolean()
  cookiesEnabled: boolean = true;
}
