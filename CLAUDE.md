# codlinx.com.br

Site institucional B2B da Codlinx Tecnologia Ltda — software personalizado para empresas, BH/MG.
Deploy: Vercel (automático no push para `master`). `cleanUrls: true` — sem `.html` nas URLs.

## Stack

- HTML5 estático + Vanilla JS
- **Tailwind CSS v3 CLI** — sem CDN. Sempre regenerar após editar classes nos HTMLs
- Ícones: SVGs inline (sem Lucide CDN)
- Fontes: auto-hospedadas em `assets/fonts/` (Inter + JetBrains Mono `.woff2`)
- CSS: `assets/css/index.css` → compilado para `assets/css/output.css` (incluído em todos os HTMLs)

## Comando obrigatório após mudar classes Tailwind nos HTMLs

```bash
echo 'module.exports={content:["./*.html"],theme:{extend:{}},plugins:[]}' > tailwind.config.js && npx tailwindcss@3 -i assets/css/index.css -o assets/css/output.css --minify && rm tailwind.config.js
```

## Páginas

| Arquivo | URL | Descrição |
|---|---|---|
| `index.html` | `/` | Home principal |
| `clinicas.html` | `/clinicas` | Bridge para DoctorSet (doctorset.com.br) |
| `comercio.html` | `/comercio` | ERP/sistema comercial |
| `microsoft-365.html` | `/microsoft-365` | Parceiro Microsoft |
| `automacoes.html` | `/automacoes` | Automação comercial |
| `monitoramento.html` | `/monitoramento` | Monitoramento 24/7 de servidores |
| `privacidade.html` | `/privacidade` | Política de privacidade (noindex) |

## Integrações

- **Formulário de contato**: `POST https://workflow.codlinx.com.br/webhook/codlinx_site_contact`
- **WhatsApp**: `https://wa.me/553131910305` (abre com mensagem pré-preenchida — não é automático)
- **GTM**: GTM-TCGKJZQ8 | **GA4**: G-X11BWGD988 | **Google Ads**: AW-16652618960
- **Osano CMP** (cookie consent LGPD): carregado com `defer`
- **JivoSite** (chat): `//code.jivosite.com/widget/prtgOr2DWD`

## Elementos flutuantes (index.html)

- **Bottom-left** (`bottom-6 left-6 z-50`): pill azul "Consulta Gratuita" → scrolla para `#contato`
- **Bottom-right** (`bottom-6 right-6 z-50`): botão redondo verde WhatsApp

## Regras importantes

- **Nunca mergear direto na `master`** — sempre via PR aprovado pelo usuário
- Após editar HTML: regenerar `output.css` (comando acima)
- Novos ícones: sempre SVG inline (nunca CDN). Paths em `https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/{name}.svg`
- Novos emojis no HTML: substituir por SVG inline com `flex items-center gap-1.5`
- `index.bkp.html`: backup do site antigo — não editar, não deletar

## SEO / Structured Data

JSON-LD em todas as páginas: `Organization`, `LocalBusiness`, `FAQPage`.
`sitemap.xml` na raiz — atualizar `lastmod` ao criar novas páginas.

## CNPJ / Razão Social

CNPJ: 58.942.500/0001-22 — Codlinx Tecnologia Ltda
