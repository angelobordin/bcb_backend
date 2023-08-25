import { Injectable } from "@nestjs/common";
import { CreateCustomerPlanDto } from "../dto/create-customer-plan.dto";
import { PrismaService } from "src/database/prisma.service";
import { CustomerPlanRepository } from "../repository/customer-plan.repository";
import { GetCustomerPlanDto } from "../dto/get-customer-plan.dto";
import { UpdateCustomerPlanDto } from "../dto/update-customer-plan.dto";

@Injectable()
export class CustomerPlanService {
	constructor(
		private prismaService: PrismaService,
		private repository: CustomerPlanRepository,
	) {}

	async getPlanByCustomerId(customerId: number) {
		try {
			const result = await this.repository.getPlanByCustomerId(this.prismaService, customerId);

			return {
				status: 200,
				message: "",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async registerCustomerPlan(newPlan: CreateCustomerPlanDto) {
		try {
			const result = await this.repository.registerCustomerPlan(this.prismaService, newPlan);

			return {
				status: 201,
				message: "Plano do cliente cadastrado com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async updateCredit(planId: number, newCredit: string) {
		try {
			const result = await this.repository.updatedCredit(this.prismaService, planId, newCredit);

			return {
				stataus: 200,
				message: "Credit do plano atualizado com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async updateCustomerPlan(planId: number, newPlanData: UpdateCustomerPlanDto) {
		try {
			const result = await this.repository.updateCustomerPlan(this.prismaService, planId, newPlanData);

			return {
				status: 200,
				message: "Plano do cliente atualizado com sucesso",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}
}
