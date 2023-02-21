import React from "react";

import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
export const Form=()=>{

    const schema=yup.object().shape({
        name:yup.string().required("name is required"),
        email:yup.string().email().required("email is required"),
        age:yup.number().positive().integer().min(18).required("age is required"),
        password:yup.string().min(4).max(20).required("password is required"),
        confirmpassword:yup.string().oneOf([yup.ref("password"),null],"password dont match").required()

    })

    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    });

    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="center">
            <input type="text" 
            placeholder="name" 
            {...register("name")}
            />
            <p>{errors.name?.message}</p>
            <input type="text" 
            placeholder="email" 
            {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <input type="number" 
            placeholder="age" 
            {...register("age")}
             />
             <p>{errors.age?.message}</p>
            <input type="password" 
            placeholder="password"
             {...register("password")}
             />
             <p>{errors.password?.message}</p>
            <input type="confirm password"
             placeholder="confirm password" 
             {...register("confirmpassword")}
              />
              <p>{errors.confirmpassword?.message}</p>
            <input type="submit"/>

        </form>
    )
}