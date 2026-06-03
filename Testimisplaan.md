Testimisplaan – KeskkonnatelkV2 projekt
1. Projekti kirjeldus
KeskkonnatelkV2 on Reacti põhine veebirakendus, mis tutvustab keskkonnahariduse töötubasid, sündmusi ja teemasid. Projekt sisaldab mitmeid komponente (Header, Hero, Workshops, ContactForm, Footer), mis moodustavad tervikliku kasutajaliidese.
Testimise eesmärk on tagada, et kõik põhikomponendid renderduvad korrektselt, käituvad ootuspäraselt ning ei sisalda funktsionaalseid vigu.

2. Testimise eesmärk
Testimise eesmärk on:

Kontrollida, et kõik olulised UI‑komponendid renderduvad korrektselt.

Veenduda, et kasutaja sisestusvormid töötavad ootuspäraselt.

Kontrollida, et dünaamilised andmed (nt töötoad) laaditakse ja kuvatakse õigesti.

Tagada, et rakendus ei viska ootamatuid vigu.

3. Testimise ulatus
Testitavad komponendid
Header – navigeerimise elemendid

Hero – pealkirjad ja sisu

Workshops – dünaamiline töötubade laadimine ja kuvamine

ContactForm – vormi sisestamine ja valideerimine

Footer – staatiline jalus

Smoke test – Jest keskkonna kontroll

Testimise alt välja jääb
Backend API tegelik töö (fetch on testides mockitud)

CSS, animatsioonid ja visuaalne kujundus

Admin-paneeli funktsionaalsus

4. Testimise metoodika
Kasutatakse ühiktestimist (unit testing) Jest + React Testing Library abil.

Kasutatavad tehnikad:
Renderdamise testid – kontrollitakse, kas komponent renderdub ilma vigadeta.

Interaktsiooni testid – kontrollitakse kasutaja sisestust ja sündmusi.

Mockitud fetch – Workshops komponendi andmete laadimise simuleerimine.

Valideerimise testid – kontrollitakse, et vorm ei saadaks tühje andmeid.

5. Testjuhtumid
| Nr | Komponent    | Testi nimi                 | Miks testida                                   | Oodatav tulemus                  |
|----|--------------|----------------------------|------------------------------------------------|----------------------------------|
| 1  | Header       | Navigeerimise lingid       | Kas kõik lingid on nähtavad                    | Kõik lingid on DOM-is           |
| 2  | Hero         | Pealkiri renderdub         | Kas Hero sektsioon kuvatakse                   | `<h1>` on DOM-is                |
| 3  | Workshops    | Töötoad laaditakse         | Dünaamiline fetch + renderdus                  | Vähemalt 1 töötuba renderdub    |
| 4  | ContactForm  | Sisestamine töötab         | Kas kasutaja saab välju täita                  | Väli võtab sisestuse vastu      |
| 5  | ContactForm  | Tühja vormi ei saadeta     | HTML5 required valideerimine                   | Submit ei käivitu               |
| 6  | Footer       | © tekst renderdub          | Kontrollida staatilist sisu                    | © on DOM-is                     |
| 7  | Smoke test   | Jest töötab                | Kontrollida testikeskkonda                     | PASS                            |



6. Testimise tööriistad
Jest – testide jooksutamine

React Testing Library – komponentide renderdamine ja interaktsioonid

babel-jest – JSX transpileerimine

jsdom – DOM-i simulatsioon

7. Riskianalüüs
| Risk                 | Mõju                               | Leevendus                          |
|----------------------|-------------------------------------|-------------------------------------|
| Fetch ei tööta testis | Dünaamilised testid kukuvad läbi    | Kasutada mockitud fetchi            |
| Komponendi HTML muutub | Testid kukuvad läbi                 | Teste uuendada vastavalt struktuurile |
| Vorm ei valideeru     | Võimalik vale sisestus              | HTML5 required + testid             |



8. Testimise protsess
Installi sõltuvused:

bash
npm install
Käivita testid:

bash
npm test
Kontrolli, et kõik testid läbivad (PASS).

Tee terminalist kuvatõmmis.

Lisa kuvatõmmis dokumenti või GitHubi.

9. Testimise tulemused
Kõik 7 testi läbisid edukalt:

Test Suites: 7 passed

Tests: 7 passed

10. Kokkuvõte
Testimine kinnitas, et KeskkonnatelkV2 põhikomponendid töötavad ootuspäraselt.
Kõik renderdus-, sisestus- ja valideerimistestid läbisid edukalt.
Projekt on valmis esitamiseks.
