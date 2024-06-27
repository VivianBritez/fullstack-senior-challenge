import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  

  @ApiProperty({ example: 'john@example.com', description: 'Email address of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123', description: 'Password of the user' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'john_doe', description: 'Name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john_doe', description: 'Last name of the user' })
  @IsString()
  last_name: string;
}
