import { IsNotEmpty, MaxLength } from "class-validator";

export class UpdateCustomerPlanParamsDto {
	@IsNotEmpty()
	customer_id: string;
}

export class UpdateCustomerPlanDto {
	@IsNotEmpty()
	id: number;

	@IsNotEmpty()
	customer_id: number;

	@IsNotEmpty()
	plan_type: string;

	@MaxLength(10)
	credit: string;

	@MaxLength(10)
	spend_limit: string;

	@MaxLength(10)
	account_limit: string;
}
