import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule, QueryHandler } from '@nestjs/cqrs';
import { AppController } from './app.controller';
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
      imports: [CqrsModule],
      // imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([AgentEntity])],
      controllers: [AppController],
      providers: [
        AppService,
        AgentRepository,
        TaskRepository,
        ...CommandHandlers,
        ...EventHandlers,
        ...QueryHandlers
      ],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('/agents', () => {
    it('should return agents', async () => {
      expect(await appController.getAgents()).toEqual([agents]);
    });
  });
});
