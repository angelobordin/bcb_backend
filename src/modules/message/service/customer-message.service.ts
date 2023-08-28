import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CustomerMessageRepository } from "../repository/customer-message.repository";
import { RegisterMessageDto } from "../dto/register-message.dto";
import { UpdateMessageDto } from "../dto/update-message.dto";
import { SendMessageDto } from "../dto/send-message.dto";
import { CustomerService } from "src/modules/customer/service/customer.service";

@Injectable()
export class CustomerMessageService {
	constructor(
		private prismaService: PrismaService,
		private repository: CustomerMessageRepository,
	) {}

	async getMessageList() {
		try {
			const result = await this.repository.getMessageList(this.prismaService);

			return {
				status: 200,
				message: "",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async registerMessage(newMessage: RegisterMessageDto) {
		try {
			const result = await this.repository.registerMessage(this.prismaService, newMessage);

			return {
				status: 200,
				message: "Mensagem cadastrada com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async updateMessage(messageId: number, newData: UpdateMessageDto) {
		try {
			const result = await this.repository.updateMessage(this.prismaService, messageId, newData);

			return {
				status: 200,
				message: "Mensagem atualizada com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async deleteMessagesByCustomerId(customerId: number) {
		try {
			const result = await this.repository.deleteMessageByCustomerId(this.prismaService, customerId);

			return {
				status: 200,
				message: "Mensagens deletadas com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async deleteMessage(messageId: number) {
		try {
			const result = await this.repository.deleteMessage(this.prismaService, messageId);

			return {
				status: 200,
				message: "Mensagem deletada com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async sendMessage(messageInfos: SendMessageDto) {
		try {
			// const customer = (await this.customerService.getCustomerById(messageInfos.customer_id)).data;
			// if (!customer) throw new Error(`Cliente não encontrado!`);

			// const plan = (await this.planService.getPlan(messageInfos.plan_id)).data;
			// if (!plan) throw new Error(`Plano do cliente não encontrado!`);

			// const message = await this.repository.getMessage(this.prismaService, messageInfos.message_id);
			// if (!message) throw new Error(`Mensagem não encontrado!`);

			// const userNumber = this.userApi.numbers.filter((n) => n.cellphone === messageInfos.user_number && n.whatsapp)[0];

			// switch (plan.plan_type) {
			// 	case PLAN_TYPE.POSTPAID:
			// 		const balance = plan.account_limit - plan.spent_limit;
			// 		if (balance < message.value) {
			// 			throw new CreditError(`Cliente não possui crédito para envio de mensagens!`);
			// 		} else {
			//			// Realiza rotina de envio de mensagem ao número;
			// 		}
			//
			// 		break;
			// 	case PLAN_TYPE.PREPAID:
			// 		if (plan.credit >= message.value) {
			// 			result.message = "Mensagem enviada com sucesso!";
			// 			// Realiza rotina de envio de mensagem ao número
			// 		} else {
			// 			throw new CreditError(`Cliente não possui crédito para envio de mensagens!`);
			// 		}

			// 		break;
			// }

			return { status: 200, message: "Mensagem enviada com sucesso!", data: [] };
		} catch (error) {
			throw error;
		}
	}
}
