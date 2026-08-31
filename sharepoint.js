/* Grupos importados do painel fornecido. Não acessa o Firebase. */
(() => {
  'use strict';
  const groups = [
  {
    "id": "chefes",
    "title": "Relatórios Mensais chefes",
    "links": [
      {
        "url": "https://seesp-my.sharepoint.com/personal/sor_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsor%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2FRelat%C3%B3rios%20Mensais%2FSEGRE&viewid=3e54b928%2D5e7d%2D4878%2D85c7%2D3a7f56a161b8&ga=1",
        "color": "#b39ddb",
        "label": "SEGRE"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/sor_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsor%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2FRelat%C3%B3rios%20Mensais%2FEEC&viewid=3e54b928%2D5e7d%2D4878%2D85c7%2D3a7f56a161b8&ga=1",
        "color": "#4caf50",
        "label": "EEC"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/sor_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsor%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2FRelat%C3%B3rios%20Mensais%2FSEINTEC&viewid=3e54b928%2D5e7d%2D4878%2D85c7%2D3a7f56a161b8&ga=1",
        "color": "#ff9800",
        "label": "SEINTEC"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/sor_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsor%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2FRelat%C3%B3rios%20Mensais%2FSEOM&viewid=3e54b928%2D5e7d%2D4878%2D85c7%2D3a7f56a161b8&ga=1",
        "color": "#00897b",
        "label": "SEOM"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/sor_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsor%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2FRelat%C3%B3rios%20Mensais%2FSEPES&viewid=3e54b928%2D5e7d%2D4878%2D85c7%2D3a7f56a161b8&ga=1",
        "color": "#1976d2",
        "label": "SEPES"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/sor_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsor%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2FRelat%C3%B3rios%20Mensais%2FSEAFIN&viewid=3e54b928%2D5e7d%2D4878%2D85c7%2D3a7f56a161b8&ga=1",
        "color": "#9c27b0",
        "label": "SEAFIN"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/sor_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsor%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2FRelat%C3%B3rios%20Mensais%2FDirigente&viewid=3e54b928%2D5e7d%2D4878%2D85c7%2D3a7f56a161b8&ga=1",
        "color": "#d32f2f",
        "label": "Dirigente"
      }
    ]
  },
  {
    "id": "supervisores",
    "title": "Documentos Supervisores",
    "links": [
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FAdalberto&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#4285F4",
        "label": "Adalberto"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FAdriana&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#EA4335",
        "label": "Adriana"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FAna%20Paula&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#FBBC05",
        "label": "Ana Paula"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FAndreia&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#34A853",
        "label": "Andreia"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FBruno&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#4285F4",
        "label": "Bruno"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FCristiane&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#EA4335",
        "label": "Cristiane"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FDaniel&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#FBBC05",
        "label": "Daniel"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FDivanilza&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#34A853",
        "label": "Divanilza"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FElaine&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#4285F4",
        "label": "Elaine"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FEric&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#EA4335",
        "label": "Eric"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FFabio&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#FBBC05",
        "label": "Fabio"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FFernanda%20Amorim&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#34A853",
        "label": "Fernanda Amorim"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FFernanda%20Mirim&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#4285F4",
        "label": "Fernanda Mirim"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FJose%20Garcia&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#EA4335",
        "label": "Jose Garcia"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FKatia&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#FBBC05",
        "label": "Katia"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FKelly&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#34A853",
        "label": "Kelly"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FMara%20Calixto&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#4285F4",
        "label": "Mara Calixto"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FMara%20Ferro&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#EA4335",
        "label": "Mara Ferro"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FMaria%20Ines&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#FBBC05",
        "label": "Maria Ines"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FQueila&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#34A853",
        "label": "Queila"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FRonerio&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#4285F4",
        "label": "Ronerio"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FRosangela&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#EA4335",
        "label": "Rosangela"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FSiliane&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#FBBC05",
        "label": "Siliane"
      },
      {
        "url": "https://seesp-my.sharepoint.com/personal/rossenilda_costa_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frossenilda%5Fcosta%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2F%C3%81rea%20de%20Trabalho%2FSupervis%C3%A3o%202026%2FZ%20%2D%20Documentos%20Avalia%C3%A7%C3%A3o%20Supervisor&viewid=5e74bcee%2Dce32%2D4756%2Da680%2D80f0a9243a4a&ga=1",
        "color": "#34A853",
        "label": "Doc. Avaliação"
      }
    ]
  },
  {
    "id": "ese",
    "title": "Documentos ESE",
    "links": [
      {
        "url": "https://seesp.sharepoint.com/:p:/s/DESOR-Interno-Superviso/IQBu9mRXHgh7Ta-e6SAaNSnDAcMTC6-nLPisO6HLPOP4hYU?e=SNYklN",
        "color": "#4285F4",
        "label": "PROVA PAULISTA - 1º BIM"
      },
      {
        "url": "https://seesp.sharepoint.com/:b:/s/DESOR-Interno-Superviso/IQAJRXPf0LvSS4sEczGf68-KAfdTHxssLojiAnQW5XQRulM?e=uiwEUd",
        "color": "#EA4335",
        "label": "PRIORIDADES PEDAGÓGICAS - ABRIL"
      },
      {
        "url": "https://sites.google.com/servidor.educacao.sp.gov.br/portal-professortutor/in%C3%ADcio",
        "color": "#FBBC05",
        "label": "Portal | Professor Tutor Anos Finais"
      },
      {
        "url": "https://seesp.sharepoint.com/:x:/s/DESOR-Interno-Superviso/IQASpj5PkqvKTYOCbCzjkwhbAQRiaZ2BbbTSdR500wQNvb4?e=Nbh7ZQ",
        "color": "#34A853",
        "label": "SETORES ESE"
      },
      {
        "url": "https://canva.link/ugt8bj2d6x75nbc",
        "color": "#ab47bc",
        "label": "PAUTA ESE - ABRIL 2026"
      },
      {
        "url": "https://www.canva.com/design/DAHCiM8080A/-oJIyQAeWHt-uktv5OopDg/view?utm_content=DAHCiM8080A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4cd31497c5",
        "color": "#ff7043",
        "label": "PAUTA ESE - MARÇO 2026"
      },
      {
        "url": "https://www.canva.com/design/DAHAHesURAo/T4rIQBqMT9zv2aubsI1FAw/view?utm_content=DAHAHesURAo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc2b9844965",
        "color": "#4285F4",
        "label": "PAUTA ESE - FEVEREIRO 2026"
      },
      {
        "url": "https://www.canva.com/design/DAG9vTjjfQY/K9YbaQlAPcSH0TEd4zzidA/view?utm_content=DAG9vTjjfQY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0858ccfb4b",
        "color": "#EA4335",
        "label": "PAUTA ESE - JANEIRO 2026"
      },
      {
        "url": "https://www.canva.com/link?target=https%3A%2F%2Fbit.ly%2Fagenda-seducsp-2026&design=DAG9vTjjfQY&accessRole=editor&linkSource=document",
        "color": "#FBBC05",
        "label": "AGENDA SEDUC"
      },
      {
        "url": "https://seesp-my.sharepoint.com/:f:/r/personal/pei_educacao_sp_gov_br/Documents/01.%20COMPARTILHADO%20COM%20A%20REDE/00.%20ACOLHIMENTO%202026?csf=1&web=1&e=dO4FzU",
        "color": "#34A853",
        "label": "PROGRAMA DE ENSINO INTEGRAL"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/DESOR-Interno-Superviso/IgC4-xdsq7E4QpY74tsCAocMAdClinkk70N7Bdc5-SEH9Ck?e=BgIPQs",
        "color": "#ab47bc",
        "label": "LEGISLAÇÕES 2025-2026"
      },
      {
        "url": "https://youtube.com/@cmsp-gestao?si=CaOycNbTlEYcYWwu",
        "color": "#ff7043",
        "label": "CMSP - Gestão - YouTube"
      },
      {
        "url": "https://youtube.com/@momentoformativo?si=twMQrmi_jL4rdoWV",
        "color": "#4285F4",
        "label": "Momento Formativo CMSP"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/DESOR-Interno-Superviso/IgB2BwePWtsIS4nd4dx8XEKeARqgJcfyBKwWXI_nPhg1dDg?e=rec70a",
        "color": "#EA4335",
        "label": "PAUTAS - REUNIÃO ESE"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/DESOR-Interno-Superviso/IgBtGtbQhWzHQJXFvibxkBWsAab8jK5dCN7rmoG6E3gxq6g?e=a7hgLq",
        "color": "#FBBC05",
        "label": "PLANO DE TRABALHO 2026"
      },
      {
        "url": "http://desorocaba.educacao.sp.gov.br/",
        "color": "#34A853",
        "label": "SITE URE - SOROCABA"
      },
      {
        "url": "https://seducsp-my.sharepoint.com/:x:/g/personal/falla_professor_educacao_sp_gov_br/IQCbSx1G_h5BQJplI12OZsDiAaY2_chfs0PBH5k4etiUZ1s?e=sFKCaB",
        "color": "#ab47bc",
        "label": "ESCALA CAFÉ.xlsx"
      }
    ]
  },
  {
    "id": "outros",
    "title": "Outros",
    "links": [
      {
        "url": "https://seesp-my.sharepoint.com/personal/sor_educacao_sp_gov_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsor%5Feducacao%5Fsp%5Fgov%5Fbr%2FDocuments%2FFeedbacks%20Chefes&ga=1",
        "color": "#f06292",
        "label": "Feedback Chefes"
      },
      {
        "url": "https://www.canva.com/design/DAHFXhuBv3A/hYIEcTpNlECr6Dwb1kRA3w/edit",
        "color": "#ba68c8",
        "label": "Canva Pauta Formativa Mensal"
      },
      {
        "url": "https://seesp-my.sharepoint.com/:x:/g/personal/sor_educacao_sp_gov_br/IQD4q2rGzI9CQ7F2EeWLwGfLAcut9eyoptcMhPYCSiQ_5ig?e=11E8kn",
        "color": "#9575cd",
        "label": "Mapa de Calor"
      },
      {
        "url": "https://padlet.com/asuresor/plano-de-acao-2026-ure-sorocaba-6n7f3jvo407u088u",
        "color": "#7986cb",
        "label": "Plano de ação 2026"
      }
    ]
  }
];
  const root = document.getElementById('ure-concept');
  const nav = root?.querySelector('.ure-nav');
  if (!nav || document.getElementById('ure-sharepoint-dialog')) return;

  const style = document.createElement('style');
  style.textContent = `
    #ure-sharepoint-dialog { box-sizing:border-box; width:min(820px, calc(100vw - 32px)); max-height:85vh; padding:0; border:1px solid var(--theme-light, #dcebf3); border-radius:22px; background:#fff; color:var(--theme-dark, #305771); box-shadow:0 24px 80px #15384b40; }
    #ure-sharepoint-dialog::backdrop { background:#17384c80; backdrop-filter:blur(5px); }
    #ure-sharepoint-dialog .sp-head { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; padding:24px; border-bottom:1px solid #e3edf3; }
    #ure-sharepoint-dialog .sp-head small { font-size:10px; font-weight:700; letter-spacing:1.2px; }
    #ure-sharepoint-dialog h2 { margin:5px 0 8px; font-size:22px; }
    #ure-sharepoint-dialog p { margin:0; font-size:13px; line-height:1.5; }
    #ure-sharepoint-dialog .sp-close { flex-shrink:0; width:34px; height:34px; border:0; border-radius:10px; background:transparent; color:#dc2626; font-size:28px; font-weight:800; line-height:1; cursor:pointer; user-select:none; box-shadow:none; }
    #ure-sharepoint-dialog .sp-close:hover { color:#b91c1c; background:transparent; }
    #ure-sharepoint-dialog .sp-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(145px,1fr)); gap:14px; padding:24px; }
    #ure-sharepoint-dialog .sp-link { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; padding:20px 12px; border:1px solid #dce7ef; border-radius:14px; text-align:center; text-decoration:none; color:inherit; font-size:13px; font-weight:600; line-height:1.4; overflow-wrap:anywhere; transition:transform .18s,box-shadow .18s; }
    #ure-sharepoint-dialog .sp-link:hover { transform:translateY(-3px); background:var(--theme-light, #f1f7fa); box-shadow:0 7px 20px #30577120; }
    #ure-sharepoint-dialog .sp-link svg { width:42px; height:42px; }
    #ure-sharepoint-dialog :focus-visible { outline:3px solid var(--theme-dark, #487f9f); outline-offset:3px; }
    #ure-sharepoint-dialog .sp-close:focus-visible { outline:2px solid #dc2626; background:transparent; }
    #ure-sharepoint-title:focus { outline:none; }
    @media (max-width:480px) { #ure-sharepoint-dialog .sp-grid { grid-template-columns:repeat(2,minmax(0,1fr)); padding:16px; gap:10px; } #ure-sharepoint-dialog .sp-head { padding:18px; } }
    @media (prefers-reduced-motion:reduce) { #ure-sharepoint-dialog .sp-link { transition:none; transform:none; } }
  `;
  document.head.append(style);
  const dialog = document.createElement('dialog');
  dialog.id = 'ure-sharepoint-dialog';
  dialog.setAttribute('aria-labelledby','ure-sharepoint-title');
  dialog.innerHTML = '<header class="sp-head"><div><small>SHAREPOINT</small><h2 id="ure-sharepoint-title"></h2><p>Selecione um documento ou pasta. O conteúdo abre em uma nova aba e pode solicitar seu acesso institucional.</p></div><button type="button" class="sp-close" aria-label="Fechar grupo">×</button></header><div class="sp-grid"></div>';
  root.append(dialog);
  // O título recebe o foco inicial; o botão mantém indicação de foco pelo teclado.
  dialog.querySelector('h2').setAttribute('tabindex', '-1');
  dialog.querySelector('h2').setAttribute('autofocus', '');
  const grid = dialog.querySelector('.sp-grid');
  dialog.querySelector('.sp-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  const heading = document.createElement('span');
  heading.className = 'ure-nav-label';
  heading.textContent = 'Sharepoint';
  nav.append(heading);
  const labels = ['Relatórios Chefes','Documentos Supervisores','Documentos ESE','Outros'];
  const folderPath = 'M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z';
  groups.forEach((group,index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'ure-nav-item';
    button.title = labels[index];
    button.setAttribute('aria-label', labels[index]);
    button.setAttribute('aria-haspopup','dialog');
    button.setAttribute('aria-controls',dialog.id);
    button.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="' + folderPath + '"/></svg><span></span>';
    button.querySelector('span').textContent = labels[index];
    button.addEventListener('click', () => {
      dialog.querySelector('h2').textContent = group.title;
      grid.replaceChildren();
      group.links.forEach(item => {
        const link = document.createElement('a');
        link.className = 'sp-link';
        link.href = item.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + folderPath + '"/></svg><span></span>';
        link.querySelector('svg').setAttribute('fill', item.color);
        link.querySelector('span').textContent = item.label;
        grid.append(link);
      });
      dialog.showModal();
    });
    nav.append(button);
  });
})();
