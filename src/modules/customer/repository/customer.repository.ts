import { CreateCustomerDto } from '../dto/create-customer.dto';
import { PrismaService } from './../../../database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerRepository {
    async registerCustomer(prismaService: PrismaService, newCustomer: CreateCustomerDto) {
        try {
            const result = await prismaService.customer.create({
                data: {
                    name: newCustomer.name,
                    cnpj: newCustomer.cnpj,
                    responsible: { 
                        create: {
                            name: newCustomer.responsible_name,
                            email: newCustomer.responsible_email,
                            cpf: newCustomer.responsible_cpf,
                            cellphone: newCustomer.responsible_cellphone,
                        }
                    }
                },
                include: {
                    responsible: true
                }
            });

            return result;
        } catch (error) {
            throw error;
        }
    }
}