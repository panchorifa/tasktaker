import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { HttpException, HttpStatus } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { AgentRepository } from '../../repositories/agent.repository';
import { ProcessTaskCommand } from '../impl/process-task.command';

@CommandHandler(ProcessTaskCommand)
export class ProcessTaskHandler implements ICommandHandler<ProcessTaskCommand> {
  constructor(
    private readonly agentRepository: AgentRepository,
    private readonly publisher: EventPublisher
  ) {}

  // async execute(command: ProcessTaskCommand, resolve: (value?) => void) {
  async execute(command: ProcessTaskCommand) {
    console.log('ProcessTaskCommand...');
    const { priority, skills } = command;
    const agent = this.publisher.mergeObjectContext(
      await this.agentRepository.addTask(priority, skills),
    );
    if(!agent) {
      throw new HttpException(
        'Agents are not available at this time. Please try again later.',
        HttpStatus.SERVICE_UNAVAILABLE);
    }
    agent.commit();
  }
}
