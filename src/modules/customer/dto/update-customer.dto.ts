import { IsNotEmpty } from "class-validator";
import { IdParam } from "src/util/model/id-param.dto";

export class UpdateCustomerDto {
	@IsNotEmpty()
	id: number;

	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	cnpj: string;

	@IsNotEmpty()
	responsible_name: string;

	@IsNotEmpty()
	responsible_email: string;

	@IsNotEmpty()
	responsible_cpf: string;

	@IsNotEmpty()
	responsible_cellphone: string;
}

export class UpdateCustomerParamsDto extends IdParam {}
