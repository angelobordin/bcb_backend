import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { RegisterMessageDto } from "../dto/register-message.dto";
import { UpdateMessageDto, UpdateMessageParamDto } from "../dto/update-message.dto";
import { DeleteMessageParamDto } from "../dto/delete-message.dto";
import { SendMessageDto } from "../dto/send-message.dto";
import { CustomerMessageService } from "../service/customer-message.service";

@Controller("message")
export class CustomerMessageController {
	constructor(private service: CustomerMessageService) {}

	@Get()
	async getMessageList() {
		try {
			const result = await this.service.getMessageList();

			return result;
		} catch (error) {
			return error;
		}
	}

	@Post()
	async registerMessage(@Body() body: RegisterMessageDto) {
		try {
			const newMessage = body;
			const result = await this.service.registerMessage(newMessage);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Put(":id")
	async updateMessage(@Param() params: UpdateMessageParamDto, @Body() body: UpdateMessageDto) {
		try {
			const messageId = parseInt(params.id);
			const newData = body;
			const result = await this.service.updateMessage(messageId, newData);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Delete(":id")
	async deleteMessage(@Param() params: DeleteMessageParamDto) {
		try {
			const messageId = parseInt(params.id);
			const result = await this.service.deleteMessage(messageId);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Post("send")
	async sendMessage(@Body() body: SendMessageDto) {
		try {
			const messageInfos = body;
			const result = await this.service.sendMessage(messageInfos);

			return result;
		} catch (error) {
			return error;
		}
	}
}
