import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AgentEntity } from './repositories/agent.entity';
import { TaskEntity } from './repositories/task.entity';
import { AgentRepository } from './repositories/agent.repository';
import { TaskRepository } from './repositories/task.repository';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CqrsModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AgentRepository,
    TaskRepository,
    AgentEntity,
    TaskEntity,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ]
  // exports: [
  //   CqrsModule,
  //   AgentRepository,
  //   TaskRepository,
  //   ...CommandHandlers,
  //   ...EventHandlers,
  //   ...QueryHandlers,
  // ]
})
export class AppModule {}
