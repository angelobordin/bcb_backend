import { Module } from "@nestjs/common"
import { CustomerPlanController } from "./controller/customer-plan.controller";
import { CustomerPlanService } from "./service/customer-plan.service";
import { CustomerPlanRepository } from "./repository/customer-plan.repository";
import { PrismaService } from "src/database/prisma.service";

@Module({
    imports: [],
    controllers: [CustomerPlanController],
    providers: [
        PrismaService,
        CustomerPlanService,
        CustomerPlanRepository
    ]
})
export class CustomerPlanModule {}