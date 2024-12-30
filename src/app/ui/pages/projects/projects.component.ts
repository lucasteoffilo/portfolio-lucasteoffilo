import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects = [
    { titulo: 'Rastreei: Plataforma de Rastreamento', detalhes: 'Rastreei é um sistema de rastreamento veicular e gestão voltado para associações de benefícios, desenvolvido com foco em eficiência e tecnologia. No desenvolvimento, criei códigos personalizados que automatizam processos essenciais de rastreamento, otimizando a gestão e reduzindo custos operacionais. Além disso, implementei novos recursos que ampliam as funcionalidades do sistema, trazendo maior precisão e segurança para os associados. O sistema Rastreei combina tecnologia avançada com automação estratégica, sendo um exemplo de como inovação pode transformar serviços de rastreamento e gestão no mercado atual.', imagem: '' },
    { titulo: 'Grupo2E: Plataforma de Gestão', detalhes: 'O Grupo2E é uma plataforma de gestão de ativos, projetada para otimizar o relacionamento com o consumidor e a organização interna da empresa. Durante o desenvolvimento, implementei funcionalidades personalizadas que permitem o gerenciamento eficiente de dados de clientes, com ferramentas para análise de métricas e geração de relatórios detalhados. A integração com outros sistemas corporativos foi uma prioridade, garantindo uma experiência unificada para os usuários. O resultado é uma solução robusta que melhora o engajamento, aumenta a produtividade e facilita o processo de tomada de decisão.', imagem: '' },
    { titulo: 'Indike.me: Plataforma de indicadores', detalhes: 'Indike.me é uma plataforma de indicadores desenvolvida para fornecer insights valiosos através da análise de dados. Durante o desenvolvimento, implementei algoritmos avançados que permitem a coleta, processamento e visualização de dados em tempo real. A plataforma oferece uma interface intuitiva para os usuários, facilitando a interpretação dos indicadores e auxiliando na tomada de decisões estratégicas. A integração com diversas fontes de dados garante uma visão abrangente e precisa, tornando o Indike.me uma ferramenta essencial para empresas que buscam otimizar suas operações e estratégias.', imagem: '' },
    { titulo: 'Gestix: Sistema de Gestão', detalhes: 'Gestix é um sistema de gestão empresarial desenvolvido para otimizar processos internos e melhorar a eficiência operacional. Durante o desenvolvimento, implementei módulos personalizados para controle financeiro, gestão de estoque e automação de tarefas administrativas. A plataforma também oferece ferramentas de análise de dados e geração de relatórios, permitindo uma visão abrangente e detalhada das operações da empresa. A integração com sistemas externos garante uma experiência unificada e facilita a tomada de decisões estratégicas.', imagem: '' },
    { titulo: 'APP Tecnico: Controle de OS', detalhes: 'O APP Técnico Instalador é uma aplicação desenvolvida para gerenciar e controlar ordens de serviço de técnicos instaladores. Durante o desenvolvimento, implementei funcionalidades que permitem a criação, atribuição e acompanhamento de ordens de serviço em tempo real. A plataforma oferece uma interface intuitiva para os técnicos, facilitando a atualização do status das ordens e a comunicação com a equipe de suporte. A integração com sistemas de gestão garante uma visão completa das operações, melhorando a eficiência e a qualidade do serviço prestado.', imagem: '' },
    { titulo: '', detalhes: '', imagem: '' },
  ]

  ngOnInit(): void {
  }

}
