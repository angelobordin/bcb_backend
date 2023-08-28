import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateCustomerPlanDto } from "../dto/create-customer-plan.dto";
import { plan_type } from "@prisma/client";
import { UpdateCustomerPlanDto } from "../dto/update-customer-plan.dto";

@Injectable()
export class CustomerPlanRepository {
	async getPlan(prismaService: PrismaService, planId: number) {
		try {
			const result = await prismaService.customer_plan.findFirst({
				where: { id: planId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getPlanList(prismaService: PrismaService) {
		try {
			const result = await prismaService.customer_plan.findMany({
				include: {
					customer: {
						select: {
							cnpj: true,
						},
					},
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getPlanByCustomerId(prismaService: PrismaService, customerId: number) {
		try {
			const result = await prismaService.customer_plan.findMany({
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
					credit: parseFloat((newPlan.credit / Math.pow(10, 2)).toFixed(2)),
					account_limit: newPlan.account_limit,
				},
				include: {
					customer: {
						select: {
							cnpj: true,
						},
					},
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
				include: {
					customer: {
						select: {
							cnpj: true,
						},
					},
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async updatePlan(prismaService: PrismaService, planId: number, newPlanData: UpdateCustomerPlanDto) {
		try {
			const result = await prismaService.customer_plan.update({
				where: { id: planId },
				data: {
					plan_type: plan_type[newPlanData.plan_type],
					account_limit: parseFloat((newPlanData.account_limit / Math.pow(10, 2)).toFixed(2)),
					credit: parseFloat((newPlanData.credit / Math.pow(10, 2)).toFixed(2)),
					spent_limit: parseFloat((newPlanData.spent_limit / Math.pow(10, 2)).toFixed(2)),
					updated_at: new Date(Date.now()),
				},
				include: {
					customer: {
						select: {
							cnpj: true,
						},
					},
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
			const result = await prismaService.customer_plan.deleteMany({
				where: { id: planId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}
}
