import { IsNotEmpty } from "class-validator";

export class RegisterMessageDto {
	@IsNotEmpty()
	customer_id: string;

	@IsNotEmpty()
	text: string;

	@IsNotEmpty()
	value: string;
}
