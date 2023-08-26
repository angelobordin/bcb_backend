import { Module } from "@nestjs/common";
import { CustomerModule } from "./modules/customer/customer.module";
import { CustomerPlanModule } from "./modules/plan/customer-plan.module";
import { CustomerMessageModule } from "./modules/message/customer-message.module";

@Module({
	imports: [CustomerModule, CustomerPlanModule, CustomerMessageModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
