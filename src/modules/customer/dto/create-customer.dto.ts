import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  @MaxLength(14)
  @MinLength(14)
  @IsNotEmpty()
  cnpj: string;
  
  @MaxLength(100)
  @IsNotEmpty()
  responsible_name: string;
  
  @MaxLength(100)
  @IsNotEmpty()
  @IsEmail()
  responsible_email: string;
  
  @MaxLength(11)
  @MinLength(11)
  @IsNotEmpty()
  responsible_cellphone: string;
  
  @MaxLength(11)
  @MinLength(11)
  @IsNotEmpty()
  responsible_cpf: string;
}
