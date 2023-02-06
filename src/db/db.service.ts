import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DBInterface } from './db.interface';

@Injectable()
export class DBService {
  private db: DBInterface = {
    users: [],
  };

  async create(dbField: keyof DBInterface, entity: any) {
    this.db[dbField].push(entity);
    return entity;
  }

  async findMany(dbField: keyof DBInterface) {
    return this.db[dbField];
  }

  async findOne(dbField: keyof DBInterface, id: string) {
    const necessaryEntity = this.db[dbField].find((entity) => entity.id === id);

    if (!necessaryEntity) {
      throw new HttpException(
        `Entity with id: ${id} not found in ${dbField} list`,
        HttpStatus.NOT_FOUND,
      );
    }
    return necessaryEntity;
  }

  async update(dbField: keyof DBInterface, id: string, changedEntity) {
    this.db[dbField] = this.db[dbField].map((entity) =>
      entity.id === id ? changedEntity : entity,
    );
    return changedEntity;
  }

  async delete(dbField: keyof DBInterface, id: string) {
    await this.findOne(dbField, id);

    this.db[dbField] = this.db[dbField].filter((entity) => entity.id !== id);
  }

  // async findManyByIds(ids: string[]) {
  //   const entities = [];

  //   ids.forEach((id) => {
  //     const entity = this.list.find((entity) => entity.id === id);
  //     entities.push(entity);
  //   });

  //   return entities;
  // }
}
