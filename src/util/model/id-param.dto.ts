import { IsNotEmpty } from "class-validator";

export class IdParam {
	@IsNotEmpty()
	id: string;
}
