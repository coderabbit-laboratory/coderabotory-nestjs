import { getTsid } from 'tsid-ts';

import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ItemStatus } from './ItemStatus';

@Entity('items')
export class Item {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column()
  status: ItemStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    this.id = getTsid().toString();
  }
}
