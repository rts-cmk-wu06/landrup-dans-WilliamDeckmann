# Webudvikler svendeprøve - projektdokumentation

**Navn:** William Deckmann

**Skole:** Roskilde Tekniske Skole

**Hold:** WU06

**Periode:** 03/10/22 – 07/10/22

<br/>

## Grundlæggende teknologier

- HTML
- CSS
- Javascript

<br/>

## Core Frameworks

### React.js

Et frontend JavaScript-bibliotek til udvikling af brugergrænseflader baseret på komponenter. Det vedligeholdes af Meta (tidligere Facebook) og bl.a. et fællesskab af individuelle udviklere og virksomheder. Det kan bruges til udvikling af single-page, mobil eller server-renderede applikationer. Det beskæftiger sig kun med state behandking og rendering af den tilstand til dommen, så React-applikationer kræver normalt et brug af yderligere biblioteker til f.eks. routing. React er komponent baseret, hvilket tillader at man genbruger meget kode hurtigt og nemt og gør det muligt at bygge applikationer hurtigere end vis man bare skrev vanilla JavaScript og HTML.

> Det er et bibliotek vi har fået meget undervisning i og har brugt i praksis i mange projekter hen over vores uddannelse, så det var oplagt for mig at bruge da jeg i forvejen har god erfaring med at bruge det i flere forskellige kontekster. Det tillader som sagt at man skaber komponent og hooks, hvilket er meget praktisk fordi man sparer meget tid på at skrive kode, da man i stor grad kan genbruge meget af den kode man tidligere har skrevet. React er også designet til at lave single-page applikationer, som i det her tilfælde var perfekt, da det jeg ved hjælp af routing var mere performance-venligt.

<br/>

## Code API’s

### Context

En alternativ made til at prop drilling der tillader at man skaber globale variabler som kan bruges hvor som helst inde for ens ”context-provider”.

> Jeg valgte at bruge context til at gemme de globale varibaler og states jeg havde brug for, frem for at gemme alt i et samlet objekt i local-storage, da context på mere overskuelig vis kan gemme data og bruges forskellige stedet i ens applikation.

<br/>

## Core packet

### react-error-boundary

En genbrugelige måde at rendere error-messages på en præsentabel måde, hvor som helst i ens komponent hierarki.

> Jeg valgte at bruge den her pakke da jeg har erfaring med at bruge den og det er nemt at integrere fejlbeskederne i ens eget design.

<br/>

### react-router-dom

Indlæser indholdet direkte i React, i stedet for at realoade hele hjemmesiden. Dette gør det bl.a. mere performance-venligt, da man kan nøjes med kun at loade det relevante indhold på hjemmesiden i stedte for hele siden hver gang routen skifter.

> Jeg valget at bryuge dne her pakke da det gør det muligt at lave mere performance-venlige singlepage applikationer. Pakken kommer også med nogle gode features som kan være praktiske når man skal hente data om dommen. Det er også en pakke jeg har brugt i lang tid, hvilket gør det  nemt for mig hurtigt at integrere den i min applikation.

<br/>

### react-hook-form

En hook der gør det nemmere at validere input-fields og rendere forskellige fejlmeddelelser til brugen.

> Jeg valget at bruge den her pakke da den er god til at isolere komponenter, hvilket er mere performance-friendly, da det gør muligt ikke at rendere unødvendige komponenter, når man støder på fejl i ens input validering. Det er også nemt at integrere Yup i den her pakke, hvilket er et stort plus, da det også gør det nemmere at udføre validering.

<br/>

### yup

Gør det nemmere at organisere forskellige "schema", når man også benytter sig af "react-hook-forms" pakken.

> Jeg valgte at bruge Yup, da det tillader en at lave et schema til ens form validering, hvilket er praktisk når man f.eks. skal validere flere forskellige input felter, da man kan specificere hvordan hver enkelte af felterne skal valideres i et samlet dokument, der så senere kan importeres.

<br/>

### axios

Afløser det umildbare fetch man normalt bruger når man henter data fra et API, og gør det lidt simplere at bruge data.

> Jeg ved at der findes flere forskellige måder at fetche data på fra et API, dog valget jeg alligevel at benytte mig af Axios, da det første og fremmest er en pakke jeg har været vandt til at bruge i lang tid, men samtidig gør den også syntaksen for ens fetch lettere at læse, men forenkler også koden.

<br/>

### tailwindcss

Er et framework der gør det muligt meget hurtigt og nemt at style på ens komponenter med allerede skabte utility-classes, som kan tilføjes direkte til ens HTML, hvis man arbejder i JSX.

> Jeg valgte at bruge TailWind, da det er en nem måde at lave component baseret styling. Det tillader at man styler med prædefinerede classes, hvilket hjælper med at spare meget tid når jeg styler forskellige komponenter. TailWind indeholder også en config fil, hvor man kan tilføje yderligere styling som f.eks. farer, skriftstørrelser osv,

<br/>

## Yderligere imports

### Google fonts (Poppins)
Importere font-styles direkte fra Googles egen database of henter fontene direkte ind i dit givende stlyesheet, så de kan bruges til at style forskellige componenter med.

> Jeg valgte at bruge Google fonts at til at hente mine fonte, da det indeholder et omfattende bibliotek af forskellige fonte i forskellige stile som nemt kan importeres i ens projekt. Projektet gjorde også brug af fontene ”Poppins”, "Roboto" og "Racing Sans One", som kunne hente fra Google fonts, så det var oplagt at hente den derfra.

**Link to Google fonte:** 

- https://fonts.google.com/specimen/Ubuntu
  
- https://fonts.google.com/specimen/Roboto

- https://fonts.google.com/specimen/Racing+Sans+One

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

![Mandag morgen](./kanban/xxxxx.PNG)

<br/>

## Projekt perspektivering

> xxxxx
