import React from 'react';
import './App.css'
import HeaderCities from './components/HeaderCities';
import CityDetail from './components/CityDetail';
import MyCities from './components/MyCities';
import NewItemBtn from './components/NewItemBtn';
import NewCityForm from './components/NewCityForm';
import { useState } from 'react';

const citiesList = [
  {
    id: 1,
    immaginePrincipale: "/img/roma.jpeg",
    nome: "Roma",
    nazione: "Italia",
    continente: "Europa",
    descrizione: "La capitale d'Italia è una città ricca di storia, cultura e arte. Dai monumenti iconici come il Colosseo e il Pantheon, alle antiche rovine del Foro Romano, Roma è un museo a cielo aperto. La città è famosa anche per le sue piazze vivaci, come Piazza Navona e Piazza di Spagna, e per la sua cucina, con piatti come la pasta alla carbonara e la pizza margherita. Con i suoi quartieri storici, la Città del Vaticano e la vibrante vita notturna, Roma è un luogo dove ogni angolo racconta una storia millenaria.",
    immagini: [
      { url: "https://picsum.photos/200", titolo: "Colosseo", descrizione: "Il simbolo di Roma antica." },
      { url: "https://picsum.photos/201", titolo: "Fontana di Trevi", descrizione: "Una delle fontane più iconiche al mondo." },
      { url: "https://picsum.photos/202", titolo: "Piazza San Pietro", descrizione: "Centro spirituale del Vaticano." },
      { url: "https://picsum.photos/203", titolo: "Pantheon", descrizione: "Antico tempio romano perfettamente conservato." },
      { url: "https://picsum.photos/204", titolo: "Trastevere", descrizione: "Quartiere caratteristico noto per la movida." }
    ],
    attrazioni: [
      { nome: "Colosseo", indirizzo: "Piazza del Colosseo, 1", descrizione: "Anfiteatro romano simbolo di Roma." },
      { nome: "Vaticano", indirizzo: "Città del Vaticano", descrizione: "Centro religioso e culturale con la Basilica di San Pietro." },
      { nome: "Foro Romano", indirizzo: "Via della Salara Vecchia, 5", descrizione: "Antico cuore politico e religioso di Roma." },
      { nome: "Villa Borghese", indirizzo: "Piazzale Napoleone I", descrizione: "Grande parco con musei e viste panoramiche." },
      { nome: "Piazza Navona", indirizzo: "Piazza Navona", descrizione: "Piazza barocca con fontane e caffè." }
    ],
    piattiTipici: [
      { nome: "Carbonara", descrizione: "Pasta con uova, guanciale e pecorino.", ristorante: "Da Enzo al 29", indirizzo: "Via dei Vascellari, 29" },
      { nome: "Coda alla vaccinara", descrizione: "Stufato di coda di bue in salsa di pomodoro.", ristorante: "Checchino dal 1887", indirizzo: "Via di Monte Testaccio, 30" },
      { nome: "Supplì", descrizione: "Pallina di riso fritta con cuore di mozzarella.", ristorante: "Supplizio", indirizzo: "Via dei Banchi Vecchi, 143" }
    ],
    curiosita: [
      { titolo: "Roma ha più fontane di qualsiasi altra città", curiosita: "Se ne contano oltre 1.500." },
      { titolo: "Il Vaticano è un altro stato", curiosita: "È lo stato indipendente più piccolo del mondo." },
      { titolo: "Il Colosseo aveva un velario", curiosita: "Una copertura in tessuto per proteggere dal sole." },
      { titolo: "Il Pantheon ha la cupola in cemento più grande del mondo", curiosita: "Incredibile opera di ingegneria romana." },
      { titolo: "Roma è chiamata la Città Eterna", curiosita: "Perché ha resistito al tempo e alla storia." }
    ]
  },
  {
    id: 2,
    immaginePrincipale: "/img/tokyo.jpeg",
    nome: "Tokyo",
    nazione: "Giappone",
    continente: "Asia",
    descrizione: " Tokyo è una metropoli affascinante che fonde il moderno e il tradizionale. Con le sue strade frenetiche, i grattacieli futuristici e i quartieri come Shibuya e Shinjuku, Tokyo è il cuore tecnologico del Giappone. Tuttavia, la città offre anche un’atmosfera tranquilla nei templi storici come Senso-ji e nel Parco Ueno. Famosa per la cucina, Tokyo è la patria di sushi, ramen e altre prelibatezze giapponesi. La sua cultura unica, che unisce tradizione e innovazione, rende Tokyo una delle destinazioni più affascinanti al mondo.",
    immagini: [
      { url: "https://picsum.photos/205", titolo: "Tokyo Tower", descrizione: "Torre panoramica rossa ispirata alla Tour Eiffel." },
      { url: "https://picsum.photos/206", titolo: "Shibuya Crossing", descrizione: "L'incrocio pedonale più famoso al mondo." },
      { url: "https://picsum.photos/207", titolo: "Asakusa", descrizione: "Tempio storico e mercatini tradizionali." },
      { url: "https://picsum.photos/208", titolo: "Akihabara", descrizione: "Quartiere dell’elettronica e cultura otaku." },
      { url: "https://picsum.photos/209", titolo: "Ueno Park", descrizione: "Parco con musei e fioritura dei ciliegi." }
    ],
    attrazioni: [
      { nome: "Tempio Senso-ji", indirizzo: "2 Chome-3-1 Asakusa", descrizione: "Tempio buddista più antico di Tokyo." },
      { nome: "Tokyo Skytree", indirizzo: "1 Chome-1-2 Oshiage", descrizione: "Torre di osservazione altissima." },
      { nome: "Meiji Jingu", indirizzo: "1-1 Yoyogikamizonocho", descrizione: "Santuario shintoista immerso nella natura." },
      { nome: "Museo Edo-Tokyo", indirizzo: "1-4-1 Yokoami", descrizione: "Museo sulla storia di Tokyo." },
      { nome: "Shinjuku Gyoen", indirizzo: "11 Naitomachi", descrizione: "Giardino tradizionale con serre e paesaggi." }
    ],
    piattiTipici: [
      { nome: "Sushi", descrizione: "Riso e pesce crudo preparati con arte.", ristorante: "Sukiyabashi Jiro", indirizzo: "4 Chome-2-15 Ginza" },
      { nome: "Ramen", descrizione: "Zuppa di noodles con brodo saporito.", ristorante: "Ichiran", indirizzo: "1 Chome-22-7 Jinnan" },
      { nome: "Okonomiyaki", descrizione: "Frittata giapponese con ingredienti vari.", ristorante: "Okonomiyaki Kiji", indirizzo: "Marunouchi Building" }
    ],
    curiosita: [
      { titolo: "Tokyo ha più di 35 milioni di abitanti", curiosita: "È l'area metropolitana più popolosa del mondo." },
      { titolo: "Gli hotel a capsule sono nati qui", curiosita: "Una soluzione economica e compatta per dormire." },
      { titolo: "Tokyo ha un'eccezionale puntualità dei treni", curiosita: "Il ritardo medio è inferiore ai 18 secondi." },
      { titolo: "Tokyo era Edo", curiosita: "Ha cambiato nome nel 1868 con l'inizio dell'era Meiji." },
      { titolo: "Robot e umani convivono", curiosita: "Ci sono bar e ristoranti gestiti da robot." }
    ]
  },
  {
    id: 3,
    immaginePrincipale: "/img/newYork.jpeg",
    nome: "New York",
    nazione: "Stati Uniti",
    continente: "America",
    descrizione: "New York è una delle città più dinamiche e cosmopolite del mondo. Conosciuta come 'La Grande Mela', è un crogiolo di culture e lingue, dove ogni quartiere racconta una storia unica. Dalla statua della Libertà a Times Square, dal Central Park ai grattacieli di Manhattan, New York è una città che non dorme mai. La sua scena culturale è senza pari, con teatri di Broadway, musei di fama mondiale e una cucina internazionale che soddisfa ogni palato. Con la sua energia inarrestabile, New York è una città che ispira e affascina.",
    immagini: [
      { url: "https://picsum.photos/210", titolo: "Statua della Libertà", descrizione: "Simbolo di libertà e accoglienza." },
      { url: "https://picsum.photos/211", titolo: "Central Park", descrizione: "Oasi verde nel cuore di Manhattan." },
      { url: "https://picsum.photos/212", titolo: "Times Square", descrizione: "Incrocio luminoso e affollato, cuore di Broadway." },
      { url: "https://picsum.photos/213", titolo: "Empire State Building", descrizione: "Storico grattacielo con vista panoramica." },
      { url: "https://picsum.photos/214", titolo: "Brooklyn Bridge", descrizione: "Ponte sospeso iconico che collega Manhattan e Brooklyn." }
    ],
    attrazioni: [
      { nome: "Statua della Libertà", indirizzo: "Liberty Island", descrizione: "Monumento simbolo degli Stati Uniti." },
      { nome: "Metropolitan Museum of Art", indirizzo: "1000 5th Ave", descrizione: "Uno dei musei più grandi del mondo." },
      { nome: "High Line", indirizzo: "Manhattan West Side", descrizione: "Parco sopraelevato costruito su una ferrovia dismessa." },
      { nome: "One World Observatory", indirizzo: "285 Fulton St", descrizione: "Vista panoramica dal grattacielo più alto." },
      { nome: "Broadway", indirizzo: "Midtown Manhattan", descrizione: "Capitale mondiale del teatro." }
    ],
    piattiTipici: [
      { nome: "Bagel con lox", descrizione: "Panino con salmone affumicato e formaggio cremoso.", ristorante: "Russ & Daughters", indirizzo: "179 E Houston St" },
      { nome: "Cheesecake", descrizione: "Torta cremosa al formaggio.", ristorante: "Junior’s Restaurant", indirizzo: "386 Flatbush Ave Ext" },
      { nome: "Pizza New York-style", descrizione: "Fetta sottile e grande da piegare.", ristorante: "Joe's Pizza", indirizzo: "7 Carmine St" }
    ],
    curiosita: [
      { titolo: "La città che non dorme mai", curiosita: "New York è attiva 24 ore su 24." },
      { titolo: "Oltre 800 lingue parlate", curiosita: "È la città più linguisticamente diversificata al mondo." },
      { titolo: "Times Square prende il nome dal New York Times", curiosita: "Il giornale si trasferì lì nel 1904." },
      { titolo: "Central Park è più grande del Principato di Monaco", curiosita: "Ha una superficie di oltre 3 km²." },
      { titolo: "Ogni giorno vengono girati film", curiosita: "È uno dei set cinematografici più usati." }
    ]
  },
  {
    id: 4,
    immaginePrincipale: "/img/parigi.jpeg",
    nome: "Parigi",
    nazione: "Francia",
    continente: "Europa",
    descrizione: "Parigi, la capitale della Francia, è sinonimo di eleganza, arte e romanticismo. La città è famosa per i suoi monumenti iconici, come la Torre Eiffel, il Louvre e Notre-Dame. Le sue strade, i caffè e le boutique offrono un'atmosfera unica, mentre i suoi musei ospitano alcune delle opere d'arte più celebri al mondo. Parigi è anche il centro della moda, con eventi di livello internazionale che attirano designer e appassionati da tutto il mondo. Con la sua cucina raffinata, i suoi giardini e la sua bellezza senza tempo, Parigi è una destinazione che incanta chiunque la visiti.",
    immagini: [
      { url: "https://picsum.photos/215", titolo: "Tour Eiffel", descrizione: "Simbolo di Parigi e della Francia." },
      { url: "https://picsum.photos/216", titolo: "Louvre", descrizione: "Museo che ospita la Gioconda." },
      { url: "https://picsum.photos/217", titolo: "Montmartre", descrizione: "Quartiere bohemien degli artisti." },
      { url: "https://picsum.photos/218", titolo: "Notre-Dame", descrizione: "Cattedrale gotica famosa in tutto il mondo." },
      { url: "https://picsum.photos/219", titolo: "Seine", descrizione: "Fiume che attraversa la città." }
    ],
    attrazioni: [
      { nome: "Tour Eiffel", indirizzo: "Champ de Mars", descrizione: "Torre in ferro alta 300 metri." },
      { nome: "Museo del Louvre", indirizzo: "Rue de Rivoli", descrizione: "Il museo più visitato al mondo." },
      { nome: "Cattedrale di Notre-Dame", indirizzo: "6 Parvis Notre-Dame", descrizione: "Capolavoro dell’architettura gotica." },
      { nome: "Montmartre e Sacré-Cœur", indirizzo: "35 Rue du Chevalier de la Barre", descrizione: "Quartiere artistico con vista panoramica." },
      { nome: "Versailles", indirizzo: "Place d'Armes", descrizione: "Maestosa reggia reale poco fuori città." }
    ],
    piattiTipici: [
      { nome: "Croque Monsieur", descrizione: "Toast con prosciutto, formaggio e besciamella.", ristorante: "Café de Flore", indirizzo: "172 Boulevard Saint-Germain" },
      { nome: "Escargots", descrizione: "Lumache cucinate con burro e aglio.", ristorante: "L'Escargot Montorgueil", indirizzo: "38 Rue Montorgueil" },
      { nome: "Crêpes", descrizione: "Frittelle sottili dolci o salate.", ristorante: "Breizh Café", indirizzo: "109 Rue Vieille du Temple" }
    ],
    curiosita: [
      { titolo: "Parigi ha solo un grattacielo", curiosita: "La Tour Montparnasse, alta 210 metri." },
      { titolo: "C'è un museo dedicato al profumo", curiosita: "Il Musée du Parfum Fragonard." },
      { titolo: "La Gioconda è protetta da vetro antiproiettile", curiosita: "E si trova al Louvre dal 1797." },
      { titolo: "C'è una Statua della Libertà a Parigi", curiosita: "Un dono degli americani come ringraziamento." },
      { titolo: "Il cimitero Père Lachaise è una meta turistica", curiosita: "Ospita le tombe di Jim Morrison e Oscar Wilde." }
    ]
  },
  {
    id: 5,
    immaginePrincipale: "/img/cittàDelCapo.jpeg",
    nome: "Città del Capo",
    nazione: "Sudafrica",
    continente: "Africa",
    descrizione: " Città del Capo, situata all'estremità meridionale dell'Africa, è una città di straordinaria bellezza naturale. Dominata dalla Table Mountain, la città offre panorami spettacolari, spiagge magnifiche e una ricca biodiversità. Il suo centro urbano è vibrante, con un mix di culture, storia e una cucina che riflette la diversità del paese. Luoghi come il Capo di Buona Speranza, il quartiere di Bo-Kaap e il V&A Waterfront attraggono turisti da tutto il mondo. Città del Capo è anche un importante centro per la viticoltura, con numerosi vigneti che producono vini di fama internazionale.",
    immagini: [
      { url: "https://picsum.photos/220", titolo: "Table Mountain", descrizione: "Montagna piatta iconica che domina la città." },
      { url: "https://picsum.photos/221", titolo: "Boulders Beach", descrizione: "Spiaggia con una colonia di pinguini africani." },
      { url: "https://picsum.photos/222", titolo: "Waterfront", descrizione: "Zona turistica con negozi e ristoranti." },
      { url: "https://picsum.photos/223", titolo: "Robben Island", descrizione: "Ex prigione di Nelson Mandela." },
      { url: "https://picsum.photos/224", titolo: "Chapman’s Peak Drive", descrizione: "Strada panoramica mozzafiato." }
    ],
    attrazioni: [
      { nome: "Table Mountain", indirizzo: "Table Mountain National Park", descrizione: "Escursioni e vista panoramica." },
      { nome: "Robben Island", indirizzo: "Table Bay", descrizione: "Sito storico patrimonio dell’umanità." },
      { nome: "Kirstenbosch Garden", indirizzo: "Rhodes Drive", descrizione: "Giardino botanico tra i più belli del mondo." },
      { nome: "Boulders Beach", indirizzo: "Simon's Town", descrizione: "Spiaggia con pinguini." },
      { nome: "District Six Museum", indirizzo: "25A Buitenkant St", descrizione: "Memoria dell’apartheid." }
    ],
    piattiTipici: [
      { nome: "Bobotie", descrizione: "Sformato di carne speziata con uova.", ristorante: "Gold Restaurant", indirizzo: "15 Bennett Street" },
      { nome: "Bunny Chow", descrizione: "Pane scavato ripieno di curry.", ristorante: "Eastern Food Bazaar", indirizzo: "96 Longmarket St" },
      { nome: "Braai", descrizione: "Grigliata tradizionale sudafricana.", ristorante: "Mzoli’s Place", indirizzo: "Gugulethu" }
    ],
    curiosita: [
      { titolo: "Città del Capo ha tre capitali", curiosita: "Una è la capitale legislativa del Sudafrica." },
      { titolo: "Pinguini in spiaggia", curiosita: "Sono protetti nella zona di Boulders Beach." },
      { titolo: "Robben Island è patrimonio UNESCO", curiosita: "Luogo simbolo della lotta contro l’apartheid." },
      { titolo: "Table Mountain è più antica dell’Himalaya", curiosita: "Ha oltre 260 milioni di anni." },
      { titolo: "La flora è unica", curiosita: "Fa parte del Regno Floristico del Capo." }
    ]
  },
  {
    id: 6,
    immaginePrincipale: "/img/kyoto.jpeg",
    nome: "Kyoto",
    nazione: "Giappone",
    continente: "Asia",
    descrizione: "Kyoto è una delle città più tradizionali del Giappone, famosa per i suoi templi storici, giardini zen e antichi quartieri. Capitale imperiale per oltre mille anni, Kyoto conserva un'incredibile eredità culturale, tra cui il Tempio Kinkaku-ji, il Fushimi Inari Taisha e il quartiere delle geishe di Gion. La città è anche famosa per la sua cucina, come il kaiseki, e per la bellezza dei suoi giardini. Ogni stagione a Kyoto offre uno spettacolo unico, con i ciliegi in fiore in primavera e le foglie rosse in autunno. Kyoto è una città che incarna la serenità e la spiritualità del Giappone.",
    immagini: [
      { url: "https://picsum.photos/225", titolo: "Fushimi Inari", descrizione: "Santuario con migliaia di torii rossi." },
      { url: "https://picsum.photos/226", titolo: "Arashiyama", descrizione: "Foresta di bambù affascinante e rilassante." },
      { url: "https://picsum.photos/227", titolo: "Kinkaku-ji", descrizione: "Tempio d'oro riflesso nello stagno." },
      { url: "https://picsum.photos/228", titolo: "Gion", descrizione: "Quartiere delle geishe e delle case da tè." },
      { url: "https://picsum.photos/229", titolo: "Tempio Ryoan-ji", descrizione: "Famoso giardino zen con 15 pietre." }
    ],
    attrazioni: [
      { nome: "Fushimi Inari Taisha", indirizzo: "68 Fukakusa Yabunouchicho", descrizione: "Tempio shintoista con sentieri infiniti di torii." },
      { nome: "Kinkaku-ji", indirizzo: "1 Kinkakujicho", descrizione: "Il Padiglione d’Oro circondato da giardini." },
      { nome: "Arashiyama Bamboo Grove", indirizzo: "Sagaogurayama Tabuchiyamacho", descrizione: "Suggestiva passeggiata tra i bambù." },
      { nome: "Castello di Nijo", indirizzo: "541 Nijojocho", descrizione: "Residenza degli shogun Tokugawa." },
      { nome: "Gion", indirizzo: "Gionmachi", descrizione: "Storico quartiere delle geishe." }
    ],
    piattiTipici: [
      { nome: "Kaiseki", descrizione: "Cena tradizionale composta da più portate artistiche.", ristorante: "Gion Karyo", indirizzo: "570-120 Gionmachi Minamigawa" },
      { nome: "Yudofu", descrizione: "Tofu bollito servito con salse.", ristorante: "Okutan", indirizzo: "86-30 Nanzenji Fukuchicho" },
      { nome: "Matcha dessert", descrizione: "Dolci a base di tè verde matcha.", ristorante: "Tsujiri", indirizzo: "573-3 Gionmachi Minamigawa" }
    ],
    curiosita: [
      { titolo: "Non è mai stata bombardata durante la guerra", curiosita: "Per questo conserva molti edifici storici originali." },
      { titolo: "Ha oltre 1600 templi buddhisti", curiosita: "È il cuore spirituale del Giappone." },
      { titolo: "Il nome Kyoto significa 'capitale'", curiosita: "Fu la capitale dal 794 al 1868." },
      { titolo: "Celebre per le geishe", curiosita: "Ancora oggi attive nel quartiere Gion." },
      { titolo: "I ciliegi fioriscono in primavera", curiosita: "È una delle stagioni più magiche per visitarla." }
    ]
  },
  {
    id: 7,
    immaginePrincipale: "/img/buenosAires.jpeg",
    nome: "Buenos Aires",
    nazione: "Argentina",
    continente: "America",
    descrizione: "Buenos Aires, la capitale dell'Argentina, è una città vibrante e cosmopolita. Conosciuta per la sua passione per il tango, la sua architettura e la sua cucina, la città è un melting pot di culture europee e sudamericane. Le ampie avenidas, i caffè storici e i quartieri come Palermo e San Telmo sono famosi per la loro vivacità e l’atmosfera bohemienne. Buenos Aires è anche una città di arte e cultura, con teatri, musei e gallerie che offrono esperienze uniche. La sua cucina, con piatti come l’asado e le empanadas, è un’altra delle sue attrazioni principali.",
    immagini: [
      { url: "https://picsum.photos/230", titolo: "Casa Rosada", descrizione: "Palazzo presidenziale di colore rosa." },
      { url: "https://picsum.photos/231", titolo: "Caminito", descrizione: "Strada colorata simbolo di La Boca." },
      { url: "https://picsum.photos/232", titolo: "Obelisco", descrizione: "Monumento storico nel centro città." },
      { url: "https://picsum.photos/233", titolo: "Teatro Colón", descrizione: "Uno dei teatri lirici migliori al mondo." },
      { url: "https://picsum.photos/234", titolo: "Recoleta", descrizione: "Quartiere elegante con cimitero monumentale." }
    ],
    attrazioni: [
      { nome: "Caminito", indirizzo: "Calle Caminito, La Boca", descrizione: "Strada pedonale piena di arte e tango." },
      { nome: "Teatro Colón", indirizzo: "Cerrito 628", descrizione: "Teatro d’opera con acustica perfetta." },
      { nome: "Casa Rosada", indirizzo: "Balcarce 50", descrizione: "Sede del governo argentino." },
      { nome: "La Bombonera", indirizzo: "Brandsen 805", descrizione: "Stadio mitico del Boca Juniors." },
      { nome: "Cimitero della Recoleta", indirizzo: "Junín 1760", descrizione: "Ospita le tombe di personaggi storici." }
    ],
    piattiTipici: [
      { nome: "Asado", descrizione: "Grigliata mista di carne, piatto nazionale.", ristorante: "Don Julio", indirizzo: "Guatemala 4699" },
      { nome: "Empanadas", descrizione: "Pasta ripiena fritta o al forno.", ristorante: "La Cocina", indirizzo: "Pueyrredón 1508" },
      { nome: "Milanesa a la napolitana", descrizione: "Cotoletta impanata con pomodoro e formaggio.", ristorante: "El Preferido", indirizzo: "Jorge Luis Borges 2108" }
    ],
    curiosita: [
      { titolo: "Culla del tango", curiosita: "Il famoso ballo è nato qui." },
      { titolo: "Ha il cimitero più visitato del Sud America", curiosita: "Quello della Recoleta, con Evita Perón." },
      { titolo: "Ha la libreria più bella del mondo", curiosita: "El Ateneo Grand Splendid, in un ex teatro." },
      { titolo: "Ha 48 barrios", curiosita: "Ogni quartiere ha una propria identità." },
      { titolo: "Ha la strada più larga del mondo", curiosita: "Avenida 9 de Julio, con 140 metri di larghezza." }
    ]
  },
  {
    id: 8,
    immaginePrincipale: "/img/praga.jpeg",
    nome: "Praga",
    nazione: "Repubblica Ceca",
    continente: "Europa",
    descrizione: "Praga, la capitale della Repubblica Ceca, è una città che incanta con la sua architettura medievale e il suo fascino senza tempo. Il suo centro storico è dominato dal Castello di Praga, dalla Cattedrale di San Vito e dal Ponte Carlo, che offrono panorami spettacolari sulla città. Con le sue strade acciottolate, le piazze pittoresche e le birrerie tradizionali, Praga è una città da esplorare a piedi. La città è anche famosa per la sua cultura, i suoi musei e le sue tradizioni culinarie, come la carne di maiale e il sauerkraut. Con la sua atmosfera magica e accogliente, Praga è una destinazione ideale per chi cerca storia e bellezza.",
    immagini: [
      { url: "https://picsum.photos/235", titolo: "Ponte Carlo", descrizione: "Iconico ponte pedonale decorato con statue barocche." },
      { url: "https://picsum.photos/236", titolo: "Castello di Praga", descrizione: "Complesso medievale simbolo della città." },
      { url: "https://picsum.photos/237", titolo: "Orologio Astronomico", descrizione: "Antico orologio medievale funzionante dal 1410." },
      { url: "https://picsum.photos/238", titolo: "Piazza della Città Vecchia", descrizione: "Centro storico con architetture gotiche e barocche." },
      { url: "https://picsum.photos/239", titolo: "Cattedrale di San Vito", descrizione: "Maestosa cattedrale gotica all’interno del castello." }
    ],
    attrazioni: [
      { nome: "Castello di Praga", indirizzo: "Hradčany", descrizione: "Sede dei presidenti cechi e complesso storico." },
      { nome: "Ponte Carlo", indirizzo: "Karlův most", descrizione: "Ponte medievale con splendida vista sul fiume." },
      { nome: "Città Vecchia", indirizzo: "Staré Město", descrizione: "Quartiere antico con l’orologio astronomico." },
      { nome: "Muro di Lennon", indirizzo: "Velkopřevorské náměstí", descrizione: "Simbolo di pace e libertà con graffiti a tema John Lennon." },
      { nome: "Casa Danzante", indirizzo: "Rašínovo nábřeží", descrizione: "Iconico edificio moderno soprannominato Ginger e Fred." }
    ],
    piattiTipici: [
      { nome: "Svíčková", descrizione: "Manzo in salsa di verdure con panna e mirtilli.", ristorante: "Mlejnice", indirizzo: "Kožná 488/14" },
      { nome: "Vepřo knedlo zelo", descrizione: "Maiale arrosto con crauti e gnocchi di pane.", ristorante: "Lokál", indirizzo: "Dlouhá 33" },
      { nome: "Trdelník", descrizione: "Dolce a spirale cotto su rullo e cosparso di zucchero.", ristorante: "Good Food Coffee & Bakery", indirizzo: "Karlova 160/8" }
    ],
    curiosita: [
      { titolo: "L'orologio astronomico è tra i più antichi del mondo", curiosita: "È funzionante dal 1410." },
      { titolo: "Ha una birra nazionale eccezionale", curiosita: "La Repubblica Ceca è tra i maggiori consumatori pro capite." },
      { titolo: "È detta la 'città delle cento torri'", curiosita: "Per le sue numerose guglie e torri gotiche." },
      { titolo: "Ha ispirato Kafka", curiosita: "Franz Kafka nacque e visse qui." },
      { titolo: "Il Castello di Praga è il più grande al mondo", curiosita: "Secondo il Guinness dei Primati." }
    ]
  },
  {
    id: 9,
    immaginePrincipale: "/img/istanbul.jpeg",
    nome: "Istanbul",
    nazione: "Turchia",
    continente: "Europa/Asia",
    descrizione: " Istanbul, la metropoli che collega due continenti, è una città che unisce Oriente e Occidente in un mix unico di culture. Con i suoi splendidi palazzi, moschee storiche come la Moschea Blu e il Palazzo Topkapi, Istanbul è un centro di storia, religione e arte. La città è famosa per il suo mercato, il Gran Bazar, e per la cucina, che include piatti come il kebab e il baklava. Istanbul è anche una città cosmopolita, con un’energia vibrante che si riflette nei suoi caffè, negozi e nella vita notturna. L’atmosfera che si respira a Istanbul è un incontro tra il passato e il presente, creando un'esperienza unica per chi la visita.",
    immagini: [
      { url: "https://picsum.photos/240", titolo: "Moschea Blu", descrizione: "Moschea con sei minareti e splendidi mosaici." },
      { url: "https://picsum.photos/241", titolo: "Santa Sofia", descrizione: "Iconico edificio che fu basilica, moschea e museo." },
      { url: "https://picsum.photos/242", titolo: "Bazar delle Spezie", descrizione: "Mercato colorato e aromatico." },
      { url: "https://picsum.photos/243", titolo: "Torre di Galata", descrizione: "Vista panoramica sulla città." },
      { url: "https://picsum.photos/244", titolo: "Palazzo Topkapi", descrizione: "Antica residenza dei sultani ottomani." }
    ],
    attrazioni: [
      { nome: "Santa Sofia", indirizzo: "Sultan Ahmet, Ayasofya Meydanı", descrizione: "Monumento iconico che racconta secoli di storia." },
      { nome: "Moschea Blu", indirizzo: "Sultan Ahmet Mh.", descrizione: "Luogo di culto con piastrelle blu di Iznik." },
      { nome: "Palazzo Topkapi", indirizzo: "Cankurtaran", descrizione: "Museo e palazzo imperiale con tesori ottomani." },
      { nome: "Bazar delle Spezie", indirizzo: "Rüstem Paşa", descrizione: "Perfetto per acquistare spezie e souvenir." },
      { nome: "Crociera sul Bosforo", indirizzo: "Eminönü", descrizione: "Tour panoramico tra Europa e Asia." }
    ],
    piattiTipici: [
      { nome: "Kebap", descrizione: "Carne speziata arrostita allo spiedo o grigliata.", ristorante: "Zübeyir Ocakbaşı", indirizzo: "Şht. Muhtar Mah. Bekar Sk. 28" },
      { nome: "Baklava", descrizione: "Dolce a base di pasta fillo, miele e pistacchi.", ristorante: "Karaköy Güllüoğlu", indirizzo: "Karaköy, Rıhtım Cad. Katlı Otopark Altı" },
      { nome: "Meze", descrizione: "Assortimento di antipasti tipici turchi.", ristorante: "Agora Meyhanesi", indirizzo: "Balat Mahallesi, Mürselpaşa Cd. No:185" }
    ],
    curiosita: [
      { titolo: "Unica città su due continenti", curiosita: "Si estende tra Europa e Asia." },
      { titolo: "È stata capitale di tre imperi", curiosita: "Romano, Bizantino e Ottomano." },
      { titolo: "Il nome Istanbul deriva da 'eis ten polin'", curiosita: "Significa 'verso la città' in greco." },
      { titolo: "Ha oltre 3000 moschee", curiosita: "Alcune sono vere opere d’arte." },
      { titolo: "Il tram nostalgico", curiosita: "Corre lungo Istiklal Caddesi." }
    ]
  },
  {
    id: 10,
    immaginePrincipale: "/img/londra.jpeg",
    nome: "Londra",
    nazione: "Regno Unito",
    continente: "Europa",
    descrizione: "Londra è una delle città più iconiche e cosmopolite del mondo. Famosa per i suoi monumenti storici come il Big Ben, il Tower Bridge e Buckingham Palace, Londra è una città che mescola tradizione e modernità. Con il suo sistema di trasporti pubblico, le aree verdi come Hyde Park e i suoi numerosi musei, la capitale britannica è una metropoli vivace e dinamica. Londra è anche un centro di cultura, arte e moda, con una scena teatrale che rivaleggia con quella di New York e Parigi. La sua cucina, i suoi mercati e la sua storia affascinante rendono Londra una destinazione imperdibile.",
    immagini: [
      { url: "https://picsum.photos/210", titolo: "Big Ben", descrizione: "Il celebre orologio e torre, simbolo di Londra." },
      { url: "https://picsum.photos/211", titolo: "Tower Bridge", descrizione: "Ponte sospeso che attraversa il Tamigi." },
      { url: "https://picsum.photos/212", titolo: "Buckingham Palace", descrizione: "Residenza ufficiale della Regina." },
      { url: "https://picsum.photos/213", titolo: "London Eye", descrizione: "Ruota panoramica con vista mozzafiato sulla città." },
      { url: "https://picsum.photos/214", titolo: "British Museum", descrizione: "Museo che ospita reperti storici da tutto il mondo." }
    ],
    attrazioni: [
      { nome: "British Museum", indirizzo: "Great Russell St, Bloomsbury", descrizione: "Uno dei musei più importanti al mondo." },
      { nome: "Tower of London", indirizzo: "London EC3N 4AB", descrizione: "Antica fortezza e residenza reale." },
      { nome: "Westminster Abbey", indirizzo: "20 Deans Yd, Westminster", descrizione: "Chiesa storica dove si sono celebrati matrimoni reali." },
      { nome: "Hyde Park", indirizzo: "London W2 2UH", descrizione: "Parco vasto con laghi, sentieri e monumenti." },
      { nome: "Trafalgar Square", indirizzo: "London WC2N 5DN", descrizione: "Piazza famosa per la Colonna di Nelson e i musei circostanti." }
    ],
    piattiTipici: [
      { nome: "Fish and Chips", descrizione: "Pesce fritto servito con patatine croccanti.", ristorante: "Poppies Fish & Chips", indirizzo: "6-8 Hanbury St" },
      { nome: "Full English Breakfast", descrizione: "Colazione abbondante con uova, pancetta, fagioli e salsicce.", ristorante: "The Breakfast Club", indirizzo: "33 D'Arblay St" },
      { nome: "Sunday Roast", descrizione: "Piatto tipico della domenica con carne arrosto e contorni.", ristorante: "The Ledbury", indirizzo: "127 Ledbury Rd" }
    ],
    curiosita: [
      { titolo: "Londra è una delle città più visitate al mondo", curiosita: "Ogni anno attira milioni di turisti da tutto il globo." },
      { titolo: "Ha più di 300 teatri", curiosita: "Londra è la capitale mondiale del teatro, con spettacoli di fama internazionale." },
      { titolo: "Londra ha un sistema di trasporto sotterraneo leggendario", curiosita: "La metropolitana di Londra è la più antica al mondo." },
      { titolo: "La Torre di Londra ospita i gioielli della Corona", curiosita: "La Torre è stata una prigione e una residenza reale." },
      { titolo: "Londra è una città verde", curiosita: "Oltre a Hyde Park, ci sono numerosi giardini e parchi sparsi in tutta la città." }
    ]
  }


];

