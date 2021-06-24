var express = require('express'); 
var router = express. Router();

/* GET home page. */ 
router.get('/', function (reg, res, next) { 
    res.render('index', {
title: 'Você está no índice da aplicação', subtitle: 'Oieeee' , 

});

});

router.get('/ifce', function (req, res, next) { 
    res.render('ifce', {
title: 'Você na parte da aplicação sobre o IFCE',
subtitle: 'Oieeee',

link: "http://ifce.edu.br",
description: 'O Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE) é um Instituto Federal de educação superior, básica e profissional, pluricurricular e multicampi, com atuação no Ceará. Especializado na oferta de educação profissional e tecnológica, nas diferentes modalidades de ensino, com base na conjugação de conhecimentos técnicos e tecnológicos com a prática pedagógica[6], atua em todas as regiões do estado por meio de seus 32 campi e atendendo mais de 33 mil alunos em uma área total instalada em mais de 5,9 milhões de m2.Ele torna minha vida um inferno, imerso em puro desespero e desgraça. - CARVALHO, V. 2021,.'

        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Instituto_Fe deral do Cear%C3%A1_-_Marca Vertical_2015.svg/1200px-Instituto Federal do_Cear%C3%A1_-_Marca_Vertical_2015.svg.png'
    });

});

router.get('/ufc', function (reg, res, next) { 
    res.render('ufc', {
        title: 'Você na parte da aplicação sobre a UFC', 
        subtitle: 'Oieeee', 
        link: "http://ufc.br", description: 'A Universidade Federal do Ceará (UFC) é uma instituição de ensino superior pública brasileira mantida pelo Governo Federal do Brasil, localizada no Estado do Ceará. A UFC é uma autarquia vinculada ao Ministério da Educação. É uma das maiores universidades federais do pais e um dos centros brasileiros de excelência no ensino e pesquisa.',
            
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Brasa04_vert ical cor_300dpi.png/200px-Brasao4_vertical_cor_300dpi.png'
    });
});

router.get('/ufpe', function (req, res, next) { 
    res.render('ufpe', {
     title: "Você na parte da aplicação sobre a UFPE", 
     subtitle: 'Oieeee', 
     link: "https://www.ufpe.br/", 
     description: 'Universidade Federal de Pernambuco (UFPE) é uma instituição de ensino superior pública federal brasileira, mantida pelo governo federal. Está sediada na cidade do Recife, no estado de Pernambuco. [5] Em 11 de agosto de 1946, as faculdades de Direito (fundada em 1827), Medicina (1927) e Filosofia - Atual FAFIRE - (1941) se uniram com as escolas de Belas Artes (1932) e de Engenharia (1895) para formar a Universidade do Recife, um dos primeiros centros universitários do Norte e Nordeste do Brasil. [5]',
     imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bras%C3%A3o_ da_UFPE.png/200px-Bras%C3%A3o_da_UFPE.png'
    },
    ),  
});

module.exports = router;
