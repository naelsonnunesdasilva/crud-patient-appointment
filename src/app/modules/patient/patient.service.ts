import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientEntity } from 'src/database/patient.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly repository: Repository<PatientEntity>,
  ) { }

  async create(createPatientDto: CreatePatientDto) {
    return await this.repository.save(createPatientDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    return await this.repository.save(updatePatientDto);
  }

  async remove(id: number) {
    const patient = await this.repository.findOne({ where: { id } });
    return await this.repository.remove(patient);
  }
}
