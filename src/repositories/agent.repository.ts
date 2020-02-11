import { Injectable } from '@nestjs/common'
import { Agent } from '../models/agent.model'
import { agents } from './fixtures/agents'

@Injectable()
export class AgentRepository {
  async findAvailable(priority: number, skills: string[]): Promise<Agent> {
    return null;
  }

  async findAll(): Promise<Agent[]> {
    return agents;
  }
}
