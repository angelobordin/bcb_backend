import * as cors from "cors";
import { MiddlewareConsumer, Module, NestModule, RequestMethod, ValidationPipe } from "@nestjs/common";
import { CustomerModule } from "./modules/customer/customer.module";
import { CustomerPlanModule } from "./modules/plan/customer-plan.module";
import { CustomerMessageModule } from "./modules/message/customer-message.module";
import { errorHandler } from "./util/middleware/errorHandler.middleware";

@Module({
	imports: [CustomerModule, CustomerPlanModule, CustomerMessageModule],
	controllers: [],
	providers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(
				cors({
					origin: "*",
					methods: "*",
					allowedHeaders: "*",
				}),
				errorHandler,
			)
			.forRoutes({ path: "*", method: RequestMethod.ALL });
	}
}
