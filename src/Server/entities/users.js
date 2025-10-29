import { EntitySchema } from "typeorm";

const users = new EntitySchema({
    name: "users",
    tableName: "users",
    columns:{
        id_usuario: {type: "int", primary:true, generated:true},
        nome_usuario: {type: "varchar", length: 255},
        senha_usuario: {type: "varchar", length: 255}
    }
})


export default users