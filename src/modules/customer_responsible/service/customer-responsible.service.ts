import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateResponsibleDto } from "../dto/create-responsible.dto";
import { CustomerResponsibleRepository } from "../repository/customer-responsible.repository";

@Injectable()
export class CustomerResponsibleService {
    
    constructor(
        private prismaService: PrismaService,
        // private repository: CustomerResponsibleRepository
    ) {}

    async registerResponsible(newResponsible: CreateResponsibleDto) {
        try {
            // const responsible = await this.repository.registerResponsible(this.prismaService, newResponsible);

            return {
                status: 200,
                message: "Responsável cadastrado",
                data: "teste"
            };
        } catch (error) {
            throw error;
        }
    }
}
