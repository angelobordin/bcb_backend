import { GetCustomerPlanDto } from "./../dto/get-customer-plan.dto";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateCustomerPlanDto } from "../dto/create-customer-plan.dto";
import { customer_plan, plan_type } from "@prisma/client";
import { UpdateCustomerPlanDto } from "../dto/update-customer-plan.dto";

@Injectable()
export class CustomerPlanRepository {
	async getPlanList(prismaService: PrismaService) {
		try {
			const result = await prismaService.customer_plan.findMany();

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getPlanByCustomerId(prismaService: PrismaService, customerId: number) {
		try {
			const result = await prismaService.customer_plan.findFirst({
				where: { customer_id: customerId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async registerCustomerPlan(prismaService: PrismaService, newPlan: CreateCustomerPlanDto) {
		try {
			const result = await prismaService.customer_plan.create({
				data: {
					customer: { connect: { id: newPlan.customer_id } },
					plan_type: plan_type[newPlan.plan_type.toUpperCase()],
					credit: newPlan.credit,
					spent_limit: newPlan.spend_limit,
					account_limit: newPlan.account_limit,
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async updatedCredit(prismaService: PrismaService, planId: number, newCredit: number) {
		try {
			const result = await prismaService.customer_plan.update({
				where: { id: planId },
				data: {
					credit: { increment: newCredit },
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async updatePlanByCustomerId(prismaService: PrismaService, customerId: number, newPlanData: UpdateCustomerPlanDto) {
		try {
			const result = await prismaService.customer_plan.update({
				where: { customer_id: customerId },
				data: {
					plan_type: plan_type[newPlanData.plan_type],
					account_limit: newPlanData.account_limit,
					credit: newPlanData.credit,
					spent_limit: newPlanData.spend_limit,
					updated_at: new Date(Date.now()),
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async deleteCustomerPlan(prismaService: PrismaService, customerId: number) {
		try {
			const result = await prismaService.customer_plan.deleteMany({
				where: { customer_id: customerId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async deletePlan(prismaService: PrismaService, planId: number) {
		try {
			const result = await prismaService.customer_plan.delete({
				where: { id: planId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}
}
