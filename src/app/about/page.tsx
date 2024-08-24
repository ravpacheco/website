import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/my-portrait.jpeg'

function SocialLink({
  className,
  href,
  target,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  target: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target || '_self'}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About - Rafael Pacheco',
  description:
    'I`m trying to make my world a better place through code.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I love my family, my life and my work...
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Rafael Pacheco é mestre em Modelagem Matemática e Computacional e
              graduado em Engenharia de Computação pelo CEFET-MG.
            </p>
            <p>
              Como sócio fundador das empresas Ouvidor Digital, White Wall e
              WhistleOn, combina toda a sua paixão por tecnologia, com sua visão
              estratégica de negócios e suas habilidades em gestão de pessoas e
              processos.
            </p>
            <p>
              Rafael também é professor da Pós-Graduação em Computação da PUC
              MG. Ele acumula muitos anos de experiência em projetos ligados a
              aplicações conversacionais, inteligência artificial e na
              plataforma Blip, onde atuou como líder técnico e developer
              advocate.
            </p>
            <p>
              Pai dedicado da Maitê e dos gatos (Albert e Nicolau), marido da
              Janaíne, Rafael adora jogar futebol, ensinar, aprender, discutir e
              compartilhar suas ideias sobre temas que acredita.
            </p>
            <p>
              <b>
                <i>
                  * The opinions here are my own and do not necessarily reflect
                  my companies.
                </i>
              </b>
            </p>
            {/* <h3 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Full Bio
            </h3>
            <p>
              Rafael Avelar Pacheco, brasileiro, natural de Sete Lagoas nascido
              em 08 de dezembro de 1990, é bacharel em Engenharia de Computação
              e mestre em Modelagem Matemática e Computacional pelo Centro
              Federal de Educação Tecnológica de Minas Gerais - CEFET MG.
              Nascido e criado no interior de Minas Gerais, como todo bom
              mineiro, possui admiração pela leitura e é admirador de uma boa
              roda de conversa. Reside, atualmente, em Belo Horizonte e, sempre
              que possível, viaja até sua terra natal para encontrar seus amigos
              e familiares.
            </p>
            <p>
              Antes de se mudar para Belo Horizonte e ingressar na faculdade,
              dividia o tempo entre os estudos, video games e uma de suas
              grandes paixões, o futebol. Apesar de nunca ter se
              profissionalizado como jogador de futebol, já disputou alguns
              campeonatos relevantes no brasil, como o JIMI 2007 e JIF 2010.
              Além de muitos amigos, o futebol trouxe aprendizados e
              experiências de vida importantes, como: trabalhar em equipe,
              controlar a ansiedade (ao menos uma parte dela), nunca desistir e,
              principalmente, saber perder.
            </p>
            <p>
              Durante a graduação e o mestrado atuou como membro do Laboratório
              de Sistemas Inteligentes no CEFET-MG, desenvolvendo projetos de
              pesquisa e iniciação científica, nas áreas de Inteligência
              Artificial, Sistemas Multiagentes, Modelo de Atores e Sistemas
              evolutivos bio inspirados. Sua principal contribuição acadêmica
              foi o a construção da arquitetura D-OPTIMAS - Distributed
              OPTimization Multi Agent System, desenvolvido ao longo de seu
              mestrado.
            </p>
            <p>
              Na metade do curso de engenharia (em meados de 2012) mudou-se para
              a cidade do Porto, em Portugal, e estudou por um período na
              Faculdade de Ciências da Universidade do Porto - FCUP. Dentre os
              vários aprendizados obtidos no período em que esteve na Europa,
              destaca-se: a expansão da perspectiva cultural e histórica de um
              povo, além da certeza de que o conhecimento e o tempo são
              determinantes para a evolução de uma nação.
            </p>
            <p>
              Em 2011 teve sua primeira experiência formal de trabalho, para uma
              importante empresa de telecomunicação Brasileira, na área de
              desenvolvimento de software. Já em 2013, após retornar ao Brasil,
              começou a trabalhar para a Take, onde se especializou na
              construção de aplicações de mensageria. Em paralelo às atividades
              profissionais formais, entre os anos de 2013 e 2017, desenvolveu
              alguns projetos e ações sociais, como: Co-Fundador da JumpWeb -
              Startup especializada em consultoria e desenvolvimento de software
              para micro e pequenas empresas;
            </p>
            <p>
              Co-Fundador da MyNerdBox - Primeiro clube de assinatura para o
              público nerd do Brasil; Co-Fundador do CachorrosBH - Portal para
              ajudar no processo de adoção de cães e gatos na região
              metropolitana de Belo Horizonte;
            </p>
            <p>
              Durante os sete anos em que trabalhou na empresa Take desempenhou
              diferentes papeis: estagiário em análise de dados, estagiário em
              desenvolvimento, engenheiro de software, líder técnico e
              finalmente developer advocate. O último papel exercido na Take foi
              o mais marcante, como developer advocate do BLiP, a plataforma
              para construção de bots, ajudou (direta ou indiretamente) dezenas
              de milhares de desenvolvedores e empresas, em todo o mundo, a
              utilizarem a plataforma BLiP para construir aplicações
              conversacionais. Seu curso sobre o BLiP já foi assistido por
              milhares de pessoas e ainda é utilizado como referência para quem
              deseja aprender como utilizar a ferramenta.
            </p>
            <p>
              Em 2019 tomou a difícil decisão de deixar a Take para se juntar,
              como sócio, ao Ouvidor Digital. Atualmente, como o CTO - Chief of
              Technology Officer da empresa, têm a responsabilidade de liderar
              as decisões ligadas à tecnologia e inovação. Além disso, ajuda
              seus sócios nas decisões estratégicas do futuro da companhia.
              Nesse sentido, suas principais contribuições estão na forma cética
              e prática de encarar o dia a dia, além da incansável busca por
              foco, métricas, indicadores e admiração aos números.{' '}
            </p>
            <p>
              Em 2020 foi convidado a integrar o corpo docente da Pontifícia
              Universidade Católica de Minas Gerais - PUC MG, onde atua como
              professor mentor e autor de disciplinas da Pós Graduação em
              Computação.
            </p>
            <p>
              Seus principais hobbys são: conhecer lugares diferentes, ler,
              escrever, assistir um bom filme - preferencialmente no cinema,
              programar, pesquisar projetos open source, participar de eventos
              de tecnologia, jogar video game e estudar assuntos “não
              convencionais”. Nos fins de semana insiste em jogar futebol e atua
              como ponta direita do Tchê Garotos F.C.
            </p>
            <p>
              Ocasionalmente, escreve sobre desenvolvimento de software, temas
              ligados a sua empresa (Ouvidor Digital), chatbots e assuntos
              aleatórios para seu blog pessoal e sites como: InfoQ,
              ChatbotsBrasil, BotsBrasil.{' '}
            </p> */}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              target="_blank"
              href="https://x.com/ravpachecco"
              icon={XIcon}
            >
              Follow on X
            </SocialLink>
            <SocialLink
              target="_blank"
              href="http://instagram.com/ravpachecco"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://github.com/ravpacheco"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              target="_blank"
              href="http://linkedin.com/in/ravpacheco"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              target="_blank"
              href="mailto:ravpacheco@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ravpacheco@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
