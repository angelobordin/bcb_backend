import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CustomerMessageService } from "./service/custoemer-message.service";
import { CustomerMessageRepository } from "./repository/customer-message.repository";
import { CustomerMessageController } from "./controller/customer-message.controller";

@Module({
	imports: [],
	controllers: [CustomerMessageController],
	providers: [PrismaService, CustomerMessageService, CustomerMessageRepository],
})
export class CustomerMessageModule {}
