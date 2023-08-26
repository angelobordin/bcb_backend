import { IsNotEmpty, MaxLength, maxLength } from "class-validator";

export class CreateCustomerPlanDto {
	@IsNotEmpty()
	customer_id: number;

	@IsNotEmpty()
	plan_type: string;

	@MaxLength(10)
	credit: number;

	@MaxLength(10)
	spend_limit: number;

	@MaxLength(10)
	account_limit: number;
}
