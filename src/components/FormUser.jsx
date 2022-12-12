import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css'
import swal from 'sweetalert'


const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm }) => {

    console.log(updateInfo)

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const { register, reset, handleSubmit } = useForm()

    const mostrarAlerta = () => {
        swal({
            title: "User created successfully",
            icon: "success",
            button: "accept",
            timer: "2000"

        })
    }

    const submit = data => {
        if (updateInfo) {
            // Actualiza(Update)
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            //Create
            createNewUser(data)
        }

        setCloseForm(t)
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        })
    }


    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <div onClick={() => setCloseForm(true)} className='form__x'>x</div>
            <h2 className='form__title'>{updateInfo ? 'Update User' : 'Create User'}</h2>
            <div className='form__div'>
                <label className='form__label' htmlFor="email">Email</label>
                <input className='form__input' type="email" id='email' {...register("email")} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="password">Password</label>
                <input className='form__input' type="password" id='password' {...register("password")} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="first_name">First Name</label>
                <input className='form__input' type="text" id='first_name' {...register("first_name")} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="last_name">Last Name</label>
                <input className='form__input' type="text" id='last_name' {...register("last_name")} />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="birthday">Birthday</label>
                <input className='form__input' type="date" id='birthday' {...register("birthday")} />
            </div>
            <button onClick={() => mostrarAlerta()} className='form__btn'>Submit</button>

        </form>
    )
}

export default FormUser