import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { RegisterMessageDto } from "../dto/register-message.dto";
import { UpdateMessageDto } from "../dto/update-message.dto";

@Injectable()
export class CustomerMessageRepository {
	async getMessageList(prismaService: PrismaService) {
		try {
			const result = await prismaService.customer_message.findMany();

			return result;
		} catch (error) {
			throw error;
		}
	}

	async registerMessage(prismaService: PrismaService, newMessage: RegisterMessageDto) {
		try {
			const result = await prismaService.customer_message.create({
				data: {
					text: newMessage.text,
					value: newMessage.value,
					customer: { connect: { id: parseInt(newMessage.customer_id) } },
					updated_at: new Date(Date.now()),
					created_at: new Date(Date.now()),
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async updateMessage(prismaService: PrismaService, messageId: string, newData: UpdateMessageDto) {
		try {
			const result = await prismaService.customer_message.update({
				where: { id: parseInt(messageId) },
				data: {
					text: newData.text,
					value: newData.value,
					updated_at: new Date(Date.now()),
				},
			});
		} catch (error) {
			throw error;
		}
	}

	async deleteMessageByCustomerId(prismaService: PrismaService, customerId: string) {
		try {
			const result = await prismaService.customer_message.deleteMany({
				where: { customer_id: parseInt(customerId) },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async deleteMessage(prismaService: PrismaService, messageId: string) {
		try {
			const result = await prismaService.customer_message.delete({
				where: { id: parseInt(messageId) },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}
}
