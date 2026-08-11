import { BUSINESS_NAME, CNPJ, EMAIL, LEGAL_NAME, SERVICE_AREA } from '../lib/constants'
import { SectionHeading } from './SectionHeading'

export function Legal() {
  return (
    <section id="privacidade" className="section-space bg-[#f4f9fd]" aria-labelledby="privacy-title">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Transparência"
          title="Privacidade e condições de atendimento"
          description="Informações claras sobre a empresa, o contato e o uso dos dados enviados neste site."
        />
        <div className="legal-grid">
          <article className="legal-card">
            <h2 id="privacy-title">Política de privacidade</h2>
            <p><strong>Controlador:</strong> {BUSINESS_NAME}, nome empresarial {LEGAL_NAME}, CNPJ {CNPJ}.</p>
            <p>Coletamos nome, telefone, e-mail opcional, localidade e informações sobre o equipamento apenas para analisar a solicitação, responder ao contato, preparar orçamento e agendar o serviço.</p>
            <p>Ao enviar o formulário, os dados são encaminhados ao WhatsApp, serviço operado pela Meta, somente após sua ação e consentimento. Não vendemos dados pessoais.</p>
            <p>As informações são mantidas pelo período necessário ao atendimento e ao cumprimento de obrigações legais. Você pode solicitar acesso, correção ou exclusão pelo e-mail <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            <p>Cookies de medição só são ativados quando o visitante aceita. A preferência fica salva neste navegador e pode ser alterada apagando os dados do site.</p>
          </article>
          <article id="termos" className="legal-card">
            <h2>Condições de atendimento</h2>
            <p><strong>Área atendida:</strong> {SERVICE_AREA}.</p>
            <p>O atendimento é realizado mediante contato prévio e agendamento. Disponibilidade, prazo, deslocamento, peças, materiais e forma de pagamento são informados antes da contratação.</p>
            <p>O orçamento depende da avaliação do equipamento e do local. Nenhum valor ou serviço é contratado pelo simples envio do formulário.</p>
            <p>Quando aplicável, as condições de garantia são registradas na proposta ou ordem de serviço, de acordo com o serviço executado e os componentes utilizados.</p>
            <p>Imagens são ilustrativas. Serviços e marcas de equipamentos atendidos devem ser confirmados durante a avaliação técnica.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
