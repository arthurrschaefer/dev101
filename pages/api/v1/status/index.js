function status(request, response) {
    response.status(200).json({ chave: "Arthur Schaefer esteve aqui"})
}

export default status