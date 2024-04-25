import { Injectable } from '@nestjs/common';
import { PatientDto } from './dto/patient.dto';
import { PatientEntity } from 'src/database/patient.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly repository: Repository<PatientEntity>,
  ) {}

  async create(createPatientDto: PatientDto) {
    return await this.repository.save(createPatientDto);
  }

  async findAll() {
    return await this.repository.find({
      where: { deleted_at: null },
      relations: ['medicalHistory'],
    });
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updatePatientDto: PatientDto) {
    return await this.repository.save(updatePatientDto);
  }

  async remove(id: number) {
    const patient = await this.repository.findOne({ where: { id } });
    patient.deleted_at = new Date();
    return await this.repository.save(patient);
  }
}
