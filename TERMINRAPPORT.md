Tærmin Rapport WU08
Dogus

Præsentation af rapport
I denne rapport vil vi gå igennem mange punkter der forklare om hvad det er jeg har kødet i disse fem dag for at kunne opbygge mediehuset/termin prøve projektet
Repository: https://github.com/rts-cmk-wu08/mediesuset-termin-djbenjamin2001
Brugte url til fetching: localhost:4000
Brugt e-mail til login: benjaminbatbayli@gmail.com
Brugt password til login: Goku2001


Hvad er blevet kodet og brugt til at kode siden(teknologi-stack)
I løbet af disse fem dage. Har jeg købet mediehuset hjemmesiden/projektet, som er en festival hjemmeside med massere forskellige funktionaliteter, elementer og komponenter der bliver brugt til at opbygge selve siden.
 Ved hjælp af vores Javascript teknologi-stack som i denne tilfælde ville være frameworket Nextjs som er en del af React biblioteket/basere sig på ReactJS, og virker både på server side og client side, i forhold til selve biblioteket den er baseret på som kun virker på client side.
Oveni i det har vi så også vores database, som i dette tilfælde er Api’et vi endte med at blev tilsendt med opgaven, hvor når man så har startet den op i Visual studio code, kan se og fetche alt der er i databasen, og hvis man har løst til at se det på en hjemmeside så kan man altid skrive localhost:4000.



Redegørelse for oprindelsen af de forskellige kodeelementer i prøven 
For at løse  funktionaliteten der ligger i selve siden blev der brugt forskellige npm pakker der hjalp mig til at komme frem til de løsninger jeg kom frem til i min eventuelle kodning proces og de pakker er:
Formik:
Formik er en af verdnens mest populær open source formular bibliotek, som giver dig en intuitiv og simpel Formular der kan blive brugt til at skabe forskellige formularer som man kan have nytte af(fx hvis man skulle til at lave en registrering formular), med dette npm pakke har man oveni en nemmere og meget mere clusterfree kodning oplevelse når skal til at opbygge selve formularen til de forskellige sider der har brug for det.
Cookies-next:
cookies-next er en next js baseret cookie npm pakke der skaber muligheden for a skabe, indlæse og slette cookies, under komponenter der bruger client-side rendering i nextjs, den kan derimod også blive brugt på serversiden ved hjælp af serverside props, og selvom nextjs har deres eget cookies som man kan bruge fortræk jeg at udnytte cookies-next istedt.
React-mapbox-gl:
React mapbox-gl er en react baseret version af mapbox-gl som er et javascript bibliotek der bliver brugt til at lave navigation kort og få dem vist frem på siden, der er mange forskellige måder man kan lave kort på takket være pakken, men typisk ville man bare have en normal kort der viser der hvor din lokation er og have muligheden til at navigere med den.


Argumentation for de valg du har truffet under løsningen af opgaven
Min begrundelse til at jeg har truffet de valg jeg har er fordi jeg allerede har tidligere bekendtskab til det jeg har brugt i løbet af selve kodning processen i disse fem kodningsdage, oven i det viste jeg også at det var nogle effektive metoder at få opgaven løst på, da jeg har lavet tidligere andre opgaver der mindes om denne som præcis har haft brug for de pakker der blev brugt til den nuværende opgave, som så stadigvæk endte med at give en fin og funktionelt hjemmeside.

Vurdering af din egen indsats og gennemførelse af opgaven 
(hvad gik godt / skidt)
Jeg vil sige at min indsats i løbet af de 5 dage vi fik til at løse opgaven har gået stille og roligt, der var nogle udfordringer i løbet af dagene der endte med at drille lidt ellers i løbet af de 5 dage har der ikke været nogle store kodeproblemer som jeg ikke kunne have fikset, der var i derimod nogle små bumps in the Road hvor jeg blev nød til at side ned og analysere tidligere projekter for at se hvordan den nuværende projekt kunne opbygges, forbedres og fikses.
Og hvis der var noget der gik galt i løbet af de 5 dag vi fik så vil jeg ihværtfald sige at det var mangel af tid for at arbejde fuldkommen på projektet, og få den opbygget til det tilstand hvor jeg kunne kalde det for en fuldendt hjemmeside, da der var nogle funktioner og sider som jeg ville ønske jeg kunne få  opbygget og vist frem til præsentering af selve projektet.
Udover det nåede jeg at lave en god del af projektet som jeg er stolt af at have lavet og afsluttet med hjælp af npm pakkerne jeg endte med at bruge får at frem til løsningerne, iser når det havde noget med formular håndtering at gøre(fx register).

Fremhævelse af eventuelle særlige punkter til bedømmelse.
I løbet af hele dette rapport har der været punkter hvor jeg endte med at nævne 2 specifikke pakker jeg brugte til at løse opgaven med og de 2 pakker var cookies-next og formik.
Pakkerne blev brugt til at løse mange forskellige opgaver men den jeg var mest stolt af var min billet side som havde forskellige funktioner, hvor af dem der ikke havde brug for cookies-next og formik, derimod vil jeg hellere få snakket mere i dybe om selve billet detalje siden under selve præsentationen så jeg indsætter en del af min kodning så vi kan snakke om den når vi nærmer os dertil:



     <Formik
        initialValues={{email: "",name: "",adress: "",ticketpickup: "",city: "",postnumber: "",password: "",confirmPassword: "",selectField: "",
        }}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          if (values.password !== values.confirmPassword) {
            setStatus("Password and confirm password do not match");
            setSubmitting(false);
        return;
          }
          fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email, password: values.password, pris: pris * antal, antal,
              billet, city: values.city, postnumber: values.postnumber, adress: values.adress, ticketpickup:values.ticketpickup, selectField: values.selectField
            }),
          })
            .then((res) => {
              if (!res.ok) {
                setStatus(res.json());
                setSubmitting(false);
              } else {
                return res.json();
              }
            })
            .then((data) => {
              setCookie("token", data.accessToken, {  sameSite: "lax", maxAge: 3600,
              });
              router.push("/");
            });
        }}


Konklusion
Alt i alt nåede jeg det jeg kunne i de 5 dage jeg havde til at lave ved hjælp af de pakker og databaser som jeg brugte og endte med at være tilfreds med det jeg opbyggede med Nextjs som min framework.
