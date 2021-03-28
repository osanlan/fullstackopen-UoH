## Osa 0.4

![osa0.4](/osa0.4 - Kaavio.png)

```
title Osa0.4
note right of selain:
Käyttäjä kirjoittaa viestin laatikkoon ja painaa 'Save'-nappia
end note
selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
palvelin-->selain: HTTP status 302, redirect samalle sivulle, notes
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: HTML-koodi
note right of selain:
Uudelleen lataus saa aikaan myös seuraavat HTTP-pyynnöt; main.css, main.js
end note
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js
note right of selain:
Suoritettu main.js pyytää vielä data.json tiedoston palvelimelta
end note
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: data.json
note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
```
