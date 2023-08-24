import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CustomerResponsibleRepository } from "./repository/customer-responsible.repository";

@Module({
    imports: [],
    controllers: [],
    providers: [
        PrismaService,
        CustomerResponsibleRepository
    ]
})
export class CustomerResponsibleModule {}