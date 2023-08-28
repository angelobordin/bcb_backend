import { CustomerPlanService } from "src/modules/plan/service/customer-plan.service";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { CustomerRepository } from "../repository/customer.repository";
import { PrismaService } from "./../../../database/prisma.service";
import { Injectable } from "@nestjs/common";
import { CustomerMessageService } from "src/modules/message/service/customer-message.service";

@Injectable()
export class CustomerService {
	constructor(
		private prismaService: PrismaService,
		private repository: CustomerRepository,
		private _planService: CustomerPlanService,
		private _messageService: CustomerMessageService,
	) {}

	async getCustomerById(customerId: number) {
		try {
			const result = await this.repository.getCustomerById(this.prismaService, customerId);

			return {
				status: 200,
				messagE: "",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async getCustomerList() {
		try {
			const result = await this.repository.getCustomerList(this.prismaService);

			return {
				status: 200,
				message: "",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async updateCustomer(customerId: number, newData: UpdateCustomerDto) {
		try {
			const result = await this.repository.updateCustomer(this.prismaService, customerId, newData);

			return {
				status: 200,
				message: "Cliente atualizado com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async registerCustomer(newCustomer: CreateCustomerDto) {
		try {
			console.log(newCustomer);
			const result = await this.repository.registerCustomer(this.prismaService, newCustomer);

			return {
				status: 200,
				message: "Cliente cadastrado com sucesso",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async deleteCustomer(customerId: number) {
		try {
			const planDeleted = await this._planService.deletePlanByCustomerId(customerId);
			if (!planDeleted.data || planDeleted.status !== 200) throw new Error(`Erro ao deletar plano do cliente`);

			const messageDeleted = await this._messageService.deleteMessagesByCustomerId(customerId);
			if (!messageDeleted.data || messageDeleted.status !== 200) throw new Error(`Erro ao deletar mensagens do cliente`);

			const result = await this.repository.deleteCustomer(this.prismaService, customerId);

			return {
				status: 200,
				message: "Cliente deletado com sucesso!",
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}
}
