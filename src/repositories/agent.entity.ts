import { Column, Entity, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { TaskEntity } from './task.entity';

@Entity('agent')
export class AgentEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({nullable: false})
  name: string

  @Column({array: true})
  skills: string[]

  @OneToMany(type => TaskEntity, task => task.agent)
  tasks: TaskEntity[];

  @OneToOne(type => TaskEntity)
  @JoinColumn()
  current_task: TaskEntity

  @Column({type: 'smallint', nullable: true})
  current_priority: number
}
