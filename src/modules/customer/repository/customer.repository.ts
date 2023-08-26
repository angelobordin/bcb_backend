import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { PrismaService } from "./../../../database/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerRepository {
	async getCustomerById(prismaService: PrismaService, customerId: number) {
		try {
			const result = await prismaService.customer.findFirst({
				where: { id: customerId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getCustomerList(prismaService: PrismaService) {
		try {
			const result = await prismaService.customer.findMany({});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async updateCustomer(prismaService: PrismaService, customerId: number, newData: UpdateCustomerDto) {
		try {
			const result = await prismaService.customer.update({
				where: { id: customerId },
				data: {
					...newData,
					updated_at: new Date(Date.now()),
				},
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async registerCustomer(prismaService: PrismaService, newCustomer: CreateCustomerDto) {
		try {
			const result = await prismaService.customer.create({
				data: newCustomer,
			});

			return result;
		} catch (error) {
			throw error;
		}
	}

	async deleteCustomer(prismaService: PrismaService, customerId: number) {
		try {
			const result = await prismaService.customer.deleteMany({
				where: { id: customerId },
			});

			return result;
		} catch (error) {
			throw error;
		}
	}
}
