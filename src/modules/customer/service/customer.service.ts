import { CustomerResponsibleService } from 'src/modules/customer_responsible/service/customer-responsible.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { CustomerRepository } from '../repository/customer.repository';
import { PrismaService } from './../../../database/prisma.service';
import { Injectable } from "@nestjs/common";
import { CreateResponsibleDto } from 'src/modules/customer_responsible/dto/create-responsible.dto';

@Injectable()
export class CustomerService {
    constructor(
        private prismaService: PrismaService,
        private repository: CustomerRepository,
    ) {}

    async registerCustomer(newCustomer: CreateCustomerDto) {
        try {
            const result = await this.repository.registerCustomer(this.prismaService, newCustomer);

            return {
                status: 200,
                message: "Cliente cadastrado com sucesso",
                data: result
            }
        } catch (error) {
            throw error;
        }
    }
}