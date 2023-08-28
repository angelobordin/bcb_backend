import { NextFunction } from "express";
import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common";
import { CustomerService } from "../service/customer.service";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto, UpdateCustomerParamsDto } from "../dto/update-customer.dto";
import { GetCustomerByIdParamDto } from "../dto/get-customer.dto";
import { DeleteCustomerParamDto } from "../dto/delete-customer.dto";

@Controller("/customer")
export class CustomerController {
	constructor(private service: CustomerService) {}

	@Get(":id")
	async getCustomerById(@Param() params: GetCustomerByIdParamDto) {
		try {
			const customerId = parseInt(params.id);
			const result = await this.service.getCustomerById(customerId);

			return result;
		} catch (error) {
			return error;
		}
	}

	@Get()
	async getCustomerList() {
		try {
			const result = await this.service.getCustomerList();

			return result;
		} catch (error) {
			return error;
		}
	}

	@Put(":id")
	async updateCustomer(@Param() params: UpdateCustomerParamsDto, @Body() body: UpdateCustomerDto) {
		try {
			const customerId = parseInt(params.id);
			const newData = body;
			const result = await this.service.updateCustomer(customerId, newData);

			return result;
		} catch (error) {
			return error;
		}
	}

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

	@Delete(":id")
	async deleteCustomer(@Param() params: DeleteCustomerParamDto, next: NextFunction) {
		try {
			const customerId = parseInt(params.id);
			const result = await this.service.deleteCustomer(customerId);

			return result;
		} catch (error) {
			next(error);
		}
	}
}
