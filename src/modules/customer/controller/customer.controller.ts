import { Body, Controller, Next, Post } from "@nestjs/common";
import { CustomerService } from "../service/customer.service";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { NextFunction } from "express";

@Controller('/customer')
export class CustomerController {
    constructor(private service: CustomerService) {}

    @Post()
    async registerCustomer(@Body() body: CreateCustomerDto) {
        try {
            const newCustomer = body;
            const result = await this.service.registerCustomer(newCustomer);

            return result;
        } catch (error) {
            return error;
        }
    }
}