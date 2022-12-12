import React from 'react';
import swal from 'sweetalert';
import './components/styles/userCard.css';



const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {

    const handleEdit = () => {
        setUpdateInfo(user)
    }

    const mostrarAlerta = () => {
        swal({
            title: "Delete",
            text: "Are you sure you want to delete?",
            icon: "warning",
            buttons: ["No", "Yes"]
        }).then(respuesta => {
            if (respuesta) deleteUserById(user.id)
        })
    }

    const handleTrash = () => {
        mostrarAlerta()
    }

    return (
        <article className='card'>
            <h3 className='card__title'>
                👤 {user.first_name} {user.last_name}</h3>
            <hr />
            <ul className='card__body'>
                <li className='card__item'>
                    <span className='card__span'>📩 Email</span>
                    {user.email}
                </li>
                <li className='card__item'>
                    <span className='card__span'>🎂 Birthday</span>
                    {user.birthday}
                </li>
                <footer className='card__footer'>
                    <button className='card__btn card__btn__trash' onClick={handleTrash} ><i className="fa-solid fa-trash-can"></i></button>
                    <button className='card__btn card__btn__edit' onClick={handleEdit}><i className="fa-regular fa-pen-to-square"></i></button>
                </footer>
            </ul>
        </article>
    )
}

export default UserCard