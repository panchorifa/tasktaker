import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentEntity } from '../repositories/agent.entity';
import { TaskEntity } from '../repositories/task.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    // host: '0.0.0.0',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'tasktaker',
    // autoLoadEntities: true,
    entities: [AgentEntity, TaskEntity],
    synchronize: true
  })]
})
export class DatabaseModule {}
