import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { GetAgentsQuery, GetTasksQuery } from './queries/impl'
import { TaskDto } from './interfaces/task-dto.interface'
import { ProcessTaskCommand } from './commands/impl/process-task.command'
import { CompleteTaskCommand } from './commands/impl/complete-task.command'

@Controller()
export class AppController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('/tasks')
  async getTasks() {
    return this.queryBus.execute(new GetTasksQuery())
  }

  @Get('/agents')
  async getAgents() {
    return this.queryBus.execute(new GetAgentsQuery())
  }

  @Post('/tasks')
  addTask(@Body() dto: TaskDto): string {
    return this.commandBus.execute(new ProcessTaskCommand(dto))
  }

  @Put('/tasks/:id/complete')
  completeTask(@Param('id') id): string {
    return this.commandBus.execute(new CompleteTaskCommand(id))
  }
}
