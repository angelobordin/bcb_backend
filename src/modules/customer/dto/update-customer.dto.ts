import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { IdParam } from "src/util/model/id-param.dto";

export class UpdateCustomerDto {
	@IsNotEmpty()
	@IsNumber()
	id: number;

	@IsNotEmpty()
	@IsString()
	@MaxLength(100)
	name: string;

	@MaxLength(14)
	@MinLength(14)
	@IsNotEmpty()
	@IsString()
	cnpj: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(100)
	responsible_name: string;

	@IsNotEmpty()
	@IsString()
	@MaxLength(100)
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

export class UpdateCustomerParamsDto extends IdParam {}
