# Webudvikler svendeprøve - projektdokumentation

**Navn:** William Deckmann

**Skole:** Roskilde Tekniske Skole

**Hold:** WU06

**Periode:** 03/10/22 – 07/10/22 (udskudt til 09/10/22)

<br/>

## Grundlæggende teknologier

- HTML
- CSS
- Javascript

<br/>

## Core Frameworks

### React.js

Et frontend JavaScript-bibliotek til udvikling af brugergrænseflader baseret på komponenter. Det vedligeholdes af Meta (tidligere kendt som Facebook) og bl.a. et fællesskab af individuelle udviklere og virksomheder. Det kan bruges til udvikling af single-page, mobil eller server-renderede applikationer. Det beskæftiger sig kun med state behandling og rendering af den tilstand til dommen, så React-applikationer kræver normalt et brug af yderligere biblioteker til f.eks. routing. React er komponent baseret, hvilket tillader at man genbruger meget kode hurtigt og nemt og gør det muligt at bygge applikationer hurtigere end hvis man bare skrev vanilla JavaScript og HTML.

> Det er et bibliotek vi har fået meget undervisning i og har brugt i praksis i mange projekter hen over vores uddannelse, så det var oplagt for mig at bruge da jeg i forvejen har god erfaring med at bruge det i flere forskellige kontekster. Det tillader som sagt at man skaber komponenter og hooks, hvilket er meget praktisk fordi man sparer meget tid på at skrive kode, da man i stor grad kan genbruge meget af den kode man tidligere har skrevet. React er også designet til at lave single-page applikationer, som i det her tilfælde var perfekt, da det jeg ved hjælp af routing var mere performance-venligt. Jeg kunne også have valgt at arbejde med Vue, da jeg også har lidt tidligere erfaring med det, dog var jeg stadig mere bekvemt med at arbejde i React. Så det var enten valget mellem at arbejde i React eller vanilla og der gav det tydeligt mening at bruge det her bibliotek, specielt i forhold til dets popularitet og kæmpe mængde støtte og support fra fans i lang tid, som også danner grundlaget for at der er så mange tutorials og videoer på React på online. Det er også super praktisk hvis man støder på problemer og skal have hjælp, (hvilket man jo oftest gør af og til).

<br/>

## Code API’s

### Context

En alternativ made til at prop drilling der tillader at man skaber globale variabler som kan bruges hvor som helst inde for ens ”context-provider”.

> Jeg valgte at bruge context til at gemme de globale varibaler og states jeg havde brug for, frem for at gemme alt i et samlet objekt i local-storage, da context på mere overskuelig vis kan gemme data og bruges forskellige stedet i ens applikation. Jeg er også klar over at det er muligt at bruge Redux, dog valget jeg alligevel at benytte mig af Context, primært fordi jeg har god erfaring med det og ved i hvilket omfang jeg kan benytte det. Redux er praktisk i frohld tila t behandle centraliseret states og API behandling, hvorimod Context behandler dem på komponent niveau. Dette gør Redux mere kraftfulgt end Context, dog følte jeg ikke at fordelene var det værd i forhold til at lære et nyt redskab at kende under min svendeprøve. Dog kunne jeg godt tænk mig at kigge nærmere ind i Redux i fremtiden, da jeg forstiller mig at det kunne være et praktisk redskab at kende til, specielt til udvikling af større projekter.

<br/>

## Core packet

### react-router-dom

Indlæser indholdet direkte i React, i stedet for at realoade hele hjemmesiden. Dette gør det bl.a. mere performance-venligt, da man kan nøjes med kun at loade det relevante indhold på hjemmesiden i stedte for hele siden hver gang routen skifter.

> Jeg valget at bryuge dne her pakke da det gør det muligt at lave mere performance-venlige singlepage applikationer. Pakken kommer også med nogle gode features som kan være praktiske når man skal hente data om dommen. Det er også en pakke jeg har brugt i lang tid, hvilket gør det  nemt for mig hurtigt at integrere den i min applikation. Dog er denne pakke primært bygget med det formål at bruges til browsere, så i de tilfælde at jeg skulle udvikle en nativ-app, (hvilket designet ligger meget op til), så ville det give mere mening at bruge en pakke som f.eks. react-router-native.

<br/>

### react-hook-form

En hook der gør det nemmere at validere input-fields og rendere forskellige fejlmeddelelser til brugen.

