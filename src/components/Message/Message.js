import {React, useEffect } from "react";
import Swal from 'sweetalert2'

const Message = ({ title, icon, showConfirmButton }) => {
	useEffect(()=> {
		Swal.fire({
			title: title,
			showClass: {
				popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp'
			},
			position: 'top-end',
			icon: icon,
			showConfirmButton: showConfirmButton,
			timer: 2000
		})
	}, [title, icon, showConfirmButton])
	return (
		<>
			
		</>
	);
};


export default Message;