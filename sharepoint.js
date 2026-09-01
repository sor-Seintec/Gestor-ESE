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
    "title": "PTM Supervisores",
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
    "id": "ptm_integral",
    "title": "PTM - Ensino Integral",
    "links": [
      {
        "url": "https://seesp.sharepoint.com/sites/EscolaProgramadeEnsinoIntegral/Documentos%20Compartilhados/Forms/AllItems.aspx?id=%2Fsites%2FEscolaProgramadeEnsinoIntegral%2FDocumentos%20Compartilhados%2FGeneral&viewid=b7ce42c3%2D7557%2D4f29%2Db446%2Dd64add917f9c&sharingv2=true&fromShare=true&at=9&CT=1788274761398&OR=OWA%2DNT%2DMail&CID=d2b29819%2D89a1%2D3c42%2D9986%2Dccf254900779&SI=NonSentItems&SLSync=F&FolderCTID=0x01200001663186D29B7144BBEC5B4B970B0D83",
        "color": "#1976d2",
        "label": "Geral"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAzbruIjwvfQowEPBJopn34ASml7MKccDHD1a23BS26bMk?e=Hty3pB",
        "color": "#1976d2",
        "label": "ACCÁCIO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCsE7kXgfhyT5GTGhas9LzIAesA81mswophO20jxeEAPGM?e=E4hxeG",
        "color": "#1976d2",
        "label": "AGGEO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgD79FfwoAMCTrohoKuhGxR5AWX6HyHCj9gx8mYr1M8mm7s?e=nUvN0S",
        "color": "#1976d2",
        "label": "ALTAMIR"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAZjIi3tRxrR7bRcTw7aX1AAbi7nRsv6Ry0p69pbeg2lV8?e=ua1ime",
        "color": "#1976d2",
        "label": "ANA CECILIA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgA9Dq7Xh_EdSo7qx3rTn-zIAYA4Aq61pK0i-ZtHq8AfY7s?e=pUENcG",
        "color": "#1976d2",
        "label": "ANTONIA LUCCHESI"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAb9BjD_Nb_Q6lvvrPrJu6tAauk5sqh0hjsO2exS8VQTCI?e=7MOUKn",
        "color": "#1976d2",
        "label": "ANTONIO CORDEIRO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAhA8UHRbN8Rb-nTFlKxwpqAWC3sQui4YsHVlQy6upGfz8?e=h78R7o",
        "color": "#1976d2",
        "label": "ANTONIO MIGUEL"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAhA8UHRbN8Rb-nTFlKxwpqAWC3sQui4YsHVlQy6upGfz8?e=h78R7o",
        "color": "#1976d2",
        "label": "ANTONIO PADILHA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDeREixPvzqTYwxbuVe5DMNAb95AaCJGspPHy5hgnpVyFU?e=hGJ9j7",
        "color": "#1976d2",
        "label": "ARQUIMINIO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCExtJAn-y0QoYIx9s5CR2kAWocSLmtWIskP9hmJ4U5AQ4?e=EdiMyf",
        "color": "#1976d2",
        "label": "ARTHUR CYRILLO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgBGWx9D0TttTJ3R4dzQZRHAAeWSL7G2wwUNFFery4-xJvM?e=OLjs9U",
        "color": "#1976d2",
        "label": "BRIGADEIRO TOBIAS"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgB6tGgmRyVBRptTcJpkHXunAZql78zYY92EUIrkYZV5LgU?e=tep795",
        "color": "#1976d2",
        "label": "DIONYSIO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgBELG9H0Z7kTKIZFjX1fGWRAR_prBc7YdcY7yt2ED1ctsA?e=LE8IAQ",
        "color": "#1976d2",
        "label": "DULCE ESMERALDA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAAH24YR79ZRadjP9pK3ZA2AdX6-5_BMm8HiyQGlAXuCJo?e=OrNQYY",
        "color": "#1976d2",
        "label": "ELZA SALVESTRO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDm-Yf_yU3RTZD56CNMfeGoAUDIJztfRO6WmnCW1mTVohI?e=cXPHpf",
        "color": "#1976d2",
        "label": "ELZIDE CELESTINA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgASMSb-yiw0SIRWA1gZR-RPAWjmdjcGI5hpV3lj4NM0FIo?e=8L3MV0",
        "color": "#1976d2",
        "label": "ENEAS PROENÇA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgA_9oIi3gaRQq3BHhMY8I_bAdVC2ZtwMpqOvyPHFS53Kk0?e=N3PbBQ",
        "color": "#1976d2",
        "label": "ESCOLÁSTICA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAnPJ32WV96Qa61fpW837AiAdq6qP_gQVHGPqr6zLDfMXE?e=iwkQ1M",
        "color": "#1976d2",
        "label": "EZEQUIEL"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAT0fSJYSelSpqWqTyAyJ-mAetxq3sbRhF5UTar-3QL4TY?e=tkn42S",
        "color": "#1976d2",
        "label": "FERNANDA DE CAMARGO PIRES"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgB8gQAHlai-TKUHmSuv7cFlAV1ZM98xvMkprJxKgUGasZ0?e=k7dPi6",
        "color": "#1976d2",
        "label": "FLAVIO GAGLIARDI"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAaK4bmjB2YRaN_3_6CMkowARYY2PCJJLketUfQqNdvnMU?e=Qo5SwO",
        "color": "#1976d2",
        "label": "FRANCISCO CAMARGO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgD7Lx3bwv1vRbf7m3y4O_xEAQQxDRfFrI5hUW_7m2QKIYA?e=ocQYLJ",
        "color": "#1976d2",
        "label": "FRANCISCO EUPHRASIO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDi3lbLUrEmTaNO2HyUf4KcAc5l1PAqAf83S92pktAaHtA?e=PQXJDn",
        "color": "#1976d2",
        "label": "GENESIO MACHADO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCq5UAv4nUsSIGKOpFaTePoAWNGgBfu0ez7uotd4j3EVgk?e=o2GCiC",
        "color": "#1976d2",
        "label": "GENEZIA IZABEL"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDzpIXxxzASQo_4fBM_NZ6JAWm8Ws_gGlDTaxfT3W6MW7g?e=UuRpyH",
        "color": "#1976d2",
        "label": "GERALDO ESPIRITO SANTO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDtDMHCNLvmSZAOpkbmKOdAAQblAhi9nSYTZJprDczU3rA?e=IITElj",
        "color": "#1976d2",
        "label": "GUALBERTO MOREIRA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCI35TtQAtsR7uIF2GLrP0aAZVSPLM1be_Q4OdE7wFcSg4?e=htkAY5",
        "color": "#1976d2",
        "label": "HELIO DEL CISTIA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgC2IPnZ3kWTT42No-R86HTRAQz9mEkz7Z3F5beoogGlYns?e=dmborc",
        "color": "#1976d2",
        "label": "HUMBERTO DE CAMPOS"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCpMx-L2_vNSqFFWMB1n8Z1AZqmoRa0R1D4KrDGGWv0WG8?e=SZZ2FP",
        "color": "#1976d2",
        "label": "IDA YOLANDA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDTMZayotxZQYuKTbLQGiPpARUv-d1p7dgpdaBAF6KcQrY?e=05gy6H",
        "color": "#1976d2",
        "label": "JOÃO CLIMACO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDMWZBDqQ3YQ6ti1IFQAbEAAeIXa5BuEFdMQS4csIVflkc?e=olP3iB",
        "color": "#1976d2",
        "label": "JOÃO RODRIGUES"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgD1NEPZ7MrVQ65V2S13SBuhAfHuZX0xXS_SzHYNTUHxoAI?e=eRp5mz",
        "color": "#1976d2",
        "label": "JOAQUIM IZIDORO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCNzFKJchENQpXgaMSFTA1HATGfVK-i_iQIAxWg9Se0YOQ?e=9OdMqj",
        "color": "#1976d2",
        "label": "JORDINA AMARAL"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCh7ZHtDVyvQZGSlE4yD6vCAb98EwUMgts_BudNfdNLYZg?e=ex4Jhj",
        "color": "#1976d2",
        "label": "JORGE MADUREIRA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCi9SnKalSuR6sH2aAqXk3QAavnAZgViu48p0ys49EUtX0?e=c7g90g",
        "color": "#1976d2",
        "label": "JOSÉ ODIN"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDG5CaJdtkoT4XpD4WXkMzKAUgWk7xHspCJaH03ZqNBF3o?e=1JBbjb",
        "color": "#1976d2",
        "label": "JOSÉ REGINATO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCegNNpETaMTaRTRxc78lX2AZamo2smp588nn1Fnzr8IuI?e=OsRs4i",
        "color": "#1976d2",
        "label": "JOSÉ ROQUE"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCpahELHyHjSIBM_McX52cMAYvh_qHCX8haO_Q1ccOxd6g?e=NXRRd2",
        "color": "#1976d2",
        "label": "JULIO BIERREMBACH"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAsLc0dy5yKSYjfo3jQlgOFATzcv_u8In-2MX50ss_nKS4?e=JOSHLe",
        "color": "#1976d2",
        "label": "JULIO PRESTES"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCMV8CYLZZ4T7sLX5d_1PflAVORus9ohPp6Ngb0GZ0_bm0?e=Vfq4xS",
        "color": "#1976d2",
        "label": "LAURO SANCHEZ"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgD_r-6bbbCyRrGJ-BsEnrFwAUrMXsDblTMBeuPNbG67pqQ?e=hRx6Fs",
        "color": "#1976d2",
        "label": "LUIZ GONZAGA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgC-5gaK-sc9QodhJbf7Pj0yAaNglKcJgfoWbFK-zpzgIjE?e=Jhpbk3",
        "color": "#1976d2",
        "label": "LUIZ NOGUEIRA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCZb3JzodWPQ4-tCVRLRsK4AbMcQo5fzTtUgU-8UNej9wM?e=UTj9YP",
        "color": "#1976d2",
        "label": "MARCO ANTONIO MENCACCI"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAc3YBBrjVjRpQyqHBmmTllAR5_agFiT1MzLacHD910X_Y?e=nblzX2",
        "color": "#1976d2",
        "label": "MARIA HELENA GAZZI"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgBfT1KZVusjRLbiEg3dUeUzAR0EqB_mi5Rjikfoa96Yq0s?e=W1qbZy",
        "color": "#1976d2",
        "label": "MARIA ONDINA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCuu3pyAyIoTrEGt7C0qFQBAanVOF0db5pgdd3NhdyHa1o?e=gOn3vU",
        "color": "#1976d2",
        "label": "MONTEIRO LOBATO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCqF_9oO2D6RaKmYEepRGm7ATCF34CETI4rNrLZisQkYzs?e=KpqiLh",
        "color": "#1976d2",
        "label": "NAZIRA NAGIB"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCVyodj8fN0RJd1PBGWeHlqATI6zFv7Ape3gkis7BIJYPo?e=ZytK9d",
        "color": "#1976d2",
        "label": "OVIDIO ANTONIO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgBCoYc5DO6fQbXzLrk3Oh8UAbSSH6olYaNegch-wojRgIE?e=EpX44w",
        "color": "#1976d2",
        "label": "RAFAEL ORSI"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDMH09mCN5LQqDUUYd1uszAASWGIfhQQlcgkTO2m_Uz3C0?e=HO7dCE",
        "color": "#1976d2",
        "label": "RENATO SENECA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCYVAW3GYk3R72hEB-c2Wl5AcvPA4bzR204F-FhNr4Kdqg?e=g6f0mg",
        "color": "#1976d2",
        "label": "ROBERTO PASCHOALICK"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgAmX21l7yulRoeKNsQhiYCDAcuzmcOylPxBjVP8OIsTj7o?e=ENpJIf",
        "color": "#1976d2",
        "label": "ROQUE CONCEIÇÃO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCHyEE1ftRyTok7yZAOBkoBAZ2u8kDBD5PE0YmdYXVqjXs?e=pb0EJt",
        "color": "#1976d2",
        "label": "ROSEMARY DE MELLO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCvNB3-Ym6eTppt8Ds-Ju9_AY-gmOa0FMwvP73q9nuK61I?e=aUL5uC",
        "color": "#1976d2",
        "label": "SENADOR VERGUEIRO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgBvQLT1c7tEQJxRNqeu2kkBAZ9FiNd2Hb6UuyIsTTTH6Wg?e=N7mq74",
        "color": "#1976d2",
        "label": "VISCONDE PORTO SEGURO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCP-97rlwxRR4qIEPRIwcmKAdGeY93zed1jFLS09JRyDlw?e=Mxjwoc",
        "color": "#1976d2",
        "label": "WALDEMAR DE FREITAS"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgDDbn-qTO4eT55ylSAVIzi5AYQrNmWzQ18H0mKJ-G1hBFQ?e=JsnGS5",
        "color": "#1976d2",
        "label": "WANDA COSTA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscolaProgramadeEnsinoIntegral/IgCB_XuTMCBGS4IShbt6hmniATkSAne3k2KkjnxQv3o_CT4?e=36IW2W",
        "color": "#1976d2",
        "label": "WILSON RAMOS"
      }
    ]
  },
  {
    "id": "ptm_regular",
    "title": "PTM - Ensino Regular",
    "links": [
      {
        "url": "https://seesp.sharepoint.com/sites/EscoladoEnsinoRegular/Documentos%20Compartilhados/Forms/AllItems.aspx?e=5%3Ab5c785c00c1740fab23b9f70eda26b32&sharingv2=true&fromShare=true&at=9&CT=1788274823494&OR=OWA%2DNT%2DMail&CID=bed4599c%2Dc235%2Df2bd%2D17ff%2D3f9e3ebd5b7e&SI=NonSentItems&SLSync=F&FolderCTID=0x01200001663186D29B7144BBEC5B4B970B0D83&id=%2Fsites%2FEscoladoEnsinoRegular%2FDocumentos%20Compartilhados%2FGeneral",
        "color": "#d32f2f",
        "label": "Geral"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgD-HuN7RMESb3mSNEL4K3iAfGzvzvG_Ky1LylkQWoqFhA?e=BeNBIN",
        "color": "#d32f2f",
        "label": "AMÉLIA CÉSAR"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgA98SIrND7hSo3Rv4YXGth6AeKwetork-_zP1QnDZT_zeY?e=sdvEOG",
        "color": "#d32f2f",
        "label": "ANTONIO VIEIRA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgD_FxOCqzmuRpfYdwbTqBROAes-efcvvfeAqCgXCKdjy78?e=gLoQKB",
        "color": "#d32f2f",
        "label": "BALTAZAR FERNANDES"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgDHAWxyWGCdS7EW_thepeByAZkqMtiCQW0Aqug1-r_zcNg?e=gTYAY0",
        "color": "#d32f2f",
        "label": "BEATHRIS CAIXEIRO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgAuO3oIdXg5Qb4jkKvUZhiqAQBYosuROfH7AJ19Avh34Lc?e=fbP4uF",
        "color": "#d32f2f",
        "label": "CEEJA NORBERTO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgDN5lxl14x6QaUDuWDhZgSVATOMJCPnPNOckkcCs7Ej4GQ?e=Bp6v5p",
        "color": "#d32f2f",
        "label": "DIOGENES ALMEIDA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgDz7-F_yyLERYqCjYfsJfHrAdRLv0iuOlanItp1IfgRQPw?e=n8OFxL",
        "color": "#d32f2f",
        "label": "FRANCISCO COCCARO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgB3zQkoSTJXS4O5CTQ8ruiTAZ1BTTp7d_ylPOvAdOlqzig?e=qmsDbR",
        "color": "#d32f2f",
        "label": "GUIOMAR CAMOLESI"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgCCyR8iSBtCRIOKQUzOd4rFAcBKItSTYmhKqw6S6qWw4Vg?e=Ch7yeJ",
        "color": "#d32f2f",
        "label": "GUMERCINDO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgDMwNCQr2KGSrFCK0dkzweSAS50jbgrGGJqykFTVVZZ9rI?e=V9B2Ad",
        "color": "#d32f2f",
        "label": "ISABEL LOPES"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgDa0KnVGhe7SqDJd1qrxoKjAWH8lUpRk2XX15fk2di2bHo?e=SeM1mf",
        "color": "#d32f2f",
        "label": "IZABEL RODRIGUES"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgAy5q5sDO0cTpxLMrEZuR3WATHGmKdtZYwUfehdjsNuvjw?e=j3M14j",
        "color": "#d32f2f",
        "label": "JOÃO MACHADO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgDd30G369GCRIon9lDtodKDAWAjNF_N1ZjYsDYo3EUnu0k?e=C4Cege",
        "color": "#d32f2f",
        "label": "JOÃO SOARES"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgCJTbvFqCUnTqycLpcBKleEAaSbr64pymhGQ2vbADUxMok?e=8ObXPL",
        "color": "#d32f2f",
        "label": "JOSÉ QUEVEDO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgBz9pp8jlogRquVKqPBDnVJAXVLZUmi3m5-dudGVZr_P4g?e=53w97e",
        "color": "#d32f2f",
        "label": "JULIA RIOS"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgBqKSMIgDveQZ3ow-hEvEDfAaa2jKe-guSUp72Z1SWzEAQ?e=ethbYU",
        "color": "#d32f2f",
        "label": "LAILA GALEP"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgCk9FLRjIWLTaPy69A8hTwnAUSKfefBdoow4ziPCmPDXTo?e=ASClXr",
        "color": "#d32f2f",
        "label": "MARIA CANDIDA"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgCxZib20NKLRZrsOtffO-ZQAR5KLSN2aiw1zLQLan4Yu9E?e=kleaT5",
        "color": "#d32f2f",
        "label": "MARINA GROHMANN"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgCgqz9v862wQr5TiXrP_GjUATUki7MSFIxNwhDM9VmPFqg?e=9pTTb8",
        "color": "#d32f2f",
        "label": "MARIO GUILHERME"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgCX556k_3LOSpUzZzvat4L_ATMjriRD8iu2srw5rq9_DOQ?e=kFtiX7",
        "color": "#d32f2f",
        "label": "OSSIS SALVESTRINI"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgAyylqQvEWnS7jknnq4iOY8ARCQlLeTaCvWyLBY5qDi7EI?e=aA7uyt",
        "color": "#d32f2f",
        "label": "SARAH SALVESTRO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/EscoladoEnsinoRegular/IgDZUQNX02MgQKW-VUdCLx0BAf1NZWla4oNB3rIuWm42J1I?e=tLzHto",
        "color": "#d32f2f",
        "label": "ZELIA DULCE"
      }
    ]
  },
  {
    "id": "ptm_pec",
    "title": "PTM - PEC",
    "links": [
      {
        "url": "https://seesp.sharepoint.com/sites/PTMPEC/Documentos%20Compartilhados/Forms/AllItems.aspx?id=%2Fsites%2FPTMPEC%2FDocumentos%20Compartilhados%2FGeneral&viewid=3d2c917d%2D40c8%2D4dc3%2D931f%2D592d9dfee2b7&sharingv2=true&fromShare=true&at=9&CT=1788274857967&OR=OWA%2DNT%2DMail&CID=5f6d5601%2Da081%2D471f%2D6145%2D83785a3b9416&SI=NonSentItems&SLSync=F&FolderCTID=0x01200013BC6E38AABFCB4E9F92EF3F7D6BA7CC",
        "color": "#00897b",
        "label": "Geral"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/PTMPEC/IgCRc1ymd7N0Raok43e8JdGSAVOi8Dk_IQnJZSl9kFCcow8?e=zB0YTd",
        "color": "#00897b",
        "label": "a- PTM- JANEIRO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/PTMPEC/IgAuB9C_SiuwSorNJRj9uS6kAfd7CAMfSvCs4md8j-oqYK8?e=LsCvSi",
        "color": "#00897b",
        "label": "PTM - ABRIL"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/PTMPEC/IgBqB7bq7NvhTJlbRrdrOoWCAWyu9nXjIraGO233hu1X7Ns?e=CBve8E",
        "color": "#00897b",
        "label": "PTM - AGOSTO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/PTMPEC/IgC7t_Z1UnVqQ5rBDCMPQ0QsAe3H0evfGE_WVbijSwKl9-4?e=gHJ6k9",
        "color": "#00897b",
        "label": "PTM - FEVEREIRO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/PTMPEC/IgBLDN41sDR9SqFTyvjSlRT0ARHLbDkT3I-dsCXOqaS6wFM?e=F4e4tJ",
        "color": "#00897b",
        "label": "PTM - JULHO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/PTMPEC/IgDdp6rh-iEwRa6s3ROy5RydATq8cC43IeBT8gy2ehEpzOY?e=BleE4t",
        "color": "#00897b",
        "label": "PTM - JUNHO"
      },
      {
        "url": "https://seesp.sharepoint.com/:f:/s/PTMPEC/IgBDFnjRtflKS4GKY3FcipvEAXFdZwA_3uMJwg_JrLwVD9E?e=DbgWdJ",
        "color": "#00897b",
        "label": "PTM - MAIO"
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
  const labels = ['Relatórios Chefes', 'PTM Supervisores', 'PTM - Ensino Integral', 'PTM - Ensino Regular', 'PTM - PEC', 'Documentos ESE', 'Outros'];
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
      const renderLink = (item) => {
        const link = document.createElement('a');
        link.className = 'sp-link';
        link.href = item.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + folderPath + '"/></svg><span></span>';
        link.querySelector('svg').setAttribute('fill', item.color || '#305771');
        link.querySelector('span').textContent = item.label;
        grid.append(link);
      };
      
      group.links.forEach(renderLink);
      
      const customLinks = JSON.parse(localStorage.getItem('sharepoint_custom_' + group.id) || '[]');
      customLinks.forEach(renderLink);
      
      const addBtn = document.createElement('button');
      addBtn.type = 'button';
      addBtn.className = 'sp-link sp-add-btn';
      addBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg><span>Adicionar novo</span>';
      addBtn.style.cursor = 'pointer';
      addBtn.style.background = 'transparent';
      addBtn.style.border = '1px dashed #487f9f';
      addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const folderName = prompt('Nome da pasta:');
        if (!folderName) return;
        const folderLink = prompt('Link da pasta:');
        if (!folderLink) return;
        const newLink = { url: folderLink, label: folderName, color: '#487f9f' };
        customLinks.push(newLink);
        localStorage.setItem('sharepoint_custom_' + group.id, JSON.stringify(customLinks));
        addBtn.remove();
        renderLink(newLink);
        grid.append(addBtn);
      });
      grid.append(addBtn);

      dialog.showModal();
    });
    nav.append(button);
  });
})();
