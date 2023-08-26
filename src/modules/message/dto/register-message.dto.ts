import { IsNotEmpty, IsNumber, IsString, Max, MaxLength } from "class-validator";

export class RegisterMessageDto {
	@IsNotEmpty()
	@IsNumber()
	customer_id: number;

	@IsNotEmpty()
	@IsString()
	text: string;

	@IsNotEmpty()
	@MaxLength(4)
	@IsNumber()
	value: number;
}
