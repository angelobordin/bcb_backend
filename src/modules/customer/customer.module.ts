import { Module } from "@nestjs/common";
import { CustomerController } from "./controller/customer.controller";
import { CustomerService } from "./service/customer.service";
import { CustomerRepository } from "./repository/customer.repository";
import { PrismaService } from "src/database/prisma.service";

@Module({
    imports: [],
    controllers: [CustomerController],
    providers: [
        PrismaService,
        CustomerService,
        CustomerRepository,
    ]
})
export class CustomerModule {}