import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AgentRepository } from './repositories/agent.repository';
import { TaskRepository } from './repositories/task.repository';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    AgentRepository,
    TaskRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ]
})
export class AppModule {}
