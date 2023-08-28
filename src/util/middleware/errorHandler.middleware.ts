import { Injectable, NestMiddleware, HttpException, HttpStatus } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
	try {
		if (err instanceof Prisma.PrismaClientKnownRequestError) {
			res.status(400).json({
				type: err.code,
				title: err.message,
				status: 400,
				detail: `Erro no prisma! v:${err.clientVersion}`,
				instance: err.meta,
			});
		} else if (err instanceof Prisma.PrismaClientInitializationError) {
			res.status(400).json({
				type: err.errorCode,
				title: err.message,
				status: 400,
				detail: `Erro no prisma! v:${err.clientVersion}`,
			});
		} else if (err instanceof Prisma.PrismaClientUnknownRequestError || err instanceof Prisma.PrismaClientRustPanicError) {
			res.status(400).json({
				type: "Server Error",
				title: err.message,
				status: 400,
				detail: `Erro no prisma! v:${err.clientVersion}`,
			});
		} else if (err instanceof Prisma.PrismaClientValidationError) {
			res.status(400).json({
				type: "Server Error",
				title: err.message,
				status: 400,
				detail: `Erro no prisma!`,
			});
		} else if (err instanceof Error) {
			res.status(401).json({
				type: "Erro de autenticação",
				title: err.message,
				status: 401,
				detail: err.stack,
			});
		} else {
			res.status(500).json({
				type: "Server Error",
				title: "Erro interno no servidor!",
				status: 500,
				detail: "Erro interno no servidor!",
				instance: "Erro desconhecido no servidor",
			});
		}
	} catch (error) {
		next(error);
	}
}
