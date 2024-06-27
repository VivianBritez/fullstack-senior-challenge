import { IsEmail, MinLength, MaxLength, IsNotEmpty } from "class-validator";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { RegisterDto } from "./register.dto";

export class LoginDto extends PartialType(RegisterDto) {

  @ApiProperty({ example: 'john@example.com', description: 'Email address of the user' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123', description: 'Password of the user (min length 4, max length 12)' })
  @MinLength(4)
  @MaxLength(12)
  @IsNotEmpty()
  password: string;

}
