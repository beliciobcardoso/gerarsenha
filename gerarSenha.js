const bcrypt = require('bcrypt');

async function gerarSenhaHash(senhaPlana) {
  const saltRounds = 10;

  try {
    const hash = await bcrypt.hash(senhaPlana, saltRounds);
    console.log(`Senha original: ${senhaPlana}`);
    console.log(`Hash gerado: ${hash}`);
  } catch (err) {
    console.error('Erro ao gerar hash:', err);
  }
}

// Altere a senha aqui para gerar um novo hash rapidamente
const senha = '123456';
gerarSenhaHash(senha);
