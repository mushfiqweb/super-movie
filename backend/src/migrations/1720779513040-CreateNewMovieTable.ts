import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateNewMovieTable1720779513040 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'new_movie',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'director',
            type: 'varchar',
          },
          {
            name: 'releaseYear',
            type: 'int',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'rating',
            type: 'decimal',
            precision: 3,
            scale: 1,
          },
          {
            name: 'duration',
            type: 'int',
          },
          {
            name: 'genres',
            type: 'text',
          },
          {
            name: 'isAvailable',
            type: 'boolean',
            default: true,
          },
          {
            name: 'posterUrl',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('new_movie');
  }
}
