import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { TaskRepository } from '../../repositories/task.repository';
import { CompleteTaskCommand } from '../impl/complete-task.command';

@CommandHandler(CompleteTaskCommand)
export class CompleteTaskHandler implements ICommandHandler<CompleteTaskCommand> {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CompleteTaskCommand) {
    console.log('CompleteTaskCommand...');

    const { taskId } = command;
    const task = this.publisher.mergeObjectContext(
      await this.taskRepository.findById(taskId),
    );
    task.complete();
    task.commit();
  }
}
