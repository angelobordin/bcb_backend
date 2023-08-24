import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateResponsibleDto } from "../dto/create-responsible.dto";

@Injectable()
export class CustomerResponsibleRepository {
    async registerResponsible(prismaService: PrismaService, newReponsible: CreateResponsibleDto) {
        try {

        } catch (error) {
            throw error;
        }
    }
}