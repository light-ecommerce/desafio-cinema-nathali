<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $filme = htmlspecialchars($_POST['filme']);
    $data = htmlspecialchars($_POST['date']); 
    $sessao = htmlspecialchars($_POST['sessao']);
    $numIngressos = htmlspecialchars($_POST['numIngressos']);
    $assentos = htmlspecialchars($_POST['seats']);
    $nome = htmlspecialchars($_POST['nome']);
    $telefone = htmlspecialchars($_POST['telefone']);
}

    if if (empty($filme) || empty($data) || empty($sessao) || empty($numIngressos) || empty($assento) || empty($nome) || empty($telefone)) {
        echo "Todos os campos são obrigatórios!";
        exit;
    }

   echo "Filme: $filme<br>";
   echo "Data: $data<br>";
   echo "Sessão: $sessao<br>";
   echo "Número de Ingressos: $numIngressos<br>";
   echo "Assentos: $assentos<br>";
   echo "Nome: $nome<br>";
   echo "Telefone: $telefone<br>";
   
?>

