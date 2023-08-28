import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CustomerMessageRepository } from "./repository/customer-message.repository";
import { CustomerMessageController } from "./controller/customer-message.controller";
import { CustomerMessageService } from "./service/customer-message.service";
import { CustomerService } from "../customer/service/customer.service";
import { CustomerModule } from "../customer/customer.module";

@Module({
	imports: [CustomerModule],
	controllers: [CustomerMessageController],
	providers: [PrismaService, CustomerMessageService, CustomerMessageRepository],
})
export class CustomerMessageModule {}
