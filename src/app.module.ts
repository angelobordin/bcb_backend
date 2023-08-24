import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { CustomerResponsibleModule } from './modules/customer_responsible/customer-responsible.module';

@Module({
  imports: [
    CustomerModule,
    CustomerResponsibleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
