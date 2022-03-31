import React, { useState } from "react";

const TodoList = () => {
	const [todolist, setTodolist] = useState([]);
	const [mensaje, setMensaje] = useState({
		dato: "",
	});
	const guardardato = (evento) => {
		setMensaje({
			...mensaje,
			[evento.target.name]: evento.target.value,
		});
	};
	const clickguardar = () => {
		setTodolist([...todolist, mensaje]);
	};
	const clickborrar = (id) => {
		let newsdatos = todolist.filter((item, index) => index != id);
		setTodolist(newsdatos);
	};
	return (
		<>
			<h1 className="titulos text-center mt-5">Todos</h1>
			<div className="Container">
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4 formulario">
						<div className="row">
							<div className="col-12 mt-3">
								<div className="input-group mb-3">
									<input
										type="text"
										className="form-control"
										placeholder="Escribe tu items"
										aria-label="Escribe tu items"
										aria-describedby="basic-addon2"
										name="dato"
										value={mensaje.dato}
										onChange={guardardato}
									/>
									<div className="input-group-append">
										<button
											onClick={() => clickguardar()}
											className="btn btn-outline-secondary"
											type="button">
											Button
										</button>
									</div>
								</div>
							</div>

							{todolist.map((item, index) => (
								<div
									key={index}
									className="items-list col-12 contador">
									<div className="row">
										<div className="col-8">
											<p>{item.dato} </p>
										</div>
										<div className="col-4 d-flex justify-content-end">
											<button
												onClick={() =>
													clickborrar(index)
												}
												type="button"
												className="btn-close"
												aria-label="Close"></button>
										</div>
									</div>
								</div>
							))}

							<div className="col-12 contador">
								<p>{todolist.length} Items</p>
							</div>
						</div>
					</div>
					<div className="col-4"></div>
				</div>
			</div>
		</>
	);
};

export default TodoList;
