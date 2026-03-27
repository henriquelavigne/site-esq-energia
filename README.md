# ESQ Energia — Kit para Google Antigravity

Kit completo de **Skill**, **Rules**, **Workflows** e **Prompts Faseados** para construir a landing page da ESQ Energia no Google Antigravity.

## Instalação Rápida

### 1. Crie o workspace do projeto
```bash
mkdir esq-energia && cd esq-energia
```

### 2. Copie a pasta `.agents/` para a raiz do workspace
```bash
cp -r /caminho/para/este-kit/.agents/ .
```

A estrutura deve ficar assim:
```
esq-energia/
├── .agents/
│   ├── skills/
│   │   └── esq-energia-brand/
│   │       ├── SKILL.md              ← Metadata + instruções da skill
│   │       └── resources/
│   │           └── DESIGN_TOKENS.md  ← Tokens completos (cores, tipografia, efeitos)
│   ├── rules/
│   │   ├── code-conventions.md       ← TypeScript, React, acessibilidade
│   │   └── project-structure.md      ← Organização de pastas e nomeação
│   └── workflows/
│       ├── create-section.md         ← Workflow: criar nova seção
│       ├── create-ui-component.md    ← Workflow: criar componente UI
│       └── visual-qa.md             ← Workflow: checklist de QA visual
└── PROMPTS_GUIDE.md                  ← 12 prompts faseados para o Agent Manager
```

### 3. Abra no Antigravity
```bash
agy .
```

### 4. Configure o agente
- **Modo**: Planning (para a maioria dos prompts)
- **Modelo**: Gemini 3 Pro
- **Terminal Policy**: Review-driven development (recomendado)

### 5. Execute os prompts
Abra `PROMPTS_GUIDE.md` e siga os prompts na ordem (0 → 11).
Cada prompt é uma task independente no Agent Manager.

## O que cada arquivo faz

| Arquivo | Tipo | Função |
|---------|------|--------|
| `skills/esq-energia-brand/SKILL.md` | Skill | Carregada automaticamente quando o agente trabalha em CSS, componentes ou UI |
| `skills/.../DESIGN_TOKENS.md` | Resource | Referência completa de cores, tipografia, efeitos, animações e estrutura |
| `rules/code-conventions.md` | Rule | Sempre ativa — garante TypeScript strict, pt-BR na UI, acessibilidade |
| `rules/project-structure.md` | Rule | Sempre ativa — garante organização de pastas e nomeação correta |
| `workflows/create-section.md` | Workflow | Acione com `/create-section` antes de criar uma seção |
| `workflows/create-ui-component.md` | Workflow | Acione com `/create-ui-component` antes de criar um componente |
| `workflows/visual-qa.md` | Workflow | Acione com `/visual-qa` após completar cada prompt |

## Notas Importantes

- **Idioma**: UI em pt-BR, código em inglês. As rules garantem isso automaticamente.
- **Skills são lazy-loaded**: O agente só carrega a skill quando a tarefa é relevante. Usar `@esq-energia-brand` no prompt força o carregamento.
- **Rules são sempre ativas**: Aplicadas a toda geração de código no workspace.
- **Workflows são on-demand**: Acionados com `/nome-do-workflow` no chat.
- **Faça commits entre prompts**: `git add -A && git commit -m "prompt-X: descrição"`
