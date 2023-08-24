import { IsNotEmpty } from 'class-validator';

export class CreateResponsibleDto {
  @IsNotEmpty()
  responsible_name: string;
  
  @IsNotEmpty()
  responsible_email: string;
  
  @IsNotEmpty()
  responsible_cellphone: string;
  
  @IsNotEmpty()
  responsible_cpf: string;
}
