# 📄 Manual do Projeto: Website Tatiane Miranda

Bem-vinda ao manual técnico e informativo do seu novo website profissional. Este documento foi preparado pela **Alpha Code** para garantir que você compreenda exatamente como o seu site foi construído e como ele funciona.

---

## 🚀 1. Tecnologias Utilizadas

O seu site foi desenvolvido com as tecnologias mais modernas do mercado, focando em velocidade, segurança e uma experiência de usuário premium.

*   **Astro (v5.1)**: O "esqueleto" do site. Escolhemos o Astro porque ele é extremamente rápido e otimizado para motores de busca (Google), garantindo que seu site carregue quase instantaneamente.
*   **React**: Utilizado para criar os elementos interativos, como o menu móvel, as animações e os formulários.
*   **Tailwind CSS**: Um sistema de design que permite criar um visual único, responsivo (funciona em celulares, tablets e PCs) e moderno.
*   **Framer Motion**: A tecnologia por trás de todas as animações fluidas e interações premium que dão "vida" ao site.
*   **Lucide-React**: Uma biblioteca de ícones elegantes e minimalistas.

---

## 🎨 2. Design e Identidade Visual

O site foi projetado para transmitir **profissionalismo, acolhimento e modernidade**.

*   **Paleta de Cores**:
    *   `Primary (#3a527e)` - Um azul profundo que transmite confiança e seriedade clínica.
    *   `Gold (#c5a059)` - Destaques em dourado para um toque de elegância e exclusividade.
    *   `Accent (#f0e6d5)` - Tons de areia/bege para suavizar o visual e trazer conforto visual.
*   **Tipografia**: Utilizamos uma combinação da fonte *Serif* (Cormorant Garamond) para títulos, trazendo um ar clássico e erudito, com a fonte *Sans* (Outfit/Inter) para textos de leitura, focando na clareza.

---

## 🏗️ 3. Estrutura do Site

O projeto está dividido em duas partes principais:

### A. Landing Page Principal (Home)
É a página principal onde os pacientes encontram tudo sobre você:
1.  **Hero**: A primeira impressão, com animações dinâmicas e sua foto de perfil.
2.  **Sobre**: Detalhes da sua trajetória e abordagem terapêutica.
3.  **Serviços**: Explicação clara das modalidades de atendimento.
4.  **Depoimentos**: Feedback de pacientes para gerar autoridade e confiança.
5.  **Localização**: Mapa integrado para facilitar a chegada ao consultório.
6.  **Contato**: Formulário e botões diretos para agendamento via WhatsApp.

### B. LinkTree Exclusivo (`/links`)
Uma página dedicada especificamente para ser usada na sua bio do Instagram. 
*   **Ícones 3D**: Criamos artes exclusivas em 3D para o Agendamento, Website, Instagram e Localização.
*   **Design Pop-Out**: Os ícones saltam para fora quando o usuário interage, criando um visual único que se diferencia das ferramentas comuns.

---

## 🛠️ 4. Como o Site é Mantido?

### Onde os arquivos estão guardados?
O código-fonte está organizado da seguinte forma:
*   `src/pages/`: Contém as páginas do site (`index.astro` e `links.astro`).
*   `src/components/`: Estão as "peças" do site (Botão de WhatsApp, Formulário, Hero, etc).
*   `public/`: Local onde as imagens, ícones e o seu logo estão guardados.

### Como atualizar informações?
As informações de contato e textos principais estão centralizados nos arquivos dentro de `src/components/`. Por exemplo, para mudar o link do WhatsApp, o ajuste é feito no componente `WhatsAppButton.tsx` ou diretamente no `LinkTree.tsx`.

---

## 📞 5. Suporte Alpha Code

Qualquer dúvida ou necessidade de alteração futura, sinta-se à vontade para entrar em contato conosco através do nosso link oficial presente no rodapé do seu site.

**Alpha Code** - *Transformando ideias em experiências digitais.*
[Visite nosso site](https://www.sitesalphacode.com.br/solucoes/psicologos)

---
*Este manual foi gerado em 27 de fevereiro de 2026.*
