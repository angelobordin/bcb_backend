import { IsNotEmpty, MaxLength } from "class-validator";
import { IdParam } from "src/util/model/id-param.dto";

export class UpdateCustomerPlanParamsDto extends IdParam {}

export class UpdateCustomerPlanDto {
	@IsNotEmpty()
	id: number;

	@IsNotEmpty()
	customer_id: number;

	@IsNotEmpty()
	plan_type: string;

	@MaxLength(10)
	credit: number;

	@MaxLength(10)
	spent_limit: number;

	@MaxLength(10)
	account_limit: number;
}
