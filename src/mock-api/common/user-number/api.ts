import { Injectable } from "@nestjs/common";
import { user_number } from "@prisma/client";

interface UserNumber {}

@Injectable()
export class UserNumbersApi {
	private readonly numberList: user_number[] = [
		{
			id: 1,
			cellphone: "47992048932",
			whatsapp: true,
		},
	];

	public get numbers(): user_number[] {
		return this.numberList;
	}
}
