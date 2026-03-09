# Advogado Pro - Funil de Qualificação

Este projeto é um funil de qualificação de leads para escritórios de advocacia, estruturado com Landing Page, Quiz, Captura de Leads e Página de Resultados personalizada.

## Estrutura do Funil
1. **Landing Page**: Apresentação e CTA inicial.
2. **Quiz**: Perguntas estratégicas para qualificação (Área, Tamanho, Captação, Meta, Orçamento, Prazo).
3. **Lead Capture**: Coleta de dados de contato (Nome, Email, WhatsApp, Instagram, Nome do Escritório).
4. **Result Page**: Resultado personalizado com CTAs para WhatsApp e Cal.com.

## Integrações

### 1. Supabase (Banco de Dados Principal)
Os leads são salvos automaticamente na tabela `leads`.
- **Campos**: id, created_at, name, law_firm, email, phone, instagram, practice_area, firm_size, client_acquisition_method, monthly_goal, marketing_budget, implementation_timeline, lead_score, status, notes.
- **Status possíveis**: `new`, `whatsapp_clicked`, `scheduled`.

### 2. Google Sheets (Integração Direta)
O projeto envia leads diretamente para o Google Sheets através de um **Google Apps Script Web App**.
- **Como configurar**:
  1. Crie uma nova planilha e vá em Extensões -> Apps Script.
  2. Cole o código fornecido em `google_sheets_script.js`.
  3. Implante como "Web App" com permissão para "Qualquer pessoa".
  4. Adicione a URL gerada à variável `VITE_GOOGLE_SHEETS_WEBHOOK` no seu `.env`.

### 3. Cal.com (Agendamento)
Integrado na página de resultados para agendamento automático de chamadas.
- **Configuração**: Adicione sua chave de API em `VITE_CALCOM_API_KEY`.
- **Rastreamento**: O sistema detecta agendamentos bem-sucedidos e atualiza o status no Supabase para `scheduled`.

---

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_SUPABASE_URL=https://skteceddwanzdugoamzh.supabase.co
VITE_SUPABASE_ANON_KEY=seu-anon-key
VITE_GOOGLE_SHEETS_WEBHOOK=sua-url-do-google-apps-script
VITE_CALCOM_API_KEY=sua-chave-do-cal-com
```

## Comandos Disponíveis

- `npm install`: Instala as dependências.
- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera o build de produção.

## Deployment no VPS Hostinger

1. Realize o push das alterações para o seu repositório GitHub.
2. No seu VPS, clone o repositório.
3. Certifique-se de ter o Node.js e o Nginx instalados.
4. Rode `npm install` e `npm run build`.
5. Aponte o Nginx para a pasta `dist` gerada pelo build.

## Configuração do Banco de Dados (SQL)

Execute o seguinte SQL no editor do Supabase para criar a mesa de leads:

```sql
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    name TEXT NOT NULL,
    law_firm TEXT,
    email TEXT,
    phone TEXT,
    instagram TEXT,
    practice_area TEXT,
    firm_size TEXT,
    client_acquisition_method TEXT,
    monthly_goal TEXT,
    marketing_budget TEXT,
    implementation_timeline TEXT,
    lead_score INT,
    status TEXT DEFAULT 'new',
    notes TEXT
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON leads
FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to view/update
CREATE POLICY "Allow authenticated full access" ON leads
FOR ALL USING (auth.role() = 'authenticated');
```
