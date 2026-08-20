# Gestor-ESE — nova versão Firebase

Esta pasta é a nova versão de homologação do portal de gestão. Ela preserva o visual do Gestor antigo, mas usa o mesmo projeto Firebase do novo Supervisor-ESE.

## Ambiente

- Repositório novo: `https://github.com/sor-Seintec/Gestor-ESE`
- Endereço esperado após ativar o GitHub Pages: `https://sor-seintec.github.io/Gestor-ESE/`
- Projeto Firebase: `supervisor-ese`
- Acesso: somente contas ativas com `role: "admin"` em `users/{uid}`

O Gestor antigo e o Supervisor antigo, com `_` no nome, não são alterados por estes arquivos.

## Dados já conectados ao Firestore

- `users`: validação do perfil administrativo;
- `supervisors`: cadastro e nomes dos supervisores;
- `schools`: escolas e vínculo com o supervisor;
- `agenda`: planejamento das visitas;
- `visits`: registros e status das visitas;
- `goalJustifications`: solicitações de justificativa de meta, quando a regra já estiver publicada.

## Páginas migradas

- `index.html`: login, indicadores da página inicial e busca geral;
- `BM.html`: escolas × planejamento;
- `BS.html`: supervisores × planejamento;
- `filtros.html`: pesquisa e exportação dos registros;
- `prioridade.html`: escolas sem visita, meta e validações;
- `meta.html`: análise de metas usando agenda e visitas do Firebase;
- `DMC.html`: panorama mensal usando as visitas do Firebase;
- `locescola.html`: diretório detalhado protegido pelo novo login;
- demais páginas visuais preservadas para integração gradual.

## Publicação no GitHub

1. Abra o repositório `sor-Seintec/Gestor-ESE`.
2. Use **Add file > Upload files**.
3. Envie todos os arquivos desta pasta, mantendo `index.html` na raiz.
4. Confirme em **Commit changes**.
5. Abra **Settings > Pages**.
6. Em **Build and deployment**, selecione **Deploy from a branch**.
7. Escolha a branch `main`, a pasta `/ (root)` e clique em **Save**.
8. Aguarde a publicação e abra `https://sor-seintec.github.io/Gestor-ESE/`.

O domínio `sor-seintec.github.io` já está autorizado no Firebase Authentication.

## Regras importantes de KPI

- Realizada (`V`) conta como visita concluída.
- Adiada (`A`) e Cancelada (`C`) são ocorrências operacionais e não compensam meta.
- Justificada (`J`) cria uma solicitação separada em `goalJustifications`.
- Uma justificativa pendente não entra no resultado da meta.
- Somente `validationStatus: "approved"` com `goalCreditApproved > 0` poderá compensar a meta.

## Próxima etapa

Criar a coleção auditável de metas e o painel administrativo para:

- definir meta semanal e mensal por supervisor e período;
- registrar quem alterou e quando;
- aprovar ou rejeitar justificativas;
- recalcular os KPIs com visitas realizadas mais créditos aprovados.

Até essa etapa, `meta.html` identifica claramente os ajustes feitos no navegador como provisórios, e `DMC.html` bloqueia o envio para o sistema antigo.