> Jeg valget at bruge den her pakke da den er god til at isolere komponenter, hvilket er mere performance-friendly, da det gør muligt ikke at rendere unødvendige komponenter, når man støder på fejl i ens input validering. Det er også nemt at integrere Yup i den her pakke, hvilket er et stort plus, da det også gør det nemmere at udføre validering. Det gav også rigtig god mening at bruge den her pakke, da den nemt integrerer Yup, som er en pakke jeg også gør brug af.

<br/>

### yup

Gør det nemmere at organisere forskellige "schema", når man også benytter sig af "react-hook-forms" pakken.

> Jeg valgte at bruge Yup, da det tillader en at lave et schema til ens form validering, hvilket er praktisk når man f.eks. skal validere flere forskellige input felter, da man kan specificere hvordan hver enkelte af felterne skal valideres i et samlet dokument, der så senere kan importeres. Der findes mange forskellige pakker og løsninger til at håndtere input validering, dog har jeg alligevel siddet mest med Yup, så det var enten valget mellem at bruge Yup og benytte mig af et schema, eller at lave alt valideringen fra bunden af, hvilket ville have været meget tidskrævende at sætte op, så i det her tilfælde var det at bruge Yup en klar løsning. (Udover det, så ville det også have været meget kedeligt at skulle designe alt valideringslogikken selv, og det er det altså bare ret nemt med Yup).

<br/>

### axios

Afløser det umildbare fetch man normalt bruger når man henter data fra et API, og gør det lidt simplere at bruge data.

> Jeg ved at der findes flere forskellige måder at fetche data på fra et API, dog valget jeg alligevel at benytte mig af Axios, da det første og fremmest er en pakke jeg har været vandt til at bruge i lang tid, men samtidig gør den også syntaksen for ens fetch lettere at læse, men forenkler også koden. Jeg kunne selfølgelig også godt have valgt at bruge GraphQL, dog følte jeg ar det her var et bedre alternativ, dag jeg har arbejdet meget med det i forvejen og føler mig mere tryg ved at bruge det. Til større projekter kunne jeg til gengæld godt tænke mig at kigge mere ind i GraphQL, da det er god til at fetche simepl API data, hvorimod at GraphQL Kan bruges i mere komplekse sammenhænge.

<br/>

### tailwindcss

Er et framework der gør det muligt meget hurtigt og nemt at style på ens komponenter med allerede skabte utility-classes, som kan tilføjes direkte til ens HTML, hvis man arbejder i JSX.

> Jeg valgte at bruge TailWind, da det er en nem måde at lave component baseret styling. Det tillader at man styler med prædefinerede classes, hvilket hjælper med at spare meget tid når jeg styler forskellige komponenter. TailWind indeholder også en config fil, hvor man kan tilføje yderligere styling som f.eks. farer, skriftstørrelser osv. Jeg ved at jeg selvfølgelig godt kunne have valgt at arbejde med Bootstrap til at style min applikation, men det virkede ikke som en særlig effektiv løsning, da jeg allerede har god erfaring med at bruge TailWind i praksis. Ud over det, så er Bootstrap også større end TailWind og kræver flere filer for at kunne fungere og ville derfor også gå en smule ud over hjemmesidens performance, specielt i forhold til hvor lille et projekt det her var.

<br/>

## Yderligere imports

### Google fonts (Ubuntu)
Importere font-styles direkte fra Googles egen database of henter fontene direkte ind i dit givende stlyesheet, så de kan bruges til at style forskellige componenter med.

> Jeg valgte at bruge Google fonts at til at hente mine fonte, da det indeholder et omfattende bibliotek af forskellige fonte i forskellige stile som nemt kan importeres i ens projekt. Projektet gjorde også brug af fontene "Ubuntu", som kunne hentes fra Google fonts, så det var oplagt at hente den derfra.

**Link to Google fonts:** 

- https://fonts.google.com/specimen/Ubuntu

<br/>

## Versionsstyring

### Github

Github er en hosting tjeneste til softwareudvikling og versionskontrol ved hjælp af Git. Det giver den distribuerede versionskontrol adgangskontrol, fejlsporing, anmodninger om softwarefunktioner, opgavestyring, kontinuerlig integration.

> Jeg gjorde brug af GitHub til at opholde mit projekt, det det tillade mig at have et godt overblik over versionsstyrring og commit historie, hvilket gjorde det nemt at gå tilbage til en tidligere version, hvis jeg ved et uheld skulle komme til at pushe en fejl til min main branche.

<br/>

## Deploy process:

Netlify er en en af de mest brugte hosting hjemmesider til front-end developers osm tillader automatisk deployment. Skabt til at hoste high performance og dynamiske hjemmesider, e-commerce butikker og webapplikationer.

