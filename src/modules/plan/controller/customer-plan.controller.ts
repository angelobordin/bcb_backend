import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CustomerPlanService } from "../service/customer-plan.service";
import { CreateCustomerPlanDto } from "../dto/create-customer-plan.dto";
import { GetCustomerPlanDto } from "../dto/get-customer-plan.dto";
import { UpdateCustomerPlanParamsDto, UpdateCustomerPlanDto } from "../dto/update-customer-plan.dto";
import { UpdateCreditDto, UpdateCreditParamsDto } from "../dto/update-credit-customer-plan.dto";

@Controller("/plan")
export class CustomerPlanController {
	constructor(private service: CustomerPlanService) {}

	@Get(":id")
	async getPlanByCustomerId(@Param() params: GetCustomerPlanDto) {
		try {
			const customerId = parseInt(params.id);
			const result = await this.service.getPlanByCustomerId(customerId);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Post()
	async registerCustomerPlan(@Body() body: CreateCustomerPlanDto) {
		try {
			const newPlan = body;
			const result = await this.service.registerCustomerPlan(newPlan);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Patch(":id")
	async updateCredit(@Param() params: UpdateCreditParamsDto, @Body() body: UpdateCreditDto) {
		try {
			const planId = parseInt(params.id);
			const newCredit = body.credit;
			const result = await this.service.updateCredit(planId, newCredit);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Put(":id")
	async updateCustomerPlan(@Body() body: UpdateCustomerPlanDto, @Param() params: UpdateCustomerPlanParamsDto) {
		try {
			const planId = parseInt(params.id);
			const newPlanData = body;
			const result = await this.service.updateCustomerPlan(planId, newPlanData);

			return result;
		} catch (error) {
			throw error;
		}
	}
}
