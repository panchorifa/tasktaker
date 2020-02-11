import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AgentRepository } from '../../repository/agent.repository';
import { ProcessTaskCommand } from '../impl/process-task.command';

@CommandHandler(ProcessTaskCommand)
export class ProcessTaskHandler implements ICommandHandler<ProcessTaskCommand> {
  constructor(
    private readonly agentRepository: AgentRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: ProcessTaskCommand) {
    console.log('ProcessTaskCommand...');

    const { taskId, priority, skills } = command;
    const agent = this.publisher.mergeObjectContext(
      await this.agentRepository.findAvailable(priority, skills),
    );
    agent.addTask(taskId);
    agent.commit();
  }
}