function App() {
  const [cities, setCities] = useState(citiesList);
  const [selectedCity, setSelectedCity] = useState(null);
  const [favorite, setFavorite] = useState([]);
  const [addNewCity, setAddNewCity] = useState(false);


  function onChangeFavorite({ city }) {
    setFavorite((prevFavorite) =>
      prevFavorite.some((el) => el.id === city.id)
        ? prevFavorite.filter((el) => el.id !== city.id)
        : [...prevFavorite, city]
    );
  }

  function handleDeleteCity({city}) {
    setCities((prevCities) => prevCities.filter((el) => el.id !== city.id));
  }
  return (
    <>
      <h1 className="text-5xl text-center text-blue-500 my-10 font-semibold"> Scegli il tuo Viaggio!</h1>
      <NewItemBtn setAddNewCity={setAddNewCity}/>
      <NewCityForm addNewCity={addNewCity} setAddNewCity={setAddNewCity} citiesLength={cities.length} setCities={setCities}/>
      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          <HeaderCities cities={cities} setSelectedCity={setSelectedCity} onChangeFavorite={onChangeFavorite} handleDeleteCity={handleDeleteCity}/>
        </div>
        <div className='col-span-1'>
          <MyCities favorite={favorite} />
        </div>
      </div>
      <CityDetail selectedCity={selectedCity} />
    </>
  )
}

export default App