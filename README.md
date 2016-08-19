# connect-four
För att köra spelet så installerar du app-debug-apk på din telefon, kan hända att utvecklarläge måste vara igång. Klicka på den kolumn du vill lägga din "bricka" i.

Jag har använt React Native. Ett Javascript-ramverk till Android/iOS utvecklat av Facbook med grundtanken: "Learn once, write everywhere".
Jag är inte helt hundra på någon front-end ännu eller Javascript så  misstänker att jag inte kommer hinna göra alla punkter på kravspecen så väntar med följande:
- Systemet ska implementera en sk. Audit log. Användare kan identifieras på spelar namnen.
- En highscore funktion som visar vilken spelare som vunnit mest matcher skall finnas. (Den kom med)
- Historiken skall lagras som sk. ”persistent data”.
- Spelet ska kunna hantera minst två namngivna spelare. (Alla spelare använder samma
klient).
- All grafik ska gå att skala och vara kompatibelt med alla typenheter plattformen stödjer. Jag har ingen mac så iOS-utveckling är inte solklart att det funkar då jag inte kan provköra.

I övrigt så nu när jag provkörde på min telefon så är den slö. Misstänkt för många observers eller att det är en debug-version. Troligen det tidigare alternativet.
En lösning med ListViews istället för min matris skulle nog gjort allting lite bättre. Jag börjar få brist på tid tyvärr.


##Log
- 30 mins planering/set-up
- 1h min Cell, Board, Column etc..
- 30 min på tåget hem över helgen på att fundera på lösningar.
- ~4 timmar på att lära mig/setupa redux, mest för att jag ville lära mig redux. Globalt state är ju najs.
- 1h på logiken i redux
- 30min på att kolla upp om react-native-orientation är rimligt att fixa under omständigheterna. Blir fulfix med AndroidManifest.xml
- 1,5h algoritm och fixning av orientation av x/y plus debuggande/testande.
- 1h Fixade bugg i algo, outlining av stats, reset av board, misc etc.
- 2h Reset-knapp, scoreboard, Nuvarande spelare
- 30 min provköra, ändra lite styles
- 1.5h bygga APK, den ville inte signa den...
- Totalt: ~14 h

##To-Do(Önskelista)
- ListView/felsöka prestandaproblemet
- Stylea upp mer, bl.a. Räta till cellerna.
- Fixa så att cellerna har lägst index nederst och högst överst.
- Göra komponent av scoreboarden
- Ändra redux-store så scoreboard bara refreshas när det är nödvändigt
