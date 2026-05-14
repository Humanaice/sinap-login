# sinap-login

Projeto React com Vite, Tailwind CSS e React Router, organizado para crescer com novas páginas e novos componentes sem bagunçar a base.

## O que já existe

- Duas páginas: Início e Sobre.
- Um componente reutilizável de botão.
- Layout central com navegação.
- Roteamento centralizado com react-router-dom.
- Estrutura pronta para adicionar mais páginas e componentes.

## Como iniciar o projeto

Instale as dependências:

```bash
npm install
```

Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere o build de produção:

```bash
npm run build
```

Veja o build localmente:

```bash
npm run preview
```

## Estrutura das pastas

```text
src/
├── app/
│   └── routes.jsx          # Configuração central de rotas
├── assets/                 # Arquivos estáticos (imagens, SVGs, etc)
├── components/
│   └── Button/
│       └── Button.jsx      # Componente reutilizável de botão
├── layouts/
│   └── RootLayout/
│       └── RootLayout.jsx  # Layout principal com navegação
├── pages/
│   ├── Home/
│   │   └── HomePage.jsx    # Página inicial
│   ├── About/
│   │   └── AboutPage.jsx   # Página sobre
│   └── NotFound/
│       └── NotFoundPage.jsx # Página 404
├── App.jsx                 # Componente raiz com rotas
├── index.css               # Estilos globais com Tailwind
└── main.jsx                # Ponto de entrada da aplicação
```

## Como o React está organizado

### Ponto de entrada

O `src/main.jsx` carrega o CSS global, envolve o app com `BrowserRouter` e monta o componente raiz `App`.

### Roteamento

O `src/App.jsx` contém todas as `Routes` usando `react-router-dom`. Cada rota aponta para uma página diferente dentro de um layout base.

As rotas são definidas em `src/app/routes.jsx` de forma centralizada, facilitando adicionar novas páginas sem mexer em outros arquivos.

### Layout

O `src/layouts/RootLayout/RootLayout.jsx` é o layout principal que envolve todas as rotas. Ele contém:

- Header com navegação
- Menu com links para as páginas
- Espaço principal onde as páginas são renderizadas via `Outlet`

### Páginas

Cada página fica em sua própria pasta dentro de `src/pages/`. Basta criar uma pasta com o nome da página e um componente dentro.

## Como criar uma nova página

1. Crie uma nova pasta dentro de `src/pages/`.
2. Coloque um componente React dentro dela.
3. Exporte o componente como `default`.
4. Adicione a nova rota em `src/app/routes.jsx`.

Exemplo:

```jsx
function ContatoPage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Página de contato
      </h1>
    </section>
  );
}

export default ContatoPage;
```

Depois, importe em `src/app/routes.jsx` e adicione a rota:

```jsx
import ContatoPage from "../pages/Contato/ContatoPage.jsx";

export const navigationLinks = [
  { path: "/", label: "Início" },
  { path: "/sobre", label: "Sobre" },
  { path: "/contato", label: "Contato" },
];

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/sobre", element: <AboutPage /> },
  { path: "/contato", element: <ContatoPage /> },
  { path: "*", element: <NotFoundPage /> },
];
```

O `navigationLinks` é usado automaticamente no layout para criar os links de navegação.

## Como criar um componente

1. Crie uma pasta em `src/components/`.
2. Nomeie o componente com a mesma ideia da pasta.
3. Reutilize o componente onde for necessário.

Exemplo de uso do botão:

```jsx
import Button from "../components/Button/Button.jsx";

function Example() {
  return <Button variant="primary">Salvar</Button>;
}
```

O botão aceita `variant="primary"` e `variant="secondary"`. Você também pode passar `className`, `disabled` e os eventos normais do HTML.

## Como usar o Tailwind CSS

O Tailwind já está configurado no `vite.config.js` com `@tailwindcss/vite` e importado no `src/index.css`.

Isso significa que você pode usar classes diretamente no `className` dos componentes:

```jsx
<div className="mx-auto flex min-h-screen items-center justify-center p-6">
  <h1 className="text-4xl font-bold text-white">Olá</h1>
</div>
```

Se precisar de estilos globais, use `src/index.css`.

## Boas práticas para crescer o projeto

- Coloque cada página em sua própria pasta.
- Coloque componentes reutilizáveis em pastas próprias também.
- Centralize as rotas em um único arquivo.
- Mantenha o layout separado das páginas.
- Prefira componentes pequenos e específicos.

## Comandos úteis

- `npm run dev` para desenvolvimento.
- `npm run build` para gerar a versão final.
- `npm run preview` para testar o build.
- `npm run lint` para conferir o código.
