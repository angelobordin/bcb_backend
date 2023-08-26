import { IsNotEmpty, IsNumber, MaxLength, maxLength } from "class-validator";

export class CreateCustomerPlanDto {
	@IsNotEmpty()
	@IsNumber()
	customer_id: number;

	@IsNotEmpty()
	plan_type: string;

	@MaxLength(10)
	@IsNumber()
	credit: number;

	@MaxLength(10)
	@IsNumber()
	spend_limit: number;

	@MaxLength(10)
	@IsNumber()
	account_limit: number;
}
