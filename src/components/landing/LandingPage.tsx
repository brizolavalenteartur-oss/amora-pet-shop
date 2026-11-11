import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Bath, Check, ChevronDown, Heart,
  MapPin, Menu, PawPrint, Phone, Scissors, ShieldCheck, ShoppingBag, Sparkles, Truck, X,
} from "lucide-react";
import "./landing.css";

const whatsappUrl = "https://wa.me/message/FTJCWDYEVIFBC1";
const phone = "(11) 91282-5995";
const address = "Rua Serra de São Domingos, 186 — Vila Carmosina, Itaquera — SP";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Serra+de+S%C3%A3o+Domingos%2C+186%2C+Vila+Carmosina%2C+Itaquera%2C+SP";
const instagramUrl = "https://www.instagram.com/amorapet.shop/";

const services = [
  { icon: Bath, title: "Banho", text: "Um banho caprichado, com cuidado e carinho em cada detalhe." },
  { icon: Scissors, title: "Tosa", text: "Cuidado com a pelagem para deixar seu pet confortável e bem cuidado." },
  { icon: ShoppingBag, title: "Pet shop", text: "Um espaço para encontrar itens e cuidados para a rotina do seu pet." },
  { icon: Truck, title: "Táxi dog", text: "Consulte a disponibilidade para buscar e levar seu pet com praticidade." },
];
const faqs = [
  ["Como faço para agendar um banho ou tosa?", "Clique em um dos botões de WhatsApp e fale com a equipe para consultar horários e disponibilidade."],
  ["Onde fica a Amora Pet Shop?", "Estamos na Rua Serra de São Domingos, 186, Vila Carmosina, Itaquera — São Paulo."],
  ["A Amora oferece táxi dog?", "Sim. Entre em contato para consultar regiões atendidas, disponibilidade e condições do serviço."],
  ["Como saber os valores?", "Os valores dependem do serviço e das características do pet. Fale com a equipe para receber as informações."],
];
function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <main className="amora-site">
      <div className="topline"><div className="container topline-inner"><span><span className="status-dot" /> Amor em cada banho, carinho em cada detalhe</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Agende pelo WhatsApp <ArrowUpRight size={14}/></a></div></div>
      <header className="site-header"><div className="container nav-wrap">
        <a className="brand" href="#inicio" aria-label="Amora Pet Shop - início"><span className="brand-mark"><PawPrint size={25}/></span><span className="brand-name">Amora<span>Pet</span><small>BANHO • TOSA • PET SHOP</small></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a><a href="#galeria" onClick={() => setMenuOpen(false)}>Galeria</a><a href="#localizacao" onClick={() => setMenuOpen(false)}>Localização</a><a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Agendar horário <ArrowUpRight size={16}/></a></nav>
      </div></header>

      <section className="hero" id="inicio"><div className="hero-shape shape-one"/><div className="hero-shape shape-two"/>
        <div className="container hero-content"><div className="hero-copy">
          <span className="hero-kicker"><PawPrint size={15}/> SEU PET É PARTE DA FAMÍLIA</span>
          <h1>Um cuidado cheio de <em>amor</em> para quem te ama.</h1>
          <p>Banho, tosa e carinho em cada detalhe. Na Amora Pet, seu melhor amigo recebe atenção especial do começo ao fim.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowRight size={18}/></a><a className="button button-ghost" href="#servicos">Conhecer serviços</a></div>
          <div className="hero-proof"><span><Heart size={16}/> Atendimento com carinho</span><span><Sparkles size={16}/> Cuidado em cada detalhe</span></div>
        </div><div className="hero-visual"><div className="hero-photo"><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1100&q=85" alt="Cachorro golden retriever feliz" /></div><div className="hero-sticker"><PawPrint size={23}/><span>Seu pet<br/><strong>feliz por aqui!</strong></span></div><div className="hero-note"><span className="note-icon"><Heart size={20} fill="currentColor"/></span><span><strong>Amor em cada cuidado</strong><small>Seu pet tratado como família</small></span></div></div></div>
        <div className="hero-bottom"><div className="container"><span>AMORA PET SHOP</span><span>BANHO <b>•</b> TOSA <b>•</b> PET SHOP <b>•</b> TÁXI DOG</span></div></div>
      </section>

      <section className="trust-strip"><div className="container trust-grid"><div><Heart/><span><strong>Carinho de verdade</strong><small>Seu pet tratado como família</small></span></div><div><ShieldCheck/><span><strong>Atenção aos detalhes</strong><small>Cuidado em cada etapa</small></span></div><div><Sparkles/><span><strong>Bem-estar em primeiro lugar</strong><small>Conforto para seu melhor amigo</small></span></div><div><PawPrint/><span><strong>Amor pelos animais</strong><small>Uma experiência acolhedora</small></span></div></div></section>

      <section className="services section-pad" id="servicos"><div className="container"><SectionHeading eyebrow="O QUE TEMOS POR AQUI" title={<>Tudo para cuidar de quem faz parte da <em>família.</em></>} description="Conheça os serviços da Amora Pet e fale com nossa equipe para consultar disponibilidade."/><div className="service-grid">{services.map((service, i) => {const Icon=service.icon;return <article className="service-card" key={service.title}><div className="service-icon"><Icon size={27}/></div><span className="service-number">0{i+1}</span><h3>{service.title}</h3><p>{service.text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Consultar serviço <ArrowUpRight size={15}/></a></article>;})}</div></div></section>

      <section className="about-band" id="sobre"><div className="container about-inner"><div className="about-visual"><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85" alt="Dois cachorros passeando juntos" /><div className="about-bubble"><Heart size={22} fill="currentColor"/><span>Amor em cada banho,<br/>carinho em cada detalhe.</span></div></div><div className="about-copy"><span className="eyebrow">UM JEITO AMOROSO DE CUIDAR</span><h2>Mais do que cuidar da aparência: cuidar do <em>bem-estar.</em></h2><p>Na Amora Pet Shop, acreditamos que cada pet merece ser recebido com atenção, respeito e muito carinho. Queremos que cada visita seja tranquila para os pets e para quem ama eles.</p><ul><li><Check/> Atenção e carinho em cada atendimento</li><li><Check/> Serviços para o cuidado do seu pet</li><li><Check/> Comunicação próxima com os tutores</li></ul><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Fale com a Amora <ArrowRight size={18}/></a></div></div></section>

      <section className="gallery section-pad" id="galeria"><div className="container"><SectionHeading eyebrow="UM POUQUINHO DO NOSSO UNIVERSO" title={<>Fofura que não cabe em uma <em>foto.</em></>} description="Acompanhe novidades, dicas e momentos especiais no Instagram da Amora Pet."/><div className="gallery-grid"><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=85" alt="Cachorro olhando para a câmera"/><img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=85" alt="Cachorro recebendo carinho"/><img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=85" alt="Cachorro em ambiente de cuidados"/></div><a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer"><span>◎</span> Acompanhe @amorapet.shop <ArrowUpRight size={16}/></a></div></section>

      <section className="location-section" id="localizacao"><div className="container location-grid"><div><span className="eyebrow">VENHA NOS VISITAR</span><h2>Estamos pertinho de <em>você.</em></h2><p>Será um prazer receber você e seu melhor amigo na Amora Pet Shop.</p><div className="location-detail"><MapPin/><span><strong>Nosso endereço</strong><small>{address}</small></span></div><div className="location-detail"><Phone/><span><strong>Fale com a gente</strong><small>{phone}</small></span></div><a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">Ver rota no mapa <ArrowUpRight size={17}/></a></div><div className="map-card"><div className="map-art"><div className="map-road road-a"/><div className="map-road road-b"/><div className="map-road road-c"/><div className="map-pin"><MapPin size={28} fill="currentColor"/></div><div className="map-label"><PawPrint size={17}/> Amora Pet Shop</div></div><div className="map-card-bottom"><span><strong>Amora Pet Shop</strong><small>Vila Carmosina • Itaquera • SP</small></span><a href={mapsUrl} target="_blank" rel="noreferrer">Abrir mapa <ArrowUpRight size={14}/></a></div></div></div></section>

      <section className="faq section-pad" id="duvidas"><div className="container faq-grid"><div><SectionHeading eyebrow="PODEMOS AJUDAR?" title={<>Dúvidas <em>frequentes.</em></>} description="Se não encontrar sua resposta, nossa equipe está pronta para conversar."/><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp <ArrowUpRight size={16}/></a></div><div className="faq-list">{faqs.map(([question,answer],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={question}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}>{question}<ChevronDown size={19}/></button>{openFaq===i&&<p>{answer}</p>}</div>)}</div></div></section>

      <section className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow">SEU PET MERECE ESSE CARINHO</span><h2>Vamos marcar um momento especial?</h2><p>Fale com a Amora e consulte os horários disponíveis.</p></div><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar agora <ArrowRight size={18}/></a><PawPrint className="cta-paw" size={130}/></div></section>

      <footer className="site-footer"><div className="container footer-main"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><PawPrint size={25}/></span><span className="brand-name">Amora<span>Pet</span><small>BANHO • TOSA • PET SHOP</small></span></a><p>Onde seu pet é tratado como família.<br/>Amor em cada banho, carinho em cada detalhe.</p><div className="footer-social"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15}/></a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15}/></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Amora Pet Shop. Todos os direitos reservados.</span><span><a href={mapsUrl} target="_blank" rel="noreferrer">{address}</a></span></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Amora pelo WhatsApp"><Phone size={22}/></a>
    </main>
  );
}
