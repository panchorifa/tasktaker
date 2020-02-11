import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { AgentRepository } from '../../repositories/agent.repository'
import { GetAgentsQuery } from '../impl'

@QueryHandler(GetAgentsQuery)
export class GetAgentsHandler implements IQueryHandler<GetAgentsQuery> {
  constructor(private readonly repository: AgentRepository) {}

  async execute(query: GetAgentsQuery) {
    console.log('Async GetAgentsQuery...')
    return this.repository.findAll()
  }
}
