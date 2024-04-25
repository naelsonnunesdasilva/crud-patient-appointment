import { ApiProperty } from '@nestjs/swagger';

export class AppointmentDto {
  @ApiProperty({
    example: 1,
    description:
      'Identificador único gerado automaticamente com regra de auto incremento.',
  })
  id: number | null;

  @ApiProperty({
    example: 1,
    description:
      'Identificador único do paciente ao qual pertence o agendamento. Relação  1:N no banco',
  })
  fk_patient: number;

  @ApiProperty({
    example: '2023-01-01',
    description: 'Data da consulta',
  })
  appointment?: Date;

  @ApiProperty({
    example: 0,
    description:
      'status do agendamento (1 - disponivel, 2 - agendado, 0 - cancelado);',
  })
  status: number;

  @ApiProperty({
    example: '2023-01-01',
    description: 'Data de criação do cadastro',
  })
  createdAt: Date;
}
