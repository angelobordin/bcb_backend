import { IsNotEmpty } from "class-validator";

export class GetCustomerPlanDto {
	@IsNotEmpty()
	id: string;
}
