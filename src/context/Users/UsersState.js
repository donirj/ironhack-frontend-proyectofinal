import React, { useReducer } from 'react'
import axiosClient from '../../config/axios'

import UsersContext from "./UsersContext"
import UsersReducer from "./UsersReducer"

const UsersState = (props) => {

    const initialState = {
        user: {
            _id: null,
            username: null,
            email: null
        },
        authStatus: false
    }

    const [globalState, dispatch] = useReducer(UsersReducer, initialState)

    //CREAR USUARIO - POST

    const registerUser = async (dataForm) => {

        console.log(dataForm)

        try {

            const res = await axiosClient.post("/api/users/create", dataForm)
            //YA TENGO EL TOKEN
            //DEBO GUARDAR EL TOKEN EN  LOCALSTORAGE

            const token = res.data.data.token

            dispatch({
                type: "CREAR_USUARIO_EXITOSAMENTE",
                payload: token
            })

        } catch (error) {
            console.log(error)
        }

    }


    //INICIAR SESION - POST
    const loginUser = async (dataForm) => {

        try{

            const res = await axiosClient.post("/api/auth/login", dataForm)

            const token = res.data.data.token

            dispatch({
                type: "INICIO_SESION_EXITOSO",
                payload: token
            })

        } catch (error) {
            console.log(error)

        }
    }
    

    //VERIFICAR SESION - GET CONFIGURACION DE CREDENCIALES
    const tokenVerification = async () => {

        const token = localStorage.getItem("token")

        //VERIFICAR QUE SI NO HAY TOKEN
        if(!token){
            console.log("borrando token de headers")
            delete axiosClient.defaults.headers.common["x-auth-token"]//LIMPIA PETICION DEL CLIENT
        }

        //SI TODO BIEN...ENTONCES, AGREGUEMOS EL TOKEN A LOS HEADERS
       axiosClient.defaults.headers.common["x-auth-token"] = token

       //HACER LA PETICION
        try {
            const res = await axiosClient.get("/api/auth/verifying-token")

            const currentUser = res.data.data.user

            dispatch({
                type: "OBTENER_USUARIO",
                payload: currentUser
            })

            console.log(res)

        } catch (error) {
            console.log(error)
        }

    }

    const logoutUser = async () => {

        dispatch({
            type: "CERRAR_SESION"
        })
    }

    return (
        <UsersContext.Provider
        value={{
            user: globalState.user,
            authStatus: globalState.authStatus,
            registerUser,
            loginUser,
            tokenVerification,
            logoutUser
        }}
        >
            {props.children}
        </UsersContext.Provider>
    )

}

export default UsersState