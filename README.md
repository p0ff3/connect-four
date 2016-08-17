# connect-four
Jag har använt React Native. Ett Javascript-ramverk till Android/iOS utvecklat av Facbook med grundtanken: "Learn once, write everywhere".
Jag är inte helt hundra på någon front-end ännu eller Javascript så  misstänker att jag inte kommer hinna göra alla punkter på kravspecen så väntar med följande:
- Systemet ska implementera en sk. Audit log. Användare kan identifieras på spelar namnen.
- En highscore funktion som visar vilken spelare som vunnit mest matcher skall finnas.
- Historiken skall lagras som sk. ”persistent data”.
- Spelet ska kunna hantera minst två namngivna spelare. (Alla spelare använder samma
klient).
- All grafik ska gå att skala och vara kompatibelt med alla typenheter plattformen stödjer. Jag har ingen mac så iOS-utveckling är inte solklart att det funkar då jag inte kan provköra.
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
- Totalt:

##To-Do(Önskelista)
- Mer testande
- Stylea upp mer, bl.a. Räta till cellerna. 
- Fixa Orientation-lock(https://www.npmjs.com/package/react-native-orientation, de har problem med senaste react-native-versionen...)
- Fixa så att cellerna har lägst index nederst och högst överst.
- Extrahera if-satsen så att den bara är för iconName
- Göra komponent av scoreboarden
