import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class SignUpDto {
  @ApiPropertyOptional({
    example: 'Rana',
    description: 'Optional display name of the user',
  })
  @IsOptional()
  userName?: string;

  @ApiProperty({
    example: 'ranarasul21@gmail.com',
    description: 'User email address (must be unique)',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '01857866723',
    description: 'User phone number',
  })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: 'secret123',
    minLength: 6,
    description: 'Password (minimum 6 characters)',
  })
  @MinLength(6)
  password: string;
}

