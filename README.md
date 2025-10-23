# 🔐 Gerador de Hash de Senhas

Uma ferramenta simples e segura para gerar hashes de senhas usando bcrypt, ideal para desenvolvimento e testes.

## 📋 Descrição

Este projeto oferece uma maneira rápida e segura de gerar hashes bcrypt para senhas. Utiliza a biblioteca bcrypt com configurações seguras (salt rounds = 10) para criar hashes que podem ser usados em sistemas de autenticação.

## ✨ Características

- 🔒 **Seguro**: Utiliza bcrypt, padrão da indústria para hash de senhas
- ⚡ **Rápido**: Geração instantânea de hashes
- 🛡️ **Configurável**: Salt rounds otimizado para segurança vs performance
- 📝 **Simples**: Interface limpa e fácil de usar
- 🔍 **Informativo**: Exibe tanto a senha original quanto o hash gerado

## 🚀 Instalação

### Pré-requisitos
- Node.js (versão 12 ou superior)
- npm ou yarn

### Passos

1. Clone ou baixe o projeto:
```bash
git clone <url-do-repositorio>
cd gerarsenha
```

2. Instale as dependências:
```bash
npm install
```

## 📖 Como Usar

### Método 1: Edição Direta do Código

1. Abra o arquivo `gerarSenha.js`
2. Localize a linha:
```javascript
const senha = '123456';
```
3. Substitua `'123456'` pela senha desejada
4. Execute o script:
```bash
node gerarSenha.js
```

### Exemplo de Saída:
```
Senha original: minhasenha123
Hash gerado: $2b$10$N9qo8uLOickgx2ZMRZoMye.XjAOL.4IH.bxb4V9QJO.pDYLJE/O2G
```

### Método 2: Uso Programático

Você pode importar e usar a função em outros projetos:

```javascript
const { gerarSenhaHash } = require('./gerarSenha');

// Usar a função
await gerarSenhaHash('minha-senha-secreta');
```

## ⚙️ Configuração

### Ajustar Nível de Segurança

No arquivo `gerarSenha.js`, você pode modificar o `saltRounds` para ajustar o nível de segurança:

```javascript
const saltRounds = 10; // Padrão recomendado
// const saltRounds = 12; // Mais seguro, mas mais lento
// const saltRounds = 8;  // Mais rápido, mas menos seguro
```

**Recomendações:**
- `8-10`: Ideal para desenvolvimento e testes
- `10-12`: Recomendado para produção
- `12+`: Alta segurança, mas impacto na performance

## 🛠️ Estrutura do Projeto

```
gerarsenha/
├── gerarSenha.js        # Arquivo principal com a lógica
├── package.json         # Configurações e dependências
├── package-lock.json    # Lock file das dependências
└── README.md           # Este arquivo
```

## 📦 Dependências

- **bcrypt** (^6.0.0): Biblioteca para hash seguro de senhas

## 🔍 Exemplos de Uso

### Gerar Hash para Diferentes Senhas

```javascript
// Senhas de exemplo
const senhas = ['admin123', 'usuario@2023', 'senha-super-secreta'];

for (const senha of senhas) {
    await gerarSenhaHash(senha);
    console.log('---');
}
```

### Verificar Senha Contra Hash

```javascript
const bcrypt = require('bcrypt');

async function verificarSenha(senhaPlana, hash) {
    const resultado = await bcrypt.compare(senhaPlana, hash);
    console.log(`Senha válida: ${resultado}`);
    return resultado;
}
```

## 🚨 Segurança

- **Nunca** commite senhas reais no código
- **Sempre** use variáveis de ambiente para senhas em produção
- **Mantenha** o bcrypt atualizado
- **Considere** usar salt rounds adequados ao seu ambiente

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🆘 Suporte

Se encontrar algum problema ou tiver sugestões, abra uma issue no repositório.

---

**Desenvolvido com ❤️ para facilitar o desenvolvimento seguro**