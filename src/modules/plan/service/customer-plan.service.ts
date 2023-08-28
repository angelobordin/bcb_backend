import { Injectable } from "@nestjs/common";
import { CreateCustomerPlanDto } from "../dto/create-customer-plan.dto";
import { PrismaService } from "src/database/prisma.service";
import { CustomerPlanRepository } from "../repository/customer-plan.repository";
import { UpdateCustomerPlanDto } from "../dto/update-customer-plan.dto";

@Injectable()
export class CustomerPlanService {
	constructor(
		private prismaService: PrismaService,
		private repository: CustomerPlanRepository,
	) {}

	async getPlan(planId: number) {
		try {
			const result = await this.repository.getPlan(this.prismaService, planId);

			return {
				status: 200,
				message: "",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async getPlanList() {
		try {
			const result = await this.repository.getPlanList(this.prismaService);

			return {
				status: 200,
				message: "",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

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

	async updateCredit(planId: number, newCredit: number) {
		try {
			const result = await this.repository.updatedCredit(this.prismaService, planId, newCredit);

			return {
				stataus: 200,
				message: "Credito do plano atualizado com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async updatePlan(planId: number, newPlanData: UpdateCustomerPlanDto) {
		try {
			const result = await this.repository.updatePlan(this.prismaService, planId, newPlanData);

			return {
				status: 200,
				message: "Plano do cliente atualizado com sucesso",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async deletePlanByCustomerId(customerId: number) {
		try {
			const result = await this.repository.deleteCustomerPlan(this.prismaService, customerId);

			return {
				status: 200,
				message: "Plano deletado com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async deletePlan(planId: number) {
		try {
			const result = await this.repository.deletePlan(this.prismaService, planId);

			return {
				status: 200,
				message: "Plano deletado com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}
}
