import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects = [
    { titulo: 'Rastreei: Rastreamento', detalhes: 'Rastreei é um sistema de rastreamento veicular e gestão voltado para associações de benefícios, desenvolvido com foco em eficiência e tecnologia. No desenvolvimento, criei códigos personalizados que automatizam processos essenciais de rastreamento, otimizando a gestão e reduzindo custos operacionais. Além disso, implementei novos recursos que ampliam as funcionalidades do sistema, trazendo maior precisão e segurança para os associados. O sistema Rastreei combina tecnologia avançada com automação estratégica, sendo um exemplo de como inovação pode transformar serviços de rastreamento e gestão no mercado atual.', imagem: '', url: 'https://rastreei.com/' },
    { titulo: 'Spektrum Glasses', detalhes: 'A Spektrum Glasses é uma loja virtual especializada na venda de óculos de sol e de grau. O projeto foi desenvolvido com foco na experiência do usuário, oferecendo uma interface intuitiva e responsiva. Implementamos um sistema de gerenciamento de estoque em tempo real, permitindo que os clientes visualizem a disponibilidade dos produtos. Além disso, a plataforma conta com um sistema de pagamento seguro e diversas opções de envio, garantindo uma experiência de compra fluida e confiável.', imagem: '', url: 'https://spektrumglasses.com/' },
    { titulo: 'Facilite: Corretora de Títulos', detalhes: 'Facilite é uma corretora de títulos e créditos que oferece soluções financeiras personalizadas para investidores. O sistema foi desenvolvido para facilitar a compra e venda de títulos, com uma interface amigável que permite aos usuários acompanhar suas operações em tempo real. Implementamos ferramentas de análise de mercado e relatórios detalhados, ajudando os investidores a tomar decisões informadas. A segurança das transações e a integração com bancos e instituições financeiras são prioridades do sistema.', imagem: '', url: 'https://facilite-brasil.com.br/' },
    { titulo: 'Fradema: Consultores', detalhes: 'Fradema é uma consultoria tributária que oferece serviços especializados para empresas que buscam otimizar sua carga tributária e garantir conformidade com a legislação. O sistema desenvolvido permite a análise detalhada de dados fiscais, identificação de oportunidades de economia e geração de relatórios personalizados. A plataforma também inclui ferramentas de gestão de documentos e comunicação com clientes, facilitando o acompanhamento de processos e a transparência nas operações.', imagem: '', url: 'https://www.fradema.com.br/' },
    { titulo: 'Grupo2E: Gestão', detalhes: 'O Grupo2E é uma plataforma de gestão de ativos, projetada para otimizar o relacionamento com o consumidor e a organização interna da empresa. Durante o desenvolvimento, implementei funcionalidades personalizadas que permitem o gerenciamento eficiente de dados de clientes, com ferramentas para análise de métricas e geração de relatórios detalhados. A integração com outros sistemas corporativos foi uma prioridade, garantindo uma experiência unificada para os usuários. O resultado é uma solução robusta que melhora o engajamento, aumenta a produtividade e facilita o processo de tomada de decisão.', imagem: '', url: 'https://sistema.grupo2e.com.br/' },
    { titulo: 'Indike.me: Inndicadores', detalhes: 'Indike.me é uma plataforma de indicadores desenvolvida para fornecer insights valiosos através da análise de dados. Durante o desenvolvimento, implementei algoritmos avançados que permitem a coleta, processamento e visualização de dados em tempo real. A plataforma oferece uma interface intuitiva para os usuários, facilitando a interpretação dos indicadores e auxiliando na tomada de decisões estratégicas. A integração com diversas fontes de dados garante uma visão abrangente e precisa, tornando o Indike.me uma ferramenta essencial para empresas que buscam otimizar suas operações e estratégias.', imagem: '', url: '' },
    { titulo: 'Gestix: Sistema de Gestão', detalhes: 'Gestix é um sistema de gestão empresarial desenvolvido para otimizar processos internos e melhorar a eficiência operacional. Durante o desenvolvimento, implementei módulos personalizados para controle financeiro, gestão de estoque e automação de tarefas administrativas. A plataforma também oferece ferramentas de análise de dados e geração de relatórios, permitindo uma visão abrangente e detalhada das operações da empresa. A integração com sistemas externos garante uma experiência unificada e facilita a tomada de decisões estratégicas.', imagem: '', url: '' },
    { titulo: 'APP Tecnico: Controle de OS', detalhes: 'O APP Técnico Instalador é uma aplicação desenvolvida para gerenciar e controlar ordens de serviço de técnicos instaladores. Durante o desenvolvimento, implementei funcionalidades que permitem a criação, atribuição e acompanhamento de ordens de serviço em tempo real. A plataforma oferece uma interface intuitiva para os técnicos, facilitando a atualização do status das ordens e a comunicação com a equipe de suporte. A integração com sistemas de gestão garante uma visão completa das operações, melhorando a eficiência e a qualidade do serviço prestado.', imagem: '', url: '' },
    { titulo: 'QRBand: Rastreamento', detalhes: 'QRBand é uma solução inovadora de rastreamento que utiliza tecnologia de código QR para monitorar ativos e facilitar a logística. O sistema permite que os usuários escaneiem códigos QR para acessar informações em tempo real sobre a localização e o status dos itens rastreados. Durante o desenvolvimento, implementei funcionalidades que garantem a segurança dos dados e a integração com sistemas de gestão de inventário, proporcionando uma experiência eficiente e prática para os usuários.', imagem: '', url: 'https://www.qrband.com.br/' },
    { titulo: 'R2: Gestão de Frota', detalhes: 'R2 é uma plataforma de gestão de frota que visa otimizar o controle e a operação de veículos em empresas. O sistema permite o monitoramento em tempo real da localização dos veículos, gerenciamento de manutenção e análise de desempenho. Durante o desenvolvimento, implementei funcionalidades que garantem a segurança dos dados e a integração com sistemas de GPS, proporcionando uma visão abrangente e detalhada da frota, melhorando a eficiência operacional e reduzindo custos.', imagem: '', url: 'https://r2.softbite.com.br/' },
    { titulo: 'FaleFlex: Telefonia', detalhes: 'FaleFlex é uma plataforma de telefonia que oferece soluções de comunicação integradas para empresas. O sistema permite a gestão de chamadas, gravação de conversas e análise de métricas de desempenho. Durante o desenvolvimento, implementei funcionalidades que garantem a segurança das comunicações e a integração com sistemas de CRM, proporcionando uma experiência unificada e eficiente para os usuários.', imagem: '', url: 'http://www.faleflex.com/' },
    { titulo: 'StartzPro: Loja de ebooks', detalhes: 'StartzPro é uma plataforma de e-commerce dedicada à venda de ebooks. O projeto foi desenvolvido para proporcionar uma experiência de compra simples e intuitiva, com um design responsivo que se adapta a diferentes dispositivos. Implementamos um sistema de busca avançada que permite aos usuários encontrar rapidamente os títulos desejados, além de um sistema de recomendações personalizadas baseado no histórico de compras. A plataforma também conta com opções de pagamento seguras e um sistema de gerenciamento de contas de usuários, facilitando o acesso e a compra de conteúdos digitais.', imagem: '', url: '' },
    { titulo: 'Vetcombella: Portfolio', detalhes: 'Vetcombella é um portfólio digital desenvolvido para veterinários, permitindo que eles apresentem seus serviços, experiências e casos de sucesso. A plataforma foi projetada para ser intuitiva e responsiva, facilitando a navegação dos usuários. Inclui seções para depoimentos de clientes, galeria de imagens de tratamentos e um blog para compartilhar dicas e informações sobre cuidados com animais. A integração com redes sociais permite que os veterinários ampliem sua visibilidade e se conectem com potenciais clientes.', imagem: '', url: '' },
    { titulo: 'Codando: Plataforma de Estudos', detalhes: 'Codando é uma plataforma de estudos online que oferece cursos e materiais didáticos para desenvolvedores e entusiastas da programação. O projeto foi desenvolvido para proporcionar uma experiência de aprendizado interativa, com vídeos, quizzes e fóruns de discussão. Implementamos um sistema de acompanhamento de progresso que permite aos usuários monitorar seu desempenho e concluir cursos de forma eficiente. A plataforma também conta com uma comunidade ativa, onde os usuários podem compartilhar conhecimentos e experiências.', imagem: '', url: '' },
    { titulo: 'Arthificial', detalhes: 'Arthificial é uma plataforma que oferece serviços de hospedagem e desenvolvimento de soluções digitais personalizadas. O projeto foi criado para atender às necessidades específicas de empresas que buscam uma presença online robusta e escalável. Implementamos uma infraestrutura de hospedagem segura e confiável, além de serviços de desenvolvimento web que incluem design responsivo, integração de sistemas e otimização para motores de busca. A plataforma também oferece suporte técnico contínuo e consultoria para garantir que os clientes maximizem o potencial de suas soluções digitais.', imagem: '', url: 'https://arthificial.com/' },
    { titulo: 'Otimização de Custos AWS', detalhes: 'Este projeto foi aplicado na empresa Rastreei para ajudar a otimizar seus custos na nuvem da AWS. Através de uma análise detalhada do uso de recursos, implementamos estratégias que reduziram significativamente os gastos sem comprometer a performance. Utilizamos ferramentas de monitoramento e relatórios para identificar áreas de desperdício e sugerir melhorias, resultando em uma gestão mais eficiente dos recursos e uma economia substancial para os clientes.', imagem: '', url: '' },
  ]

  ngOnInit(): void {
  }

}
