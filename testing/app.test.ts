import { ApolloServer } from "@apollo/server"
import {createStandaloneServer } from "../src/server"
import gql from "graphql-tag"

const mensaje = ()=>'hola'
let server: ApolloServer | null
beforeAll(async()=>{
    server = await createStandaloneServer()
})
test('should first', async () => { 
    
    const query = gql`
        query Prueba {
            hola
        }
    `
    const result = await server?.executeOperation({query})
    expect(result).toBe('hola')
 })