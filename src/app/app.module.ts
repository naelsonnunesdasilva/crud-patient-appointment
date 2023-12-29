import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './modules/patient/patient.module';
import { AppointmentModule } from './modules/appointment/appointment.module';
import { PatientEntity } from 'src/database/patient.entity';
import { AppointmentEntity } from 'src/database/appointment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [PatientEntity, AppointmentEntity],
      synchronize: true,
    }),
    PatientModule,
    AppointmentModule
  ],
})
export class AppModule {}
