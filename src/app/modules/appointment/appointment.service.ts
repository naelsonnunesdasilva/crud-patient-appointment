import { Injectable } from '@nestjs/common';
import { AppointmentDto } from './dto/appointment.dto';
import { AppointmentEntity } from 'src/database/appointment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(AppointmentEntity)
    private readonly repository: Repository<AppointmentEntity>,
  ) {}

  async create(createAppointmentDto: AppointmentDto) {
    return await this.repository.save(createAppointmentDto);
  }

  async findAllForFkPatient(fk_patient: number) {
    return await this.repository.find({ where: { fk_patient } });
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateAppointmentDto: AppointmentDto) {
    return await this.repository.save(updateAppointmentDto);
  }

  async confirm(id: number) {
    const updateAppointmentDto = await this.repository.findOne({
      where: { id },
    });
    updateAppointmentDto.status = 2;
    return await this.repository.save(updateAppointmentDto);
  }

  async remove(id: number) {
    const appointment = await this.repository.findOne({ where: { id } });
    return await this.repository.remove(appointment);
  }
}
