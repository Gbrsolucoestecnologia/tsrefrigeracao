import {
  Building2, CheckCircle2, Clock3, Factory, Gauge, Handshake,
  HeartHandshake, Home, ShieldCheck, Sparkles, Store, Stethoscope,
  ThumbsUp, ClipboardList, UserCheck, Users, Wrench, Zap,
} from 'lucide-react'

export const services = [
  { icon: Gauge, title: 'Instalação de Ar-Condicionado', description: 'Instalação completa, realizada com materiais de qualidade, segurança e atenção às especificações do fabricante.' },
  { icon: ShieldCheck, title: 'Manutenção Preventiva', description: 'Verificação e cuidados periódicos para reduzir o risco de falhas e manter o funcionamento adequado do equipamento.' },
  { icon: Wrench, title: 'Manutenção Corretiva', description: 'Diagnóstico de falhas, vazamentos e problemas de funcionamento. Reparos e eventual recarga de fluido são indicados somente após avaliação.' },
  { icon: Sparkles, title: 'Limpeza e Higienização', description: 'Melhore a qualidade do ar e mantenha seu equipamento limpo, saudável e eficiente.' },
  { icon: Home, title: 'Atendimento Residencial', description: 'Soluções personalizadas para casas e apartamentos, proporcionando conforto e bem-estar.' },
  { icon: Building2, title: 'Atendimento Empresarial', description: 'Atendimento para empresas, escritórios, lojas, clínicas e diferentes segmentos comerciais.' },
]

export const differentials = [
  { icon: ThumbsUp, title: 'Avaliação', description: 'Análise da necessidade antes da execução.' },
  { icon: ShieldCheck, title: 'Procedimento', description: 'Serviço conforme o diagnóstico realizado.' },
  { icon: HeartHandshake, title: 'Transparência', description: 'Condições informadas antes da contratação.' },
  { icon: Zap, title: 'Contato direto', description: 'Solicitação organizada pelo WhatsApp.' },
  { icon: Handshake, title: 'Agendamento', description: 'Data definida conforme disponibilidade.' },
  { icon: UserCheck, title: 'Orientação', description: 'Informações adequadas ao equipamento e ambiente.' },
]

export const audiences = [
  { icon: Home, title: 'Casas e apartamentos', position: '0% 0%' },
  { icon: Building2, title: 'Escritórios', position: '50% 100%' },
  { icon: Store, title: 'Lojas e comércios', position: '100% 0%' },
  { icon: Stethoscope, title: 'Clínicas e consultórios', position: 'center', image: 'images/audience-clinic.webp' },
  { icon: Factory, title: 'Empresas e indústrias', position: '0% 100%' },
]

export const processSteps = [
  { icon: Users, title: 'Entre em contato', description: 'Fale conosco pelo WhatsApp, telefone ou formulário.' },
  { icon: ClipboardList, title: 'Explique sua necessidade', description: 'Conte qual serviço precisa ou qual problema o equipamento apresenta.' },
  { icon: CheckCircle2, title: 'Receba orientação', description: 'Nossa equipe analisa sua necessidade e indica a melhor solução.' },
  { icon: Clock3, title: 'Agende o serviço', description: 'Definimos a data e realizamos o serviço com qualidade e segurança.' },
]
