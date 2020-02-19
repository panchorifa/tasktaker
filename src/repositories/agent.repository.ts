import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, Repository } from 'typeorm';

import { AgentEntity } from './agent.entity';
import { TaskEntity } from './task.entity';
import { Agent } from '../models/agent.model';
// import { agents } from './fixtures/agents';

const PRIORITIES = {
  low: 500,
  high: 1000
};

@Injectable()
export class AgentRepository {
  constructor (
    @InjectRepository(AgentEntity)
    private readonly agentRepository: Repository<AgentEntity>,
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async findAvailable(priority: number, skills: string[]): Promise<Agent> {
    const agent = await this.agentRepository.findOne(
      { where: {
          priority: LessThanOrEqual(priority)
      }});
    const {id} = agent;
    return new Agent(id);
  }

  async findAll(): Promise<Agent[]> {
    const agents = await this.agentRepository.find();
    // return agents.map(a => new Agent(a.id, a.name, a.skills))
    return agents.map(a => new Agent(a.id))
  }

  // async findAgent(priority, skills): Promise<Agent> {
  //   for(const agent of agents) {
  //
  //   }
  // }

  async addTask(priorityStr: string, skills: string[]): Promise<Agent> {
    const priority = PRIORITIES[priorityStr.toLowerCase()];
    console.log('--------------------------------------')
    console.log(priorityStr)
    console.log(priority)
    console.log(skills)
    console.log('--------------------------------------')

    // TODO throw exception for invalid priority
    const agent = await this.findAvailable(priority, skills);
    if(agent) {
      const taskInfo = {priority, agent};
      // if(!agent.current_task) {
      //   taskInfo.started_at = new Date();
      // }
      await this.taskRepository.save(Object.assign(new TaskEntity(), taskInfo));
    }
    return agent;
  }
}
