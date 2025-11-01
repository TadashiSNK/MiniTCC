import { EntitySchema } from "typeorm";

const users = new EntitySchema({
    name: "users",
    tableName: "users",
    columns:{
        id_usuario: {type: "int", primary:true, generated:true},
        email_usuario: {type: "varchar", length: 255, unique:true, nullable:false},
        foto_ref: {type: "varchar", length: 255},
        nome_usuario: {type: "varchar", length: 255},
        senha_usuario: {type: "varchar", length: 255}
    }
})


export default users