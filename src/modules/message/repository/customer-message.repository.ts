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
					customer: { connect: { id: newMessage.customer_id } },
					updated_at: new Date(Date.now()),
					created_at: new Date(Date.now()),
				},
			});

			return result;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async updateMessage(prismaService: PrismaService, messageId: number, newData: UpdateMessageDto) {
		try {
			const result = await prismaService.customer_message.update({
				where: { id: messageId },
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

	async deleteMessageByCustomerId(prismaService: PrismaService, customerId: number) {
		try {
			const result = await prismaService.customer_message.deleteMany({
				where: { customer_id: customerId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async deleteMessage(prismaService: PrismaService, messageId: number) {
		try {
			const result = await prismaService.customer_message.delete({
				where: { id: messageId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}
}
