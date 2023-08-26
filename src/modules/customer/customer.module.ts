import { Module } from "@nestjs/common";
import { CustomerController } from "./controller/customer.controller";
import { CustomerService } from "./service/customer.service";
import { CustomerRepository } from "./repository/customer.repository";
import { PrismaService } from "src/database/prisma.service";
import { CustomerPlanService } from "../plan/service/customer-plan.service";
import { CustomerPlanRepository } from "../plan/repository/customer-plan.repository";
import { CustomerMessageService } from "../message/service/custoemer-message.service";
import { CustomerMessageRepository } from "../message/repository/customer-message.repository";

@Module({
	imports: [],
	controllers: [CustomerController],
	providers: [PrismaService, CustomerService, CustomerRepository, CustomerPlanService, CustomerPlanRepository, CustomerMessageService, CustomerMessageRepository],
})
export class CustomerModule {}
