// cria a rota de API '/api/status'
// request -> o que vem de fora
// response -> o que meu sistema responde para fora
function status(request, response) {
  response.status(200).json({ chave: "São acima da média" }); // 200 - OK
}

export default status;
