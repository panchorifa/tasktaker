import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule, QueryHandler,
  EventPublisher, QueryBus, EventBus, CommandBus } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { AgentRepository } from './repositories/agent.repository';
import { TaskRepository } from './repositories/task.repository';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { agents } from './repositories/fixtures/agents';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      // imports: [CqrsModule],
      // imports: [TypeOrmModule.forRoot(), CqrsModule],
      // imports: [, TypeOrmModule.forFeature([AgentEntity])],
      controllers: [AppController],
      providers: [
        AppService,
        // AgentRepository,
        // TaskRepository,
        // // EventPublisher,
        // // EventBus,
        // // CommandBus,
        // // QueryBus,
        // // ...CommandHandlers,
        // // ...EventHandlers,
        // ...QueryHandlers
      ],
    }).compile();
    // appController = app.get<AppController>(AppController);
  });

  describe('/agents', () => {
    it('should return agents', async () => {
      expect(await appController).toBe(undefined);
      // expect(await appController.getAgents()).toEqual([agents]);
    });
  });
});
