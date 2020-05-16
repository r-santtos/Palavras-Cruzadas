<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/app/palavras-cruzadas/controller/css/home.css" />
    <meta name="description" content='Game Palavras Cruzadas da famosa revita Coquitel' />
    <meta name="theme-color" content="#000" />
    <title>Palavras Cruzadas</title>

    <!-- CODELAB: Add iOS meta tags and icons -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="Palavras Cruzadas" />
    <link rel="apple-touch-icon" href="/app/palavras-cruzadas/view/images/icons/152.png" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="/app/palavras-cruzadas/controller/javascript/manifest_cruzadas.json" />
    <script>
        if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/app/palavras-cruzadas/sw_cruzadas.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
            });
        });
        }
    </script>
</head>
<body onload="render()">
    <header id="header" class="container">
        <h1>Palavras Cruzadas</h1>
    </header>

    <main id="palavras-cruzadas" class="container">
        <div class="container box-palavras max-width-800">
            <div class="container linha row 01">
                <span id="l01c01" class="container setas"></span>  <!--C01 L01-->
                <span id="l01c02" class="container setas">&#9660;</span>  <!--C02 L02-->
                <span id="l01c03" class="container setas">&#9654;</span>  <!--C03 L03-->
                <span id="l01c04" class="container"></span>  <!--C04 L04-->
                <span id="l01c05" class="container"></span>  <!--C05 L05-->
                <span id="l01c06" class="container"></span>  <!--C06 L06-->
                <span id="l01c07" class="container setas">&#9660;</span>  <!--C07 L07-->
                <span id="l01c08" class="container setas"></span>  <!--C08 L08-->
                <span id="l01c09" class="container setas">&#9660;</span>  <!--C09 L09-->
                <span id="l01c10" class="container setas">&#9660;</span>  <!--C10 L10-->
            </div>

            <div class="container linha row 02">
                <span id="l02c01" class="container setas">&#9654;</span>  <!--C01 L01-->
                <span id="l02c02" class="container"></span>  <!--C02 L02-->
                <span id="l02c03" class="container"></span>  <!--C03 L03-->
                <span id="l02c04" class="container"></span>  <!--C04 L04-->
                <span id="l02c05" class="container"></span>  <!--C05 L05-->
                <span id="l02c06" class="container"></span>  <!--C06 L06-->
                <span id="l02c07" class="container"></span>  <!--C07 L07-->
                <span id="l02c08" class="container"></span>  <!--C08 L08-->
                <span id="l02c09" class="container"></span>  <!--C09 L09-->
                <span id="l02c10" class="container"></span>  <!--C10 L10-->
            </div>

            <div class="container linha row 03">
                <span id="l03c01" class="container setas">&#9654;</span>  <!--C01 L01-->
                <span id="l03c02" class="container"></span>  <!--C02 L02-->
                <span id="l03c03" class="container"></span>  <!--C03 L03-->
                <span id="l03c04" class="container"></span>  <!--C04 L04-->
                <span id="l03c05" class="container setas"> </span>  <!--C05 L05-->
                <span id="l03c06" class="container setas">&#9654;</span>  <!--C06 L06-->
                <span id="l03c07" class="container"></span>  <!--C07 L07-->
                <span id="l03c08" class="container"></span>  <!--C08 L08-->
                <span id="l03c09" class="container"></span>  <!--C09 L09-->
                <span id="l03c10" class="container"></span>  <!--C10 L10-->
            </div>

            <div class="container linha row 04">
                <span id="l04c01" class="container setas">&#9654;</span>  <!--C01 L01-->
                <span id="l04c02" class="container"></span>  <!--C02 L02-->
                <span id="l04c03" class="container"></span>  <!--C03 L03-->
                <span id="l04c04" class="container"></span>  <!--C04 L04-->
                <span id="l04c05" class="container setas">&#9654;</span>  <!--C05 L05-->
                <span id="l04c06" class="container"></span>  <!--C06 L06-->
                <span id="l04c07" class="container"></span>  <!--C07 L07-->
                <span id="l04c08" class="container"></span>  <!--C08 L08-->
                <span id="l04c09" class="container"></span>  <!--C09 L09-->
                <span id="l04c10" class="container"></span>  <!--C10 L10-->
            </div>

            <div class="container linha row 05">
                <span id="l05c01" class="container setas">&#9660;</span>  <!--C01 L01-->
                <span id="l05c02" class="container"></span>  <!--C02 L02-->
                <span id="l05c03" class="container setas">&#9660;</span>  <!--C03 L03-->
                <span id="l05c04" class="container setas"> </span>  <!--C04 L04-->
                <span id="l05c05" class="container setas">&#9660;</span>  <!--C05 L05-->
                <span id="l05c06" class="container setas">&#9660;</span>  <!--C06 L06-->
                <span id="l05c07" class="container"></span>  <!--C07 L07-->
                <span id="l05c08" class="container setas">&#9660;</span>  <!--C08 L08-->
                <span id="l05c09" class="container"></span>  <!--C09 L09-->
                <span id="l05c10" class="container"></span>  <!--C10 L10-->
            </div>

            <div class="container linha row 06">
                <span id="l06c01" class="container"></span>  <!--C01 L01-->
                <span id="l06c02" class="container"></span>  <!--C02 L02-->
                <span id="l06c03" class="container"></span>  <!--C03 L03-->
                <span id="l06c04" class="container setas">&#9660;</span>  <!--C04 L04-->
                <span id="l06c05" class="container"></span>  <!--C05 L05-->
                <span id="l06c06" class="container"></span>  <!--C06 L06-->
                <span id="l06c07" class="container"></span>  <!--C07 L07-->
                <span id="l06c08" class="container"></span>  <!--C08 L08-->
                <span id="l06c09" class="container"></span>  <!--C09 L09-->
                <span id="l06c10" class="container"></span>  <!--C10 L10-->
            </div>

            <div class="container linha row 07">
                <span id="l07c01" class="container"></span>  <!--C01 L01-->
                <span id="l07c02" class="container"></span>  <!--C02 L02-->
                <span id="l07c03" class="container"></span>  <!--C03 L03-->
                <span id="l07c04" class="container"></span>  <!--C04 L04-->
                <span id="l07c05" class="container"></span>  <!--C05 L05-->
                <span id="l07c06" class="container"></span>  <!--C06 L06-->
                <span id="l07c07" class="container"></span>  <!--C07 L07-->
                <span id="l07c08" class="container"></span>  <!--C08 L08-->
                <span id="l07c09" class="container"></span>  <!--C09 L09-->
                <span id="l07c10" class="container"></span>  <!--C10 L10-->
            </div>

            <div class="container linha row 08">
                <span id="l08c01" class="container"></span>  <!--C01 L01-->
                <span id="l08c02" class="container"></span>  <!--C02 L02-->
                <span id="l08c03" class="container"></span>  <!--C03 L03-->
                <span id="l08c04" class="container"></span>  <!--C04 L04-->
                <span id="l08c05" class="container"></span>  <!--C05 L05-->
                <span id="l08c06" class="container"></span>  <!--C06 L06-->
                <span id="l08c07" class="container"></span>  <!--C07 L07-->
                <span id="l08c08" class="container"></span>  <!--C08 L08-->
                <span id="l08c09" class="container"></span>  <!--C09 L09-->
                <span id="l08c10" class="container"></span>  <!--C10 L10-->
            </div>

            <div class="container linha row 09">
                <span id="l09c01" class="container"></span>  <!--C01 L01-->
                <span id="l09c02" class="container"></span>  <!--C02 L02-->
                <span id="l09c03" class="container"></span>  <!--C03 L03-->
                <span id="l09c04" class="container setas"> </span>  <!--C04 L04-->
                <span id="l09c05" class="container"></span>  <!--C05 L05-->
                <span id="l09c06" class="container setas"> </span>  <!--C06 L06-->
                <span id="l09c07" class="container"></span>  <!--C07 L07-->
                <span id="l09c08" class="container"></span>  <!--C08 L08-->
                <span id="l09c09" class="container setas"></span>  <!--C09 L09-->
                <span id="l09c10" class="container"></span>  <!--C10 L10-->
            </div>

            <div class="container linha row 10">
                <span id="l10c01" class="container"></span>  <!--C01 L01-->
                <span id="l10c02" class="container setas ">&#9654;</span>  <!--C02 L02-->
                <span id="l10c03" class="container"></span>  <!--C03 L03-->
                <span id="l10c04" class="container"></span>  <!--C04 L04-->
                <span id="l10c05" class="container"></span>  <!--C05 L05-->
                <span id="l10c06" class="container"></span>  <!--C06 L06-->
                <span id="l10c07" class="container"></span>  <!--C07 L07-->
                <span id="l10c08" class="container"></span>  <!--C08 L08-->
                <span id="l10c09" class="container"></span>  <!--C09 L09-->
                <span id="l10c10" class="container"></span>  <!--C10 L10-->
            </div>
        </div>
    </main>


    <!-- CONTAINER LINHA 1 COLUNA 2 -->
    <div id="linha1Coluna2" class="btns container">
        <header class="header container row">
            <h2 onclick="linha1Coluna2Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Que é característico, próprio; inerente a alguém ou a algo.</p>
            <input type="text" placeholder="8 Letras" />
            <button id="salvar">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 1 COLUNA 7 -->
    <div id="linha1Coluna7" class="btns container">
        <header class="header container row">
            <h2 onclick="linha1Coluna7Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Acontecimento imprevisível que modifica o desenrolar normal de uma ação</p>
            <input type="text" placeholder="9 Letras" />
            <button id="salvar-c7">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 1 COLUNA 9 -->
    <div id="linha1Coluna9" class="btns container">
        <header class="header container row">
            <h2 onclick="linha1Coluna9Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Sossegar; tranquilizar-se; readquirir o sangue-frio, dominar-se, conter-se.</p>
            <input type="text" placeholder="7 Letras" />
            <button id="salvar-c9">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 1 COLUNA 10 -->
    <div id="linha1Coluna10" class="btns container">
        <header class="header container row">
            <h2 onclick="linha1Coluna10Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Falta de alinhamento de um ou ambos os olhos.</p>
            <input type="text" placeholder="9 Letras" />
            <button id="salvar-c10">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 1 COLUNA 3 -->
    <div id="linha1Coluna3" class="btns container">
        <header class="header container row">
            <h2 onclick="linha1Coluna3Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Capacidade para agir, para realizar alguma coisa; ação.</p>
            <input type="text" placeholder="3 Letras" />
            <button id="salvar-l1c3">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 2 COLUNA 1 -->
    <div id="linha2Coluna1" class="btns container">
        <header class="header container row">
            <h2 onclick="linha2Coluna1Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Que tem agudeza de espírito; sagaz, inteligente</p>
            <input type="text" placeholder="9 Letras" />
            <button id="salvar-l2c1">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 3 COLUNA 1 -->
    <div id="linha3Coluna1" class="btns container">
        <header class="header container row">
            <h2 onclick="linha3Coluna1Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>A partir da interpretação filosófica, significa o “eu de cada um”</p>
            <input type="text" placeholder="3 Letras" />
            <button id="salvar-l3c1">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 3 COLUNA 6 -->
    <div id="linha3Coluna6" class="btns container">
        <header class="header container row">
            <h2 onclick="linha3Coluna6Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Se refere à parte de trás do pescoço de diversos animais.</p>
            <input type="text" placeholder="4 Letras" />
            <button id="salvar-l3c6">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 4 COLUNA 1 -->
    <div id="linha4Coluna1" class="btns container">
        <header class="header container row">
            <h2 onclick="linha4Coluna1Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>É uma percepção visual provocada pela ação de um feixe de fótons sobre células especializadas da retina.</p>
            <input type="text" placeholder="3 Letras" />
            <button id="salvar-l4c1">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 4 COLUNA 5 -->
    <div id="linha4Coluna5" class="btns container">
        <header class="header container row">
            <h2 onclick="linha4Coluna5Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>É uma conserva típica da culinária indo-portuguesa. Oposto de não encontrar.</p>
            <input type="text" placeholder="5 Letras" />
            <button id="salvar-l4c5">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 10 COLUNA 2 -->
    <div id="linha10Coluna2" class="btns container">
        <header class="header container row">
            <h2 onclick="linha10Coluna2Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Maciço de alvenaria, ger. abaixo da superfície, sobre o qual se assentam as estruturas externas de uma construção; base, fundação.</p>
            <input type="text" placeholder="8 Letras" />
            <button id="salvar-l10c2">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 5 COLUNA 1 -->
    <div id="linha5Coluna1" class="btns container">
        <header class="header container row">
            <h2 onclick="linha5Coluna1Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Voz forte e enérgica de forma a ser ouvida longe ou com temor; grito</p>
            <input type="text" placeholder="5 Letras" />
            <button id="salvar-l5c1">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 5 COLUNA 3 -->
    <div id="linha5Coluna3" class="btns container">
        <header class="header container row">
            <h2 onclick="linha5Coluna3Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Grupo de indivíduos grosseiros, vis, de má índole; canalha, súcia, malta</p>
            <input type="text" placeholder="5 Letras" />
            <button id="salvar-l5c3">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 5 COLUNA 5 -->
    <div id="linha5Coluna5" class="btns container">
        <header class="header container row">
            <h2 onclick="linha5Coluna5Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Filho de um Deus ou uma Deusa com um ser humano; semideus</p>
            <input type="text" placeholder="5 Letras" />
            <button id="salvar-l5c5">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 5 COLUNA 6 -->
    <div id="linha5Coluna6" class="btns container">
        <header class="header container row">
            <h2 onclick="linha5Coluna6Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>É geralmente definida como um estado de calma ou tranquilidade, uma ausência de perturbações e agitação.</p>
            <input type="text" placeholder="3 Letras" />
            <button id="salvar-l5c6">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 5 COLUNA 8 -->
    <div id="linha5Coluna8" class="btns container">
        <header class="header container row">
            <h2 onclick="linha5Coluna8Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>Verbo transitivo direto Recuperar de uma doença; ficar são; curar, sarar.</p>
            <input type="text" placeholder="5 Letras" />
            <button id="salvar-l5c8">Salvar</button>
        </div>
    </div>

    <!-- CONTAINER LINHA 6 COLUNA 4 -->
    <div id="linha6Coluna4" class="btns container">
        <header class="header container row">
            <h2 onclick="linha6Coluna4Close()">Fechar</h2>
            <div class="box"></div>
        </header>
        <div class="container caixa">
            <p>O deus do Sol do Antigo Egito conhecido também como Ré</p>
            <input type="text" placeholder="2 Letras" />
            <button id="salvar-l6c4">Salvar</button>
        </div>
    </div>

    <script src="/app/palavras-cruzadas/controller/javascript/btns.js"></script>
    <script src="/app/palavras-cruzadas/controller/javascript/palavras.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-153427274-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-153427274-1');
</script>

</body>
</html>