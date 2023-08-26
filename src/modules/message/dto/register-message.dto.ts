import { IsNotEmpty } from "class-validator";

export class RegisterMessageDto {
	@IsNotEmpty()
	customer_id: number;

	@IsNotEmpty()
	text: string;

	@IsNotEmpty()
	value: number;
}
