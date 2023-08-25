import { Module } from "@nestjs/common";
import { CustomerModule } from "./modules/customer/customer.module";
import { CustomerPlanModule } from "./modules/plan/customer-plan.module";

@Module({
	imports: [CustomerModule, CustomerPlanModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
