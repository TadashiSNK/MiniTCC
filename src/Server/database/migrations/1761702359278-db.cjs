/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Db1761702359278 {
    name = 'Db1761702359278'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`nome_usuario\` varchar(255) NOT NULL, \`senha_usuario\` varchar(255) NOT NULL, PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
