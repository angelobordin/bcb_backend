import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCustomerDto {
	@IsNotEmpty()
	@IsString()
	@MaxLength(100)
	name: string;

	@MaxLength(14)
	@MinLength(14)
	@IsNotEmpty()
	@IsString()
	cnpj: string;

	@MaxLength(100)
	@IsNotEmpty()
	@IsString()
	responsible_name: string;

	@MaxLength(100)
	@IsNotEmpty()
	@IsEmail()
	responsible_email: string;

	@MaxLength(11)
	@MinLength(11)
	@IsNotEmpty()
	@IsString()
	responsible_cellphone: string;

	@MaxLength(11)
	@MinLength(11)
	@IsNotEmpty()
	@IsString()
	responsible_cpf: string;
}
