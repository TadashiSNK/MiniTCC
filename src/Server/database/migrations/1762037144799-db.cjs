/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Db1762037144799 {
    name = 'Db1762037144799'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`email_usuario\` varchar(255) NOT NULL, \`foto_ref\` varchar(255) NOT NULL, \`nome_usuario\` varchar(255) NOT NULL, \`senha_usuario\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_a717c1a4606c9b4b749ebae89e\` (\`email_usuario\`), PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_a717c1a4606c9b4b749ebae89e\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
