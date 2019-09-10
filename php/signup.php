<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=doacao";
$usuario = "root";
$senha = "";
try {
	$conexao = new PDO($host, $usuario, $senha);

	if(!$conexao){
		echo "Não foi possivel conectar com Banco de Dados!";
	}		

	$query = $conexao->prepare('SELECT * FROM `users` order by user_id asc');

		$query->execute();

		$out = "[";

		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"codigo": "'.$result["user_id"].'",';
			$out .= '"nome": "'.$result["username"].'",';
			$out .= '"quantidade": "'.$result["password"].'",';
			$out .= '"descricao": "'.$result["name"].'",';
			$out .= '"foto": "'.$result["email"].'",';
			}
		$out .= "]";
		echo $out;



} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
