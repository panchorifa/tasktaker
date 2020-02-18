import { Injectable } from '@nestjs/common'
import { Agent } from '../models/agent.model'
import { agents } from './fixtures/agents'

@Injectable()
export class AgentRepository {
  async findAvailable(priority: number, skills: string[]): Promise<Agent> {
    return agents[0];
  }

  async findAll(): Promise<Agent[]> {
    return agents;
  }

  async addTask(priority: number, skills: string[]): Promise<Agent> {
    console.log('--------------------------------------')
    console.log(priority)
    console.log(skills)
    console.log('--------------------------------------')
    return agents[0];
  }
}
