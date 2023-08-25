import { IsNotEmpty, MaxLength } from "class-validator";

export class UpdateCreditParamsDto {
	@IsNotEmpty()
	id: string;
}

export class UpdateCreditDto {
	@IsNotEmpty()
	id: number;

	@IsNotEmpty()
	@MaxLength(10)
	credit: string;
}