> Jeg valgte at bruge Netlify da det er en platform jeg har i forvejen har kendskab til hvilket også gjorde det nemt og hurtigt at deploy min hjemmeside dertil. Netlify erhar et nemt og overskuletgt interface, hvilket gør det let forståeligt at arbejde med og organisere end forskellige projekter. Netlify kan også nemt integrer kode fra ens GitHub repository, hvilket var perfekt i mit tilfælde da alt min kode lå i et classroom repository.

<br/>

## valgfri ekstraopgave

### Valgfri opgave: A – Automatiseret Deployment

Opgaven bestod i at ligge applikationen automatisk op på en online tjeneste, som i det her tilfælde endte op med at være Netlify. Automatiseringen indbefattede at siden skulle opdateres hvis der blev udført et commit eller lavet et pull-request.

**Link til Netlify side:** https://xxxxx

<br/>

## Projektstyring & kanban dokumentation

> Til min projektstyring udarbejdede jeg et simpelt kanban board, organiseret på hjemmesiden Trello, for at få et bedre overblik over min process og for bedre at kunne planlægge mit projekt hen over ugen. Trello gøre det meget nemt og hurtigt at skabe og redigere i sit/sine kanban bords og gør brug af mange visuelle elementer som gør det mere overskueligt at inddele og organisere sine opgaver. Hver dag tog jeg billeder af mit projekt for at kunne dokumentere min proces og for hele tiden at have en god fornemmelse for hvor langt jeg var i projektet, hver eneste dag.

<br/>

**Mandag morgen:**

![Mandag morgen](./kanban/Trello%20board%20-%20mandag%20morgen%2003.10.2022.PNG)

**Mandag eftermiddag:**

![Mandag eftermiddag](./kanban/Trello%20board%20-%20mandag%20eftermiddag%2003.10.2022.PNG)

**Tirsdag morgen:**

![Tirsdag morgen](./kanban/Trello%20board%20-%20tirsdag%20morgen%2004.10.2022.PNG)

**Tirsdag eftermiddag:**

![Tirsdag eftermiddag](./kanban/Trello%20board%20-%20tirsdag%20eftermiddag%2004.10.2022.PNG)

**Onsdag morgen:**

![Onsdag morgen](./kanban/Trello%20board%20-%20onsdag%20morgen%2005.10.2022.PNG)

**Onsdag eftermiddag:**

![Onsdag eftermiddag](./kanban/Trello%20board%20-%20onsdag%20eftermiddag%2005.10.2022.PNG)

**Torsdag morgen:**

![Torsdag morgen](./kanban/Trello%20board%20-%20torsdag%20morgen%2006.10.2022.PNG)

**Torsdag eftermiddag:**

![Torsdag eftermiddag](./kanban/Trello%20board%20-%20torsdag%20eftermiddag%2006.10.2022.PNG)

**Fredag morgen:**

![Fredag morgen](./kanban/Trello%20board%20-%20fredag%20morgen%2007.10.2022.PNG)

**Fredag eftermiddag:**

![Fredag eftermiddag](./kanban/Trello%20board%20-%20fredag%20eftermiddag%2007.10.2022.PNG)

**(Søndag morgen):**

![Søndag morgen](./kanban/Trello%20board%20-%20onsdag%20morgen%2005.10.2022.PNG)

**(Søndag eftermiddag):**

![Søndag eftermiddag](./kanban/Trello%20board%20-%20soendag%20eftermiddag%2009.10.2022.PNG)

<br/>

## Projekt perspektivering

> Fremadrettet kunne jeg godt tænke mig at implementere nogle flere sikkerhedsforanstaltninger, for at mindste risikoen for at sider ikke bliver vist korrekt, eller at brugeren ikke ender op på en side der ikke bør eksistere. Jeg ville også gerne integrere nogle error-boundaries, for bedre at kunne kommunikere til brugen hvad der er gået galt, og i det hele taget give en bedre brugeroplevelse. Det kunne også være dejligt at lave applikationen om til en PWA, sådan at man også kunne installere den til ens hjemmeskærm. Dette giver specialet god mening, da layoutet i forvejen er designet til mobile-first. Udover det tror jeg også at det kunne være praktisk at tjekke for ting som f.eks. internet tilslutning, for i det tilfælde at vise brugeren et alternativt design i stedet, (lidt ligesom Chrome gør). Ellers ville jeg personligt synes at det også kunne være rart med lidt flere animationer, til f.eks. page-transitions og laoding. (Jeg kunne selfølgelig også godt tænke mig at re-factor noget af min kode i fremtiden).
