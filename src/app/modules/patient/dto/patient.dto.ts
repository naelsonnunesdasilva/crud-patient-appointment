import { ApiProperty } from '@nestjs/swagger';
import { AppointmentEntity } from 'src/database/appointment.entity';

export class PatientDto {
    @ApiProperty({
        example: 1,
        description: 'Identificador único gerado automaticamente com regra de auto incremento.',
    })
    id: number | null;

    @ApiProperty({
        example: 'João da Silva',
        description: 'Nome do paciente.',
    })
    name: string;

    @ApiProperty({
        example: 'joao.dasilva@gmail.com',
        description: 'E-mail de contato do paciente.',
    })
    email: string;

    @ApiProperty({
        example: '000.000.000-00',
        description: 'CPF do paciente',
    })
    cpf: string;

    @ApiProperty({
        example: '2023-01-01',
        description: 'Data de deleção do paciente',
    })
    deleted_at?: Date;

    @ApiProperty({
        example: '[{ id: 1, fk_patient: 1, appointment: "2023-01-01", status: 0, create_at: "2023-01-01" }]',
        description: 'Campo de relacionamento com a tabela Appointment - Relação de 1:N',
    })
    medicalHistory: AppointmentEntity[];

    @ApiProperty({
        example: '2023-01-01',
        description: 'Data de criação do cadastro',
    })
    createdAt: Date;
}
