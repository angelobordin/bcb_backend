import { Injectable } from "@nestjs/common";
import { throwIfEmpty } from "rxjs";
import { PrismaService } from "src/database/prisma.service";
import { CustomerMessageRepository } from "../repository/customer-message.repository";
import { RegisterMessageDto } from "../dto/register-message.dto";
import { UpdateMessageDto } from "../dto/update-message.dto";

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
}
