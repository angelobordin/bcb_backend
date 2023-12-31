import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";
import { IdParam } from "src/util/model/id-param.dto";

export class UpdateMessageParamDto extends IdParam {}

export class UpdateMessageDto {
	@IsNotEmpty()
	text: string;

	@IsNotEmpty()
	@MaxLength(4)
	@IsNumber()
	value: number;
}
