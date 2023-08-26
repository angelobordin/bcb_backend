import { IsNotEmpty, MaxLength } from "class-validator";
import { IdParam } from "src/util/model/id-param.dto";

export class UpdateCreditParamsDto extends IdParam {}

export class UpdateCreditDto {
	@IsNotEmpty()
	id: number;

	@IsNotEmpty()
	@MaxLength(10)
	credit: string;
}
